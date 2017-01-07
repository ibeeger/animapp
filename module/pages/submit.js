/*
* @Author: ibeeger
* @Date:   2017-01-06 14:17:36
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-07 18:43:21
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

import styles from "../style.js"
import Util from "../util.js"
const w2 =  Dimensions.get('window').width/2;
class Submit extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	load:false,
	  	imgload:false,
	  	data:null,
	  	name:"反馈建议",
	  	msg:"加载中"
	  };
	}
	onPressLearnMore(){
		Alert.alert(
            '提示信息',
            "提交成功",
            [
              {text: '取消', onPress: () => console.log('Cancel Pressed!')},
              {text: '确定', onPress: () => console.log("success")}
            ]
          );
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
						<View style={styles.desc}>
							<ScrollView style={styles.scrollMain}>
								<TextInput style={styles.textinput} >
									 
								</TextInput>
								<Button
								  onPress={this.onPressLearnMore}
								  title="提 交"
								  color="#841584"
								  accessibilityLabel="提交反馈信息"
								/>
							</ScrollView>
							<Text>1.0.0</Text>
						</View>
					</View>
				</View>
			)
		
	}

}


export default Submit;