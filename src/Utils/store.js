import {configureStore} from '@reduxjs/toolkit';
import  userSlice  from './userSlice';
import themeReducer from "./themeSlice";

// import { connect } from 'http2';
import requestsSlice  from './requestsSlice';
import connectionsSlice from './connectionsSlice';

export const store = configureStore({
    reducer:{
        user: userSlice,
        requests: requestsSlice,
        connections: connectionsSlice,
        theme: themeReducer

    }
}
);