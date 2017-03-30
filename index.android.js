/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView  from './components/MapView' ;
import AMapLocation  from './components/MapLocation' ;
//import AMapView  from './src/AMapView' ;
import TextView  from './src/text' ;

export default class amap extends Component {
  constructor(props) {
    super(props);
  this.state = { length:2,showText: 1};
    //var tt=this.refs.map.getDefaultProps();
    //console.log(tt);<MapView ref="map" style={{flex:1}}/>
      //this.refs.matest()p.setZoom(15);
      
  }
  onPress=()=>{
    //this.refs.map.setZoom(2);//34.341568, 108.940174
    //this.refs.map.setCenter({"latitude":34.341568,"longitude":108.940174});
    if(this.state.length==10){
      this.setState({ length: 5});
    }else{
      this.setState({ length: 10});
    }
    
    //this.refs.map.setCenterAndZoom({"latitude":34.341568,"longitude":108.940174},16);
  }
  componentDidMount() {
    this.listener = AMapLocation.addEventListener((data) => {
      this.setState({position:JSON.stringify(data)});
      console.log('data', JSON.stringify(data));
    });
    AMapLocation.startLocation({
      accuracy: 'HighAccuracy',
      killProcess: true,
      needDetail: true,
    });
  }
  componentWillUnmount() {
    AMapLocation.stopLocation();
    this.listener.remove();
  }
  renderMarker(){
      var list=[];
      for (var i = 0; i<this.state.length;i++) {
        list.push(
            <Text key={i}>
                fdsfasfasfsafa
            </Text>
        );
      }
       

      return list;
  }
  render() {
    var list=[];
    var pointList=[];
      for (var i = 0; i<this.state.length;i++) {
        var latitude=30.315888+i;
        var longitude=120.165817+i;
        list.push(
            <MapView.Marker 
              key={i}
              pinColor="green" 
              draggable 
              title='xxx' 
              description="这是一个好地方{i}" 
              coordinate={{latitude: latitude, longitude: longitude}} />
        );
        pointList.push({latitude: latitude, longitude: longitude})
      }
    

    return (<View style={{flex: 1}}>
      <Text>
          开始
      </Text>
      <View style={{height:300}}>
        <MapView 
            centerZoom={{latitude: 30.315888, longitude: 120.165817,zoom:8}}
            zoomLevel={4} 
            showsMyLocation={{myLocationType:"show",interval:2000,myLocationEnabled:true}}
            >
        
        </MapView>
      </View>
      <Text onPress={this.onPress}>
          fdsfasfasfsafa{this.state.showText}
      </Text>
      <Text>{this.state.position}</Text>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('amap', () => amap);
