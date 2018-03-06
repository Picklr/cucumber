import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserOrderHistory} from '../store/order'


export const YourHistory = (props) => {
    console.log(props.orderHistory)
    if (props.orderHistory.length < 1 && Object.keys(props.user).length !== 0){
        props.getUserOrderHistory(props.user)
    }
    
    return (
            <div>
                { props.orderHistory.length > 0 ?
                <div>
                <h2>Your previous orders:</h2>
                {props.orderHistory.map(eachOrder => (
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
                <div>PLEASE BE PATIENT, WE ARE FETCHING</div>
                }
            </div>
    )
}

const mapProps = state=>({orderHistory: state.orderHistory, user: state.user})
const mapDispatch = dispatch=>({getUserOrderHistory: user=>{dispatch(getUserOrderHistory(user))}})

export default connect(mapProps, mapDispatch)(YourHistory)
