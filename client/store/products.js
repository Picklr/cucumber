import axios from 'axios'

//Action Type
const GET_PRODUCTS = 'GET_PRODUCTS';
const SET_SELECTED_PRODUCT_VIEW = 'SET_SELECTED_PRODUCT_VIEW'
const SET_FILTER_TERM = 'SET_FILTER_TERM'
const ADD_REVIEW = 'ADD_REVIEW'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';


// ACTION CREATORS

//used in THUNK
const getProducts = products => ({ type: GET_PRODUCTS, products })
const reviewAction = review => ({ type: ADD_REVIEW, review })

export const updateProduct = (product) => ({ type: UPDATE_PRODUCT, product })

//not used in thunk (standalone)
export const setSelectedProductView = singleProductId => ({ type: SET_SELECTED_PRODUCT_VIEW, singleProductId })
export const setSearchTerm = term => ({ type: SET_FILTER_TERM, term })

//STATE

let initialState = {
    allProducts: [],
    selectedProduct: {},
    filterTerm: ''
}


//thunk

export const editProduct = (name, price, category, brand, productId) =>
    dispatch =>
        axios.put(`/api/products/${productId}`, {
            name: name,
            price: price,
            category: category,
            brand: brand
        })
            .then((res) => {
                dispatch(updateProduct(res.data[1]))
            })
            .catch(err => console.log(err))

export const fetchProducts = () =>
    dispatch =>
        axios.get('/api/products')
            .then(res =>
                dispatch(getProducts(res.data)))
            .catch(err => console.log(err))

export const addReview = (body) =>
    dispatch =>
        axios.post(`/api/products/${body.productId}/review`, body)
            .then(res => dispatch(reviewAction(res.data)))


export const products = function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, allProducts: action.products }
        case SET_SELECTED_PRODUCT_VIEW:
            const singleProduct = state.allProducts.find(eachProduct => eachProduct.id == action.singleProductId)
            if (singleProduct) return { ...state, selectedProduct: singleProduct }
            else return { ...state, selectedProduct: {} }
        case SET_FILTER_TERM:
            return { ...state, filterTerm: action.term }
        case ADD_REVIEW:
            let singleProducts = state.allProducts.find(eachProduct => eachProduct.id == action.review.productId)
            singleProducts = { ...singleProducts, reviews: [...singleProducts.reviews, action.review] }
            const newState = state.allProducts.map(eachProduct => {
                if (eachProduct.id == action.review.productId) return singleProducts
                else return eachProduct
            })
            return { ...state, allProducts: newState, selectedProduct: singleProducts }
        case UPDATE_PRODUCT:
            const newAllProducts = state.allProducts.map((currProduct) => {
                if (currProduct.id === action.product.id) {
                    return action.product
                } else {
                    return currProduct
                }
            })
            return { ...state, selectedProduct: action.product, allProducts: newAllProducts }
        default:
            return state
    }
}

