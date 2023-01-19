import { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context";
import style from "./HeadCart.module.css";
import CartIcon from "../Cart/CartIcon";

const HeadCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);


  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${style.button} ${btnIsHighlighted ? style.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  // let quantity = 0;
  // cardCtx.items.forEach((item) => {
  //   quantity= quantity + Number(item.quantity);
  // });  // 0 as starting number as 2nd argument
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeadCartButton;
