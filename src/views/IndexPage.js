import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './IndexPage.less';

class IndexPage extends React.Component {
  	render() {
		return (
			<div className={styles.normal}>
				<div className={styles.welcome} />
				<ul className={styles.list}>
					<li onClick={this.skipHome}>22222</li>
				</ul>
			</div>
		)
  	}
	skipHome = () => {
		console.log('props', this);
		this.props.dispatch(routerRedux.push('/home'));
	}
}
IndexPage.propTypes = {
};
export default connect()(IndexPage);
