import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import React, {Component} from 'react'
import {setSearchTerm} from '../store/products'
import { fetchObjAndAdd } from '../store/shoppingList';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    borderColor: orange500,
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  }
};

class AllProducts extends Component {

  constructor(props) {
    super(props)

  }

  render(){

    const allProducts = (this.props.term && this.props.products.length > 0) ? this.props.products.filter(eachProduct=>eachProduct.name.toLowerCase().indexOf(this.props.term.toLowerCase()) > (-1)) : this.props.products

    return (

      <div >
    <TextField
       hintText="Product"
       floatingLabelText="Search Products"
       type="text"
       onChange={this.props.handleChange}

     />
      <div style={styles.root}>
          <GridList
          // className = "testing-div"
            cols={3}
            cellHeight={180}
            style={styles.gridList}
          >


      <Subheader>Products</Subheader>

        {allProducts.map(product =>{
            return (

        <NavLink
          to ={`/products/${product.id}`}
          key={product.id} >
              <GridTile
              id={product.id}
              key={product.id}
              title={product.name}
              actionIcon={<IconButton
                id={product.id}
              onClick= {this.props.handleAddToListClick}
              >
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
        )
      }
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
     handleChange: event => {dispatch(setSearchTerm(event.target.value))},
     handleAddToListClick: (event) => {
      event.preventDefault();
      dispatch(fetchObjAndAdd(+event.target.id))

   }
  }
  )


  export default connect(mapState, mapDispatch)(AllProducts)
