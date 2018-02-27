import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar} from './components'
import Routes from './routes'
import {fetchProducts} from './store'



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

export default connect(null, mapDispatch)(App)


