/*
* @Author: ibeeger
* @Date:   2017-01-07 15:53:58
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-14 10:25:13
*/

'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ListView,
  WebView
} from 'react-native';

import styles from "../style"
import Util from "../util.js"

const WEBVIEW_REF = "WebPage";

export default  class WebPage extends Component{

	constructor(props) {
	  super(props);
	  this.state = {
	  	 url:props.link,
	  	 name:props.name || "精选文章推荐",
	  	 scalesPageToFit:true
	  };
	  console.log(this.state.url)
	}

	onNavigationStateChange(){

	}

	render(){
		let navigator = this.props.navigator;
		return (<View style={styles.main}>
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
						<View style={styles.title}><Text style={styles.welcome} numberOfLines={1}>{this.state.name}</Text></View>
						<View style={styles.titleBtn}></View>
					</View>
					<View style={styles.container}>
						<WebView
			          automaticallyAdjustContentInsets={true}
			          style={styles.webView}
			          source={{uri:this.state.url}}
			          javaScriptEnabled={true}
			          domStorageEnabled={true}
			          startInLoadingState={false}
			          scalesPageToFit={this.state.scalesPageToFit}
			          /></View>
        </View>
        )
	}

}



