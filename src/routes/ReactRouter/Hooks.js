import React from 'react';
import {
    // react Hooks. React Hooks must be called in a React function component or a custom React Hook
    useHistory,
    useLocation,
    useParams, // url params
    useRouteMatch,
} from "react-router-dom";

export default function HomeButton() {
    const history = useHistory();
    const location = useLocation();
    console.log('location is', location);
    // {pathname: "/react-router/hooks", search: "", hash: "", state: undefined}

    const params = useParams();
    console.log('params is', params);

    const match = useRouteMatch('/react-router/hooks');
    console.log(match);

    function handleGoToMobxDemo1() {
        history.push({
            pathname: '/react-router',
            state: {
                message: '测试在两种路由下，刷新浏览器后，state是否会丢失'
            }
        });
    }

    return (
        <button type="button" onClick={handleGoToMobxDemo1}>
            跳转到路由测试页面
        </button>
    );
}