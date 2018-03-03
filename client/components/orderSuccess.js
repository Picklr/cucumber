import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserOrderHistory} from '../store/order'
import UserOrderHistory from './yourOrders.js'


const OrderSuccess = props => {
 
        return(
            <div>
                <h1>{'Congratulations ' + props.user.fullName + '! Your order status is: ' + props.orderHistory[props.orderHistory.length-1].status}</h1>
                <UserOrderHistory/>
            </div>
        )
}

const mapProps = state=>({orderHistory:state.orderHistory, user: state.user})
const mapDispatch = null

export default connect(mapProps, mapDispatch)(OrderSuccess)