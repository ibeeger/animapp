/*
* @Author: ibeeger
* @Date:   2017-01-06 14:17:36
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-18 15:51:38
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

import TTS from "react-native-speech"

import styles from "../style.js"
import Util from "../util.js"
import Header from "../components/header"
import ComMixin from "./mixin"

import Icon from 'react-native-vector-icons/EvilIcons';

const PlayBtn = (<Icon name="play" size={45} color="#fc5d57" />)


class Item extends ComMixin {
	constructor(props) {
	  super(props);
	  this.state = {
	  	load:false,
	  	imgload:false,
	  	title:"",
	  	data:null,
	  	msg:"...",
	  };

      TTS.resume();

      this.loadImg = this.loadImg.bind(this);
      this.playName = this.playName.bind(this);
      this.changeAnimPrev = this.changeAnimPrev.bind(this);
      this.changeAnimNext = this.changeAnimNext.bind(this);
	}

	componentDidMount() {
			let _this = this;
			let props =this.props;
		      Util.fetchData({animid:props._id,typeid:props.type}).then(function(data) {
		      	if (data.code==0) {
		      		  let _data = data.data[0];
		      	     setTimeout(function(){
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
		      		},400)
		      	}else{
			      	setTimeout(function(){
			      		_this.setState({
			      			msg:data.msg
			      		})
			      	},100)
		      	}
		    })
	}

	changeAnimPrev(){
		if (!this.state.imgload) {
			return;
		}
		let prev = this.state.prev;
		let next = this.state.next;
		if (prev ==0) {
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



	playName(){
		let name = this.state.name;
		TTS.isSpeaking()
		  .then(speaking => {
		    if (!speaking) {
		    	TTS.speak({text: name,
				    voice: 'zh-CN',
					rate: 0.5})
		    }else{
		    	TTS.stop();
		    	TTS.speak({text: name,
				    voice: 'zh-CN',
					rate: 0.5})
		    }
		  });
		
	}

	render(){
		let navigator = this.props.navigator;
		let {img,name,ename,pinyin,desc,title} = this.state;

		let ad = this.renderAd();
		if (this.state.load) {
			 ad=null;
		}
		let url = "http://oss.files.ibeeger.com/anims/"+this.props.type+"/"+img;
		let imgItem = null;
			if (!this.state.imgload) {
				imgItem = this.renderLoadingImg();
			}
			return(
				<View style={styles.main}>
					<Header navigator={navigator} title={title} hasfeedback={true} />
					<View style={styles.container}>
						<View style={styles.picshow}>
								<View style={styles.picshow}>
									  {imgItem}
									  <Image source={{uri:url}} onLoad={this.loadImg}  style={styles.BigImg} />
								</View>
						</View>
						<View style={styles.desc}>
								<View style={styles.pinyinView}>
									 <Text style={styles.pinyinText}>{pinyin}</Text>
									 <Text style={styles.nameText}>{name}</Text>
								</View>
								 <View style={styles.playBtnOut}> 
									<TouchableHighlight  underlayColor="rgba(255,255,255,.1)" onPress={this.playName}>

								       <View style={styles.playBtn}> 
								       		{PlayBtn}
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
					{ad}
				</View>
			)
		
	}

}


export default Item;