import React, { useContext } from 'react';
import CartContext from '../../store/store-context';
import Modal from '../UI/Modal';
import './Cart.css';
import CartItem from './CartItem';

const Cart=(props)=>{
    const cartCtx=useContext(CartContext);
    const totalAmount= `$ ${cartCtx.totalAmount.toFixed(2)}`;

    const cartItems= (
        cartCtx.items.map((item)=>(
            <CartItem
            id={item.id}
            name={item.name}
            imageURL={item.imageURL}
            price={item.price}/>
        ))
    );
    return (
        <Modal id="cart" className="container">
            <h2>CART</h2>
            <button className="cancel" onClick={props.onClose}>X</button>
            <div className="cart-row cart-header">
                <span className='cart-item cart-column'>ITEM</span>
                <span className='cart-price cart-column'>PRICE</span>
                <span className='cart-quantity cart-column'>QUANTITY</span>
            </div>
            {cartItems}
            <div className="cart-total">
                <span>
                    <span className='total-title'> <strong>Total</strong>
                        </span><span id='total-value'>{totalAmount}</span>
                </span>
            </div>
            <button className='purchase-btn' type='button'>PURCHASE</button>
        </Modal>
    );
}
export default Cart;