import React, {Component} from 'react'
import {connect} from 'react-redux'
import { deleteItem, fetchObjAndAdd, decrementQuantity, checkoutOrder} from '../store';
import axios from 'axios'

export class ShoppingList extends Component {
    
    constructor(props){
        super(props)
    }


    render(){

            let sum = 0;
            let displaySum 
            console.log('These are props! ', this.props)
            

            return (

            <div id='Shopping-List'>

                <ul>
                {this.props.shoppingList.map( item => {
                    sum += item.price * item.quantity
                    displaySum =('' + Math.floor(sum*100))
                    return (<div key={item.id}>
                        <li>
                        {item.name}
                        <span> {item.quantity} </span>
                        </li>
                        <button
                        onClick = {this.props.handleDeleteClick}
                        id = {item.id}
                        
                        >x</button>

                        <button
                        type = "decrement"
                        onClick = {this.props.handleDecrementClick}
                        id = {item.id}
                        >-</button>

                        <button
                        type = "increment"
                        onClick = {this.props.handleQuantityClick}
                        id = {item.id}
                        // value = {item.fullName}  
                        >+</button>
                        </div>
                    )
                })}
                </ul>
                {sum>0 && <li>{ '$'+(displaySum.slice(0,displaySum.length-2) + '.' +  displaySum.slice(displaySum.length-2)) }</li>  }
                <button onClick={()=>{console.log('HI PHILIP ', this.props); this.props.handleCheckout(this.props.user.id, this.props.shoppingList)}} >Checkout</button>
            </div>
            )
    }
}




const mapState = function(state){
   return {
       user: state.user,
       shoppingList: state.shoppingList
   }
}

// const mapStateToProps = function (state) {
//     return {
//       name: state.name
//     };
//   };


const mapDispatch = (dispatch, ownProps) => ({
  handleDeleteClick: (event) => {
        event.preventDefault();
        dispatch(deleteItem(+event.target.id))
    },
  handleQuantityClick: (event) => {
        console.log('HERE!!!', event.target.objHolder)
        event.preventDefault();
        dispatch(fetchObjAndAdd(+event.target.id))
    },
  handleDecrementClick: (event) => {
        event.preventDefault();
        dispatch(decrementQuantity(+event.target.id))
    },
   handleCheckout: (userId,shoppingList) => {
       console.log('oP', ownProps)
       dispatch(checkoutOrder(userId, shoppingList, ownProps.history))
   }
})

//     OTHER FORMAT OF MAPDISPATCH
// const mapDispatchToProps = function (dispatch) {
//     return {
//       handleChange (evt) {
//         dispatch(updateName(evt.target.value));
//       }
//     };
//   };

//TODO Remove from cart and checkout

export default connect(mapState, mapDispatch)(ShoppingList);

