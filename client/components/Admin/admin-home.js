import React, { Component } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'


const Button = ({ label, to, onClick }) => (<RaisedButton
  label={label}
  backgroundColor="#f7ffe6"
  hoverColor="#ccffcc"
  containerElement={
    <Link to={to} onClick={onClick} />
  }
  icon={<img className="cukebutton" src="/thecucu_final.png" />}
/>)


class AdminHome extends Component {

  render(){
    return (
      <div>
        <Button
          label="Edit Users"
          to='/editProducts' />
        < br />
        <Button
          label="View/Edit Orders"
          to='/editProducts'
        />
      </div>
    )
  }
}

const mapProps = state => ({})
const mapDispatch = dispatch => ({
})

export default connect(mapProps, mapDispatch)(AdminHome)
