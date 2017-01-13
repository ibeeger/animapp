/*
* @Author: ibeeger
* @Date:   2017-01-05 16:34:02
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-13 11:09:55
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

class List extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
      load:false,
       dataSource: null
    };
     let _this = this;

      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      Util.fetchData({type:this.props.type}).then(function(data) {
        _this.setState({
          load:true,
          num:data.data.length,
          dataSource:ds.cloneWithRows(data.data),
          arr:data.data
        })
    })
    this.renderRow = this.renderRow.bind(this);
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
           <TouchableHighlight onPress={() => {
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
    let navigator = this.props.navigator;
    if (this.state.load) {
      main = this.renderList();
    }
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
            <View style={styles.title}><Text style={styles.welcome} numberOfLines={1}>{this.props.title} {this.state.num}</Text></View>
            <View style={styles.titleBtn}></View>
          </View>

        {main}

      </View>
			)
	}
}


export default List;