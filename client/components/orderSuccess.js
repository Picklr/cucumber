import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserOrder, getUserOrderHistory} from '../store/order'
import UserOrderHistory from './yourOrders.js'


const OrderSuccess = props => {
    if (props.orderHistory.length === 0 && Object.keys(props.user).length !== 0){
        props.getUserOrderHistory(props.user)
    }
    console.log(props.orderHistory)
        return (
            <div>
                {props.orderHistory[0] ? <h1>{'Congratulations ' + props.user.fullName + '! Your order status is: ' + props.orderHistory[props.orderHistory.length - 1].status}</h1> : <p>Loading...</p>}
                <UserOrderHistory />
            </div>
        )
}

const mapProps = state=>({orderHistory:state.orderHistory, user: state.user})
const mapDispatch = dispatch => ({
    getUserOrderHistory: user => dispatch(getUserOrderHistory(user))
})

export default connect(mapProps, mapDispatch)(OrderSuccess)
