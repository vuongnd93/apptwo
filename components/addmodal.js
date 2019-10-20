import * as React from 'react';
import { Text, View, StyleSheet, Image,
  Button,Alert,TouchableOpacity,ScrollView,
  Dimensions,StatusBar,TextInput,Platform,screen
 } from 'react-native';
 import Modal from 'react-native-modal';
//  import Button from 'react-native-button'; 
 export default class AddModal extends React.Component {
    constructor(props){
     super(props);
     this.state= {
     
     } 
  }

  showAddModal = ()=>{
   this.refs.myModal.open();
  }
  
  render() {
    return (

      <Modal
       ref = {'myModal'}
       style={styles.modal}
        position= 'center'
        backdrop={true}
        onClose={()=>{
            alert("modal close");
        }}
      >
            
                <Text>add event</Text>
           
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    borderRadius: Platform.OS === 'ios'? 30 : 0,
    shadowRadius: 10,
    // width : screen.width - 80,
    height : 280,
  },
  
});
