import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductReducer";


export const store = configureStore({

    reducer: {
        product: ProductReducer,
    }
})