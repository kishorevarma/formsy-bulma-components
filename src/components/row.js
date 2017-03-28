import React, { PropTypes } from 'react';
import classNames from 'classnames/dedupe';
import styleClassNames from './prop-types';
import Label from './label';

const Row = (props) => {

    const { elementWrapperClassName, required, labelClassName, rowClassName, layout, label } = props;

    let element = props.children;

    if (layout === 'elementOnly') {
      return (
        <p className="conrol">
            {element}
        </p>
      );
    }

    // We should render the label if there is label text defined, or if the
    // component is required (so a required symbol is displayed in the label tag)
    const shouldRenderLabel = ((label !== null) || required);

    if (layout === 'horizontal') {
      return (
        <div className={classNames("field","is-horizontal", rowClassName)}>
          <div className={classNames("field-label", labelClassName)}>
            {(shouldRenderLabel) ? <Label {...props} /> : null}
          </div>
          <div className="field-body">
            <div className={classNames(["field", elementWrapperClassName])}>
                {element}
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className={classNames("field", elementWrapperClassName)}>
        {(shouldRenderLabel) ? <Label {...props} /> : null}
        {element}
      </div>
    );
}

Row.propTypes = {
    ...styleClassNames,
    children: PropTypes.node,
    fakeLabel: PropTypes.bool,
    htmlFor: PropTypes.string,
    label: PropTypes.node,
    layout: PropTypes.oneOf(['horizontal', 'vertical', 'elementOnly']),
    required: PropTypes.bool,
    showErrors: PropTypes.bool
};

Row.defaultProps = {
    label: null,
    rowClassName: '',
    elementWrapperClassName: '',
    required: false,
    showErrors: false,
    fakeLabel: false
};

export default Row;
