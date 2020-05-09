import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Button, Modal } from 'antd-mobile';
import Children from './children'
// import PropTypes from 'prop-types';
class HomePage extends React.Component {
    // 生命周期的使用
    constructor(props) {
        super()
        this.id = null;
        console.log('constructor');
        this.state = {
            ticket: 1,
            name: '聂玉林',
            childrenMsg: ''
        }
    }
    componentDidMount() {
        this.setState({ticket: 2}, () => {
            console.log('ticket', this.state.ticket);
        });
    }
    // 子组件是不是应该更新
    shouldComponentUpdate() {
        return false
    }
    componentDidUpdate() {
        console.log('组件更新完成')
    }
    componentWillUnmount() {
        console.log('组件销毁')
        console.log('ticket', this.state.ticket);
        clearInterval(this.id);
    }
    render() {
        // const name = '聂玉林'
        return (
            <div>
                <Button type="primary" onClick={this.skipIndex}>跳转</Button>
                <Button type="default" onClick={this.test}>测试</Button>
                <Button type="warning" onClick={this.btnMsg}>warning</Button>
                <Button type="default" onClick={this.getChildMsg}>获取子组件的值</Button>
                <Children ref="children">
                </Children>
            </div>
        )
    }
    skipIndex = () => {
        this.props.dispatch(routerRedux.push('/index'))
    }
    test = () => {
        let s = {
            a: 1
        }
        this.props.dispatch({
            type: 'homePage/fetch',
            payload: { ...s }
        })
    }
    btnMsg = () => {
        Modal.alert('消息', '侬好');
    }
    getChildMsg = () => {
        this.setState({
            childrenMsg: this.refs['children'].state.msg
        })
    }
}
export default connect(({ homePage }) => homePage )(HomePage); // 注入namespace
