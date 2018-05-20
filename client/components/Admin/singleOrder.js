import {connect} from 'react-redux'
import React, {Component} from 'react'
import {updateStatus} from '../../store/adminOrders'

const EditOneOrder = props => {
    const narrow = props.adminOrders.find(eachOrder=>eachOrder.id==props.match.params.id)

    return(
    <div>
        <div className='orange-slice'>
            {"Order " + narrow.id + ' Status: ' + narrow.status}
        </div>
        <form onSubmit = {(event)=>{event.preventDefault(); props.updateStatus(props.match.params.id, event.target.statusSelect.value)}}>
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
    )
}

const mapProps = state => ({adminOrders: state.adminOrders})
const mapDispatch = (dispatch,ownProps) => ({updateStatus: (id, status)=>dispatch(updateStatus(id, status,ownProps.history))})

export default connect(mapProps,mapDispatch)(EditOneOrder)
