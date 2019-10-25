
import { combineReducers } from 'redux';
import countReducer from './couterReducer';
import filterStatusReducer from './filterStatusReducer';
import dataJakeReducer from './dataFakeReducer';



const reducer = combineReducers({
    count: countReducer, 
    filterStatus : filterStatusReducer,
    dataFake : dataJakeReducer
});

export default reducer;