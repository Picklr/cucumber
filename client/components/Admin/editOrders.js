import {connect} from 'react-redux'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {fetchSomeoneHistory} from '../../store/adminOrders'


const OrderAdmin = props => {

    return (
        <div>
            <button onClick = {props.fetchAll}>LOAD CLIENT ORDERS</button>
            {props.adminOrders.length>0 && <div>{
                props.adminOrders.map(eachOrder=>
                    <Link to={`/editOrders/${eachOrder.id}`}>
                    <div className='orange-slice'>{'Customer : ' + eachOrder.user.fullName +' | Order number: ' + eachOrder.id + ' | Status : ' + eachOrder.status}
                    </div>
                    </Link>
                    )}
            </div>
            }
        </div>
    )
}

const mapProps = state => ({adminOrders : state.adminOrders})
const mapDispatch = dispatch => ({fetchAll: () => {dispatch(fetchSomeoneHistory())}})

export default connect(mapProps, mapDispatch)(OrderAdmin)