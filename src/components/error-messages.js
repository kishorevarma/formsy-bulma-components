import React, { PropTypes } from 'react';

const ErrorMessages = (props) => {
    let messageNodes = props.messages.map((message, key) => {
        return (
            <p key={key} className="help is-danger">{message}</p>
        );
    });
    return (
        <div>{messageNodes}</div>
    );
};

ErrorMessages.propTypes = {
    messages: PropTypes.array
};

ErrorMessages.defaultProps = {
    messages: []
};

export default ErrorMessages;
