import axios from 'axios'
import history from '../history'


const GET_SPECIFIC_HISTORY = 'GET_SPECIFIC_HISTORY'

export const getSomeoneHistory = (orders) => ({type: GET_SPECIFIC_HISTORY, orders})

//THUNK

export const fetchSomeoneHistory = () => dispatch => { 
    axios.get('/api/order/adminHistory').then(res=>res.data).then(allHistory=>{
        dispatch(getSomeoneHistory(allHistory))
    })
}

export default function(state = [], action) {
    switch(action.type){
        case GET_SPECIFIC_HISTORY: {
            return action.orders
        }
        default: return state
    }
}