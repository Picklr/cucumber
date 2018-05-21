import React from 'react'
import { connect } from 'react-redux'
import { getUserOrderHistory } from '../store/order'


const OrderConfirmation = props => {
  if (props.orderHistory.length === 0 && Object.keys(props.user).length !== 0) {
    props.getUserOrderHistory(props.user)
  }
  return (
    <div>
      {props.orderHistory[0] ? <div>
        <h1> {props.user.fullName + ', please confirm your order.'} </h1>
        <h2>Current Order: {props.orderHistory[props.orderHistory.length - 1]}</h2>
      </div>
        : <p>Loading...</p>}
    </div>
  )
}

const mapProps = state => ({ orderHistory: state.orderHistory, user: state.user })

const mapDispatch = dispatch => ({
  getUserOrderHistory: user => dispatch(getUserOrderHistory(user))
})

export default connect(mapProps, mapDispatch)(OrderConfirmation)
