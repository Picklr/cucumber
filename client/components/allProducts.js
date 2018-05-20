import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import { setSearchTerm } from '../store/products'
import { fetchObjAndAdd } from '../store/shoppingList';
import TextField from 'material-ui/TextField';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import { orange500 } from 'material-ui/styles/colors';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    borderColor: orange500,
  },
  gridList: {
    display: 'flex',
    flex: '1 1',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    height: 900,
    overflowY: 'auto',
  },
  singleTile: {
    flex: '1 1'
  }
};

class AllProducts extends Component {

  render() {

    const { products, term } = this.props

    const tagMatchesTerm = (tag) => tag.toLowerCase() === term
    const productHasMatchingTag = product => product.tags.filter(tagMatchesTerm).length > 0
    const productWithinTerm = (product) => product.name.toLowerCase().indexOf(term.toLowerCase()) > -1

    const filteredByTags = products.filter(productHasMatchingTag)
    const filteredByName = products.filter(productWithinTerm)
    const allFound = [...filteredByName]

    const allProducts = allFound.length ? allFound : products
    this.columnNumber = this.props.term.length > 1 ? 2 : 4

    return (

      <div id="groceries" >
        <TextField
          hintText="Product"
          floatingLabelText="Search Products"
          type="text"
          onChange={this.props.handleChange}
        />
        <Subheader>Products</Subheader>
        <div style={styles.root}>
          <GridList
            cols={this.columnNumber}
            cellHeight={180}
            style={styles.gridList}
          >
            {allProducts.map(product => {
              return (
                <NavLink
                  to={`/products/${product.id}`}
                  key={product.id} >
                  <GridTile
                    style={styles.singleTile}
                    id={product.id}
                    key={product.id}
                    title={product.name}
                    actionIcon={<IconButton id={product.id} onClick={this.props.handleAddToListClick}>
                      <i
                        id={product.id}
                        className="material-icons"
                      >add_shopping_cart</i>
                      {/* <StarBorder color="white" /> */}
                    </IconButton>}
                  >
                    <img src={product.photo} />
                  </GridTile>
                </NavLink>
              )
            }
            )}
          </GridList>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products.allProducts,
  term: state.products.filterTerm
})

const mapDispatch = dispatch => ({
  handleChange: event => { dispatch(setSearchTerm(event.target.value)) },
  handleAddToListClick: (event) => {
    event.preventDefault();
    dispatch(fetchObjAndAdd(+event.target.id))
    }
  }
)

export default connect(mapState, mapDispatch)(AllProducts)
