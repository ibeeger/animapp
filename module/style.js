/*
 * @Author: ibeeger
 * @Date:   2016-12-28 19:01:10
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2017-02-06 18:45:57
 */

'use strict';

import {
	StyleSheet,
	Dimensions,
	Image,
	Platform
} from 'react-native';

const w =  Dimensions.get('window').width;
const h =  Dimensions.get('window').height;
const w2 =  Dimensions.get('window').width/2;
const w4 =  Dimensions.get('window').width/4;
const titleWidth = (w-160);
const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor:"#fff"
	},
	sharBtn:{
		width:160,
		height:30
	},	
	adBox:{
		flex:1,
		width:w,
		height:h,
		position:"absolute",
		left:0,
		top:0,
		zIndex:10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor:"rgba(255,255,255,0.1)"
	},
	loadView:{
		width:w4,
		height:80,
		justifyContent:"center",
		alignItems:"center",
		borderRadius:15,
		backgroundColor:"rgba(255,255,255,0.8)"
	},
	adImage:{
		flex:1,
		width:w,
		height:h,
		resizeMode: Image.resizeMode.cover
	},
	header: {
		height:  Platform.OS =='android' ? 60 : 80,
		paddingTop: Platform.OS =='android' ? 0 : 20,
		width:w,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: "rgb(24,189,255)",
		flexDirection: 'row'
	},
	welcome: {
		fontSize: 18,
		textAlign: 'center',
		color: "#ffffff",
		alignSelf:"center"
	},
	titleBtn: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		width: 80
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
		width:titleWidth,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
	},
	message: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor:"#fff",
		flex: 1
	},
	msgtext: {
		fontSize: 14,
		color: "#ccc",
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
	listMain:{
		alignItems: 'center',
		backgroundColor:"#f0f0f0",
		flex: 1,
		width:w,
		paddingBottom:10
	},
	list: {
		justifyContent: 'flex-start',
		flexDirection: 'row',
		flexWrap: 'wrap',
		width:w,
	},
	itempic: {
		width: w2,
		height: 100,
		marginTop:10,
		marginBottom:0
	},
	ImgView: {
		width:(w2-10),
		height: 100,
		alignSelf: "center",
		borderRadius:5,
		justifyContent:"center",
		marginLeft:5,
		marginRight:5
	},
	Img: {
		resizeMode: Image.resizeMode.cover,
		flex: 1,
		borderRadius:5
	},
	row: {
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius:5,
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
		left:5
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
		width:(w2-10),
		height: 100,
		alignSelf: "center",
		borderRadius:5,
		justifyContent:"center",
		marginLeft:5,
		marginRight:5
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
		fontSize:30,
	},
	playBtnOut:{
		alignSelf:"center",
		justifyContent:"center",
		alignItems:"center",
		width:40,
		height:40,
		position:"absolute",
		right:7,
		top:5,
		borderRadius:20,
	},
	shareBtnOut:{
		alignSelf:"center",
		justifyContent:"center",
		alignItems:"center",
		width:40,
		height:40,
		position:"absolute",
		left:7,
		top:5,
		borderRadius:20,
	},
	shareBtn:{
		width:40,
		height:40,
		alignSelf:"center",
		justifyContent:"center",
		alignItems:"center",
		borderRadius:20
	},
	playBtn:{
		width:40,
		height:40,
		alignSelf:"center",
		justifyContent:"center",
		alignItems:"center",
		borderRadius:20
	},
	PlayText:{
		fontSize:24,
		color:"#fff",
	},
	nameText:{
		fontSize:40
	},
	BigImg: {
		resizeMode: Image.resizeMode.cover,
		flex: 1,
	},
	scrollMain:{
		 flex:1,
		 width:w,
	},
	textView:{
		height:200,
		flex:1,
		marginTop:15,
		backgroundColor:"#fff",
		width:w,
		paddingLeft:10,
		paddingRight:10,
		justifyContent:"center",
		alignItems:"center",
		alignSelf:"center",
		marginBottom:15
	},
	submitBtn:{
		paddingLeft:10,
		paddingRight:10,
		width:w,
		height:60,
		flexDirection:"column",
		justifyContent:"center"
	},
	submitButton:{
		height:60,
		justifyContent:"center",
		alignItems:"center",
		backgroundColor:"#fc5d57"
	},
	submitButtonText:{
		fontSize:18,
		color:"#fff"
	},
	textinput:{
		height:200,
		flex:1,
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