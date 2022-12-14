import React,{useState} from 'react'
import './App.css';
import Header from './components/Layout/Header.js'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App(props) {
  const[cartIsShown,setCartIsShown]=useState(false);
  const shownCartHandler =() =>{
    setCartIsShown(true);
  }
  const hideCartHandler =() =>{
    setCartIsShown(false);
  }
  return (
    <>
    <CartProvider>
    { cartIsShown  &&<Cart onClose={hideCartHandler} />}
    <Header onShowCart={shownCartHandler}/>
     <main>
    <Meals />
    </main>
    </CartProvider>
    </>
  );
}

export default App;
