import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import found from '../pages/found'
import list from '../pages/list'
import my from '../pages/my'
import Course from '../pages/Course'
import Course1 from '../pages/Course1'

import bbs from '../pages/bbs'

Vue.use(Router)

export default [{
		path: '/',
		component: Home
	},
	{
		path: '/Home',
		component: Home
	},
	{
		path: '/found',
		component: found
	},
	{
		path: '/list',
		component: list
	},
	{
		path: '/my',
		component: my
	},
	{
		path: '/bbs',
		component: bbs
	},
	{
		path: '/Course/:index',
		name: 'Course',
		component: Course
	},
	{
		path: '/Course1/:index',
		name: 'Course1',
		component: Course1
	}
]