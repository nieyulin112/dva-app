import dynamic from 'dva/dynamic';
const HomeCom = dynamic({
    component: () => import('../../views/home/homePage')
})
export default [
    {
        path: '/home',
        component: HomeCom,
        title: '主页'
    }
]