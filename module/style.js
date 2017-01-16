/*
 * @Author: ibeeger
 * @Date:   2016-12-28 19:01:10
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2017-01-16 16:50:54
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
		alignItems: 'center',
		backgroundColor:"#f0f0f0",
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
		fontSize: 12,
		color: "#f0f0f0",
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
		borderRadius:5
	},
	swiperMain: {
		height: 200,
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
		backgroundColor:"rgba(255,255,255,0.5)",
		position:"absolute",
		bottom:0,
		left:0
	},
	swiperItem: {
		width:w,
		height:200,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ccc',
	},
	dotpositon:{
		 top:170,
		 left:10,
		 right:10,
		 height:20,
		 position:"absolute"
	},
	picshow:{
		height:280,
		width:w,
		alignSelf:"center"
	},
	ImgView: {
		width:w2,
		height: 100,
		alignSelf: "center",
		borderRadius:5,
	},
	IndexImg:{
		width:w,
		height:200,
		backgroundColor:"#fff",
	},
	desc:{
		flex:1,
	},
	webView:{
		width:w,
		backgroundColor:"#f0f0f0"
	},
	descfont:{
		padding:15,
		fontSize:14,
		lineHeight:20,
	},
	pinyinView:{
		justifyContent:"center",
		alignItems:"center",
		paddingTop:20,
	},
	pinyinText:{
		fontSize:36,
	},
	playBtnOut:{
		alignSelf:"center",
		justifyContent:"center",
		alignItems:"center",
		width:40,
		height:40,
		position:"absolute",
		right:7,
		top:7,
		borderRadius:20,
	},
	playBtn:{
		width:40,
		height:40,
		alignSelf:"center",
		justifyContent:"center",
		alignItems:"center",
		backgroundColor:"#fc5d57",
		borderRadius:20
	},
	PlayText:{
		fontSize:24,
		color:"#fff",
	},
	nameText:{
		fontSize:50
	},
	Img: {
		resizeMode: Image.resizeMode.cover,
		flex: 1,
		borderRadius:5
	},
	BigImg: {
		resizeMode: Image.resizeMode.cover,
		flex: 1
	},
	scrollMain:{
		 flex:1,
		 width:w,
	},
	textView:{
		height:300,
		flex:1,
		marginTop:15,
		backgroundColor:"#fff",
		width:w,
		justifyContent:"center",
		alignItems:"center",
		marginBottom:15,
	},
	submitBtn:{
		marginLeft:10,
		marginRight:10,
		height:60,
		flexDirection:"column",
		justifyContent:"center"
	},
	submitButton:{
		height:60,
		width:w,
		justifyContent:"center",
		alignItems:"center",
		backgroundColor:"#fc5d57"
	},
	submitButtonText:{
		fontSize:18,
		color:"#fff"
	},
	textinput:{
		height:300,
		width:(w*1-20),
		textAlignVertical:"top",
		borderWidth:0.5,
		borderRadius:5,
		borderColor:"#999",
		backgroundColor:"transparent"
	},
	versionfont:{
		fontSize:12,
		color:"#ccc"
	},
	viewVersion:{
		paddingBottom:10
	},
	prevNextView:{
		flexDirection: 'row',
		justifyContent:"flex-end",
		alignItems:"flex-end",
		width:w,
		flex:1
	},
	prevView:{
		flex:1,
		height:50,
		marginRight:1,
		width:w2
	},
	nextView:{
		flex:1,
		height:50,
		marginLeft:1,
		width:w2
	},
	pnBtn:{
		height:50,
		width:w2,
		backgroundColor:"#fc5d57",
		alignSelf:"center",
		justifyContent:"center",
		alignItems:"center"
	},
	btnText:{
		color:"#fff",
		fontSize:18
	}
})


export default styles