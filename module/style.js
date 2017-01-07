/*
 * @Author: ibeeger
 * @Date:   2016-12-28 19:01:10
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2017-01-07 19:27:57
 */

'use strict';

import {
	StyleSheet,
	Dimensions,
	Image
} from 'react-native';

const w =  Dimensions.get('window').width;
const w2 =  Dimensions.get('window').width/2;
const w4 =  Dimensions.get('window').width/4;

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor:"#fff"
	},
	header: {
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#18bbf2',
		flexDirection: 'row'
	},
	welcome: {
		fontSize: 18,
		textAlign: 'center',
		color: "#ffffff"
	},
	titleBtn: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		width: 80,
		backgroundColor: "rgb(24,189,255)",
	},
	container: {
		flex: 9,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	titleFont: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	title: {
		flex: 5,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "rgb(24,189,255)",
	},
	listMain:{
		overflow:"hidden",
		alignItems: 'center',
		backgroundColor:"#fff",
		flex: 1,
	},
	list: {
		justifyContent: 'flex-start',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	message: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor:"#fff",
		flex: 1
	},
	msgtext: {
		fontSize: 16,
		color: "#555555",
		alignSelf:"center"
	},

	tips: {
		fontSize: 14,
		color: "#999999"
	},
	item: {
		width: (w2-10),
		height: 100,
		marginTop:10,
		marginLeft:5,
		marginRight:5,
		marginBottom:0
	},
	itempic: {
		width: (w2-10),
		height: 100,
		marginTop:10,
		marginLeft:5,
		marginRight:5,
		marginBottom:0
	},
	row: {
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
	swiperMain: {
		height: 200
	},
	cattext:{
		fontSize: 20,
		color:"#fff"
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: "#555555",
	},
	pictext: {
		fontSize: 14,
		padding:5,
		textAlign: 'center',
		color: "#222",
		backgroundColor:"#fff",
		position:"absolute",
		bottom:0,
		left:0
	},
	swiperItem: {
		width:w,
		height:200,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
	},
	dotpositon:{
		 top:160,
		 left:10,
		 right:0,
		 height:20,
		 position:"absolute"
	},
	picshow:{
		height:200,
		width:w,
		alignSelf:"center"
	},
	ImgView: {
		width:w2,
		height: 100,
		alignSelf: "center",
	},
	IndexImg:{
		width:w,
		height:200,
		backgroundColor:"#fff",
	},
	desc:{
		padding:15,
		flex:1,
	},
	webView:{
		width:w,
		backgroundColor:"#f0f0f0"
	},
	descfont:{
		fontSize:14,
		lineHeight:20,
	},
	Img: {
		resizeMode: Image.resizeMode.cover,
		flex: 1
	},
	scrollMain:{
		 flex:1,
	},
	textView:{
		height:300,
		flex:1,
		padding:5,
		justifyContent:"center",
		alignItems:"center",
		marginBottom:5,
	},
	textinput:{
		height:300,
		padding:5,
		width:(w*1-20),
		textAlignVertical:"top",
		borderWidth:1,
		marginLeft:2,
		marginRight:2,
		borderColor:"#ccc",
		backgroundColor:"#fff"
	}
})


export default styles