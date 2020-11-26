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
                  // 法一： render
                  // render={props => <Page {...props} />}

                  // 法二：component
                  // 会自动将three route props（match location history）传递给组件 相当于法一传了参数props的形式
                  // component={Page}

                  // 法三：children
                  children={props => <Page {...props} />}

                // 注意：children写法优先于另外两种，因此不要再同一个<Route>中使用多个
                >
                  {/* 法三的另一种写法： */}
                  {/* <Page /> */}
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
