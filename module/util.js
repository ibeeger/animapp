/*
 * @Author: ibeeger
 * @Date:   2017-01-05 16:25:59
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2017-01-12 11:37:31
 */

'use strict';

import {URL,VERSION} from "./config"

class Util {
	static fetchData(postdata) {
		postdata = Object.assign({},postdata,{v:VERSION});
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