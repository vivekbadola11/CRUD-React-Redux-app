import {createStore} from 'redux';
import RootReducer from "../reducers/rootReducer";

export default function ConfigureStore(){
    return createStore(RootReducer);
}
