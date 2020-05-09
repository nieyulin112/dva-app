import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Button, Modal } from 'antd-mobile';
// import PropTypes from 'prop-types';
class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'homePage/fetch',
            payload: {a: 1, b: 2}
        })
    }
    render() {
        return (
            <div>
                <ul>
                    <li onClick={this.skipIndex}>333</li>
                </ul>
                <div onClick={this.test}>测试</div>
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
