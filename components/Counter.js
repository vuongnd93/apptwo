
import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';
import { Provider, connect } from 'react-redux';
// import { createAppContainer, createStackNavigator } from 'react-navigation';
// import { createStore, combineReducers } from 'redux';
import { INCREMENT } from '../redux/actionCreators';
import { DECREMENT } from '../redux/actionCreators';


 class Counter extends React.Component {
    static navigationOptions = {
      title: 'Counter!',
    };
    // state = {
    //   start: 'START',
     

    // };
  
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>
         
          </Text>
          <Button
            title= {this.props.count ? 'START' : 'END'}
            onPress={() => this.props.INCREMENT()}
          />
          <Button
            title="Decrement"
            onPress={() => this.props.DECREMENT()}
          />
  
          <Button
            title="Go to static count screen"
            onPress={() => this.props.navigation.navigate('StaticCounter')}
          />
        </View>
      );
    }
  }
  function mapStateToProps(state) {
    return { 
      count: state.count
    };
}
export default  CounterContainer = connect(mapStateToProps,{INCREMENT,DECREMENT})(Counter);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  