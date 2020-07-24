import React from 'react';

import Button from '../shared/Button';

import './ItemdDtails.css';

const ItemdDtails = ({removeItem, item, mode}) => {

    const removeitemHandler = () => {
        removeItem(item);
    }
    return (
        <li className={`item ${mode==='dark' && 'dark'}`} >
            <Button value={<i className="far fa-trash-alt"></i>} handler={removeitemHandler} mode={mode}/>
            <p className={`detail ${mode==='dark' && 'dark'}`}>{item.title}</p>
        </li>
    );
}

export default ItemdDtails; 