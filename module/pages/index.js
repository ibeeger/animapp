/*
* @Author: ibeeger
* @Date:   2017-01-05 16:34:02
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-17 20:40:20
*/

'use strict';
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View,
  ListView,
  Linking,
  Alert,
  Animated,
  NetInfo,
  Platform,
  ToastAndroid
} from 'react-native';

import styles from "../style"
import Util from "../util.js"
import Swiper from 'react-native-swiper'

const colors = ["#f5bc37","#60adfd","#f28b51","#a65bf0","#40e6e2","#fc5d57"]
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class Index extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
       load:false,
       fadeAnim:new Animated.Value(1),
       dataSource: ds.cloneWithRows([{name:"..."},{name:"..."},{name:"..."},{name:"..."},{name:"..."},{name:"..."}]),
       swiperData:[]
    };
    this.renderRow = this.renderRow.bind(this);
    this.renderSwiper = this.renderSwiper.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.renderAd = this.renderAd.bind(this);
	}
  
  componentDidMount(){
        let _this = this;
         setTimeout(function(){
            _this.fetchData();
         },1000);
         NetInfo.fetch().done((isConnected) => { 
          if (Platform.OS=='android') {
               ToastAndroid.show(isConnected,ToastAndroid.LONG)
          }
        });
  }

  fetchData(){
    let _this = this;
      Util.fetchData({index:true}).then(function(data) {
        //判断新版本
        if (data["upgrade"]) {
            let msg = data["upgrademsg"] || "有新版本升级";
            let upgradeurl = data["upgradeurl"] || "http://www.ibeeger.com";
          Alert.alert(
            '更新提示',
            msg,
            [
              {text: '取消', onPress: () => console.log('Cancel Pressed!')},
              {text: '确定', onPress: () => Linking.openURL(upgradeurl)},
            ]
          );
        }
        _this.setState({
          load:true,
          splashImage:null,
          dataSource:ds.cloneWithRows(data.data),
          swiperData:data["swiperData"]
        })
    })
  }

  renderRow(rowData: object, sectionID: number, rowID: number){
    let _this = this;
    return (
      <View style={styles.item}>
      <TouchableHighlight underlayColor="rgba(255,255,255,.1)" onPress={() => {
           _this.props.navigator.push({id:"list",index:0,params:{type:rowData.type,title:rowData.name}})
        }}>
          <View  style={[styles.row,{backgroundColor:colors[rowID]}]}>
            <Text style={styles.cattext}>
               {rowData.name}
            </Text>
          </View>
      </TouchableHighlight>
      </View>
    );
  }
  
  renderList(){
        return(
          <View style={styles.listMain}>
            <ListView  contentContainerStyle={styles.list}
                  initialListSize={6}
                  pageSize={1}
                  dataSource={this.state.dataSource}
                  renderRow={this.renderRow}
                />
            </View>
      )
  }

  renderLoad(){
      return(
            <View style={styles.message}>
              <Text style={styles.msgtext}>数据加载中</Text>
            </View>
          )
  }

  renderSwiper(){
      let list = this.state.swiperData;
      let _this = this;
     
      if (list.length>0) {
          let arr = list.map(function(item,i){
              let link,type,url,name = item["name"] || "精选文章";
              i++;
              if (item.type) {
                url = "http://oss.files.ibeeger.com/anims/"+item.type+"/"+item.img;
              }else{
                url = item.img;
              };
              if (item.link) {
                return (<View style={styles.swiperItem} key={i}>
                          <TouchableHighlight underlayColor="rgba(255,255,255,.1)" onPress={() => {
                           _this.props.navigator.push({id:"webpage",index:0,params:{link:item.link,name:name}})
                        }}>
                            <View style={styles.swiperItem}>
                              <Image source={{uri:url}}  style={styles.IndexImg} />
                            </View>
                        </TouchableHighlight>
                       </View>
                )
              }else{
                return (<View style={styles.swiperItem}  key={i}>
                        <Image source={{uri:url}}  style={styles.IndexImg} />
                </View>
                )
              }
          })

        return (
            <Swiper style={styles.swiperMain} showsPagination={true} paginationStyle={styles.dotpositon} threshold={20} autoplay={false} autoplayTimeout={5} autoplayDirection={true}>
                {arr}
             </Swiper>
        )
      }
      
  }

  renderAd(){
          return (<View style={styles.adBox}>
          <View style={styles.loadView}>
              <Text style={styles.msgtext}>数据加载中</Text>
          </View>
        </View>)
  }
  
	render(){
    let main = this.renderList(),swiper = this.renderLoad();
    let ad = this.renderAd();
    if (this.state.load) {
         ad = null;
        swiper = this.renderSwiper();
    }
		return(
    <View style={styles.main}>
  		 <View style={styles.swiperMain}>
  			  {swiper}
        </View>
        <View style={styles.listMain}>
          {main}
        </View>
        {ad}
      </View>
			)
	}
}


export default Index;