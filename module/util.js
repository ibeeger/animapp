/*
 * @Author: ibeeger
 * @Date:   2017-01-05 16:25:59
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2017-01-18 18:24:59
 */

'use strict';

import {URL,VERSION} from "./config"
import {
	Platform
} from "react-native"

import Device from "react-native-device-info"
class Util {
	static fetchData(postdata) {
		// let timer = new Date();
		// let arg2 = timer.getMonth();
		// timer = timer.getFullYear()+""+timer.getMonth()+""+timer.getDate();
		// timer = parseInt(timer,arg2);
		
		postdata = Object.assign({},postdata,{v:Device.getVersion(),os:Platform.OS});
		let url = URL;
		if (arguments.length==2) {
			url = arguments[1];
		}
		return fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(postdata)
		}).then(function(response) {
			return response.json();
		}).catch(function(err) {
			console.log(err + "2");
		})
	}
}

export default Util;