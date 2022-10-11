import React,{useReducer} from 'react'
import CartContext from '../store/cart-context'
 
const defaultCartState ={
  items:[],
  totalAmount:0
};
const CartReducer = (state,action)=>{
  if(action.type ==='ADD'){
    const updatedItems = state.items.concat(action.item)
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.item.findIndex(item => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];
    if(existingCartItem){
      //let updatedItem;
      const updatedItem = {
        ...existingCartItem,
        amount:existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }else{
      updatedItems ={...action.item};
      updatedItems =state.items.concat(action.item);
    }
    return{
      items:updatedItems,
      totalAmount:updatedTotalAmount

    }

  }
  if(action.type ==='Remove'){
    const updatedTotalAmount = state. totalAmount -existingItem.price;
    const existingCartItemIndex = state.items.findIndex(
      (item)=>item.id ===action.item.id
    );
    const existingItem = state.items[existingCartItemIndex];
    let updatedItems;
    if(existingItem.amount  === 1){
      updatedItems = state.item.filter(item =>item.id !==action.id);
    }else{
      const updatedItem = {...existingItem, amount:existingItem.amount - 1}
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] =updatedItem;
    }
    return{
      items:updatedItems,
      amount:updatedTotalAmount

    }
  }
  return defaultCartState;

};

const CartProvider = (props) => {
  const[CartState,dispatchCartAction]=useReducer(CartReducer,defaultCartState)
    const addItemToCartHandler = (item)=>{
      dispatchCartAction({type:'ADD',item:item})
    };
    const removeItemFromCartHandler =(id)=>{
      dispatchCartAction({type:'REMOVE',id:id})
    };
    const cartContext = {
        items:CartState.items,
        totalAmount:CartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
  return (
    <CartContext.Provider value={cartContext}>
     {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
