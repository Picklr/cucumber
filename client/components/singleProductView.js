import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import React, {Component} from 'react'
import { setSelectedProductView } from '../store/products';
import { fetchObjAndAdd } from '../store/shoppingList';
import ReviewForm, { reviewForm } from './reviewForm'

class SingleProduct extends Component{
    constructor(props){
        super(props)
        this.state = {
            reviewButtonClicked: false
        }

    }

    componentDidMount(){
        this.props.setSelectedProductView(this.props.match.params.id)
    }


    render(){
        console.log(this.state.reviewButtonClicked,'!!!!!!!')
        return (
        <div>
            <h1> Beth is neat </h1>

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
                {this.state.reviewButtonClicked === true
                    ? <reviewForm/>
                    : <button>Click me please</button>
                    }

                <div>
                Reviews
                <ul>
                    {this.props.selectedProduct.reviews.map(review => {
                        return (<li key={review.id}> {review.body} </li>)
                    })}
                </ul>
                </div>
            </div> :
            <span>Loading</span>
            }

        </div>
    )}
}

const mapStateProps = (state) => ({ selectedProduct:     state.products.selectedProduct})

const mapDispatch = (dispatch) => ({
    setSelectedProductView: (aProduct) => {
        dispatch(setSelectedProductView(aProduct)) },
    handleAddToListClick: (event) => {
        event.preventDefault();
        dispatch(fetchObjAndAdd(+event.target.id))
    }
    })


export default connect(mapStateProps, mapDispatch)(SingleProduct)

