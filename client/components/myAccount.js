import {connect} from 'react-redux'
import {NavLink, Link} from 'react-router-dom'
import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton';


const Button = ({ label, to, onClick }) => (<RaisedButton
  label = {label}
  backgroundColor = "#f7ffe6"
  hoverColor = "#ccffcc"
  containerElement={
    <Link to={to} onClick={onClick} />
  }
  icon = {<img className="cukebutton" src="/thecucu_final.png" />}
  />)


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
      <Button
        label = "View Order History"
        to = "/yourOrders"
        />
      <Button
        label = "Update Billing Information"
        to = "/updateAccountInfo"
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
