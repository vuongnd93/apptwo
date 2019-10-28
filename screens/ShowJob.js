import * as React from 'react';
import { Text, View, StyleSheet, Image,
  Button,Alert,TouchableOpacity,ScrollView,
  Dimensions,StatusBar,TextInput,Modal,TouchableHighlight
,FlatList } from 'react-native';
 import { connect } from 'react-redux';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import ShowJobDetail from './ShowJobDetail';





 class ShowJob extends React.Component {
    constructor(props){
     super(props)
      this.state = {
     modalVisible: false,
  };

     
    }
    static navigationOptions = ({navigation})=>{
      return { 
        title : 'List công việc'    
      }    
     };
  
  render() {
  
    const {btnStatus, myData } = this.props;
    return (

      <View  style={styles.wrapper}> 
          <View style={styles.header}>                 
              <Text style={styles.text_header}>Xin chào Danny</Text>              
          </View >         
                {/* <ScrollView> 
                    {myData.map(e=>(
                    <ShowJobDetail key={e.Oder_id} job={e.job}/> 
                    ))}                  
                </ScrollView>   */}
             
               <TouchableOpacity style={styles.view_button}>  
                    <Button title="GetJOB ....." onPress={this.onChooseImagePress}/>
                </TouchableOpacity>  
       
            <View style={styles.activeStyle}>    
            <FlatList           
            data={myData}
            renderItem={({ item }) => <ShowJobDetail
             job={item.job}             
             onPress={() => this.props.navigation.navigate('JobList')}         
              />}
            keyExtractor={item => item.Oder_id}
      />
             </View> 
       </View>  
         

    )}
}

function mapStateToProps(state) {
    return { 
        myData: state.dataFake,
        btnStatus: state.filterStatus
    };
  }
export default connect(mapStateToProps)(ShowJob);


// const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    activeStyle: {
        marginHorizontal: 10,
    },
    header:{
       backgroundColor:'#27B397',
       padding:20,
       justifyContent: 'center',
        alignItems: 'center'
    },
    text_header:{
      alignItems: 'center',
      color:'#fff'
    },
    view_button:{
        marginTop: 15,
        backgroundColor :'#29007B',
        marginHorizontal: 10,
        width :130,
        height:50,
        borderRadius: 20,
        paddingVertical: 9,
    }


    




    // header: { flex: 1, backgroundColor: '#2ABB9C', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    // headerTitle: { fontFamily: 'Avenir', color: '#fff', fontSize: 20 },
    // backIconStyle: { width: 30, height: 30 },
    // body: { flex: 10, backgroundColor: '#F6F6F6' },
    // orderRow: {
    //     height: width / 3,
    //     backgroundColor: '#FFF',
    //     margin: 10,
    //     shadowOffset: { width: 2, height: 2 },
    //     shadowColor: '#DFDFDF',
    //     shadowOpacity: 0.2,
    //     padding: 10,
    //     borderRadius: 2,
    //     justifyContent: 'space-around'
    // }
});