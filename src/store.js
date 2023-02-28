import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cart';
import modalReducer from './features/modal/modal';

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        modal: modalReducer,
    }
});