import React, { Component, PropTypes } from 'react';
import ControlCommon from './control-common';
import classNames from 'classnames';
import Icon from '../icon';

class InputControl extends Component {

    initElementRef = (element) => {
        this.element = element;
    }

    render() {
        const controlProps = {...this.props};
        let { className } = this.props;
        className = classNames('input', className, {'is-danger': this.props.showErrors});
        if (['hidden', 'range'].indexOf(this.props.type) !== -1) {
            className = null;
        }
        delete controlProps.showErrors;
        delete controlProps.controlClassName
        return (
          <div className={classNames("control", "has-icon", "has-icon-right", this.props.controlClassName)}>
            <input
                {...controlProps}
                className={className}
                ref={this.initElementRef}
            />
            {this.props.showErrors ? <Icon symbol="fa-warning" /> : null}
          </div>
        );
    }
}

InputControl.propTypes = {
    ...ControlCommon.propTypes,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    controlClassName: PropTypes.string,
    showErrors: PropTypes.bool,
}

InputControl.defaultProps = {
    type: 'text'
}

export default InputControl;
