import React from 'react';

const Input = ({name, type, text = '', placeholder = '', onChange = Function.prototype, value='', onInput = Function.prototype , disabled=false, max, min=0}) => {
    return (
        <div className="row">
            <div className="input-field col s12">
                <label>{name}
                    <input
                        disabled={disabled}
                        name={`${name}`}
                        type={`${type}`}
                        className="validate"
                        placeholder={`${placeholder}`}
                        onChange={onChange}
                        value={value}
                        onInput={onInput}
                        max={max}
                        min={min}
                        step={1}
                    />
                </label>
                <span className="helper-text" data-error="wrong" data-success="right">{`${text}`}</span>
            </div>
        </div>
    );
};

export default Input;