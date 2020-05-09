import React from 'react'
import PropTypes from 'prop-types';
export default class Children extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            msg: '我是子组件22222'
        }
    }
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}
Children.defaultProps = {
    name: '聂玉林'
}
Children.propTypes = {
    name: PropTypes.string
}
