/*
* @Author: ibeeger
* @Date:   2017-01-06 14:17:36
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-06 20:30:33
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
  TextInput
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

     
      this.loadImg = this.loadImg.bind(this);
	}

  
	renderLoading(){
		 return(
            <View style={styles.message}>
              <Text style={styles.msgtext}>{this.state.msg}</Text>
            </View>
          )
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
						<View style={styles.titleBtn}></View>
					</View>
					<View style={styles.container}>
						<View style={styles.desc}>
							<ScrollView style={styles.scrollMain}>
								<TextInput style={styles.textinput}>
									 
								</TextInput>
								<Button
								  onPress={onPressLearnMore}
								  title="提 交"
								  color="#841584"
								  accessibilityLabel="提交反馈信息"
								/>
							</ScrollView>
						</View>
					</View>
				</View>
			)
		
	}

}


export default Submit;