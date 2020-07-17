import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

import Button from '../shared/Button';

import './ItemdDtails.css';

const ItemdDtails = ({ item, mode }) => {
    const { dispatch } = useContext(ItemContext);

    const removeitemHandler = () => {
        dispatch({ type: 'REMOVE_ITEM', item })
    }
    return (
        <li className={`item ${mode==='dark' && 'dark'}`} >
            <Button value={<i className="far fa-trash-alt"></i>} handler={removeitemHandler} mode={mode}/>
            <p className={`detail ${mode==='dark' && 'dark'}`}>{item.title}</p>
        </li>
    );
}

export default ItemdDtails; 