import EmployeeReducer from '../reducers/employeeReducer';
import {combineReducers} from 'redux';

export default function RootReducer(){
    return combineReducers(
        {EmployeeReducer}
    );
}