/*
* @Author: ibeeger
* @Date:   2017-01-07 15:53:58
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-02-06 14:17:15
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


import Header from "../components/header"

export default  class WebPage extends Component{

	constructor(props) {
	  super(props);
	  this.state = {
	  	 url:props.link,
	  	 name: "精选文章推荐",
	  	 sharetitle:"精选文章",
	  	 scalesPageToFit:true
	  };
	  this.onNavigationStateChange = this.onNavigationStateChange.bind(this);
	}

	onNavigationStateChange(navState){
		this.setState({
			sharetitle:navState.title
		})
	}

	render(){
		let navigator = this.props.navigator;
		let sharetitle = this.state.sharetitle;
		let title = this.state.name;

		return (<View style={styles.main}>
				<Header navigator={navigator} title={title} sharetitle={sharetitle} hasfeedback={false} hasshare={true} sharelink={this.props.link}  picurl={this.props.picurl} />
					<View style={styles.container}>
					 <WebView
			          automaticallyAdjustContentInsets={true}
			          style={styles.webView}
			          source={{uri:this.state.url}}
			          javaScriptEnabled={true}
			          domStorageEnabled={true}
			          startInLoadingState={true}
			          scalesPageToFit={true}
			          onNavigationStateChange={this.onNavigationStateChange}
			          /></View>
        </View>
        )
	}

}



