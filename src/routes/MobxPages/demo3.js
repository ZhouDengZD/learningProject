/**
 * 自动生成方法/类注释的方法：输入/**后  或者 ctrl+alt+D双击
*/

import React from 'react';
import { observable, action } from 'mobx';
import { observer } from "mobx-react"; // observer装饰器
// import { observer } from "mobx-react-lite"; // observer方法

//  示例3
// 验证1：响应式状态会被 `render` 提取调用，但不会调用其它 React 的生命周期方法，除了 `componentWillUpdate` 和 `componentDidUpdate` 
// 可以看到控制台中只打印出了 `componentWillUpdate` 和 `componentDidUpdate` 
// 验证2：componentWillReact
@observer
class MobxPage3 extends React.Component {
    @observable count = 0;

    @action
    setCount() {
        const timer = setInterval(() => {
            if (this.count < 1) {
                this.count++;
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }

    componentDidMount() {
        this.setCount();
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillReact() {
        console.log('componentWillReact');
        // 当组件观察的数据发生了改变，它会重新渲染，这个时候 `componentWillReact` 会被触发
    }

    render() {
        return (
            <React.Fragment>
                <div>{this.count}</div>
            </React.Fragment>
        );
    }
}
export default MobxPage3;