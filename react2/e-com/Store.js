import React, { useContext } from 'react';
import StoreItem from './StoreItem';
import "./Store.css";
import CartContext from '../../store/store-context';


const musicList=[
    {
        id: 'ablum1',
        name: 'Album 1',
        imageURL: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        price: 12.99
    },
    {
        id: 'ablum2',
        name: 'Album 2',
        imageURL: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        price: 14.99
    },
    {
        id: 'ablum3',
        name: 'Album 3',
        imageURL: "https://cdn.pixabay.com/photo/2018/04/18/14/26/background-image-3330583__480.jpg",
        price: 9.99
    },
    {
        id: 'ablum4',
        name: 'Album 4',
        imageURL: "https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 18.99
    }
];

const merchList=[
    {
        id: 't-shirt',
        name: 'T-Shirt',
        imageURL: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
        price: 15.99
    },
    {
        id: 'coffee',
        name: 'Coffee Cup',
        imageURL: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
        price: 8.99
    },
]

const Store = (props) => {
  const cartCtx=useContext(CartContext);
  const addToCartHandler=(amount)=>{
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    });
  }
  const music= musicList.map((list)=>(
    <StoreItem 
    id={list.id} 
    name={list.name} 
    imageURL={list.imageURL}
    price={list.price}
    addToCart={addToCartHandler} />
  ));
  const merch= merchList.map((list)=>(
    <StoreItem 
    id={list.id} 
    name={list.name} 
    imageURL={list.imageURL}
    price={list.price}
    addToCart={addToCartHandler} />
  ));

  return (    
  <>
    <section id="music" className="container">
    <h2>MUSIC</h2>
      <div id ="music-content">
        {music}
      </div>
    </section>
    <section id="merch" className="container">
    <h2>MERCH</h2>
      <div id="merch-content">
        {merch}
      </div>
    </section>
    <button onClick={props.onShowCart} className="cart-btn-bottom"> See the cart</button>
  </>
  );
};
export default Store;
