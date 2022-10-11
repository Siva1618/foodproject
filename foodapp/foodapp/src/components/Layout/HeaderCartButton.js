import React,{useContext,useEffect,useState} from 'react'
import CartIcon from '../Cart/CartIcon'
import Classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
  const [btnIsHighLightend,setBtnIsHighLightEnd]=useState(false);
  const cartCtx = useContext(CartContext)
  const numberOfCartItems =cartCtx.items.reduce((curNumber,item)=>{
    return curNumber + item.amount;
  }, 0);
  const btnClasses =`$(classes.button) $(btnHighLightEnd ? classes.bump :)`;
  useEffect(( )=>{
    if(cartCtx.items.length === 0){
      return;
    }
setBtnIsHighLightEnd(true);
const timer=setTimeout(() =>  {},300);
return () =>{
  clearTimeout(timer)
}
  },[])
  return (
    <>
    <button className={btnClasses} onClick={props.onClick}>
    <span className={Classes.icon}>
     <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={Classes.badge}>{numberOfCartItems}</span>
    </button>

    </>
  )
}

export default HeaderCartButton
