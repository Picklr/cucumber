import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout, clearCartThunk} from '../store'
import FlatButton from 'material-ui/FlatButton';


const Button = ({ label, to, onClick }) => <FlatButton
              label = {label}
              backgroundColor = "#f7ffe6"
              hoverColor = "#ccffcc"
              // href = "/"
              containerElement={
                <Link to={to} onClick={onClick} />
              }
              icon = {<img className="cukebutton" src="/thecucu_final.png" />}
              />

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <div  id="navB" >


      <div className = "item">
        <Link to="/">
          <img className ="item" id="nav-cuke-logo" src="/thecucu_final.png" />
          </Link>
        <Link to="/">
          <h1 className ="item" id="nav-cuke-name">cucumber</h1>
          </Link>

      </div>

    <nav className = "item">
      <div >

        {isLoggedIn ?
          <div>

          {isAdmin &&  <FlatButton
              label = "Admin Home"
              backgroundColor = "#f7ffe6"
              hoverColor = "#ccffcc"
              href = "/adminHome"
              icon = {<img className="cukebutton" src="./thecucu_final.png" />}
              />
          }
        
            <Button to="/" label="Products" />
            <Button
              label = "My Account"
              to="/myAccount"
              />
           <FlatButton
              label = 'Logout'
              backgroundColor = "#f7ffe6"
              hoverColor = "#ccffcc"
              // href = "/"
              containerElement={
                <Link to='/login'/>
              }
              onClick = {handleClick}
              icon = {<img className="cukebutton" src="/thecucu_final.png" />}
              />
            </div>
          :
          <div>
            <Button
              label = "Products"
              to = "/"
            />
            <Button
              label = "Login"
              to = "/login"
              />
            <Button
              label = "Sign Up"
              to = "/signup"
              />
            </div>
            }
        </div>
        </nav>
    </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {      
      dispatch(logout())
      dispatch(clearCartThunk())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
