/*
* @Author: ibeeger
* @Date:   2017-01-05 16:34:02
* @Last Modified by:   willclass
* @Last Modified time: 2017-01-06 18:46:30
*/

'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ListView
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
       dataSource: null
    };
    this.renderRow = this.renderRow.bind(this);
	}

  componentDidMount(){
      let _this = this;
      Util.fetchData({index:true}).then(function(data) {
        _this.setState({
          load:true,
          dataSource:ds.cloneWithRows(data.data)
        })
    })
  }

  renderRow(rowData: object, sectionID: number, rowID: number){
    let _this = this;
    return (
      <View style={styles.item}>
      <TouchableHighlight onPress={() => {
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

	render(){
    let main = this.renderLoad();
    if (this.state.load) {
        main = this.renderList();
    }
		return(
    <View style={styles.main}>
  		 <View style={styles.swiperMain}>
  			 <Swiper style={styles.swiperMain} threshold={20}>
              <View style={styles.swiperItem1}>
                <Text style={styles.text}>第一页</Text>
              </View>
              <View style={styles.swiperItem}>
                <Text style={styles.text}>第二页</Text>
              </View>
              <View style={styles.swiperItem}>
                <Text style={styles.text}>第三页</Text>
              </View>
              <View style={styles.swiperItem}>
                <Text style={styles.text}>第四页</Text>
              </View>
            </Swiper>
        </View>
        <View style={styles.listMain}>
          {main}
        </View>
      </View>
			)
	}
}


export default Index;