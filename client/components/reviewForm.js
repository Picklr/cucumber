import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {addReview} from '../store'




export const reviewForm = (props) => {


    return (

        <div>
            <form
                onSubmit={props.handleReviewSubmit}
                id = {props.selectedProduct.id}
            >
                <TextField
                    name = "body"
                    hintText="Enter Review Here"
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                /><br />
                <TextField
                name = "rating"
                hintText="Enter a Rating Between 1-5"
              /><br />
              <div>
                <FlatButton label="Submit Review" type ="submit"  />
              </div>
            </form>
        </div>
    )
}

const mapDispatch = (dispatch) => {
    return {
      handleReviewSubmit: (evt) => {
        evt.preventDefault()
        const body = {body: evt.target.body.value,
            rating: evt.target.rating.value,
            productId: +evt.target.id

        }
        evt.target.rating.value = ''
        evt.target.body.value = ''
        dispatch(addReview(body))
      },
    }
  }
  const mapState = (state) => ({products: state.products.allProducts ,selectedProduct: state.products.selectedProduct})



export default connect(mapState, mapDispatch)(reviewForm);
