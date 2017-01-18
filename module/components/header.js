/*
* @Author: ibeeger
* @Date:   2017-01-17 15:22:57
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-18 13:52:53
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
  Alert,
  ToastAndroid
} from 'react-native';

import styles from "../style"
import * as WeChat from 'react-native-wechat';

class Header extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	  this.renderFeedBack = this.renderFeedBack.bind(this);
	  this.shareToWechat = this.shareToWechat.bind(this);
	}

	componentDidMount() {
	     WeChat.registerApp("1105861173");
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

	shareToWechat(){
		 let link = this.props.sharelink || "http://www.ibeeger.com/app/anims";
		 WeChat.isWXAppInstalled().then(function(install){
		         if (install) {
		         	WeChat.shareToTimeline({
		         		type:"news",
		         		webpageUrl:link
		         	}).then(function(){
		         		ToastAndroid.show(JSON.stringify(arguments),ToastAndroid.SHORT);
		         	}).catch(function(){
		         		ToastAndroid.show(JSON.stringify(arguments),ToastAndroid.SHORT);
		         	})
		         }
				}).catch(function(){
										          
		     })
	}

	renderShare(){
		let {navigator} = this.props;
		let feedtext = "分享"
		return(
				<View style={styles.titleBtn}>
						<TouchableHighlight onPress={this.shareToWechat}>
					        <View style={styles.titleBtn}> 
					      		<Text>{feedtext}</Text>
					        </View>
					    </TouchableHighlight>
				</View>
			)
	}

	render(){
		let {navigator,hasfeedback,title,hasshare} = this.props;
		let feedback = <View style={styles.titleBtn}></View>
		let sharebtn = <View style={styles.titleBtn}></View>
		if (hasfeedback) {
			feedback = this.renderFeedBack();
		}

		if (hasshare) {
			sharebtn = this.renderShare();
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
					{sharebtn}
			</View>
			)
	}
}


export default Header
