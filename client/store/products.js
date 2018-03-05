import axios from 'axios'

//Action Type
const GET_PRODUCTS = 'GET_PRODUCTS';

const SET_SELECTED_PRODUCT_VIEW = 'SET_SELECTED_PRODUCT_VIEW'
const SET_FILTER_TERM = 'SET_FILTER_TERM'
const ADD_REVIEW = 'ADD_REVIEW'

// ACTION CREATORS

//used in THUNK
const getProducts = products => ({type: GET_PRODUCTS, products})
const reviewAction = review => ({type: ADD_REVIEW, review})

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
export const fetchProducts = () =>
dispatch =>
  axios.get('/api/products')
    .then(res =>
      dispatch(getProducts(res.data)))
    .catch(err => console.log(err))

export const addReview = (body) =>
  dispatch =>
    axios.post(`/api/products/${body.productId}/review`,body)
        .then(res => dispatch(reviewAction(res.data)))



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
            const singleProduct = state.allProducts.find(eachProduct=>eachProduct.id == action.singleProductId)
            if (singleProduct) return {...state, selectedProduct: singleProduct}
            else return {...state, selectedProduct: {} }
        case SET_FILTER_TERM:
            return {...state, filterTerm: action.term}
        case ADD_REVIEW:
            let singleProducts = state.allProducts.find(eachProduct=>eachProduct.id == action.review.productId)
            singleProducts = {...singleProducts, reviews : [...singleProducts.reviews, action.review]}
            const newState = state.allProducts.map(eachProduct=>{
                if(eachProduct.id == action.review.productId)return singleProducts
                else return eachProduct
            })
            return {...state, allProducts: newState, selectedProduct: singleProducts}
        default:
            return state
    }
}

