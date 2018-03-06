import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import {products, selectedProduct, editProduct} from './products'
import shoppingList, {checkoutOrder, fetchObjAndAdd} from './shoppingList';
import orderHistory, {addLatestOrder} from './order'
import reviewForm from './reviewForm'

const reducer = combineReducers({user, shoppingList, products, orderHistory, reviewForm})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './shoppingList';
export * from './products'
export * from './reviewForm'
