/*
* @Author: ibeeger
* @Date:   2017-01-05 16:11:29
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-07 18:14:50
*/

'use strict';

import React from 'react';

import Index from './pages/index'
import List from './pages/list'
import Item from './pages/item'
import Webpage from './pages/showweb'
import Submit from './pages/submit'
const RouteMap = {
    'home': {index: 0, component: Index, params: {}},
    'list': {index: 1, component: List, params: {}},
    'item': {index: 2, component: Item, params: {}},
    'webpage': {index: 3, component: Webpage, params: {}},
    'submit': {index: 3, component: Submit, params: {}},
};


class Route {
	static getRoutePage(route, navigator){
		let id = route.id,
            params = route.params,
            routeObj = RouteMap[id],
            Component;
        if (routeObj) {
            Component = routeObj.component;
            Object.assign(params, routeObj.params);
        } else {
            Component = Error;
            params = {message: '当前页面没有找到：' + id};
        }
        return <Component navigator={navigator} {...params} />;
	}
}


export default Route;