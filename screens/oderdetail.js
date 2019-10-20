import * as React from 'react';
import { Text, View, StyleSheet, Image,
  Button,Alert,TouchableOpacity,ScrollView,
  Dimensions,StatusBar,TextInput,AsyncStorage,
 } from 'react-native';

import AddModal from '../components/addmodal';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';





export default class Oderdetail extends React.Component {
    constructor(props){
     super(props)
     this.state ={
       jobstart: 'START',
       jobend : null,
     }
     this._onPressadd = this._onPressadd.bind(this);
     this._onClickget = this._onClickget.bind(this);
    }
    static navigationOptions = ({navigation})=>{
      return { 
        title : 'Chi tiết Đơn Hàng'    
      }    
     };

    
    componentWillMount() {
      let trangthaicurrent =this._onClickget();    
      if (trangthaicurrent !== null){
                this.setState({
              jobstart: null,
              jobend :'END',
          })           
        }
      }
           

      _onClickStart = async (trangthai)=>{
          try {
            await AsyncStorage.setItem('trangthai: key',trangthai);
            console.log("save ok");
          } catch (error) {
            console.log(error);
          }
    }
    _onClickget = async ()=>{
      try {
        let v = await AsyncStorage.getItem('trangthai: key');
        console.log(v);
        return v
      } catch (error) {
        console.log(error);
      }
}

     _onClickBegin = () => {
       let trangthai = 'START';
       this.setState({
        jobstart: null,
        jobend: 'END',
    })
      this._onClickStart(trangthai);
               
    }

    _onPressadd =()=>{
      this.refs.addModal.showAddModal();
    }
  
  render() {
  
    const {params}= this.props.navigation.state
    const dataget = params.detail;
    // console.log(dataget);
    return (
          <View style={styles.wrapper}>
          
            <View style={styles.content}>
              <View style={styles.contentdetail}>
                <Text style={styles.oder_infor }>Đơn Hàng:</Text>
                <Text style={styles.oder_infor}>{dataget.Order}</Text>
              </View>  
              <View style={styles.contentdetail}>
                <Text style={styles.oder_infor }>Tên Khách Hàng:</Text>
                <Text style={styles.oder_infor}>{dataget.namecustom}</Text>
              </View> 
              <View style={styles.contentdetail}>
                <Text style={styles.oder_infor }>Số điện thoại liên hệ:</Text>
                <Text style={styles.oder_infor}>{dataget.SĐT}</Text>
              </View> 
              <View style={styles.address}>
                <Text style={styles.oder_infor }>Địa chỉ giao Hàng:</Text>
                <Text style={styles.oder_infor}>{dataget.address}</Text>
              </View> 
              <View style={styles.contentdetail}>
                <Text style={styles.oder_infor}>Trạng thái thanh toán</Text>
                <Text style={styles.oder_infor}>{dataget.thanhtoan}</Text>
              </View> 
              <View style={styles.controlStyle}>
                    <TouchableOpacity style={styles.signInStyle}  onPress={this._onClick}>
                        <Text style={ styles.activeStyle }>{this.state.jobstart}</Text>
                        
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.signUpStyle} onPress={this._onClickget} >
                        <Text style={styles.activeStyle }>{this.state.jobend}</Text>
                    </TouchableOpacity>
          </View>  
                    <AddModal ref = {'addModal'}>
                    </AddModal>
            </View>
             <View style={styles.sukien}>
             
               <TextInput
                    style={styles.inputStyle}
                    placeholder="Nhập sự cố trên đường đi"
                    value={styles.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                 <TouchableOpacity style={styles.bigButton} >
                        <Text style={styles.buttonText}>Take_photo</Text>
                    </TouchableOpacity>

            </View>

          </View>
                                                                             
    )}
}




// const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: { flex: 4,
    backgroundColor: '#DD3C6E',
    },
    content : {flex:3,
    backgroundColor : '#EF6193',
    marginHorizontal: 20,
    marginTop :10,
    paddingHorizontal :10,
    borderRadius :10
    },
    sukien : {flex:1,
    backgroundColor : '#4095D1',
    },
    contentdetail:{
       flexDirection: 'row', justifyContent: 'space-between',
       marginBottom:5,
       borderBottomColor : '#FFF',
       borderBottomWidth : 1,
       paddingVertical: 10
       
       
    },
    address:{
       flexDirection: 'column',
       marginBottom :5,
    },
    oder_infor:{
      color:'#fff',

    },
    controlStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginTop :50,
      
    },
    signInStyle: {
        backgroundColor: '#D8CB00',
        alignItems: 'center',
        paddingVertical: 15,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 10
    },
    signUpStyle: {
        backgroundColor: '#D8CB00',
        paddingVertical: 15,
        alignItems: 'center',
        flex: 1,
        marginLeft: 1,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20
    },
    inputStyle:{
      backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 5,
        // flex: 1,
        borderBottomRightRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginHorizontal: 10,
        marginTop:10,
        paddingHorizontal:30,
        paddingTop:20,
        paddingBottom:20

    },
     bigButton: {
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal :100,
        backgroundColor:'#33BB79',
        marginTop:5,


    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    },

    // wrapper_oder :{
    //   backgroundColor: '#DD3C6E',
    //   marginHorizontal :10,
    //   marginTop : 15,
    //   paddingHorizontal :10,
    //   borderRadius :2
    // },
   
   






});