import React, { useContext } from 'react';

import { DarkModeContext } from '../contexts/DarkModeContext';
import Toggle from '../shared/Toggle';

import './ShoppingListHeader.css';

const ShoppingListHeader = () => {
    const { isDark, toggle } = useContext(DarkModeContext);
    return (
        <div className={`header-container ${isDark && 'dark'}`}>
            <Toggle handler={toggle} />
            <header className={`shopping-list-header ${isDark && 'dark'}`}>
                My Shopping List
        </header>
        </div>
    );
}

export default ShoppingListHeader;