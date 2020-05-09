import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Button } from 'antd-mobile';

class IndexPage extends React.Component {
	constructor(props) {
		super(props);
		console.log('props', props);
	} 
  	render() {
		return (
			<div>
				<Button type="primary" onClick={this.skipHome}>
					返回
				</Button>
			</div>
		)
  	}
	skipHome = () => {
		this.props.dispatch(routerRedux.push('/home'));
	}
}
IndexPage.propTypes = {
};
export default connect(({ indexPage }) => indexPage)(IndexPage);
