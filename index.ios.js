/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import RT from './module/router.js'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  Navigator
} from 'react-native';

const INITIAL_ROUTE = {
  id:"home",
  index:0,
  params:{title:"会通教育"}
};

export default class Anims extends Component {
  configureScene(route, routeStack){

    return Navigator.SceneConfigs.PushFromRight
  }
    renderScene (route, navigator) {
      this.navigator = navigator;
      return  RT.getRoutePage(route,navigator)
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
