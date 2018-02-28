// import axios from 'axios'
// import history from '../history'

/**
 * ACTION TYPES
 */
const DELETE_ITEM = 'DELETE_ITEM';

const ADD_PRODUCT_TO_LIST = 'ADD_PRODUCT_TO_LIST';

/**
 * INITIAL STATE
 */
const cartItems = [];

/**
 * ACTION CREATORS
 */
export const deleteItem = itemId => ({type: DELETE_ITEM, itemId})

export const addProductToList = productId => ({type: ADD_PRODUCT_TO_LIST, productId})

/**
 * THUNK CREATORS
 */

//in the future will use this with admin
// export const destroyItem = (itemToDestroyId) =>
//   dispatch => {
//     axios.delete('/api/shoppingList', {id: itemToDestroyId} )
//     .then(res =>
//       dispatch(deleteItem(res.data)))
//     .catch(err => console.log(err))
//   }

/**
 * REDUCER
 */
export default function (state = cartItems, action) {
  switch (action.type) {
    case DELETE_ITEM:
      return state.cartItems.filter((currentItem) => currentItem.id !== action.itemId)
    case ADD_PRODUCT_TO_LIST:
      return [...state.cartItems, action.productId]
    default:
      return state
  }
}
