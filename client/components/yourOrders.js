import React, {Component} from 'react'
import {connect} from 'react-redux'


class YourHistory extends Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log('Order hist ', this.props)
        return(
            <div>
                <h1>{'Congratulations ' + this.props.user.fullName + '! Your order status is: ' + this.props.orderHistory[0].status}</h1>
                <h2>Your previous orders:</h2>
                {this.props.orderHistory.map(eachOrder => 
                    <h2>{'Order # ' + eachOrder.id + ' status: ' + eachOrder.status}</h2>
                )}
            </div>
        )
    }
}

const mapProps = state=>({orderHistory:state.orderHistory, user: state.user})

export default connect(mapProps)(YourHistory)