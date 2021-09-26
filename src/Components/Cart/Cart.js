import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const person of cart){
        total = total + person.price;
    }
    
    return(
        <div className="Cart-section">
            <h4>People Selected: {props.cart.length}</h4>
            <h4>Total: $ {total}</h4>
            <div>
                {cart.map(cart => 
                    <div className="cart-details">
                        <img height="50px" width="50px" src={cart.img} alt="" />
                        <h5>{cart.name}</h5>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Cart;