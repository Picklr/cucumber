import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import React, {Component} from 'react'
import {setSearchTerm} from '../store/products'
import { fetchObjAndAdd } from '../store/shoppingList';


class AllProducts extends Component {

  constructor(props) {
    super(props)

  }

  render(){
    function helper(list,anotherList){
      if(list.length && anotherList.length){ allProducts = anotherList.concat(list)
      return allProducts}
       if(list.length){
        allProducts = list
        return allProducts
      }
      else if(anotherList.length) allProducts = anotherList
        return allProducts
    }
    
    const filteredByTags = (this.props.products.length>0 && (this.props.products.filter(eachProduct => eachProduct.tags.filter(tag=> tag.toLowerCase()===this.props.term.toLowerCase()).length>0)))
    let filteredByName = (this.props.products.length>0 && (this.props.products.filter(eachProduct=>(eachProduct.name.toLowerCase().indexOf(this.props.term.toLowerCase()))>-1)))
    let allProducts = (this.props.term && this.props.products.length>0) 
        ? (filteredByTags.length>0||filteredByName.length>0) ?  helper(filteredByTags,filteredByName) : this.props.products
        : this.props.products
        
    return (
        <div>
        <input name='search' type='text' onChange={this.props.handleChange}/>
        <h2>These are our products</h2>
        <h2>{this.props.term}</h2>
        <ul>

        {allProducts.map(product =>{
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
