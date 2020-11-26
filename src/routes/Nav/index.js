import React from 'react';

import routerData from '../../config/router.js';

export default class NavPage extends React.Component {

    handleGoToPage = (path) => {
        this.props.history.push(path);
    };

    render() {
        return (
            <div>
                <h1>导航页面</h1>
                <ul>
                    {
                        routerData.reduce((arr, routerItem, index) => {
                            // 排除导航页面自身
                            if (routerItem.path === '/nav') {
                                return arr;
                            }
                            return arr.concat(<li key={'url-li' + index} onClick={() => this.handleGoToPage(routerItem.path)}>{routerItem.name}</li>);
                        }, [])
                    }
                </ul>
            </div>
        );
    }
}