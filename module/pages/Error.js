/*
* @Author: ibeeger
* @Date:   2017-01-17 15:12:41
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-17 16:04:29
*/

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View,
  Linking,
  Alert
} from 'react-native';



class Error extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		return (<View style={styles.main}>
				 <Text>数据加载失败</Text>
				</View>)
	}
} 

export default Error