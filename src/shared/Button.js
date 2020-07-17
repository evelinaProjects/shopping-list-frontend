import React from 'react';

import './Button.css'

const Button = ({ value, type, mode, handler }) => {
    return (
        <div className="button">
            {
                type === 'submit' ?
                    <input className={`submit ${mode ==='dark' && 'dark'}`} type="submit" value={value} /> :
                    <button  className={`regular-button ${mode ==='dark'? 'dark' : ''}`} onClick={handler}>{value}</button>
            }
        </div>
    )
}

export default Button;