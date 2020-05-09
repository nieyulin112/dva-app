import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Button, Modal } from 'antd-mobile';
// import PropTypes from 'prop-types';
class HomePage extends React.Component {
    // 生命周期的使用
    constructor(props) {
        super()
        this.id = null;
        console.log('constructor');
        this.state = {
            ticket: 1
        }
    }
    componentDidMount() {
        this.setState({ticket: 2}, () => {
            console.log('setState')
        })
        console.log('ticket', this.state.ticket);
        this.id = setInterval(() => {
            console.log(1)
        }, 1000)
        console.log('组件挂载完成');
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
        clearInterval(this.id);
    }
    render() {
        console.log('render')
        return (
            <div>
                <Button type="primary" onClick={this.skipIndex}>跳转</Button>
                <Button type="default" onClick={this.test}>测试</Button>
                <Button type="warning" onClick={this.btnMsg}>warning</Button>
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
}
HomePage.propTypes = {
};
export default connect(({ homePage }) => homePage )(HomePage); // 注入namespace
