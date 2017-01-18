/*
* @Author: ibeeger
* @Date:   2017-01-17 15:22:57
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-18 15:02:30
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
 
import Icon from 'react-native-vector-icons/EvilIcons';

const BackBtn = (<Icon name="chevron-left" size={40} color="#fff" />)
const FeedBtn = (<Icon name="exclamation" size={30} color="#fff" />)
const ShareBtn = (<Icon name="share-google" size={30} color="#fff" />);


const colors = ["#f5bc37","#60adfd","#f28b51","#a65bf0","#40e6e2","#fc5d57"]


class Header extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	bgcolor:colors[parseInt(Math.random()*6, 10)]
	  };
	  this.renderFeedBack = this.renderFeedBack.bind(this);
	  this.shareToWechat = this.shareToWechat.bind(this);
	}

	renderFeedBack(){
		let {navigator} = this.props;
		return(
				<View style={styles.titleBtn}>
						<TouchableHighlight  underlayColor="rgba(255,255,255,.1)"  onPress={() => {
					          		 navigator.push({id:'submit',index:0,params:{}})
					      		 }}>
					        <View style={styles.titleBtn}> 
					      		{FeedBtn}
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
		return(
				<View style={styles.titleBtn}>
						<TouchableHighlight  underlayColor="rgba(255,255,255,.1)"  onPress={this.shareToWechat}>
					        <View style={styles.titleBtn}> 
					      		{ShareBtn}
					        </View>
					    </TouchableHighlight>
				</View>
			)
	}

	render(){
		let {navigator,hasfeedback,title,hasshare} = this.props;
		let feedback = null
		let sharebtn = null
		if (hasfeedback) {
			feedback = this.renderFeedBack();
		}

		if (hasshare) {
			sharebtn = this.renderShare();
		}

		return(
				<View style={[styles.header,{backgroundColor:this.state.bgcolor}]}>
					<View style={styles.titleBtn}>  
						<TouchableHighlight  underlayColor="rgba(255,255,255,.1)"  onPress={() => {
					           navigator.pop()
					       }}>
					       <View style={styles.titleBtn}> 
					       		{BackBtn}
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
