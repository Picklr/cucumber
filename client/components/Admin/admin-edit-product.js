import React, {Component} from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import {editProduct} from '../../store'

const style = {
  marginLeft: 20
};

class EditProduct extends Component {

      constructor(props) {
        super(props)
      }

      render(){
        console.log('PROPS BITHC', this.props)
    return (

    <div>
      <h2> Edit {this.props.selectedProduct.name} </h2>
      <form
        onSubmit={(event)=> {this.props.handleProductUpdateSubmit(event, this.props.selectedProduct.name, this.props.selectedProduct.price, this.props.selectedProduct.category, this.props.selectedProduct.brand, this.props.selectedProduct.productId)
          }}
        id = {this.props.selectedProduct.id}
      >
      <h3>Current Product Name: {this.props.selectedProduct.name}</h3>
      <TextField
            hintText="New Product Name"
            style={style}
            name = "newName"
            underlineShow={false} />
            <Divider />
      <h3>Current Price: {this.props.selectedProduct.price}</h3>
      <TextField
            hintText="New Price"
            style={style}
            name = "newPrice"
            underlineShow={false} />
            <Divider />
      <h3>Current Category: {this.props.selectedProduct.category}</h3>
      <TextField
            hintText="New Category"
            style={style}
            name = "newCategory"
            underlineShow={false} />
            <Divider />
      <h3>Current Brand: {this.props.selectedProduct.brand}</h3>
      <TextField
            hintText="New Brand"
            style={style}
            name = "newBrand"
            underlineShow={false} />
            <Divider />
      <RaisedButton
        label= "Update Product"
        type = "submit"
        />
      <RaisedButton
        label = "Back to All Products"
        href = "/"
        />
      </form>

      </div>
    )


      }
    }



const mapProps = state => {
  return {
  selectedProduct: state.products.selectedProduct
  }
}

const mapDispatch = dispatch => {
  return {
    handleProductUpdateSubmit: (event, currName, currPrice, currCategory, currBrand) => {
      event.preventDefault();

      const name = event.target.newName.value || currName;
      const price = event.target.newPrice.value || currPrice;
      const category = event.target.newCategory.value || currCategory;
      const brand = event.target.newBrand.value || currBrand;
      const productId = +event.target.id;
      console.log('Changes to pass', name, price, category, brand, productId)
      event.target.newName.value = ''
      event.target.newPrice.value = ''
      event.target.newCategory.value = ''
      event.target.newBrand.value = ''
      dispatch(editProduct(name, price, category, brand, productId))


    }
 }
}

export default connect(mapProps, mapDispatch)(EditProduct)
