import {createSlice} from "@reduxjs/toolkit";

 const requestsSlice = createSlice({
    name:'requests',
    initialState: null,
    reducers:{
        setRequests:(state,action)=>{
            return action.payload;
        },
        removeRequests:(state)=>{
            return null;
        }
    }
});
export default requestsSlice.reducer;
export const {setRequests, removeRequests} = requestsSlice.actions;