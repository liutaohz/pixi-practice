import react from 'react';
const { lazy } = react;
const Home = lazy(() => import('../pages/home'));
const Page404 = lazy(() => import('../pages/error'));
const TestPage = lazy(() => import('../pages/test'));
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
		path: `${prefixStr}/test`,
		meta: {
			title:'测试页面'
		},
		component: TestPage
	},
];

export default routesArr;