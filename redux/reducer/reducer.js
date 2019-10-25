
import { combineReducers } from 'redux';
import countReducer from './couterReducer';


const reducer = combineReducers({
    count: countReducer  
});

export default reducer;