import React, { PropTypes } from 'react';

/**
 * Wraps an input to implement a Bootstrap [Input Group](http://getbootstrap.com/components/#input-groups)
 */
const InputGroup = props => {
  const { addonBefore, addonAfter } = props;
  return (
    <div className="field has-addons">
      {addonBefore ? addonBefore : null}
      {props.children}
      {addonAfter ? addonAfter : null}
    </div>
  );
};

InputGroup.propTypes = {
  addonAfter: PropTypes.node,
  addonBefore: PropTypes.node,
  buttonAfter: PropTypes.node,
  buttonBefore: PropTypes.node,
  children: PropTypes.node
};

export default InputGroup;
