/*
* @Author: ibeeger
* @Date:   2017-01-06 14:17:36
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-16 18:39:42
*/

'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  ScrollView,
  Button,
  TextInput,
  Alert
} from 'react-native';
import {VERSION} from "../config"
import styles from "../style.js"
import Util from "../util.js"

import Device from "react-native-device-info"

const w2 =  Dimensions.get('window').width/2;
class Submit extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	load:true,
	  	imgload:false,
	  	data:null,
	  	msgCon:"",
	  	name:"反馈建议",
	  	msg:"加载中"
	  };
	  this.onPressLearnMore = this.onPressLearnMore.bind(this);
	}
	onPressLearnMore(){
		let navigator = this.props.navigator;
		let json ={nick:"mobile",msgcon:"",deviceName:Device.getDeviceName(),ua:Device.getUserAgent()};
		if (!this.state.msgCon) {
			Alert.alert(
            '提示信息',
	            "提交内容不能为空",
	            [
	              {text: '确定', onPress: () => {console.log("kong")}}
	            ]
	          );
			return;
		}
		json["msgcon"] =  this.state.msgCon;
		let _this = this;
		if (!this.state.load) {
			return;
		}
		_this.setState({
			load:false
		})
		Util.fetchData(json,"http://api.ibeeger.com/feedback").then(function (data) {
			_this.setState({
				load:true
			});
			Alert.alert(
            '提示信息',
            data["data"]["msg"] || "提交成功",
            [
              {text: '确定', onPress: () => navigator.pop()}
            ]
          );
		})
		
	}
  
	render(){
		let navigator = this.props.navigator;
		let {name} = this.state;
			 
			return(
				<View style={styles.main}>
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
						<View style={styles.title}><Text style={styles.welcome} numberOfLines={1}>{name}</Text></View>
						<View style={styles.titleBtn}>
							
						</View>
					</View>
					<View style={styles.container}>
							<ScrollView style={styles.scrollMain}>
								<View style={styles.textView}>
								<TextInput ref="msgCon" onChangeText={(msgCon) => this.setState({msgCon})} style={styles.textinput} underlineColorAndroid="transparent" multiline={true}>
									 
								</TextInput>
								</View>
								<View style={styles.submitBtn}>
								<TouchableHighlight onPress={this.onPressLearnMore}>
							       <View style={styles.submitButton}> 
							      	 <Text style={styles.submitButtonText}>提交</Text>
							       </View>
					      		 </TouchableHighlight>
								</View>
							</ScrollView>
							<View style={styles.viewVersion}>
							<Text style={styles.versionfont}>QQ:80301983</Text>
							<Text style={styles.versionfont}>Version:{VERSION}</Text>
							</View>
						</View>
				</View>
			)
		
	}

}


export default Submit;