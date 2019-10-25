
import React from 'react'

// imports the registry and the store
import { AppRegistry } from 'react-native'
import { createStore } from 'redux'
import {Provider} from 'react-redux'

// Import the reducer and create a store
import { reducer } from './action/actionTypes';
const store = createStore(reducer);

// Import the App container component
import App from './App'
import allReducers from './reducers/index';

// Pass the store into the app container
// const AppWithStore = () => <App store={store} />   //old
const App = () =>{
    <Provider  store={store}>
       <App/>
    </Provider>
} 


// Register the app container
AppRegistry.registerComponent('App', () => App);