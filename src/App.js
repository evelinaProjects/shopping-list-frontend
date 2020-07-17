import React from 'react';

import DarkModeContextProvider from './contexts/DarkModeContext';
import ShoppingListHeader from './components/ShoppingListHeader';
import Body from './components/Body';

import './App.css'

function App() {
  return (
    <DarkModeContextProvider>
      <div className="shopping-list-container">
        <ShoppingListHeader />
        <Body />
      </div>
    </DarkModeContextProvider>

  );
}

export default App;
