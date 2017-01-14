/*
* @Author: ibeeger
* @Date:   2017-01-06 14:17:36
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-14 10:04:48
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
  ToastAndroid
} from 'react-native';

import TTS from "react-native-tts"

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
	  	msg:"加载中",
	  };

	   let _this = this;
	   
      Util.fetchData({animid:props._id,typeid:props.type}).then(function(data) {
      	if (data.code==0) {
      		  let _data = data.data[0];
      		  _this.setState({
		          load:true,
		    	  arr:props.arr,
		    	  title:(props.cur*1+1)+"/"+props.arr.length,
		          ename:_data.ename,
		          animtype:props.type,
		          pinyin:_data.pinyin,
		          name:_data.name,
		          desc:_data.desc || "暂无描述",
		          img:_data.img,
		          prev:props.cur>0? props.cur-1 : 0,
		          next:props.cur<props.arr.length ? (props.cur*1+1) : props.arr.length
		        })
      	}else{
      		_this.setState({
      			msg:data.msg
      		})
      	}
        
    })
      this.loadImg = this.loadImg.bind(this);
      this.changeAnimPrev = this.changeAnimPrev.bind(this);
      this.changeAnimNext = this.changeAnimNext.bind(this);
	}

	changeAnimPrev(){
		if (!this.state.imgload) {
			return;
		}
		let prev = this.state.prev;
		let next = this.state.next;
		if (prev ==0) {
			ToastAndroid.show('已经是第一张了', ToastAndroid.SHORT)
			return;
		}

		this.setState({
			imgload:false,
		})
		let _id = this.state.arr[prev]["_id"];
		let type = this.state.animtype;
		let _this = this;
		Util.fetchData({
			animid: _id,
			typeid: type
		}).then(function(data) {
			if (data.code == 0) {
				let _data = data.data[0];
				_this.setState({
					load: true,
					title:(prev*1+1)+"/"+_this.state.arr.length,
					ename: _data.ename,
					pinyin: _data.pinyin,
					name: _data.name,
					desc: _data.desc || "暂无描述",
					img: _data.img,
					prev: (prev-1),
					next: (next-1)
				})
			} else {
				_this.setState({
					msg: data.msg
				})
			}
		})
	}

	changeAnimNext(){
		if (!this.state.imgload) {
			return;
		}
		let next = this.state.next;
		let prev = this.state.prev;
		if (next ==this.state.arr.length) {
			ToastAndroid.show('已经是最后一张了', ToastAndroid.SHORT)
			return;
		}
		this.setState({
			imgload:false
		})
		let _id = this.state.arr[next]["_id"];
		let type = this.state.animtype;
		let _this = this;
		Util.fetchData({
			animid: _id,
			typeid: type
		}).then(function(data) {
			if (data.code == 0) {
				let _data = data.data[0];
				_this.setState({
					load: true,
					title:(next*1+1)+"/"+_this.state.arr.length,
					ename: _data.ename,
					pinyin: _data.pinyin,
					name: _data.name,
					desc: _data.desc || "暂无描述",
					img: _data.img,
					prev: (prev*1+1),
					next: (next*1+1)
				})
			} else {
				_this.setState({
					msg: data.msg
				})
			}
		})
	}

	loadImg(){
		this.setState({
			imgload:true,
		})
	}

	renderLoadingImg(){
		 return(
              <Text style={styles.msgtext,{position:'absolute',left:(w2-15),top:70}}>{this.state.msg}</Text>
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
		let {img,name,ename,pinyin,desc,title} = this.state;
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
						<View style={styles.title}><Text style={styles.welcome} numberOfLines={1}>{title}</Text></View>

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
						</View>
						<View style={styles.desc}>
								<View style={styles.pinyinView}>
									 <Text style={styles.pinyinText}>{pinyin}</Text>
									 <Text style={styles.nameText}>{name}</Text>
								</View>
								 <View style={styles.playBtnOut}> 
									<TouchableHighlight onPress={() => {
						           			TTS.speak(name) 
						      			 }}>
								       <View style={styles.playBtn}> 
								       		<Image source={require('../assets/speak.png')} style={styles.speakIco} />
								       </View>
						      		 </TouchableHighlight>
					      		  </View>
					      		  <View style={styles.prevNextView}>
					      		 	 <View style={styles.prevView}>
					      		 	 	<TouchableHighlight onPress={this.changeAnimPrev}>
					      		 	 		<View style={styles.pnBtn}>
					      		 	 			<Text style={styles.btnText}>上一张</Text>
					      		 	 		</View>
					      		 	 	</TouchableHighlight>
					      		 	 </View>
					      		 	 <View style={styles.nextView}>
					      		 	 	<TouchableHighlight onPress={this.changeAnimNext}>
					      		 	 		<View style={styles.pnBtn}>
					      		 	 			<Text style={styles.btnText}>下一张</Text>
					      		 	 		</View>
					      		 	 	</TouchableHighlight>
					      		 	 </View>
					      		  </View>
       					 
						</View>
					</View>
				</View>
			)
		}
		
	}

}


export default Item;