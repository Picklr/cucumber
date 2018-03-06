import axios from 'axios'

//Action Type
const GET_PRODUCTS = 'GET_PRODUCTS';

const SET_SELECTED_PRODUCT_VIEW = 'SET_SELECTED_PRODUCT_VIEW'
const SET_FILTER_TERM = 'SET_FILTER_TERM'

const UPDATE_PRODUCT = 'UPDATE_PRODUCT';


// ACTION CREATORS

//used in THUNK
const getProducts = products => ({type: GET_PRODUCTS, products})

export const updateProduct = (product) => ({type: UPDATE_PRODUCT, product})

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

export const editProduct = (name, price, category, brand, productId) =>
dispatch =>
  axios.put(`/api/products/${productId}`, {
      name: name,
      price: price,
      category: category,
      brand: brand})
      .then((res)=> {
      console.log('RES.DATA', res.data)
        dispatch(updateProduct(res.data[1]))
      })
      .catch(err => console.log(err))

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
            const singleProduct = state.allProducts.find(eachProduct=>eachProduct.id == action.singleProductId)
            if (singleProduct) return {...state, selectedProduct: singleProduct}
            else return {...state, selectedProduct: {} }
        case SET_FILTER_TERM:
            return {...state, filterTerm: action.term}
        case UPDATE_PRODUCT:
        console.log(action.product,'ACTION PRODUCT')
            const newAllProducts = state.allProducts.map((currProduct)=>{
                if ( currProduct.id === action.product.id){
                    return action.product
                }else{
                    return currProduct
                }
            })

            console.log('THIS IS THE NEW ALL P', newAllProducts)
            return {...state, selectedProduct: action.product, allProducts: newAllProducts}
        default:
            return state
    }
}

