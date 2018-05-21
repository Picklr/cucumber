import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserOrderHistory } from '../store/order'

var gotOrders = false;
function displayPrice(price) {
    var priceString = '' + Math.floor(price * 100)
    return '$' + priceString.slice(0, priceString.length - 2) + '.' + priceString.slice(priceString.length - 2)
}

function parseDate(date) {
    var dateTime = date.split('T');
    var dateArr = dateTime[0].split('-');
    var year = dateArr[0];
    var month = dateArr[1];
    var day = dateArr[2];
    var timeArr = dateTime[1].split(':');
    var hour = timeArr[0];
    var minute = timeArr[1]
    return 'on ' + month + '/' + day + '/' + year + ' at ' + hour + ':' + minute
}

export const YourHistory = (props) => {

    if (!gotOrders && Object.keys(props.user).length !== 0) {
        gotOrders = true;

        props.getUserOrderHistory(props.user)
    }
    return (
        <div>
            {props.orderHistory.length > 0 ?
                <div>
                <h2>Your previous orders:</h2>
                {props.orderHistory.sort((a,b)=>b.id-a.id).map(eachOrder => {
                    let total = 0;
                    return (
                    <div className = 'green-slice' key = {eachOrder.id}>
                    <h2>{'Order # ' + eachOrder.id + ' status: ' + eachOrder.status}</h2>
                    <h3>Ordered {parseDate(eachOrder.createdAt)}</h3>
                        <ul>
                        {eachOrder.historicalItems.map( item =>{
                            total += item.quantity * item.price
                            return (
                             <li className = 'orange-slice' key = {item.id}>
                                <Link to ={`products/${item.foodProductId}`}><div>{item.name}</div>
                                <p>quantity: {item.quantity} x ${item.price} = {displayPrice(item.price * item.quantity)}</p>
                             </Link>
                            </li>
                        )})}
                        </ul>
                        <h4>Total: {displayPrice(total)}</h4>
                    </div>
                )}
                )}
                </div>
                :
                <div>No orders yet or sign in to view your orders</div>
            }
        </div>
    )
}

const mapProps = state => ({
    orderHistory: state.orderHistory,
    user: state.user })

const mapDispatch = dispatch => ({ getUserOrderHistory: user => { dispatch(getUserOrderHistory(user)) } })

export default connect(mapProps, mapDispatch)(YourHistory)
