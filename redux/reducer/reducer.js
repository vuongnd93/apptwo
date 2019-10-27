
import { combineReducers } from 'redux';
import countReducer from './couterReducer';
import filterStatusReducer from './filterStatusReducer';
import dataJakeReducer from './dataFakeReducer';
import startEndbtn from './aStartEnd';



const reducer = combineReducers({
    count: countReducer, 
    filterStatus : filterStatusReducer,
    dataFake : dataJakeReducer,
    startEndJob : startEndbtn
});

export default reducer;