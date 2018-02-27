import {connect} from 'react-redux'
import React from 'react'

const AllProducts = (props) => {
  
    return (
      <div>
      <h2>These are our products</h2>
      {props.products.map(product =>{
        return  <h4 key={product.id}>{product.name}<button onClick = {()=>{ /* DO SOMETHING */ }}>Add to Shopping List</button ></h4>
      })}
      </div>
    )
  }

  const mapState = state => ({
     products: state.products
  })

  
  export default connect(mapState, null)(AllProducts)