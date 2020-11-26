import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import routerData from './config/router.js';


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading...</div>}>
        <Switch>
          {
            routerData.map(routerItem => {
              let Page = lazy(() => import(`./routes/${routerItem.component}`)); // 给匿名组件取名
              return (
                <Route
                  exact
                  path={routerItem.path} key={'router' + routerItem.path}
                // render={() => <Page />}  // 法一
                >
                  {/* 法二： */}
                  <Page />
                </Route>
              );
            })
          }
        </Switch>
      </Suspense>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
