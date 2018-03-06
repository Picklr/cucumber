import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import React, {Component} from 'react'
import { setSelectedProductView, boolChange } from '../store';
import { fetchObjAndAdd } from '../store/shoppingList';
import ReviewForm, { reviewForm } from './reviewForm'

class SingleProduct extends Component{
    constructor(props){
        super(props)
        // this.state = {
        //     reviewButtonClicked: false
        // }
        // this.onReviewClick = this.onReviewClick.bind(this)

    }

    componentDidMount(){
        this.props.setSelectedProductView(this.props.match.params.id)

    }


    // onReviewClick(){
    //     this.setState({reviewButtonClicked:true})

    // }

    render(){
        console.log(this.props)
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
                {this.props.reviewForm === true
                    ? <ReviewForm/>
                    : <button onClick = {this.props.handleClick} >Click me daddy</button>
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

const mapStateProps = (state) => ({ selectedProduct:     state.products.selectedProduct, reviewForm: state.reviewForm})

const mapDispatch = (dispatch) => ({
    setSelectedProductView: (aProduct) => {
        dispatch(setSelectedProductView(aProduct)) },
    handleAddToListClick: (event) => {
        event.preventDefault();
        dispatch(fetchObjAndAdd(+event.target.id))
    },
    handleClick: () => {

       dispatch(boolChange())
    }
    })


export default connect(mapStateProps, mapDispatch)(SingleProduct)

