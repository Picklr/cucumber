import {connect} from 'react-redux'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {fetchSomeoneHistory} from '../../store/adminOrders'
import {updateStatus} from '../../store/adminOrders'

const OrderAdmin = props => {

    return (
        <div >
            <button onClick = {props.fetchAll}>LOAD CLIENT ORDERS</button>
            {props.adminOrders.length>0 && <div>{
                props.adminOrders.map(eachOrder=>{
                    if(eachOrder.user !== null) return(

                        
                    <div className = "orderEdit">
                    <Link to={`/editOrders/${eachOrder.id}`}>
                    <div className='orange-slice'>{'Customer : ' + eachOrder.user.fullName +' | Order number: ' + eachOrder.id + ' | Status : ' + eachOrder.status}
                    </div>
                    </Link>
                        <form onSubmit = {(event)=>{event.preventDefault(); props.updateStatus(eachOrder.id, event.target.statusSelect.value)}}>
                        <select name = "statusSelect">
                            <option value="Active">ACTIVE</option>
                            <option value="Billing">BILLING</option>
                            <option value="Delayed">DELAYED</option>
                            <option value="Shipping">SHIPPING</option>
                            <option value="Delivered">DELIVERED</option>
                            <option value="On Fire">ON FIRE</option>
                            <option value="Lost Forever">LOST FOREVER</option>
                        </select>
                        <button type='submit'>SET STATUS</button>
                        </form>
                        </div>
                        )}
                    )}
            </div>
            }
        </div>
    )
}

const mapProps = state => ({adminOrders : state.adminOrders})
const mapDispatch = (dispatch, ownProps) => ({fetchAll: () => {dispatch(fetchSomeoneHistory())}, updateStatus: (id, status)=>dispatch(updateStatus(id, status,ownProps.history))})

export default connect(mapProps, mapDispatch)(OrderAdmin)