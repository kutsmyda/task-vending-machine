import React from 'react';
import './Warning.css'

const Warning = ({className, text}) => {

    return (
        <div className={ `${className}`}>
            {text}
        </div>
    );
};

export default Warning;