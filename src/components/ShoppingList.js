import React, { useContext } from 'react';

import { DarkModeContext } from '../contexts/DarkModeContext';
import ItemdDtails from './ItemdDtails';

import './ShoppingList.css'
import Button from '../shared/Button';
import { ItemContext } from '../contexts/ItemContext';
import Axios from 'axios';

const ShoppingList = () => {
    const { isDark } = useContext(DarkModeContext);
    const { items, dispatch, httpState, dispatchHTTPState } = useContext(ItemContext);

    const cleanError = () => {
        dispatchHTTPState({ type: 'CLEAN_ERROR' })
    }

    const removeItem = item => {
        Axios.delete(`http://localhost:3001/items/${item._id}`).then((response) => {
            console.log(response.data);
            const item = response.data.item;
            dispatch({ type: 'REMOVE_ITEM', item });
          }).catch(error => {
            dispatchHTTPState({ type: 'ERROR', msg: 'an error...' })
        })
    }

    return (
        <div className="shopping-list">
            {httpState.loading ? 'Loading..' : httpState.errorMsg ? <Button value={httpState.errorMsg} handler={cleanError} mode={isDark ? 'dark' : ''} /> :
                items.length < 1 ?
                    <div className="empty-list">No items !</div>
                    :
                    <div className={`${items.length > 6 ? 'scrolling-box' : ''} ${isDark ? 'dark' : ''} />)}`} >
                        <ul>{items.map(item => <ItemdDtails item={item} key={item._id} removeItem={removeItem} mode={isDark ? 'dark' : ''} />)}</ul>
                    </div>}
        </div>);
}

export default ShoppingList;