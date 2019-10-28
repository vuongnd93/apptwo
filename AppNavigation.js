import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import { Provider, connect } from 'react-redux';
// import { createStore, combineReducers } from 'redux';
// import { reducer } from './action/actionTypes';
import Getapex from './screens/getapex';
// import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './screens/Login';
import  MapPUT from './screens/maplocation';
import Maplocation  from  './screens/Map';
import ListJob  from  './screens/ListJob';
import Oderdetail  from  './screens/oderdetail';
import ShowJob  from  './screens/ShowJob';

import Counter from './components/Counter'
import StaticCounter from './components/StaticCounter'


const MainNavigator = createStackNavigator({  
    // maplocation: {screen: Maplocation},
  // Count: {screen: Counter},
    // StaticCounter: {screen: StaticCounter},
    Home: {screen: LoginScreen},
    ShowJob: {screen: ShowJob},
    JobList: {screen :ListJob },
    oderdetail: {screen: Oderdetail },
    // JobList: {screen :ListJob },
    
    // maplocation: {screen: Maplocation},
    // Count: {screen: Counter},
    // StaticCounter: {screen: StaticCounter},
    
   
    // test: {screen: TestRedux},
    
    // LoginSuccess: {screen: Getapex},
    // JobList: {screen :ListJob },
    // oderdetail: {screen: Oderdetail },
    // maplocation: {screen: MapLocation},
    // LoginSuccess: {screen: Getapex},
    
    // maplocation: {screen: MapLocation},
  });
  

export default MainNavigator;  