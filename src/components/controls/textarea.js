import React, { PropTypes, Component } from 'react';
import ControlCommon from './control-common';

class TextareaControl extends Component {
  initElementRef = element => {
    this.element = element;
  };

  render() {
    return <textarea {...this.props} ref={this.initElementRef} />;
  }
}

TextareaControl.propTypes = {
  ...ControlCommon.propTypes,
  className: PropTypes.string,
  value: PropTypes.string
};

TextareaControl.defaultProps = {
  className: 'textarea',
  cols: 0, // React doesn't render the cols attribute if it is zero
  rows: 3,
  value: ''
};

export default TextareaControl;
