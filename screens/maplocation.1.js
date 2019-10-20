import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Button } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView from 'react-native-maps';
import axios from 'axios';
const postlocation = 'http://118.70.197.124/ords/retail/delivery/putlocation';
const postnodejs = 'http://221.133.17.20:3030/api/dangnhap';

export default class Maplocation extends Component {
  static navigationOptions = ({navigation})=>{
    return {
      title : navigation.getParam('del_id')
     
    }
   
   };
  
  state = {
    mapRegion: { latitude: 21.072325, longitude: 105.786573, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
    locationResult: null,
    location: {coords: { latitude: 21.072325, longitude: 105.786573}},
  };

  componentDidMount() {
    this._getLocationAsync();
    // this._postnodejs();
    this._postlocation()
  //   axios.get('http://221.133.17.20:3030/api/view')
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  // });
  // var bodyFormData = new FormData();
  // bodyFormData.set('userName', 'Fred');
  // axios({
  //   method: 'post',
  //   url: 'http://221.133.17.20:3030/api/dangnhap',
  //   data: {
  //     'username':'vuong'
  //   },
  //   config: { headers: {'Content-Type': 'multipart/form-data' }}
  //   })
  //   .then(function (response) {
  //       //handle success
  //       console.log(response);
  //   })
  //   .catch(function (response) {
  //       //handle error
  //       console.log(response);
  //   });

}

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };
 
  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
       location,
     });
   }

   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location), location, });
   let loglocation = this.state.locationResult;
   let latitude = this.state.location.coords.latitude;
   let longitude = this.state.location.coords.longitude;
  //  console.log(loglocation);
   console.log(latitude);
   console.log(longitude);
 };

 _postlocation = async () => {
  try {
    let responce = await axios.put(postlocation,
      {params:{latitude:this.state.latitude,longitude:this.state.longitude,del_id:this.props.navigation.state.params.thamso}}   
    );
    console.log(responce.data);
  } catch(error){
      console.log(`error is : ${error}`);      
  }
}
// _postnodejs = async () => {
//   try {
//     let responce = await axios.put(postnodejs,
//       {params:{latitude:this.state.latitude,longitude:this.state.longitude}}    
//     );
//     console.log(responce.data);
//   } catch(error){
//       console.log(`error is : ${error}`);      
//   }
// }
 

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: 'stretch', height: 400 }}
          region={{ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
          onRegionChange={this._handleMapRegionChange}
        >
    <MapView.Marker
      coordinate={this.state.location.coords}
      title="My Marker"
      description="Some description"
    />
        </MapView>
            
        <Text>
          Location: {this.state.locationResult}       
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this._postnodejs}
       >
         <Text style={styles.buttonText}> gui location </Text>
       </TouchableOpacity>
      
      </View>
    );
  }
}

 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
