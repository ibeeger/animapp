/*
 * @Author: ibeeger
 * @Date:   2017-01-05 16:25:59
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2017-01-05 16:31:06
 */

'use strict';

import {URL} from "./config.js"

console.log(URL);

class Util {
	static fetchData(postdata) {
		return fetch(URL, {
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