import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Flex } from 'antd-mobile';

class IndexPage extends React.Component {
  	render() {
		return (
			<div>
				<Flex>
					<Flex.Item>1</Flex.Item>
					<Flex.Item>2</Flex.Item>
				</Flex>
			</div>
		)
  	}
	skipHome = () => {
		this.props.dispatch(routerRedux.push('/home'));
	}
}
IndexPage.propTypes = {
};
export default connect()(IndexPage);
