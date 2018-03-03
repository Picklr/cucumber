import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserOrderHistory} from '../store/order'


class YourHistory extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getUserOrderHistory(this.props.user)
    }

    render(){

        return(
            <div>
                { this.props.orderHistory.length>0 ?
                <div>
                <h2>Your previous orders:</h2>
                {this.props.orderHistory.map(eachOrder => 
                    <h2>{'Order # ' + eachOrder.id + ' status: ' + eachOrder.status}</h2>
                )}
                </div>
                :
                <div>PLEASE BE PATIENT, WE ARE FETCHING</div>
                }
            </div>
        )
    }
}

const mapProps = state=>({orderHistory:state.orderHistory, user: state.user})
const mapDispatch = dispatch=>({getUserOrderHistory: user=>{dispatch(getUserOrderHistory(user))}})

export default connect(mapProps, mapDispatch)(YourHistory)