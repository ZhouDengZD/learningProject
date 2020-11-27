module.exports = [
    {
        path: '/nav',
        component: "Nav",
    },
    // mobx
    {
        path: '/mobx/demo1',
        component: "MobxPages/demo1.js",
        name: 'mobx-demo1 页面',
    },
    {
        path: '/mobx/demo2',
        component: "MobxPages/demo2.js",
        name: 'mobx-demo2 页面',
    },
    {
        path: '/mobx/demo3',
        component: "MobxPages/demo3.js",
        name: 'mobx-demo3 页面',
    },
    {
        path: '/mobx/demo4',
        component: "MobxPages/demo4.js",
        name: 'mobx-demo4 页面',
    },
    // react-router
    {
        path: '/react-router',
        component: "ReactRouter",
        name: 'react-router 页面',
    },
    {
        path: '/react-router/hooks',
        component: "ReactRouter/Hooks.js",
        name: 'react-router-hooks 页面',
    },
    {
        path: '/about',
        // 使用Switch的情况下，只有About匹配，User不会渲染，换成其他任意不匹配about的（比如/haha）,User才会渲染
        component: "ReactRouter/Switch.js",
        name: 'Switch 验证页面',
    },
];