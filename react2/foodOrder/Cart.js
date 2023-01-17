import Modal from '../UI/Modal';
import style from './Cart.module.css';

const Cart=(props)=>{
  const DummyCart=(
    <ul className={style['cart-item']}>
        {[{id: 'c1', name:'sushi', amount:'2', price:'20'}
        ].map((item) => <li>{item.name}</li>
        )}
    </ul>
    );

    return (
    <Modal onClose={props.onClose}>
        {DummyCart}
        <div className={style.total}>
            <span>Total Amount</span>
            <span>$ 36</span>
        </div>
        <div className={style.actions}>
            <button className={style['button--alt']} onClick={props.onClose}>Close</button>
            <button className={style.button}>Order</button>
        </div>
    </Modal>
  );
}

export default Cart;