import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { addReview, boolChange } from '../store'

export class reviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = { body: '', rating: '' }
        this.onBodyType = this.onBodyType.bind(this)
        this.onRatingType = this.onRatingType.bind(this)
    }

    onBodyType(event) {
        this.setState({ body: event.target.value })
    }
    onRatingType(event) {
        this.setState({ rating: +event.target.value })
    }


    render() {
        return (
            <div>
                <form
                    onSubmit={this.props.handleReviewSubmit}
                    id={this.props.selectedProduct.id}
                >
                    <TextField
                        required
                        name="body"
                        onChange={this.onBodyType}
                        hintText="Enter Review Here"
                        multiLine={true}
                        rows={2}
                        rowsMax={4}
                    /><br />
                    <TextField
                        required
                        name="rating"
                        onChange={this.onRatingType}
                        hintText="Enter a Rating Between 1-5"
                    /><br />
                    <div>
                        <FlatButton label="Submit Review" disabled={!this.state.body.length || !(this.state.rating >= 1 && this.state.rating <= 5)} type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        handleReviewSubmit: (evt) => {
            evt.preventDefault()
            const body = {
                body: evt.target.body.value,
                rating: evt.target.rating.value,
                productId: +evt.target.id
            }
            evt.target.rating.value = ''
            evt.target.body.value = ''
            dispatch(addReview(body))
            dispatch(boolChange())
        }

    }
}
const mapState = (state) => ({ products: state.products.allProducts, selectedProduct: state.products.selectedProduct })

export default connect(mapState, mapDispatch)(reviewForm);
