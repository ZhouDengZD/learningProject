import React from 'react';


export default class ReactRouterPage extends React.Component {


    render() {
        console.log(this.props);
        // 通过从react hooks页面跳转过来 之后刷新浏览器 这个测试得知：
        // HashRouter模式下this.props.history.location.key不存在，
        // 且刷新后state的值会丢失：this.props.history.location.state和this.props. location.state值为undefined
        // 所以HashRouter模式下页面如果是通过state传参，刷新页面后，页面会出现异常
        return (
            <div>
                <h1>路由测试页面</h1>
            </div>
        );
    }
}