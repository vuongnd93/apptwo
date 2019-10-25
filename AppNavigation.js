import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import { Provider, connect } from 'react-redux';
// import { createStore, combineReducers } from 'redux';
// import { reducer } from './action/actionTypes';
import Getapex from './screens/getapex';
// import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './screens/Login';
import MapLocation from './screens/maplocation';
import Example  from  './screens/homemapview';
import ListJob  from  './screens/ListJob';
import Oderdetail  from  './screens/oderdetail';


import Counter from './components/Counter'
import StaticCounter from './components/StaticCounter'


const MainNavigator = createStackNavigator({  
    // mapview: {screen: Example},
    Home: {screen: LoginScreen},
    JobList: {screen :ListJob },
    oderdetail: {screen: Oderdetail },
    Count: {screen: Counter},
    StaticCounter: {screen: StaticCounter},
    
   
    // test: {screen: TestRedux},
    
    // LoginSuccess: {screen: Getapex},
    // JobList: {screen :ListJob },
    // oderdetail: {screen: Oderdetail },
    // maplocation: {screen: MapLocation},
    // LoginSuccess: {screen: Getapex},
    
    // maplocation: {screen: MapLocation},
  });
  

export default MainNavigator;  