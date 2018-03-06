import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { editUser } from '../store';

const style = {
  marginLeft: 20
};

class updateAccountInfo extends Component {

    constructor(props) {
      super(props)

    }

    render(){
console.log('STATE', this.props.currentUser)
  return (
    <div>

      <h1>Update {this.props.currentUser.fullName}'s Account</h1>

      <form
        onSubmit={(event)=> {this.props.handleUpdateSubmit(event, this.props.currentUser.email, this.props.currentUser.billingAddress)
          }}
        id = {this.props.currentUser.id}
      >
      <h3>Current Email Address: {this.props.currentUser.email}</h3>
      <TextField
            hintText="New Email Address"
            style={style}
            name = "email"
            underlineShow={false} />
            <Divider />
      <h3>Current Billing Address: {this.props.currentUser.billingAddress}</h3>
      <TextField
            hintText="New Billing Address"
            style={style}
            name = "billingAddress"
            underlineShow={false} />
            <Divider />
      <RaisedButton
        label= "Update Account"
        type = "submit"
        />
      <RaisedButton
        label = "Back to My Account"
        href = "./myAccount"

        />
      </form>
    </div>

      )
    }
  }


  const mapState = state => {
    return {
      currentUser: state.user
    }
  }

 const mapDispatch = (dispatch) => {
   return {
   handleUpdateSubmit: (event, currEmail, currAddress) => {
     event.preventDefault();

     const email = event.target.email.value || currEmail;
     const billingAddress = event.target.billingAddress.value || currAddress;
     const userId = +event.target.id;
     console.log('Changes to pass', email, billingAddress)
     dispatch(editUser(email, billingAddress, userId))
   }
  }
 }


 export default connect(mapState, mapDispatch)(updateAccountInfo)
