import React, { Suspense } from 'react';
import { BrowserRouter as Router,Redirect, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import routesArr from './routes';

const Routers = () => {
  const RouteTab = (route) => {
    return <Route exact path={route.path} render={props => (
      <route.component {...props} routes={route.routes} meta={route.meta || ''} cb={route.cb ? route.cb : undefined} />
    )} />
  }
	return (
		<Suspense fallback={<div><Spin style={{
			position: 'fixed',
			left: '50%',
			top:'50%'
		}} size="large" /></div>}>
			<Router>
        <Switch>
          {routesArr.map((route, i) => {
            return <RouteTab key={i} {...route} />
          })}
          <Redirect from="/pixi-practice/" exact to="/pixi-practice/home" />
          <Redirect from="/" exact to="/pixi-practice/home" />
          <Redirect to="/pixi-practice/error/404" />
				</Switch>
		  </Router>
    </Suspense>
	);
};

export default Routers;