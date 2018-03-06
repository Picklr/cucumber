import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getUserOrderHistory} from '../store/order'
var gotOrders = false;
function displayPrice(price){
    var priceString = '' + Math.floor(price*100)
    return '$' + priceString.slice(0,priceString.length - 2) + '.' + priceString.slice(priceString.length - 2)
}

export const YourHistory = (props) => {
    console.log(props.orderHistory)

    //if (props.orderHistory.length < 1 && Object.keys(props.user).length !== 0){

    if (!gotOrders && Object.keys(props.user).length !== 0){
        gotOrders = true;

        props.getUserOrderHistory(props.user)
    }

    return (
            <div>
                { props.orderHistory.length > 0 ?
                <div>
                <h2>Your previous orders:</h2>
                {props.orderHistory.sort((a,b)=>b.id-a.id).map(eachOrder => (
                    <div className = 'green-slice' key = {eachOrder.id}>
                    <h2>{'Order # ' + eachOrder.id + ' status: ' + eachOrder.status}</h2>
                        <ul>
                        {eachOrder.historicalItems.map( item =>(
                        
                            <li className = 'orange-slice' key = {item.id}>
                                <Link to ={`products/${item.id}`}>
                                    <div>{item.name}</div>
                                    <p>{item.quantity} x {item.price} = {displayPrice(item.price * item.quantity)}</p>
                                </Link>
                            </li>
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
