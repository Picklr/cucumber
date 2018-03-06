import {connect} from 'react-redux'
import React, {Component} from 'react'

const EditOneOrder = props => {
    console.log('THESE ARE PROPS ', props)
    const narrow = props.adminOrders.find(eachOrder=>eachOrder.id==props.match.params.id)

    return(
    <div>
        <div className='orange-slice'>
            {"Order " + narrow.id + ' Status: ' + narrow.status}
        </div>
    </div>
    )
}

const mapProps = state => ({adminOrders: state.adminOrders})
const mapDispatch = null

export default connect(mapProps,mapDispatch)(EditOneOrder)