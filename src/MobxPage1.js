/**
 * 自动生成方法/类注释的方法：输入/**后  或者 ctrl+alt+D双击
*/

import React from 'react';
import { observable, computed, action, autorun, when } from 'mobx';
import { observer } from "mobx-react"; // observer装饰器
// import { observer } from "mobx-react-lite"; // observer方法


// 示例1： 子组件渲染来自父组件的可观察数据 探寻最基本的传参
// 运行后通过console.log的数据可以看出：
// 父组件的render其实只执行了1次 而子组件执行了4次
// class MobxPage1 extends React.Component {
//     count = 0;

//     @observable data = { name: 'zhoudeng' };
//     // 或者下面两种写法：
//     // data = observable({ name: 'zhoudeng' });
//     // data = observable.object({ name: 'zhoudeng' });

//     componentDidMount() {
//         // 改变data中name的值 看子组件是否会更新渲染
//         const nameArr = ['周邓', '我是一个名字', '我的名字是哈哈哈'];
//         const timer = setInterval(() => {
//             if (this.count < 3) {
//                 this.data.name = nameArr[this.count];
//                 this.count++;
//             } else {
//                 clearInterval(timer);
//             }
//         }, 1000);
//     }

//     render() {
//         console.log('render');
//         return (
//             <React.Fragment>
//                 <ListChild data={this.data} />
//                 {/* 下面这种传递不可行：传递的不是引用 而是初始值'zhoudeng'了 */}
//                 {/* <ListChild name={this.data.name} /> */}
//             </React.Fragment>
//         );
//     }
// }

// @observer
// class ListChild extends React.Component {
//     render() {
//         console.log(this.props.data.name);
//         return <div>姓名：{this.props.data.name}</div>;
//     }
// }
// export default MobxPage1;


//  示例2: @computed @action autorun when 等特性的使用
// 可以看到页面最后变成了13 控制台也打印出了10-13
// @observer
// class MobxPage2 extends React.Component {
//     @observable count = 0;

//     @computed get total() {
//         return this.count + 10;
//     }

//     @action
//     setCount() {
//         const timer = setInterval(() => {
//             if (this.count < 3) {
//                 this.count++;
//             } else {
//                 clearInterval(timer);
//             }
//         }, 1000);
//     }

//     componentDidMount() {
//         this.setCount();

//         autorun(() => {
//             console.log('我是autorun函数 this.total is', this.total);
//         });

//         when(() => this.total === 12, () => {
//             console.log('我是when函数，我在this.total === 12时执行');
//         });
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <div>{this.total}</div>
//             </React.Fragment>
//         );
//     }
// }
// export default MobxPage2;



//  示例3
// 验证1：响应式状态会被 `render` 提取调用，但不会调用其它 React 的生命周期方法，除了 `componentWillUpdate` 和 `componentDidUpdate` 
// 可以看到控制台中只打印出了 `componentWillUpdate` 和 `componentDidUpdate` 
// 验证2：componentWillReact
// @observer
// class MobxPage3 extends React.Component {
//     @observable count = 0;

//     @action
//     setCount() {
//         const timer = setInterval(() => {
//             if (this.count < 1) {
//                 this.count++;
//             } else {
//                 clearInterval(timer);
//             }
//         }, 1000);
//     }

//     componentDidMount() {
//         this.setCount();
//     }

//     componentWillReceiveProps() {
//         console.log('componentWillReceiveProps');
//     }

//     shouldComponentUpdate() {
//         console.log('shouldComponentUpdate');
//     }

//     componentWillUpdate() {
//         console.log('componentWillUpdate');
//     }

//     componentDidUpdate() {
//         console.log('componentDidUpdate');
//     }

//     componentWillReact() {
//         console.log('componentWillReact');
//         // 当组件观察的数据发生了改变，它会重新渲染，这个时候 `componentWillReact` 会被触发
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <div>{this.count}</div>
//             </React.Fragment>
//         );
//     }
// }
// export default MobxPage3;

//  示例4: observable.box()的使用
@observer
class MobxPage4 extends React.Component {
    secondsPassed = observable.box(0);
    // 写法二
    // @observable secondsPassed = 0;

    componentDidMount() {
        setInterval(() => {
            this.secondsPassed.set(this.secondsPassed.get() + 1);
            // 写法二
            // this.secondsPassed++;
        }, 1000);
    }

    render() {
        return (<span>Seconds passed: { this.secondsPassed.get()} </span>);
        // 写法二
        // return (<span>Seconds passed: { this.secondsPassed} </span>);
    }
}
export default MobxPage4;
