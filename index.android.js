/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flowTextToSpeech
 */

import React, { Component } from 'react';
import RT from './module/router.js'
import {
  AppRegistry,
  Alert,
  Text,
  View,
  Navigator,
  BackAndroid,
  Platform
} from 'react-native';


const INITIAL_ROUTE = {
  id:"home",
  index:0,
  params:{}
};

export default class Anims extends Component {
  constructor(props) {
    super(props);
    this.onBackAndroid = this.onBackAndroid.bind(this);
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  onBackAndroid(){
    const nav = this.navigator;
    const routers = nav.getCurrentRoutes();
    if (routers.length > 1) {
      nav.pop();
      return true;
    }else{
       Alert.alert(
            '提示信息',
            "确定退出 动物世界",
            [
              {text: '取消', onPress: () => console.log('Cancel Pressed!')},
              {text: '确定', onPress: () => BackAndroid.exitApp()},
            ]
          );
       return true;
    }
   
  };
  configureScene(route, routeStack){
    // return Navigator.SceneConfigs.PushFromRight;
    return Navigator.SceneConfigs.FloatFromRight;
  }
  renderScene (route, navigator) {
      this.navigator = navigator;
      return  RT.getRoutePage(route,navigator);
  }
  
  render() {
    return (
         <Navigator
          initialRoute={INITIAL_ROUTE}
          configureScene={this.configureScene}
          renderScene={this.renderScene.bind(this)}
        />
    );
  }
}


AppRegistry.registerComponent('Anims', () => Anims);
