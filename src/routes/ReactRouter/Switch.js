// 验证 使用Switch 和 不使用Switch(直接<Route>s)的区别 
// 可以看到， http://localhost:3000/about下：

// 1. 不使用Switch时：
//  About, User, NoMatch三个组件都会渲染, 因为它们都匹配当前path(/about)

// 2. 使用Switch的时：
// 只有About组件会渲染
// 因为Switch只会渲染其child中第一个匹配的 当它发现About匹配之后 就不会再继续查找

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";



export default class SwitchPage extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/:user">
                        <User />
                    </Route>
                    <Route>
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

class About extends React.Component {
    render() {
        return <h1>About 页面</h1>;
    }
}

class User extends React.Component {
    render() {
        return <h1>User 页面</h1>;
    }
}

class NoMatch extends React.Component {
    render() {
        return <h1>NoMatch 页面</h1>;
    }
}