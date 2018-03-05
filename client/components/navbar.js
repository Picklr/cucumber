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

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div  className = "container" >

      <div className = "item">
        <Link to="/">
          <img className ="item" id="nav-cuke-logo" src="/thecucu.jpg" />
          </Link>
        <Link to="/">
          <h1 className ="item" >cucumber</h1>
          </Link>

      </div>

    <nav className = "item">
      <div >
        {isLoggedIn ?
          <div>
            <Button to="/" label="Products" />
            <Button
              label = "My Account"
              to="/myAccount"
              />
            <Button
              label = "Logout"
              to = "#"
              onClick={handleClick}
              />
            </div>
          :
          <div>
            <FlatButton
              label = "Products"
              backgroundColor = "#f7ffe6"
              hoverColor = "#ccffcc"
              href = "/"
              icon = {<img className="cukebutton" src="./thecucu_final.png" />}
              />
            <FlatButton
              label = "Login"
              backgroundColor = "#f7ffe6"
              hoverColor = "#ccffcc"
              href = "/login"
              icon = {<img className="cukebutton" src="./thecucu_final.png" />}
              />
            <FlatButton
              label = "Sign Up"
              backgroundColor = "#f7ffe6"
              hoverColor = "#ccffcc"
              href = "/signup"
              icon = {<img className="cukebutton" src="./thecucu_final.png" />}
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
    isLoggedIn: !!state.user.id
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
