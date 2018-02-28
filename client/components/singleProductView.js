import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import React, {Component} from 'react'
import { selectedProduct } from '../store';

class SingleProduct extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
        <div>
            <span>This is one cucu</span>
        </div>
    )}
}

const mapStateProps = (state) => ({selectedProduct: state.selectedProduct})


export default connect(mapStateProps)(SingleProduct)