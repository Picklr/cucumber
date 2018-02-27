import React from 'react'
import {connect} from 'react-redux'
import { destroyItem } from '../store/shoppingList';

export const ShoppingList = (props) => (
    <div>
        <ul>
        {props.cartItems.map( item =>{
            return (<div key={item.id}>
                <li>
                {item.name}
                <span>{item.price}</span>
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

const mapState = (state) => ({
    cartItems: state.cartItems
})


const mapDispatch = (dispatch) => ({
  handleDeleteClick: (event) => {
    dispatch(destroyItem(event.target.id))
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

