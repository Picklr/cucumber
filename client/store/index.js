import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import {products, selectedProduct} from './products'
import shoppingList, {checkoutOrder, fetchObjAndAdd} from './shoppingList';
import orderHistory, {addLatestOrder} from './order'

const reducer = combineReducers({user, shoppingList, products, orderHistory})

const destroyableReducer = (state, action) => {
  if (action.type === 'DESTROY_STORE')
    return reducer({type: '@@INIT'}, action)
  return reducer(state, action)
}

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(destroyableReducer, middleware)

window.addEventListener('storage', function (event) {
  if (event.key === 'cart') store.dispatch(loadCart())
})


export default store
export * from './user'
export * from './shoppingList';
export * from './products'
