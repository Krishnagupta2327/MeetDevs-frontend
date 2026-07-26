import { createSlice
 } from "@reduxjs/toolkit";


 const connectionsSlice = createSlice({
    name: 'connections',
    initialState:null,
    reducers: {
        setConnections: (state,action)=>{
           
            
            return action.payload;
        },
        removeConnections: (state)=> {
            return null;
        }
    }

 });
 export default connectionsSlice.reducer;
 export const {setConnections, removeConnections} = connectionsSlice.actions;