
import React from 'react';
import axios from 'axios';
import {
  ActivityIndicator,
  Button,
  Clipboard,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import  MainNavigator from './AppNavigation';
// import { MapView } from "expo";
import {MapView} from 'react-native-maps';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import store from './redux/store';

// import { reducer } from './action/actionTypes';
// import { Constants,  } from 'expo';
// import * as Permissions from 'expo-permissions';
// import * as ImagePicker from 'expo-image-picker';
// import Server from './components/server';
// import Upimage from './components/uploadimage';
// import Getapex from './components/getapex';
// import CategoryItem from './components/category';
const AppContainer = createAppContainer(MainNavigator);

// import LoginScreen from './components/Login';
// let store = createStore(combineReducers({ count: reducer }));

export default class App extends React.Component{
render(){
  return (
  <Provider store={store}>
     <AppContainer/>
  </Provider>
   
  );
}

}






// css for app
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
