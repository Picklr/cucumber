import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'
import AllProducts from './components/allProducts'
import SingleProduct from './components/singleProductView'
import ShoppingList from './components/shoppingList'
import YourOrders from './components/yourOrders'
import myAccount from './components/myAccount'
import updateAccountInfo from './components/updateAccountInfo'
import OrderSuccess from './components/orderSuccess'
import AdminHome from './components/Admin/admin-home'
import EditUsers from './components/Admin/admin-edit-users'
import EditOrders from './components/Admin/editOrders.js'
import EditSingleOrder from './components/Admin/singleOrder.js'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <div id="Grocery-Box">
        <Route path = "/" component={ShoppingList} />
        <div id="Product-Aisle">
        <Route exact path="/" component={AllProducts} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path = '/myAccount' component={myAccount} />
        <Route path = '/updateAccountInfo' component={updateAccountInfo} />
        <Route path='/orderSuccess' component={OrderSuccess} />
        <Route path='/yourOrders' component={YourOrders} />
        <Route path='/adminHome' component={AdminHome} />
        <Route path='/editUsers' component={EditUsers} />
        <Route exact path = '/editOrders' component = {EditOrders} />
        <Route path = '/editOrders/:id' component = {EditSingleOrder} />
        </div>
        </div>
        {
          isLoggedIn &&
            <Switch>
              {/* Routes placed here are only available after logging in */}
              <Route path="/home" component={UserHome} />
            </Switch>
        }
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
