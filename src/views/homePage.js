import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './IndexPage.less';
import PropTypes from 'prop-types';
class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'homePage/fetch',
            payload: {a: 1, b: 2}
        })
        console.log('this2223333', this.props);
    }
    render() {
        return (
            <div className={styles.normal}>
                <div className={styles.welcome} />
                <ul className={styles.list}>
                    <li onClick={this.skipIndex}>333</li>
                </ul>
                <div onClick={this.test}>测试</div>
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
      console.log('this2223333', this.props);
      this.props.dispatch({
          type: 'homePage/fetch',
          payload: { ...s }
      })
  }
}
HomePage.propTypes = {
    homePage: PropTypes.object.isRequired
};
export default connect(({ homePage }) => homePage )(HomePage);
