import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout, clearCartThunk} from '../store'
import FlatButton from 'material-ui/FlatButton';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>

    <Link to ='/'>
    <div id = 'logo-pair'>
    <img src='/thecucu.jpg' className='logo-sibling'/>
    <h1 className='logo-sibling'>cucumber</h1>
    </div>
    </Link>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}

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
           <FlatButton
            label = "Products"
            backgroundColor = "#f7ffe6"
            hoverColor = "#ccffcc"
            href = "/"
            icon = {<img className="cukebutton" src="./thecucu_final.png" />}
            />
        </div>
      )}
    </nav>
    <hr />
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
