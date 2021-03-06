import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import {products} from './products'
import shoppingList from './shoppingList';
import orderHistory from './order'
import reviewForm from './reviewForm'
import adminOrders from './adminOrders'

const reducer = combineReducers({user, shoppingList, products, orderHistory, reviewForm, adminOrders})


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
