import React from 'react';
import {Router, Route, Switch } from 'dva/router';
import { routes } from './routes/router';
function RouterConfig({ history }) {
	return (
		<Router history={history}>
			<Switch>
				{
					routes.map(ps => (<Route exact render={() =>{ document.title = ps.title; return <ps.component/>}} 
						key={ps.path} path={ps.path} title={ps.title}>
					</Route>))
				}
			</Switch>
		</Router>
	);
}

export default RouterConfig;
