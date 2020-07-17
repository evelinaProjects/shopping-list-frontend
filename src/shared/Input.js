import React from 'react';

import './Input.css'

const Input = ({ value, typeitemHandler, mode }) => {
    return (<div className="input">
        <input className={`text ${mode ==='dark' && 'dark'}`} type='text' name="title" onChange={typeitemHandler} required autoComplete={'off'}></input>
        <label className={`label ${mode ==='dark' && 'dark'}`} htmlFor="title">
            <span className="content">{value}</span>
        </label>
    </div>)
}

export default Input;