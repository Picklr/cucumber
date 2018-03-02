import React, {Component} from 'react'
import {connect} from 'react-redux'
import { deleteItem, fetchObjAndAdd, decrementQuantity, checkoutOrder, fetchLocalStorageAndSetToState} from '../store';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';



const string = JSON.stringify;
const parse = JSON.parse;

var listener;



export const ShoppingList = (props) => {
    let sum = 0;

    let displaySum;
    console.log('Hello',JSON.parse(localStorage.getItem('orderArray')))
    if (!localStorage.getItem('orderArray')){
        localStorage.setItem('orderArray', '[]')
    }
    if (!props.shoppingList.length){
        var holder = parse(localStorage.getItem('orderArray'))
        if (holder.length){
        props.loadCartFromLocalStore()
        }
    }

    if (!listener){
        listener = true;
        window.addEventListener('storage', function (event) {
            props.loadCartFromLocalStore()
            // console.log('things happened!!!!!')
        })}

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
        label="Checkout"
        onClick={()=>{props.handleCheckout(props.user.id,props.shoppingList)}}
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



const mapDispatch = (dispatch, ownProps) => ({
  handleDeleteClick: (event) => {
      event.preventDefault();
      var orderArray = parse(localStorage.getItem('orderArray'));
      var itemToSet;
      itemToSet = orderArray.filter( product => {
          return product.id !== +event.target.id;
      })
      localStorage.setItem('orderArray',string(itemToSet))
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
   
    event.preventDefault();
    var orderArray = parse(localStorage.getItem("orderArray"));
    var itemToSet;
    const match2 = orderArray.find((product) => {
        return product.id === +event.target.id;
      })

        if(match2.quantity === 1){
          itemToSet = orderArray.filter((currentItem) => currentItem.id !== +event.target.id)
        }else {
         itemToSet = orderArray.map((product) => {

            if (product.id == +event.target.id){

                return {...product, quantity: --product.quantity}
              }
             else {
              return product

        }
      }
      )
    }
    localStorage.setItem('orderArray',string(itemToSet));
    dispatch(decrementQuantity(+event.target.id))
},

loadCartFromLocalStore: () =>
dispatch(fetchLocalStorageAndSetToState())

})

export default connect(mapState, mapDispatch)(ShoppingList);

