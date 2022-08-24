import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./reducer/ProductReducer";
import SearchReducer from "./reducer/SearchReducer";


export const store = configureStore({

    reducer: {
        product: ProductReducer,
        search: SearchReducer
    }
})