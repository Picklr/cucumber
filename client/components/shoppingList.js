import React from 'react'
import {connect} from 'react-redux'

export const ShoppingList = (props) => (
    <div>
        <ul>
        {props.cartItems.map( item =>{
            return (<div key={item.id}>
                <li>
                {item.name}
                <span>{item.price}</span>
                </li><button>x</button>
                </div>
            )
        })}
        </ul>
        <button>Checkout</button>
    </div>
)

const mapState = (state) => ({
    cartItems: state.cartItems
})

//TODO Remove from cart and checkout

export default connect(mapState/*TODO add mapDispatch*/)(ShoppingList);

