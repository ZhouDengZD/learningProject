/**
 * 自动生成方法/类注释的方法：输入/**后  或者 ctrl+alt+D双击
*/

import React from 'react';
import { observable } from 'mobx';
import { observer } from "mobx-react"; // observer装饰器
// import { observer } from "mobx-react-lite"; // observer方法

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
