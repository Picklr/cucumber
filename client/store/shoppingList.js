import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const DELETE_ITEM = 'DELETE_ITEM';

/**
 * INITIAL STATE
 */
const cartItems = [{id: 1, name: 'banana'}, {id: 2, name: 'apple'}, {id: 3, name: 'pear'} ];

/**
 * ACTION CREATORS
 */
const deleteItem = itemId => ({type: DELETE_ITEM, itemId})

/**
 * THUNK CREATORS
 */


export const destroyItem = (itemToDestroyId) =>
  dispatch => {
    axios.delete('/api/shoppingList', {id: itemToDestroyId} )
    .then(res =>
      dispatch(deleteItem(res.data)))
    .catch(err => console.log(err))
  }

/**
 * REDUCER
 */
export default function (state = cartItems, action) {
  switch (action.type) {
    case DELETE_ITEM:
      return state.cartItems.filter((currentItem) => currentItem.id !== action.itemId)

    default:
      return state
  }
}
