import React from 'react'
import {connect} from 'react-redux'
import { deleteItem } from '../store/shoppingList';

export const ShoppingList = (props) => {
    console.log(props);

    return (

    <div>

        <ul>
        {props.cartItems.map( item =>{
            return (<div key={item.id}>
                <li>
                {item.name}
                {/* <span>{item.price}</span> */}
                </li>
                <button
                onClick = {props.handleDeleteClick}
                id = {item.id}
                >x</button>
                </div>
            )
        })}
        </ul>
        <button>Checkout</button>
    </div>
)
}

const mapState = function(state){
    console.log('state in mapstate', state);
   return {
       cartItems: state.shoppingList
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
    dispatch(deleteItem(event.target.id))
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

