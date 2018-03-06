import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton';

class myAccount extends Component {

    constructor(props) {
      super(props)

    }

    render(){

      const styles = {
        checkout: {
            margin: 10,

        },
        shoppingListItem: {
            margin: 15
        }
    }

  return (
    <div
    >
      <h1>{this.props.currentUser.fullName}'s Account</h1>
      <h3>Email Address: {this.props.currentUser.email}</h3>
      <h3>Billing Address: {this.props.currentUser.billingAddress}</h3>
      <RaisedButton
        style={styles.checkout}
        label = "View Order History"
        href = "./yourOrders"
        backgroundColor= "#f7ffe6"
        hoverColor= "#ccffcc"
        />
        <br />
      <RaisedButton
      style={styles.checkout}
        label = "Update Billing Information"
        href = "./updateAccountInfo"
        backgroundColor= "#f7ffe6"
        hoverColor= "#ccffcc"
        />
    </div>

      )
    }
  }


  const mapState = state => {
    return {
      currentUser: state.user
    }
  }

 const mapDispatch = dispatch => ({
 }
 )


 export default connect(mapState, mapDispatch)(myAccount)
