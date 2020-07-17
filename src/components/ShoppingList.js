import React, { useContext } from 'react';

import { ItemContext } from '../contexts/ItemContext';
import { DarkModeContext } from '../contexts/DarkModeContext';
import ItemdDtails from './ItemdDtails';

import './ShoppingList.css'

const ShoppingList = () => {
    const { items } = useContext(ItemContext);
    const { isDark } = useContext(DarkModeContext);


    return (
        <div className="shopping-list">
            {items.length < 1 ?
                <div className="empty-list">No items !</div>
                :
                <ul>{items.map(item => <ItemdDtails item={item} key={item.id} mode={isDark ? 'dark' : ''} />)}</ul>
            }

        </div>);
}

export default ShoppingList;