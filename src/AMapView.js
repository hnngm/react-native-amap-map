import React,{ PropTypes,Component } from 'react';
import { requireNativeComponent, View,NativeModules,
    findNodeHandle } from 'react-native';

 class AMapView extends Component {

 	static propTypes = {
      ...View.propTypes,

      style: View.propTypes.style,
      //center:PropTypes.number,

      /**
       * [apiKey amap's apiKey]
       * @type {[type]}
       */
      apiKey: PropTypes.string,
      
      showsUserLocation: PropTypes.bool,

      showsPointsOfInterest: PropTypes.bool,

      
      showsCompass: PropTypes.bool,

      
      zoomEnabled: PropTypes.bool,
      //设置地图类型
      mapType: PropTypes.oneOf([
          'standard',//标准模式
          'satellite',//卫星模式
          'night',//黑夜地图
          'navi',//导航模式
      ]),
      //设置是否打开交通图层
      trafficEnabled: PropTypes.bool,
      //设置缩放级别
      zoomLevel: PropTypes.number,
      //设置中心位置
      center:PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number
      }),
      //设置中心位置和缩放级别
      centerAndZoom:PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
          zoomLevel: PropTypes.number
      }),

      
      rotateEnabled: PropTypes.bool,

      
      scrollEnabled: PropTypes.bool,

      
      pitchEnabled: PropTypes.bool,

      
      showsScale: PropTypes.bool,

      
      showsBuildings: PropTypes.bool,

      

      
      showsIndoors: PropTypes.bool,

      
      

      userTrackingMode: PropTypes.oneOf([
          'none',
          'follow',
          'followWithHeading',
      ]),

      
      onLongPress: PropTypes.func,
  		}

  setCenter(latLng){
  		this.refs.map.setNativeProps({
              center: latLng
          });
  }
  setZoom(zoomLevel){
  	//alert(zoomLevel);
  		this.refs.map.setNativeProps({
              zoomLevel: zoomLevel
          });
  }
  //设置中心点和缩放级别
  setCenterAndZoom(latLng,zoomLevel){
  	  	let params=latLng;
  	  	params["zoomLevel"]=zoomLevel;
  		this.refs.map.setNativeProps({
              centerAndZoom: params
          });
  }


  componentDidMount(){
  	//alert("初始化完成");
  	/*NativeModules.AMapModule.addPolyline(findNodeHandle(this), 'name', 'password')
  	.then(
      (map) => {
        alert(map.name)
      }
    )
    .catch(
      (code, err) => {
        alert(err)
      }
    )*/
  }
  render() {
      let props = {
          ...this.props,
          //onChange: this._onChange,
          //onMapReady: this._onMapReady,
          //onLayout: this._onLayout,
      };
      console.log("amap render 执行");
      return ( < AMap ref = "map" {...props}  />);
  }
}

var AMap = requireNativeComponent('AMap', AMapView);


module.exports = AMapView;
