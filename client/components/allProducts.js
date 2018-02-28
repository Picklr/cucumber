import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import { addProductToList } from '../store/shoppingList';

class AllProducts extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>These are our products</h2>
        <ul>
          {this.props.products.map(product => {
            return (
              <li key={product.id} >
                <NavLink to={`/products/${product.id}`}>
                  <h4>{product.name} </h4>
                </NavLink>
                <button
                  onClick={this.props.handleAddToListClick}
                  id={product.id}
                  >
                  Add to Shopping List</button >
              </li>
            )
          }
        )
      }

        </ul>
      </div>
    )
}
}

  const mapState = state => ({
    products: state.products
  })

  const mapDispatch = dispatch => ({
    handleAddToListClick: (event) => {
      event.preventDefault();
      console.log(typeof +event.target.id)
      dispatch(addProductToList(+event.target.id))
    }
  })


  export default connect(mapState, mapDispatch)(AllProducts)
