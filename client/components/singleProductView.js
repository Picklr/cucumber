import {connect} from 'react-redux'
import {Link, withRouter, Route} from 'react-router-dom'
import React, {Component} from 'react'
import { setSelectedProductView, boolChange } from '../store';
import { fetchObjAndAdd } from '../store/shoppingList';
import ReviewForm, { reviewForm } from './reviewForm'
import EditProduct from './Admin/admin-edit-product'
import EditUsers from './Admin/admin-edit-users'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { green300 } from 'material-ui/styles/colors';
// import {} from 'react-router-dom'

class SingleProduct extends Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.setSelectedProductView(this.props.match.params.id)

    }
    componentWillUnmount(){
        if(this.props.reviewForm){
        this.props.handleClick()}
    }





    render(){
        let sum = 0;
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
            gridTile: {
                borderStyle: 'solid',
                borderColor: green300,
                borderWidth: 2,
                borderRadius: 10



            }
          };
        const reviews = this.props.selectedProduct.reviews

        return (

    <div>
        {this.props.selectedProduct.name ?
            <div>
                <div className = 'marquee' >
                    <h3 className='marquee-child'> {this.props.selectedProduct.name} </h3>
                    <h4 className='marquee-child'> {'Rating ' + this.props.selectedProduct.stars} </h4>
                    <button className ='marquee-child' onClick={this.props.handleAddToListClick} id={this.props.selectedProduct.id} >Add to Cart</button>
                </div>
                <div className = 'text-and-image'>
                    <img className = "singlePageImage" src={this.props.selectedProduct.photo} />

                    <p className = "singlePageImage">
                    <h3> Product Description: </h3>
                    Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship.
                    </p>
                </div>
                {this.props.reviewForm === true
                    ? <ReviewForm />
                    : <button onClick = {this.props.handleClick} >Click me daddy</button>
                    }

                {reviews.length > 0 ?

                <div style={styles.root}>
                    <GridList
                      cellHeight={180}
                      style={styles.gridList}
                      cols={1}
                    >
                      <Subheader>Reviews</Subheader>
                      {reviews.map((review) => (
                        <GridTile
                          style={styles.gridTile}
                          key={review.id}
                          title='review'
                          subtitle={reviews.length ? <span>Rating: {review.rating} </span> : <span> No Rating </span> }
                        > {review.body}
                        </GridTile>
                      ))}
                    </GridList>
                  </div>

                      : <div />
                }
              </div>
            : <span> Loading </span>
            }

             {this.props.isAdmin && <div><EditProduct /></div>}

        </div>
    )}
}

const mapStateProps = (state) => ({ selectedProduct:     state.products.selectedProduct, reviewForm: state.reviewForm, isAdmin: state.user.isAdmin})

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

