import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState:{
        products: null
    },
    reducers:{
        setProduct:(state, action) =>{
            state.products = action.payload
        }
    }
})

export const {setProduct} = productSlice.actions
export default productSlice.reducer