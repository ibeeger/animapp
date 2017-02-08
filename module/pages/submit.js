/*
* @Author: ibeeger
* @Date:   2017-01-06 14:17:36
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-20 16:28:23
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
  Platform,
  Alert
} from 'react-native';

import styles from "../style.js"
import Util from "../util.js"
import Header from "../components/header"
import Device from "react-native-device-info"
<<<<<<< HEAD

const VERSION = Device.getVersion();
=======
 
>>>>>>> v1.0.6
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
	  	msg:"加载中",
	  	VERSION:Device.getVersion()
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
					<Header navigator={navigator} title={name} hasfeedback={false} />
					<View style={styles.container}>
							<ScrollView style={styles.scrollMain}>
								<View style={styles.textView}>

								<TextInput ref="msgCon" blurOnSubmit={true}  onChangeText={(msgCon) => this.setState({msgCon})} style={styles.textinput} underlineColorAndroid="transparent" multiline={true}>
									 
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
							<Text style={styles.versionfont}>微信:web0310</Text>
							<Text style={styles.versionfont}>Version:{this.state.VERSION}</Text>
							</View>
						</View>
				</View>
			)
		
	}

}


export default Submit;