import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar} from './components'
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
    console.log('Look here', this.props)
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

export default withRouter(connect(null, mapDispatch)(App))


