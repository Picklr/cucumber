import axios from 'axios'

//Action Type
const GET_PRODUCTS = 'GET_PRODUCTS';

// ACTION CREATORS
const getProducts = products => ({type: GET_PRODUCTS, products})

//thunk
export const fetchProducts = () =>
dispatch =>
  axios.get('/api/products')
    .then(res =>
      dispatch(getProducts(res.data)))
    .catch(err => console.log(err))


export default function (state = [], action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.products
        default:
            return state
    }
}