import { configureStore,combineReducers } from '@reduxjs/toolkit';
import productSlice from "./product/productSlice";

const reducer  = combineReducers({
    product:productSlice,
})

const store = configureStore({
    reducer,
    middleware:(getDefaultMiddleware) =>  getDefaultMiddleware()
})

export default store;