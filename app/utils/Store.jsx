'use client';
import { createContext, useContext, useReducer } from 'react';
export const Store = createContext();

const initailState = {
  cart: { cartItems: [] },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find((f) => f.id === newItem.id);
      const cartItems = existItem
        ? state.cart.cartItems.map((i) =>i.name === existItem.name ? newItem : i): [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'REMOVE_PRODUCT': {
      const newItem = action.payload;
      const cartItems = state.cart.cartItems.filter(f => f.id !== newItem.id)
      return{...state,cart:{...state.cart,cartItems}}
      }
    default:
      return state;
  }
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initailState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};

export default StoreProvider;
