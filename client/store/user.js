import axios from 'axios'
import history from '../history'
/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const UPDATE_USER = 'UPDATE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user })
const removeUser = () => ({ type: REMOVE_USER })
const updateUser = (user) => ({ type: UPDATE_USER, user: user })

/**
 * THUNK CREATORS
 */

export const editUser = (email, billingAddress, userId) =>
  dispatch =>

    axios.put(`/api/users/${userId}`, {
      email: email,
      billingAddress: billingAddress
    })
      .then((res) => {
        dispatch(updateUser(res.data[1]))
      })
      .catch(err => console.log(err))

export const me = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || defaultUser)))
      .catch(err => console.log(err))

export const auth = (method, email, password, firstName, lastName, billingAddress) =>
  dispatch =>
    axios.post(`/auth/${method}`, { email, password, firstName, lastName, billingAddress })
      .then(res => {
        dispatch(getUser(res.data))
        history.push('/')
      }, authError => {
        dispatch(getUser({ error: authError }))
      })
      .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))

export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then(_ => {
        dispatch(removeUser())
        history.push('/login')
      })
      .catch(err => console.log(err))


/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {

    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case UPDATE_USER:
      return action.user

    default:
      return state
  }
}
