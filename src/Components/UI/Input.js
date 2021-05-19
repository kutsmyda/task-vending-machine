import React from 'react';

const Input = ({name, type, text = '', placeholder = '', onChange = Function.prototype}) => {
    return (
        <div className="row">
            <div className="input-field col s12">
                <label>{name}
                    <input
                        name={`${name}`}
                        type={`${type}`}
                        className="validate"
                        placeholder={`${placeholder}`}
                        onChange={onChange}
                    />
                </label>
                <span className="helper-text" data-error="wrong" data-success="right">{`${text}`}</span>
            </div>
        </div>
    );
};

export default Input;