import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Icon = (props) => {
    return (
      <span className={classNames('icon', props.className)}>
        <i className={classNames('fa', props.symbol)}></i>
      </span>
    )
}

Icon.propTypes = {
    symbol: PropTypes.string.isRequired,
    className: PropTypes.string
};

Icon.defaultProps = {
  className: 'is-small'
}
export default Icon;
