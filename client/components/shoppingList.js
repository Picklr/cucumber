import React from 'react'
import {connect} from 'react-redux'
import { deleteItem, fetchObjAndAdd, decrementQuantity} from '../store';

export const ShoppingList = (props) => {
    let sum = 0;
    let displaySum 
    return (
    
    <div>

        <ul>
        {props.shoppingList.map( item => {
            sum += item.price * item.quantity
            displaySum =('' + Math.floor(sum*100))
            return (<div key={item.id}>
                <li>
                {item.name}
                <span> {item.quantity} </span>
                </li>
                <button
                onClick = {props.handleDeleteClick}
                id = {item.id}
                >x</button>

                <button
                type = "decrement"
                onClick = {props.handleDecrementClick}
                id = {item.id}
                >-</button>

                <button
                type = "increment"
                onClick = {props.handleQuantityClick}
                id = {item.id}
                >+</button>
                </div>
            )
        })}
        </ul>
        {sum>0 && <li>{ '$'+(displaySum.slice(0,displaySum.length-2) + '.' +  displaySum.slice(displaySum.length-2)) }</li>  }
        <button>Checkout</button>
    </div>
)
}

const mapState = function(state){
   return {
       shoppingList: state.shoppingList
   }
}

// const mapStateToProps = function (state) {
//     return {
//       name: state.name
//     };
//   };


const mapDispatch = (dispatch) => ({
  handleDeleteClick: (event) => {
      event.preventDefault();
    dispatch(deleteItem(+event.target.id))
    },
  handleQuantityClick: (event) => {
        event.preventDefault();
    dispatch(fetchObjAndAdd(+event.target.id))
    },
  handleDecrementClick: (event) => {
    event.preventDefault();
dispatch(decrementQuantity(+event.target.id))
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

