/*
* @Author: ibeeger
* @Date:   2017-01-05 16:34:02
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-17 20:11:38
*/

'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  ListView
} from 'react-native';

import styles from "../style"
import Util from "../util.js"

import Header from "../components/header"


class List extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
      load:false,
       dataSource: null
    };
    
    this.renderRow = this.renderRow.bind(this);
	}
 
   componentDidMount(){
      let _this = this;
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      Util.fetchData({type:this.props.type}).then(function(data) {
        setTimeout(function(){
          _this.setState({
            load:true,
            num:data.data.length,
            dataSource:ds.cloneWithRows(data.data),
            arr:data.data
          })
        },200)
    })
   }


  renderRow(rowData: object, sectionID: number, rowID: number){
    let url = "http://oss.files.ibeeger.com/anims/"+this.props.type+"/small/"+rowData.img;
    let cur = (rowID*1+1);
    let type = this.props.type;
    let _this = this;
    let arr = _this.state.arr;
    return (
      <View style={styles.itempic}>
          <View  style={styles.row}>
           <TouchableHighlight underlayColor="rgba(255,255,255,.1)" onPress={() => {
             _this.props.navigator.push({id:"item",index:0,params:{_id:rowData._id,type:type,arr:arr,cur:rowID}})
          }}>
            <View style={styles.ImgView}>
                  <Image source={{uri:url}}  style={styles.Img} />
              </View>
               </TouchableHighlight>
            <Text style={styles.pictext}>
               {rowData.name}
            </Text>
          </View>
     
      </View>
    );
  }

  renderList(){
        return(
          <View style={styles.listMain}>
            <ListView  contentContainerStyle={styles.list}
                  initialListSize={8}
                  pageSize={6}
                  onEndReachedThreshold={10}
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

	render(){
    let main = this.renderLoad();
    let title = this.props.title +" "+(this.state.num || "");
    let navigator = this.props.navigator;
    if (this.state.load) {
      main = this.renderList();
    }
		return(
    <View style={styles.main}>
  		  <Header  navigator={navigator} hasfeedback={false} title={title} />
        {main}
      </View>
			)
	}
}


export default List;