import react from 'react';
const { lazy } = react;
const Home = lazy(() => import('../pages/home'));
const Page404 = lazy(() => import('../pages/error'));
const TestPage = lazy(() => import('../pages/test'));
const Demo1 = lazy(() => import('../pages/demo/demo1'));
const Demo2 = lazy(() => import('../pages/demo/demo2'));
const Demo3 = lazy(() => import('../pages/demo/demo3'));
const Demo4 = lazy(() => import('../pages/demo/demo4'));
const prefixStr = '/pixi-practice';
export const routesArr = [
	{
		path: `${prefixStr}/home`,
		meta: {
			title:'home'
		},
		component: Home
	},
	{
		path: `${prefixStr}/error/404`,
		meta: {
			title:'页面找不到'
		},
		component: Page404
	},
	{
		path: `${prefixStr}/demo1`,
		meta: {
			title:'demo1'
		},
		component: Demo1
	},
	{
		path: `${prefixStr}/demo2`,
		meta: {
			title:'demo2'
		},
		component: Demo2
	},
	{
		path: `${prefixStr}/demo3`,
		meta: {
			title:'demo3'
		},
		component: Demo3
	},
	{
		path: `${prefixStr}/demo4`,
		meta: {
			title:'demo4'
		},
		component: Demo4
	},
	{
		path: `${prefixStr}/test`,
		meta: {
			title:'测试页面'
		},
		component: TestPage
	},
];

export default routesArr;