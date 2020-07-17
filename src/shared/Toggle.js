import React from 'react';

import './Toggle.css'

const Toggle = ({ handler }) => {
    return (
        <div className="toggle">
            <label className="switch">
                <input type="checkbox" onClick={handler} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Toggle;