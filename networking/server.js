
import React, { Component } from 'react';
import { Alert, Button, Text,  TextInput, View,
   Platform,
   } from 'react-native';
import { AuthSession } from 'expo';
import axios from 'axios';
import datajson from '../datajson';

const getApex = 'http://118.70.197.124/ords/retail/delivery/login?';
async function getdatas(){
    try {
        let responce = await axios.get(getApex,
          {params:{P_UNAME:this.state.email,P_PWD:this.state.password}}         
        );
        let responcedata = responce.data.state;
        console.log(responce.data);
        console.log(responce.data.state);  
         if (responcedata === 'OK') {Alert.alert('login success: OK'),           
              this.props.navigation.navigate('JobList',{data:datajson,del_id:responce.data.del_id})      
          }
         else {Alert,alert('Login fail')}
         return responcedata;  
      } catch(error){
          console.log(`error is : ${error}`);      
      }
}

export {getdatas};