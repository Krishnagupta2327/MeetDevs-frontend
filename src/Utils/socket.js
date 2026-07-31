import io from 'socket.io-client';
import {BaseUrl} from "./const";
export const createSocketConnection = ()=>{
    return io(BaseUrl);
}