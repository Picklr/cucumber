
import {Navbar, ShoppingList} from './components'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Routes from './routes'
import {fetchProducts} from './store'
import {withRouter} from 'react-router-dom'

class App extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount (){
    this.props.loadInventory()
  }

  render(){
    return (
      <div>
        <Navbar />
        <ShoppingList />
        <Routes />
      </div>
    )
  }
}


const mapDispatch = (dispatch) => {
  return {
    loadInventory () {
      dispatch(fetchProducts())
    }
  }
}

export default withRouter(connect(null, mapDispatch)(App))

