import React from 'react';
import {Router, Route } from 'dva/router';
import { routes } from './routes/index.router';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        {
          routes.map(ps => (<Route render={() =>{ document.title = ps.title; return <ps.component/>}} key={ps.path} path={ps.path} title={ps.title}></Route>))
        }
      </div>
    </Router>
  );
}

export default RouterConfig;
