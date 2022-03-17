import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";

export default configureStore({
    reducer:{
        cart: cartReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});