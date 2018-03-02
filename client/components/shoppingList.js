import React from 'react'
import {connect} from 'react-redux'
import { deleteItem, fetchObjAndAdd, decrementQuantity, checkoutOrder} from '../store';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


export const ShoppingList = (props) => {
    let sum = 0;
    let displaySum
    console.log('These are props! ', props)
    const style = {
        margin: 12,
      };
    return (

    <div id='Shopping-List'>
        <h4>My Shopping List </h4>
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
                // value = {item.fullName}
                >+</button>
                </div>
            )
        })}
        </ul>
        {sum>0 && <li>{ '$'+(displaySum.slice(0,displaySum.length-2) + '.' +  displaySum.slice(displaySum.length-2)) }</li>  }

        <RaisedButton
        icon = {<img className="cukebutton" src="./shopping_cart.svg" />}
        backgroundColor = "#f7ffe6"
        hoverColor = "#ccffcc"
        label="Checkout" style={style}
        onClick={()=>{checkoutOrder(props.user.id,props.shoppingList)}}
        />
    </div>
)
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


const mapDispatch = (dispatch) => ({
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

