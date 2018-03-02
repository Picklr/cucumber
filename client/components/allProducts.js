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
  },
};

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

      <div style={styles.root}>
    <TextField
       hintText="Product"
       floatingLabelText="Search Products"
       type='text'
       onChange={this.props.handleChange}

     />

      <GridList

        cellHeight={180}
        style={styles.gridList}
      >



      <Subheader>Products</Subheader>

        {allProducts.map(product =>{
            return (

<NavLink to ={`/products/${product.id}`} >
              <GridTile

              key={product.id}

              title={product.name}


              actionIcon={<IconButton

              onClick= {this.props.handleAddToListClick}

              >
              <i
              id={product.id}
              className="material-icons"
              >add_shopping_cart</i>
              {/* <StarBorder color="white" /> */}
              </IconButton>}
            >
              <img src={'./thecucu.jpg'} />
              </GridTile>
              </NavLink>
            )
          }
        )
      }
        </GridList>
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
