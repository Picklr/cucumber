import axios from 'axios'

//Action Type
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

// ACTION CREATORS

//used in THUNK
export const updateProduct = (product) => ({type: UPDATE_PRODUCT, product: product})



//STATE

let initialState = {
    selectedProduct: {},
}


//thunk



export const editProduct = (name, price, category, brand, productId) =>
dispatch =>

  axios.put(`/api/products/${productId}`, {name, price, category, brand, productId})
      .then((res)=> {
        dispatch(updateProduct(res.data[1]))
      })
      .catch(err => console.log(err))


export const editProducts = function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_PRODUCT:
            return action.product
        default:
            return state
    }
}
export default editProducts
