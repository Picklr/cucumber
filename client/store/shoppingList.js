import axios from 'axios'
import history from '../history'
import {addLatestOrder} from './order'

/**
 * ACTION TYPES
 */
const DELETE_ITEM = 'DELETE_ITEM';

const ADD_PRODUCT_TO_LIST = 'ADD_PRODUCT_TO_LIST';

const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY'

const WIPE_CART = 'WIPE_CART'

/**
 * INITIAL STATE
 */
const cartItems = [];

/**
 * ACTION CREATORS
 */
export const deleteItem = itemId => ({type: DELETE_ITEM, itemId})

export const addProductToList = productObj => ({type: ADD_PRODUCT_TO_LIST, productObj})

export const decrementQuantity = productObjId => ({type: DECREMENT_QUANTITY, productObjId})

export const clearCart = () => ({type: WIPE_CART})

/**
 * THUNK CREATORS
 */


export const fetchObjAndAdd = (itemId) =>
  dispatch => {
    axios.get(`/api/products/${itemId}`)
    .then(res =>
      dispatch(addProductToList(res.data)))
    .catch(err => console.log(err))
  }

//in the future will use this with admin
// export const destroyItem = (itemToDestroyId) =>
//   dispatch => {
//     axios.delete('/api/shoppingList', {id: itemToDestroyId} )
//     .then(res =>
//       dispatch(deleteItem(res.data)))
//     .catch(err => console.log(err))
//   }

//experimental phase
export const checkoutOrder = (userId, shoppingList, history) =>  dispatch => {

  dispatch(clearCart())
  console.log('User number ', userId, 'is trying to buy ')
  console.log(shoppingList)
  axios.post('api/order', {userId: userId, shoppingList: shoppingList}).then(res=>res.data).then(order=>{
    console.log('RABBIT HOLE ', order)
    dispatch(addLatestOrder(order))
    history.push('/orderSuccess')
    })

}


/**
 * REDUCER
 */
export default function (state = cartItems, action) {
  switch (action.type) {

    case DELETE_ITEM:
      return state.filter((currentItem) => currentItem.id !== action.itemId)

    case ADD_PRODUCT_TO_LIST:
    const match = state.find((product) => {
        return product.id === action.productObj.id
      })
        if(!match) {
          return [...state,
            {...action.productObj, quantity: 1}]
        } else {
          return state.map((product) => {
            if(product.id === action.productObj.id){
             return {...product, quantity: ++product.quantity}
            } else {
              return product
            }
          })
        }

      case DECREMENT_QUANTITY:

      const match2 = state.find((product) => {
        return product.id === action.productObjId
      })

        if(match2.quantity === 1){
          return state.filter((currentItem) => currentItem.id !== action.productObjId)
        }else {
         return state.map((product) => {

            if (product.id == action.productObjId){

                return {...product, quantity: --product.quantity}
              }
             else {
              return product
            }
          })
        }
    
    case WIPE_CART:
        return []


    default:
      return state
  }
}
