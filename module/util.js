/*
 * @Author: ibeeger
 * @Date:   2017-01-05 16:25:59
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2017-01-14 12:13:53
 */

'use strict';

import {URL,VERSION} from "./config"
import Device from "react-native-device-info"
class Util {
	static fetchData(postdata) {
		console.log(Device.getDeviceName());
		console.log(Device.getUserAgent());
		console.log(Device.getVersion());
		console.log(Device);
		postdata = Object.assign({},postdata,{v:Device.getVersion()});
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