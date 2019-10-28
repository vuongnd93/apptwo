import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,FlatList,AsyncStorage } from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux';


 class Active extends React.Component {
    constructor(props){
     super(props);
     this.state= {
       datas : [],
     } 
  }
  
  static navigationOptions = ({navigation})=>{
    return { 
      title : 'Sự Kiện'    
    }    
   };
   
   

  render() {
  
    return (
      <View style={styles.container}>
          <Text style={styles.titleText}>Chọn sự kiện</Text>
    
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
export default connect(mapStateToProps)(Active);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  
});
