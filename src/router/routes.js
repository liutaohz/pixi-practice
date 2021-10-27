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
			title:'Pixi.js练习'
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
			title:'基本使用，Application,loader及精灵图'
		},
		component: Demo1
	},
	{
		path: `${prefixStr}/demo2`,
		meta: {
			title:'文本、图形绘制，键盘交互，碰撞检测'
		},
		component: Demo2
	},
	{
		path: `${prefixStr}/demo3`,
		meta: {
			title:'平铺纹理，伪3D效果'
		},
		component: Demo3
	},
	{
		path: `${prefixStr}/demo4`,
		meta: {
			title:'逐帧动画，分组动作'
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