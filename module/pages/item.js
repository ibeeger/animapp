/*
* @Author: ibeeger
* @Date:   2017-01-06 14:17:36
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-07 18:56:58
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
  ScrollView
} from 'react-native';

import styles from "../style.js"
import Util from "../util.js"
const w2 =  Dimensions.get('window').width/2;
class Item extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	load:false,
	  	imgload:false,
	  	data:null,
	  	msg:"加载中"
	  };

	   let _this = this;
	   
      Util.fetchData({animid:props._id,typeid:props.type}).then(function(data) {
      	if (data.code==0) {
      		  let _data = data.data[0];
      		  _this.setState({
		          load:true,
		          ename:_data.ename,
		          pinyin:_data.pinyin,
		          name:_data.name,
		          desc:_data.desc || "暂无描述",
		          img:_data.img,
		        })
      	}else{
      		_this.setState({
      			msg:data.msg
      		})
      	}
        
    })
      this.loadImg = this.loadImg.bind(this);
	}

	loadImg(){
		this.setState({
			imgload:true,
		})
	}

	renderLoadingImg(){
		 return(
              <Text style={styles.msgtext,{position:'absolute',left:(w2-35),top:70}}>{this.state.msg}</Text>
          )
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
		let {img,name,ename,pinyin,desc} = this.state;

		if (!this.state.load) {
			return this.renderLoading();
		}else{
			let url = "http://oss.files.ibeeger.com/anims/"+this.props.type+"/"+img;
			let show = 1;
			let imgItem = null;
			if (!this.state.imgload) {
				show = 0;
				imgItem = this.renderLoadingImg();
			}
			let fed = "反馈";
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
							<TouchableHighlight onPress={() => {
					          		 navigator.push({id:'submit',index:0,params:{}})
					      		 }}>
							       <View style={styles.titleBtn}> 
							      	 <Text>{fed}</Text>
							       </View>
					       </TouchableHighlight>
						</View>
					</View>
					<View style={styles.container}>
						<View style={styles.picshow}>
								<View style={styles.picshow}>
									  {imgItem}
									  <Image source={{uri:url}} onLoad={this.loadImg}  style={[styles.Img,{opacity:show}]} />
								</View>
							   <Text style={styles.pictext}>
								 {pinyin}
							  </Text>
						</View>
						<View style={styles.desc}>
							<ScrollView style={styles.scrollMain}>
								<Text style={styles.descfont}>
									{desc}
								</Text>
							</ScrollView>
						</View>
					</View>
				</View>
			)
		}
		
	}

}


export default Item;