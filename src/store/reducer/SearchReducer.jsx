import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState:{
        search: null
    },
    reducers:{
        setSearchItems:(state, action) =>{
            state.search = action.payload
        }
    }
})

export const {setSearchItems} = searchSlice.actions
export default searchSlice.reducer