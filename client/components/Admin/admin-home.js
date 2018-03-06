import React, {Component} from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';

class AdminHome extends Component {

      constructor(props) {
        super(props)

      }


      render(){

    return (
      <div>
        <RaisedButton
          backgroundColor = "#f7ffe6"
          hoverColor = "#ccffcc"
          label="Edit Users"
          to = '/editProducts'/>

        <RaisedButton
          backgroundColor = "#f7ffe6"
          hoverColor = "#ccffcc"
          label="View/Edit Orders"
          to = '/editOrders'
          />

        </div>

    )


      }
    }



const mapProps = state=>({})
const mapDispatch = dispatch => ({
})

export default connect(mapProps, mapDispatch)(AdminHome)
