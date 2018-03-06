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

                <div className = 'marquee' >
                    <h3 className='marquee-child'> {this.props.selectedProduct.name} </h3>
                    <h4 className='marquee-child'> {'Rating ' + this.props.selectedProduct.stars} </h4>
                    <button className ='marquee-child' onClick={this.props.handleAddToListClick} id={this.props.selectedProduct.id} >Add to Cart</button>
                </div>
                <div className = 'text-and-image'>
                    <img className = "singlePageImage" src={this.props.selectedProduct.photo} />
                    <p className = "singlePageImage"> Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. 
                    </p>
                </div>
                <div className = "orange-slice">
                <span className = "reviewer-name">Reviewer Name</span>
                <span className = "review-text">REVIEW TEXT: Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.
                </span>
                <span className = "review-score">5 CUCUS</span>
                </div>
                <div className = "orange-slice">Another review</div>
                <div className = "orange-slice">A third review</div>
            </div> :

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

