import React, { PropTypes } from 'react';

/**
 * Wraps an input to implement a Bootstrap [Input Group](http://getbootstrap.com/components/#input-groups)
 */
const InputGroup = props => {
  const renderAddon = addon => {
    if (!addon) {
      return null;
    }
    return <div className="contorl">{addon}</div>;
  };

  return (
    <div className="field has-addons">
      {renderAddon(props.addonBefore)}
      {props.children}
      {renderAddon(props.addonAfter)}
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
