import React, { PropTypes } from 'react';

const Help = (props) => {
    return (
        <p className="help">{props.help}</p>
    );
}

Help.propTypes = {
    help: PropTypes.string.isRequired
}

export default Help;
