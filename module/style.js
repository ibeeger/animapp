/*
 * @Author: ibeeger
 * @Date:   2016-12-28 19:01:10
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2017-01-06 19:25:49
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
		height: 200,
		overflow: "hidden"
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
	swiperItem1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#99ffee',
	},
	swiperItem: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#92BBD9',
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
	desc:{
		padding:15,
		flex:1,
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
	}
})


export default styles