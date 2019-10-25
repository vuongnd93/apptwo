

import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';
import { Provider, connect } from 'react-redux';
// import { createAppContainer, createStackNavigator } from 'react-navigation';
// import { createStore, combineReducers } from 'redux';

 class StaticCounter extends React.Component {
    static navigationOptions = {
      title: `Same number, wow!`,
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>{this.props.count}</Text>
        </View>
      );
    }
  }
  function mapStateToProps(state) {
    return { 
      count: state.count
    };
}
  export default StaticCounterContainer = connect( mapStateToProps)(
    StaticCounter
  );

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
  