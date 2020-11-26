import React from 'react';
import { observable, computed, action, autorun, when } from 'mobx';
import { observer } from "mobx-react"; // observer装饰器
// import { observer } from "mobx-react-lite"; // observer方法

//  示例2: @computed @action autorun when 等特性的使用
// 可以看到页面最后变成了13 控制台也打印出了10-13
@observer
class MobxPage2 extends React.Component {
    @observable count = 0;

    @computed get total() {
        return this.count + 10;
    }

    @action
    setCount() {
        const timer = setInterval(() => {
            if (this.count < 3) {
                this.count++;
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }

    componentDidMount() {
        this.setCount();

        autorun(() => {
            console.log('我是autorun函数 this.total is', this.total);
        });

        when(() => this.total === 12, () => {
            console.log('我是when函数，我在this.total === 12时执行');
        });
    }

    render() {
        return (
            <React.Fragment>
                <div>{this.total}</div>
            </React.Fragment>
        );
    }
}
export default MobxPage2;