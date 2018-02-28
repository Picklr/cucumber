import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import React, {Component} from 'react'

<<<<<<< HEAD
const AllProducts = (props) => {

    return (
      <div>
      <h2>These are our products</h2>
      {props.products.map(product => {
        return  <h4 key={product.id}>{product.name}<button onClick = {() => { /* DO SOMETHING */ }}>Add to Shopping List</button ></h4>
      })}
      </div>
    )
=======
class AllProducts extends Component {

  constructor(props){
    super(props)
>>>>>>> master
  }

  render(){
    return (
        <div>
        <h2>These are our products</h2>
        <ul>
        {this.props.products.map(product =>{
          return <li key={product.id} > <NavLink to={`/products/${product.id}`}><h4>{product.name} </h4></NavLink> <button onClick = {()=>{ /* DO SOMETHING */ }}>Add to Shopping List</button > </li>
        })}
        </ul>
        </div>)}
}

  const mapState = state => ({
     products: state.products
  })


  export default connect(mapState, null)(AllProducts)
