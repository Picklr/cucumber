import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditUsers extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div> Made it to edit Users </div>
    )
  }
}

const mapProps = state => ({})
const mapDispatch = dispatch => ({
})

export default connect(mapProps, mapDispatch)(EditUsers)
