import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserOrder, getUserOrderHistory} from '../store/order'
import UserOrderHistory from './yourOrders.js'


const OrderConfirmation = props => {
  if (props.orderHistory.length === 0 && Object.keys(props.user).length !== 0){
    props.getUserOrderHistory(props.user)
}
  console.log('PROPS', props.orderHistory)
        return (
            <div>

              {props.orderHistory[0] ? <div>
                <h1> {props.user.fullName + ', please confirm your order.'} </h1>

              <h2>Current Order: {props.orderHistory[props.orderHistory.length - 1]}</h2>
              </div>
              : <p>Loading...</p>}
                {/* <UserOrderHistory /> */}
            </div>
        )
}

const mapProps = state=>({orderHistory: state.orderHistory, user: state.user})
const mapDispatch = dispatch => ({
  getUserOrderHistory: user => dispatch(getUserOrderHistory(user))
})


export default connect(mapProps, mapDispatch)(OrderConfirmation)
