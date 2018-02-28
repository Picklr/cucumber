import axios from 'axios'

//Action Type
const GET_PRODUCTS = 'GET_PRODUCTS';
const SET_SELECTED_PRODUCT_VIEW = 'SET_SELECTED_PRODUCT_VIEW'

// ACTION CREATORS
const getProducts = products => ({type: GET_PRODUCTS, products})
export const setSelectedProductView = singleProductId => ({type: SET_SELECTED_PRODUCT_VIEW, singleProductId})

//STATE

let initialState = {
    allProducts: [],
    selectedProduct: {}
}


//thunk
export const fetchProducts = () =>
dispatch =>
  axios.get('/api/products')
    .then(res =>
      dispatch(getProducts(res.data)))
    .catch(err => console.log(err))

// export const spotLightonProduct = (ID) => dispatch => {
//     axios.get(`/api/products/${ID}`)
//     .then(res => res.data)
//     .then(oneProduct=>{
//         dispatch(setSelectedProductView(oneProduct))
//     })
// }


export const products = function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, allProducts: action.products}
        case SET_SELECTED_PRODUCT_VIEW:
            const singleProduct = state.allProducts.find(eachProduct=>eachProduct.id==action.singleProductId)
            if(singleProduct) return {...state, selectedProduct: singleProduct}
            else return {...state, selectedProduct: {} }

        default:
            return state
    }
}