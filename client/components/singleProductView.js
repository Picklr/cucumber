import {connect} from 'react-redux'
import {Link, withRouter, Route} from 'react-router-dom'
import React, {Component} from 'react'
import { setSelectedProductView } from '../store/products';
import { fetchObjAndAdd } from '../store/shoppingList';
import EditProduct from './Admin/admin-edit-product'
import EditUsers from './Admin/admin-edit-users'
// import {} from 'react-router-dom'

class SingleProduct extends Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.setSelectedProductView(this.props.match.params.id)
    }


    render(){
        return (
        <div>
            {
            this.props.selectedProduct.name ?
            <div>
                <h3> {this.props.selectedProduct.name} </h3>
                <img
                className = "singlePageImage"
                src="/cucumber.jpg" />

                <h4> {'Rating ' + this.props.selectedProduct.stars} </h4>
                <button
                onClick={this.props.handleAddToListClick}
                id={this.props.selectedProduct.id}
                >Add to Cart</button>


            </div>

            :
            <span>Loading</span>
            }


             {/* <Route path='/editUsers' component={EditUsers} />
             <Link to='/editUsers'>
            <button>
                EDIT HERE
                 </button>
                 </Link> */}

             {this.props.isAdmin && <div><EditProduct /></div>}

        </div>
    )}
}

const mapStateProps = (state) => ({
    selectedProduct: state.products.selectedProduct,
    isAdmin: state.user.isAdmin
})

const mapDispatch = (dispatch) => ({
    setSelectedProductView: (aProduct) => {
        dispatch(setSelectedProductView(aProduct)) },
    handleAddToListClick: (event) => {
        event.preventDefault();
        dispatch(fetchObjAndAdd(+event.target.id))
    }
    })


export default connect(mapStateProps, mapDispatch)(SingleProduct)

