import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,FlatList,AsyncStorage } from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import Flatlists  from './listcontent';
import Filter from './Filter';

 class ListJob extends React.Component {
    constructor(props){
     super(props);
     const status = this.props.navigation.state.params.data.status;
     this.state= {
       status : status,
       datas : [],
     } 
  }
  
  static navigationOptions = ({navigation})=>{
    return { 
      title : 'Công việc'    
    }    
   };
   
   async componentWillMount() {
     
    let status = await AsyncStorage.getItem('status');
    console.log('Constructor, status = ',status);

    if (status === 'PROCESSING') {
      // PROCESSING -> btnStartEnd lable shows END
      this.setState({
        btnStartEndName: 'END',
      });
    } else {
      // Stop -> btnStartEnd lable shows START
      this.setState({
        btnStartEndName: 'START',
      });
    }
 }
   
  //  componentDidMount() {
  //   this.refreshData();
  // }
  // refreshData = ()=>{
  //   getdata().then((datas)=>{
  //     this.setState({data:datas});
  //   }).catch((error)=>{
  //     this.setState({data : []});
  //   })
  // }
  getWordList() {
    const {btnStatus, myData } = this.props;
    if (btnStatus === 'PROCESSING') return myData.filter(e => e.status === 'PROCESSING');
    if (btnStatus === 'COMPLETED') return myData.filter(e => e.status === 'COMPLETED');
    return myData;
}

  render() {
    // const {params}= this.props.navigation.state;
    // const key = this.props.navigation.state.key;
    // const dataget = params.data;
    // const thamso = params.del_id;
    // console.log('key get from home: ',key);
    return (
      <View style={styles.container}>
         <ScrollView > 
           <FlatList
            
            data={this.getWordList()}
            renderItem={({ item }) => <Flatlists
             id={item.Oder_id}
             time={item.Odertime}
             status={item.status}
             total={item.oder_detail.SĐT} 
             onPress={() => this.props.navigation.navigate('oderdetail', 
             {detail:item.oder_detail})}
              />}
            keyExtractor={item => item.Oder_id}
      />
         </ScrollView>
         <Filter/>
      
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { 
      myData: state.dataFake,
      btnStatus: state.filterStatus
  };
}
export default connect(mapStateToProps)(ListJob);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
});
