import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import React, {Component} from 'react'
import {setSearchTerm} from '../store/products'
import { fetchObjAndAdd } from '../store/shoppingList';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class AllProducts extends Component {

  constructor(props) {
    super(props)

  }

  render(){

    const allProducts = (this.props.term && this.props.products.length>0) ? this.props.products.filter(eachProduct=>eachProduct.name.toLowerCase().indexOf(this.props.term.toLowerCase())>(-1)) : this.props.products

    return (
      <div style={styles.root}>

      <GridList
        cellHeight={180}
        style={styles.gridList}
      ><Subheader>Products</Subheader>

        {allProducts.map(product =>{
            return (
              <GridTile
              key={product.id}
              title={product.name}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
              <img src={'./thecucu.jpg'} />
              </GridTile>
            )
          }
        )
      }
        </GridList>
      </div>
    )
}
}

{/* <TextField
      hintText="Dan Smells"
      floatingLabelText="Product Search"
      type='text'
      onChange={this.props.handleChange}
    /><br /> */}

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
