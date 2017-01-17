/*
* @Author: ibeeger
* @Date:   2017-01-17 15:22:57
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-17 15:36:27
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

import styles from "../style"


class Header extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	  this.renderFeedBack = this.renderFeedBack.bind(this);
	}

	renderFeedBack(){
		let {navigator} = this.props;
		let feedtext = "反馈"
		return(
				<View style={styles.titleBtn}>
						<TouchableHighlight onPress={() => {
					          		 navigator.push({id:'submit',index:0,params:{}})
					      		 }}>
					        <View style={styles.titleBtn}> 
					      		<Text>{feedtext}</Text>
					        </View>
					    </TouchableHighlight>
				</View>
			)
	}

	render(){
		let {navigator,hasfeedback,title} = this.props;
		let feedback = <View style={styles.titleBtn}></View>
		if (hasfeedback) {
			feedback = this.renderFeedBack();
		}
		return(
				<View style={styles.header}>
					<View style={styles.titleBtn}>  
						<TouchableHighlight onPress={() => {
					           navigator.pop()
					       }}>
					       <View style={styles.titleBtn}> 
					       		<Text>返回</Text>
					       </View>
					    </TouchableHighlight>
       				</View>
					<View style={styles.title}><Text style={styles.welcome} numberOfLines={1}>{title}</Text></View>
					{feedback}
			</View>
			)
	}
}


export default Header
