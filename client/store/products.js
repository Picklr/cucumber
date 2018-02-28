import axios from 'axios'

//Action Type
const GET_PRODUCTS = 'GET_PRODUCTS';
const SET_SELECTED_PRODUCT_VIEW = 'SET_SELECTED_PRODUCT_VIEW'

// ACTION CREATORS
const getProducts = products => ({type: GET_PRODUCTS, products})
const setSelectedProductView = singleProduct => ({type: SET_SELECTED_PRODUCT_VIEW, singleProduct})

//thunk
export const fetchProducts = () =>
dispatch =>
  axios.get('/api/products')
    .then(res =>
      dispatch(getProducts(res.data)))
    .catch(err => console.log(err))

export const spotLightonProduct = (ID) => dispatch => {
    axios.get(`/api/products/${ID}`)
    .then(res => res.data)
    .then(oneProduct=>{
        dispatch(setSelectedProductView(oneProduct))
    })
}


export const products = function (state = [], action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.products
        default:
            return state
    }
}

export const selectedProduct = function (state = {}, action) {
    switch (action.type) {
        case SET_SELECTED_PRODUCT_VIEW:
            return action.singleProduct
        default:
            return state
    }
}