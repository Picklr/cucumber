import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import React, {Component} from 'react'
import {setSearchTerm} from '../store/products'
import { fetchObjAndAdd } from '../store/shoppingList';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AllProducts extends Component {

  constructor(props) {
    super(props)

  }

  render(){

    const allProducts = (this.props.term && this.props.products.length>0) ? this.props.products.filter(eachProduct=>eachProduct.name.toLowerCase().indexOf(this.props.term.toLowerCase())>(-1)) : this.props.products

    return (
        <div>
          <h2>Products</h2>
<TextField
      hintText="Dan Smells"
      floatingLabelText="Product Search"
      type='text'
      onChange={this.props.handleChange}
    /><br />

        {/* <h2>{this.props.term}</h2> */}
        <ul>

        {allProducts.map(product =>{
            return (
              <li key={product.id} >
                <NavLink to={`/products/${product.id}`}>
                  <h4>{product.name} </h4>
                </NavLink>

                {/* <RaisedButton
                id={product.id}
          onClick={this.props.handleAddToListClick}

                backgroundColor = "#f7ffe6"
        hoverColor = "#ccffcc"
        label="Add to Shopping List"
        /> */}
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
     products: state.products.allProducts,
     term: state.products.filterTerm
  })

  const mapDispatch = dispatch => ({
     handleChange: event => {dispatch(setSearchTerm(event.target.value))},
     handleAddToListClick: (event) => {
      event.preventDefault();

      dispatch(fetchObjAndAdd(+event.target.id))

   }
  }
  )


  export default connect(mapState, mapDispatch)(AllProducts)
