import React, { PropTypes } from 'react';
import { styleClassNames } from './prop-types';

const ComponentCommon = () => {
  return <h1>This component just holds props and default props.</h1>;
};

ComponentCommon.propTypes = {
  ...styleClassNames,
  componentRef: PropTypes.any,
  errorMessages: PropTypes.array,
  getErrorMessage: PropTypes.any,
  getErrorMessages: PropTypes.any,
  getValue: PropTypes.any,
  hasValue: PropTypes.any,
  help: PropTypes.string,
  innerRef: PropTypes.any,
  isFormDisabled: PropTypes.any,
  isFormSubmitted: PropTypes.any,
  isPristine: PropTypes.any,
  isRequired: PropTypes.any,
  isValid: PropTypes.any,
  isValidValue: PropTypes.any,
  label: PropTypes.string,
  layout: PropTypes.oneOf(['horizontal', 'vertical', 'elementOnly']),
  resetValue: PropTypes.any,
  setValidations: PropTypes.any,
  setValue: PropTypes.any,
  showError: PropTypes.any,
  showErrors: PropTypes.bool,
  showRequired: PropTypes.any,

  // // Formsy props we don't use
  validationError: PropTypes.any,
  validationErrors: PropTypes.any,
  validations: PropTypes.any,

  // // HOC refs
  onChange: PropTypes.func,
  onSetValue: PropTypes.func
};

ComponentCommon.defaultProps = {
  onSetValue: () => {},
  onChange: () => {}
};

export default ComponentCommon;
