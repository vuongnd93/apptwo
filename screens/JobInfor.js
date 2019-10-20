import * as React from 'react';
import { Text, View, StyleSheet, Image,Button,Alert } from 'react-native';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';




export default class Server extends React.Component {
    constructor(props){
     super(props)
     state = {
        image: null,
      };    
    }
 
    static navigationOption ={
      hearder : null
  }

  
  render() {
    return (

      <View> 
        <Button title="Choose image ....." onPress={this.onChooseImagePress}/>
       </View> 

    )}
}
