import React from 'react'
import {connect} from 'react-redux'
import { deleteItem } from '../store/shoppingList';

export const ShoppingList = (props) => {

    return (

    <div id='Shopping-List'>

        <ul>
        {props.shoppingList.map( item => {
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

