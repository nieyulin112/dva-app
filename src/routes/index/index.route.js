import dynamic from 'dva/dynamic';
const IndexCom = dynamic({
    component: () => import('../../views/IndexPage')
})
export default [
    {
        path: '/index',
        component: IndexCom,
        title: '首页'
    }
]