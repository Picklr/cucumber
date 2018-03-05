import axios from 'axios'
import history from '../history'

//constants
const CHECKOUT_ORDER = 'CHECKOUT_ORDER'
const RETRIEVE_ORDER_HISTORY = 'RETRIVE_ORDER_HISTORY'

//action creator

export const addLatestOrder = hotOrder=>({type: CHECKOUT_ORDER, hotOrder})
const rememberOrders = orderHistory =>({type: RETRIEVE_ORDER_HISTORY, orderHistory})


//thunk to fetch orderHistory

export const getUserOrderHistory = user => dispatch => {
    console.log('BACKTRACING ORDERS' + `/api/order/${user.id}`)
    axios.get(`/api/order/history/${user.id}`).then(res=>res.data).then(oHistory=>{
        console.log('TOTAL ORDERS: ', oHistory)
        dispatch(rememberOrders(oHistory))
    })
}

export const getUserOrder = user => dispatch => {
    console.log('BACKTRACING ORDERS' + `/api/order/${user.id}`)
    axios.get(`/api/order/${user.id}`).then(res=>res.data).then(oHistory=>{
        console.log('TOTAL ORDERS: ', oHistory)
        dispatch(rememberOrders(oHistory))
    })
}


export default function reducer(state = [], action) {
    switch (action.type){
        case CHECKOUT_ORDER:
            return [...state, action.hotOrder]
        case RETRIEVE_ORDER_HISTORY:
            return action.orderHistory
        default: return state
    }
}
