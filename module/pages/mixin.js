/*
* @Author: ibeeger
* @Date:   2017-01-18 15:15:12
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-18 15:44:55
*/

'use strict';
import React, { Component } from 'react';


import {
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View,
  ListView,
  Linking,
  Alert,
  Animated,
  NetInfo,
  Dimensions,
  ToastAndroid
} from 'react-native';
import styles from "../style"
import Icon from 'react-native-vector-icons/EvilIcons';
const Loading = (<Icon name="spinner-2" size={40} color="#fc5d57" />)
const w2 =  Dimensions.get('window').width/2;
class ComMixin extends Component {
	constructor(props) {
	  super(props);	
	}
	
	renderAd(){
          return (<View style={styles.adBox}>
			          <View style={styles.loadView}>
			              {Loading}
			          </View>
	              </View>)
	 }

	renderLoadingImg(){
		 return(
              <Text style={styles.msgtext,{position:'absolute',left:(w2-6),top:90}}>{this.state.msg}</Text>
          )
	}

	 renderLoad(){
      	return(
            <View style={styles.message}>
              <Text style={styles.msgtext}>数据加载中</Text>
            </View>
          )
  }
}

 

export default ComMixin