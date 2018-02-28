import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import React, {Component} from 'react'
import { setSelectedProductView } from '../store/products';
import { fetchObjAndAdd } from '../store/shoppingList';


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
                <span>This is one cucu</span>
                <img src='/cucumber.jpg' />
                <h3> {this.props.selectedProduct.name} </h3>
                <h4> {'Rating ' + this.props.selectedProduct.stars} </h4>
                <button
                onClick={this.props.handleAddToListClick}
                id={this.props.selectedProduct.id}
                >Add to Cart</button>
            </div> :
            <span>Loading</span>
            }
        </div>
    )}
}

const mapStateProps = (state) => ({selectedProduct:     state.products.selectedProduct})

const mapDispatch = (dispatch) => ({
    setSelectedProductView: (aProduct) => {
        dispatch(setSelectedProductView(aProduct)) },
    handleAddToListClick: (event) => {
        event.preventDefault();
        dispatch(fetchObjAndAdd(+event.target.id))
    }
    })


export default connect(mapStateProps, mapDispatch)(SingleProduct)

