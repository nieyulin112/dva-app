import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Button, Modal } from 'antd-mobile';
// import PropTypes from 'prop-types';
class HomePage extends React.Component {
    // 生命周期的使用
    componentWillReceiveProps() {
        let { list } = this.props;
        console.log('list', list);
    }
    componentDidMount() {
        console.log('componentDidMount', this);
        // this.props.dispatch({
        //     type: 'homePage/fetch',
        //     payload: {a: 1, b: 2}
        // })
    }
    render() {
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
