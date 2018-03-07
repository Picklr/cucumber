/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {clearCartThunk, checkout, clearCart, addProductToList} from './shoppingList'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = []

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('Add product to list', () => {
    it('adds an object to the list if it is not already there', () => {
        store.dispatch(addProductToList({name: 'icecream', price: 5.99}))
        
        const actions = store.getActions()
       return expect(actions[0].type).to.be.equal('ADD_PRODUCT_TO_LIST')
    })
    it('adds an object to the list if it is not already there', () => {
        store.dispatch(addProductToList({name: 'icecream', price: 5.99}))
        
        const actions = store.getActions()
    return expect(actions[0].productObj).to.be.deep.equal({name: 'icecream', price: 5.99})
    })
  })

//   describe('logout', () => {
//     it('logout: eventually dispatches the REMOVE_USER action', () => {
//       mockAxios.onPost('/auth/logout').replyOnce(204)
//       return store.dispatch(logout())
//         .then(() => {
//           const actions = store.getActions()
//           expect(actions[0].type).to.be.equal('REMOVE_USER')
//           expect(history.location.pathname).to.be.equal('/login')
//         })
//     })
//   })
})
