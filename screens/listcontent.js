import * as React from 'react';
import { Text, View, StyleSheet, Image,
  Button,Alert,TouchableOpacity,ScrollView,
  Dimensions,StatusBar,TextInput
 } from 'react-native';
 import backSpecial from '../assets/backs.png';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';




export default class Flatlists extends React.Component {
    constructor(props){
     super(props);
     
    }
    static navigationOptions = ({navigation})=>{
      return { 
        title : 'List công việc'    
      }    
     };
 
  
  render() {
  
   
    return (
          
         <TouchableOpacity onPress={this.props.onPress}>     
           
          <View style={styles.wrapper_oder} >
              <View style={styles.wrapper_row}>
                    <View style={styles.view_oder}>
                      <Text style={styles.oder_id }>Đơn Hàng</Text>
                      <Text style={styles.oder_content}>{this.props.id}</Text>
                    </View>  
                    <View style={styles.view_oder}>
                      <Text style={styles.oder_id }>Thời gian</Text>
                      <Text style={styles.oder_content}>{this.props.time}</Text>
                    </View>  
                    <View style={styles.view_oder}>
                      <Text style={styles.oder_id }>Trạng Thái</Text>
                      <Text style={{color:'yellow'}}>{this.props.status}</Text>
                    </View> 
              </View> 
              <TouchableOpacity onPress={this.props.onPress} >
                            <Image source={backSpecial} style={{ width: 20, height: 20, marginVertical:20 }}/>
              </TouchableOpacity>
           
          </View>

         </TouchableOpacity>                                                                                
    )}
}




const styles = StyleSheet.create({
    // wrapper: { flex: 1, backgroundColor: '#fff' },
    wrapper_oder :{
      flexDirection: 'row',
      backgroundColor: '#DD3C6E',
      marginHorizontal :10,
      marginTop : 10,
      paddingHorizontal :10,
      borderRadius :2,
      padding: 10,
    },
    wrapper_row:{
      flex:80,
    },
    view_oder : { 
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 3,
     },
    oder_id : { color: '#fff', fontWeight: 'bold' },
    oder_content: { color: '#fff' },

});