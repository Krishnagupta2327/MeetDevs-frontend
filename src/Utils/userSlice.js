import { createSlice } from "@reduxjs/toolkit";


 const userSlice = createSlice({
    name: 'user',
    // initialState:{
    //     firstName:"defualt",
    //     lastName:"user",
    //     age:0,
    // },
    initialState:null,
    reducers: {
        setUser: (state,action)=>{
            console.log('hiiiik');
            
            return action.payload;
        },
        removeUser: (state)=> {
            return null;
        }
    }
}
);
// console.log(setUser);
export default userSlice.reducer;
export const {setUser, removeUser} = userSlice.actions;
