import { createSlice
 } from "@reduxjs/toolkit";


 const friendSlice = createSlice({
    name: 'friend',
    initialState:null,
    reducers: {
        setFriend: (state,action)=>{
           
            
            return action.payload;
        },
        removeFriend: (state)=> {
            return null;
        }
    }

 });
 export default friendSlice.reducer;
 export const {setFriend, removeFriend} = friendSlice.actions;