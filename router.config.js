import Home from '../compnents/home';
import Doc from '../compnents/doc';
import Api from '../compnents/api';
import Gui from '../compnents/gui';
import Course from '../compnents/course';
import Login from '../compnents/login';
const routes = [
    // 首页
    {
        path: '/',
        exact: true,
        title: '首页',
        conponent: Home
    },
    // 文档页
    {
        path: '/doc',
        title: '文档',
        conponent: Doc,
        routes1: [
            {
                path: '/doc/api',
                title: 'API接口',
                conponent: Api,
            },
            {
                path: '/doc/gui',
                title: 'gui教程',
                conponent: Gui,
            }
        ]
    },
    // 教程页
    {
        path: '/course',
        title: '教程页',
        exact: true,
        pri: true,
        conponent: Course,
        routes1: [
            {
                path: '/doc/api',
                title: 'API接口',
                conponent: Api,
            },
            {
                path: '/doc/gui',
                title: 'gui教程',
                conponent: Gui,
            }
        ]
    },
    // login
    {
        path: '/login',
        title: '登录',
        exact: true,
        conponent: Login
    }
];

export default routes;
