import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout, clearCartThunk} from '../store'
import FlatButton from 'material-ui/FlatButton';

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
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
          {isAdmin &&  <FlatButton
              label = "Admin Home"
              backgroundColor = "#f7ffe6"
              hoverColor = "#ccffcc"
              href = "/adminHome"
              icon = {<img className="cukebutton" src="./thecucu_final.png" />}
              />
          }
            <FlatButton
              label = "Products"
              backgroundColor = "#f7ffe6"
              hoverColor = "#ccffcc"
              href = "/"
              icon = {<img className="cukebutton" src="/thecucu_final.png" />}
              />
            <FlatButton
              label = "My Account"
              backgroundColor = "#f7ffe6"
              hoverColor = "#ccffcc"
              href = "/myAccount"
              icon = {<img className="cukebutton" src="/thecucu_final.png" />}
              />
            <FlatButton
              label = "Logout"
              backgroundColor = "#f7ffe6"
              hoverColor = "#ccffcc"
              href = "#"
              onClick={handleClick}
              icon = {<img className="cukebutton" src="/thecucu_final.png" />}
              />
            </div>
          :
          <div>
            <FlatButton
              label = "Products"
              backgroundColor = "#f7ffe6"
              hoverColor = "#ccffcc"
              href = "/"
              icon = {<img className="cukebutton" src="/thecucu_final.png" />}
              />
            <FlatButton
              label = "Login"
              backgroundColor = "#f7ffe6"
              hoverColor = "#ccffcc"
              href = "/login"
              icon = {<img className="cukebutton" src="/thecucu_final.png" />}
              />
            <FlatButton
              label = "Sign Up"
              backgroundColor = "#f7ffe6"
              hoverColor = "#ccffcc"
              href = "/signup"
              icon = {<img className="cukebutton" src="/thecucu_final.png" />}
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
