import React from 'react'
import PropTypes from 'prop-types';
export default class Children extends React.Component {
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
