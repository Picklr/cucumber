import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import FlatButton from 'material-ui/FlatButton';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div  className = "container" >

      <div className = "item">
          <img className ="item" id="nav-cuke-logo" src='/thecucu.jpg'/>
          <h1 className ="item" >cucumber</h1>
      </div>

    <nav >
      <div >
        {isLoggedIn ?
          <div>
            <FlatButton
              label = "Products"
              backgroundColor = "#f7ffe6"
              hoverColor = "#ccffcc"
              href = "/"
              icon = {<img className="cukebutton" src="./thecucu_final.png" />}
              />
            <FlatButton
              label = "My Account"
              backgroundColor = "#f7ffe6"
              hoverColor = "#ccffcc"
              // href = "/"
              icon = {<img className="cukebutton" src="./thecucu_final.png" />}
              />
            <FlatButton
              label = "Logout"
              backgroundColor = "#f7ffe6"
              hoverColor = "#ccffcc"
              href = "#"
              onClick={handleClick}
              icon = {<img className="cukebutton" src="./thecucu_final.png" />}
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
