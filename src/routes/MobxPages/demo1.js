/**
 * 自动生成方法/类注释的方法：输入/**后  或者 ctrl+alt+D双击
*/

import React from 'react';
import { observable } from 'mobx';
import { observer } from "mobx-react"; // observer装饰器
// import { observer } from "mobx-react-lite"; // observer方法


// 示例1： 子组件渲染来自父组件的可观察数据 探寻最基本的传参
// 运行后通过console.log的数据可以看出：
// 父组件的render其实只执行了1次 而子组件执行了4次
class MobxPage1 extends React.Component {
    count = 0;

    @observable data = { name: 'zhoudeng' };
    // 或者下面两种写法：
    // data = observable({ name: 'zhoudeng' });
    // data = observable.object({ name: 'zhoudeng' });

    componentDidMount() {
        // 改变data中name的值 看子组件是否会更新渲染
        const nameArr = ['周邓', '我是一个名字', '我的名字是哈哈哈'];
        const timer = setInterval(() => {
            if (this.count < 3) {
                this.data.name = nameArr[this.count];
                this.count++;
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        console.log('render');
        return (
            <React.Fragment>
                <ListChild data={this.data} />
                {/* 下面这种传递不可行：传递的不是引用 而是初始值'zhoudeng'了 */}
                {/* <ListChild name={this.data.name} /> */}
            </React.Fragment>
        );
    }
}

@observer
class ListChild extends React.Component {
    render() {
        console.log(this.props.data.name);
        return <div>姓名：{this.props.data.name}</div>;
    }
}
export default MobxPage1;