import {configureStore} from '@reduxjs/toolkit';
import  userSlice  from './userSlice';
// import { connect } from 'http2';
import connectionSlice  from './connectionSlice';
import friendSlice from './FreindSlice';

export const store = configureStore({
    reducer:{
        user: userSlice,
        connections: connectionSlice,
        friends: friendSlice
    }
}
);