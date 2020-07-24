import React, { useContext } from 'react';

import { DarkModeContext } from '../contexts/DarkModeContext';
import ItemdDtails from './ItemdDtails';

import './ShoppingList.css'
import Button from '../shared/Button';

const ShoppingList = ({ items, removeItem, loading, errorMsg, cleanError }) => {
    const { isDark } = useContext(DarkModeContext);

    return (
        <div className="shopping-list">
            {loading ? 'Loading..' : errorMsg ? <Button value={errorMsg} handler={cleanError} mode={isDark ? 'dark' : ''}/>:
                items.length < 1 ?
                    <div className="empty-list">No items !</div>
                    :
                    <div className={`${items.length>6 ? 'scrolling-box' : ''} ${isDark ? 'dark' : ''} />)}`} >
                        <ul>{items.map(item => <ItemdDtails item={item} key={item._id} removeItem={removeItem} mode={isDark ? 'dark' : ''} />)}</ul>
                    </div>}
        </div>);
}

export default ShoppingList;