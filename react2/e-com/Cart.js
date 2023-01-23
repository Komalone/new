import React, { useState } from 'react';
import './Cart.module.css';

const Cart=()=>{
 const[show, setShow]= useState(false);

 const showCart=()=>{
    setShow(true);
 }
    return (
        <section id="cart" className="container" onClick={showCart}>
            {show && <h2>CART</h2>}
            <button className="cancel">X</button>
            <div className="cart-row cart-header">
                <span className='cart-item cart-column'>ITEM</span>
                <span className='cart-price cart-column'>PRICE</span>
                <span className='cart-quantity cart-column'>QUANTITY</span>
            </div>
            <div className='cart-items'>
                 <div className="cart-row">
                    <span className='cart-item cart-column'>
                        <img className='cart-img' src="img/Shirt.png" alt=""/>
                        <span>T-Shirt</span>
                    </span>
                    <span className='cart-price cart-column'>$19.99</span>
                    <span className='cart-quantity cart-column'>
                        <input type="text"/>
                        <button>REMOVE</button>
                    </span>
                </div>
                <div className="cart-row">
                    <span className='cart-item cart-column'>
                        <img className='cart-img' src="/img/Album 3.png" alt=""/>
                        <span>Album 3</span>
                    </span>
                    <span className='cart-price cart-column'>$9.99</span>
                    <span className='cart-quantity cart-column'>
                        <input type="text"/>
                        <button>REMOVE</button>
                    </span>
                </div>
            </div>
            <div className="cart-total">
                <span>
                    <span className='total-title'> <strong>Total</strong>
                        </span>
                    $<span id='total-value'>0</span>
                </span>
            </div>
            <button className='purchase-btn' type='button'>PURCHASE</button>
        </section>
    );
}
export default Cart;