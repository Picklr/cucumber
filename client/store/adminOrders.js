import axios from 'axios'
import history from '../history'


const GET_SPECIFIC_HISTORY = 'GET_SPECIFIC_HISTORY'

export const getSomeoneHistory = (orders) => ({type: GET_SPECIFIC_HISTORY, orders})

//THUNK

export const fetchSomeoneHistory = () => dispatch => { 
    axios.get('/api/order/adminHistory').then(res=>res.data).then(allHistory=>{
        allHistory = allHistory.sort((a,b)=>a.id-b.id)
        dispatch(getSomeoneHistory(allHistory))
    })
}

export const updateStatus = (userId,status,history) => dispatch => {

    const packet = {id: userId, status: status}
    axios.put('/api/order/adminHistory', packet).then(()=>{
        console.log('WE HAVE RESOLVED UPDATE')
        dispatch(fetchSomeoneHistory()) //that's right, thunk in a thunk
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