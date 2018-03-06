import axios from 'axios'

//Action Type
const EDIT_PRODUCT = 'EDIT_PRODUCT';

// ACTION CREATORS

//used in THUNK
// const editProduct =

const getProducts = products => ({type: GET_PRODUCTS, products})

//not used in thunk (standalone)
export const setSelectedProductView = singleProductId => ({type: SET_SELECTED_PRODUCT_VIEW, singleProductId})
export const setSearchTerm = term => ({type: SET_FILTER_TERM, term})

//STATE

let initialState = {
    allProducts: [],
    selectedProduct: {},
    filterTerm: ''
}


//thunk

export const updateProduct = () => {}

export const fetchProducts = () =>
dispatch =>
  axios.get('/api/products')
    .then(res =>
      dispatch(getProducts(res.data)))
    .catch(err => console.log(err))

export const products = function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, allProducts: action.products}
        case SET_SELECTED_PRODUCT_VIEW:
            const singleProduct = state.allProducts.find(eachProduct=>eachProduct.id == action.singleProductId)
            if (singleProduct) return {...state, selectedProduct: singleProduct}
            else return {...state, selectedProduct: {} }
        case SET_FILTER_TERM:
            return {...state, filterTerm: action.term}
        default:
            return state
    }
}

