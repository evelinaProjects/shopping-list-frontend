import React, { useContext } from 'react';

import ItemContextProvider from '../contexts/ItemContext';
import { DarkModeContext } from '../contexts/DarkModeContext';
import ShoppingList from './ShoppingList';
import NewItemForm from './NewItemForm';

import './Body.css'

function Body() {
  const { isDark } = useContext(DarkModeContext);
  return (
        <div className={`shopping-list-body ${isDark && 'dark'}`}>
        <ItemContextProvider>
          <NewItemForm />
          <ShoppingList />
        </ItemContextProvider>
        </div>
  );
}

export default Body;
