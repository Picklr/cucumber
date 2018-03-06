import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserOrderHistory} from '../store/order'
var gotOrders = false;

export const YourHistory = (props) => {
    console.log(props.orderHistory)
    if (!gotOrders && Object.keys(props.user).length !== 0){
        gotOrders = true;
        props.getUserOrderHistory(props.user)
    }
    
    return (
            <div>
                { props.orderHistory.length > 0 ?
                <div>
                <h2>Your previous orders:</h2>
                {props.orderHistory.reverse().map(eachOrder => (
                    <div key = {eachOrder.id}>
                    <h2>{'Order # ' + eachOrder.id + ' status: ' + eachOrder.status}</h2>
                        <ul>
                        {eachOrder.historicalItems.map( item =>(
                            <li key = {item.id}>{item.name}</li>
                        ))}
                        </ul>
                    </div>
                )
                )}
                </div>
                :
                <div>No orders yet or sign in to view your orders</div>
                }
            </div>
    )
}

const mapProps = state=>({orderHistory: state.orderHistory, user: state.user})
const mapDispatch = dispatch=>({getUserOrderHistory: user=>{dispatch(getUserOrderHistory(user))}})

export default connect(mapProps, mapDispatch)(YourHistory)
