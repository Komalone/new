import React, {useState} from 'react';
import { Route} from 'react-router-dom'
import './App.css';
import Store from './components/Pages/Store';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Cart from './components/Cart/Cart'
import Footer from './components/Layout/Footer';
import Hearder from './components/Layout/Header';
import StoreProvider from './store/ContextProvider'



let App = ()=> {
  const [showCart, setShowCart]=useState(false);

  const showCartHandler=()=>{
    setShowCart(true);
  }
  const hideCartHandler=()=>{
    setShowCart(false);
  }
  return (
    <StoreProvider>
  <Hearder onShowCart={showCartHandler}/>
  {showCart && <Cart onClose={hideCartHandler} />}
    <Route path='/Home'>
      <Home/>
    </Route>
    <Route path='/About'>
      <About/>
    </Route>
    <Route path='/Store'>
      <Store onShowCart={showCartHandler}/>
    </Route>
    <Footer/>
    </StoreProvider>
  );
}

export default App;
