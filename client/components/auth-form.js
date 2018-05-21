import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  textField: {
    marginLeft: 20
  },
  button: {
    alignItems: 'center'
  }
};

const AuthForm = (props) => {
  const { name, displayName, handleSignUpSubmit, handleLogInSubmit, error } = props

  return (
    <div>
      <form onSubmit={displayName === 'Sign Up' ? handleSignUpSubmit : handleLogInSubmit} name={name}>
        <div>
          {displayName === 'Sign Up' ?
            <Paper zDepth={2}>
              <TextField
                required
                hintText="First Name"
                style={styles.textField}
                name="firstName"
                underlineShow={false} />
              <Divider />

              <TextField
                required
                hintText="Last Name"
                style={styles.textField}
                name="lastName"
                underlineShow={false} />
              <Divider />


              <TextField
                required
                hintText="Billing Address"
                style={styles.textField}
                type='address'
                name="billingAddress"
                underlineShow={false} />
              <Divider />

              <TextField
                required
                hintText="Email"
                style={styles.textField}
                name="email"
                underlineShow={false}
                type='email'
              />
              <Divider />

              <TextField
                required
                hintText="Password"
                style={styles.textField}
                type="password"
                name="password"
                underlineShow={false} />
              <Divider />

            </Paper>
            :
            <Paper zDepth={2}>
              <TextField
                hintText="Email"
                style={styles.textField}
                name="email"
                underlineShow={false} />
              <Divider />

              <TextField
                hintText="Password"
                style={styles.textField}
                type="password"
                name="password"
                underlineShow={false} />
              <Divider />
            </Paper>
          }
        </div>
        <div>
          <RaisedButton
            style={styles.button}
            label={displayName}
            type="submit"
          />
          <br />
          <a href="/auth/google"><RaisedButton
            style={styles.button}
            label={displayName + ' with Google'}
          /></a>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSignUpSubmit: (evt) => {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const billingAddress = evt.target.billingAddress.value
      dispatch(auth(formName, email, password, firstName, lastName, billingAddress))
    },
    handleLogInSubmit: (evt) => {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(formName, email, password))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
