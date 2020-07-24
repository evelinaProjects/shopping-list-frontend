import React, { useState } from 'react';

import DarkModeContextProvider from './contexts/DarkModeContext';
import ShoppingListHeader from './components/ShoppingListHeader';
import Body from './components/Body';

import './App.css'
import ItemContextProvider from './contexts/ItemContext';
import Button from './shared/Button';

 const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <DarkModeContextProvider>
      <div className="shopping-list-container">
        <ShoppingListHeader />
        <ItemContextProvider>
          <Body isLogin={isLogin}/>
          
        </ItemContextProvider>
      </div>
      <Button value={`${isLogin? 'logout': 'login'}`} handler={()=>{setIsLogin(!isLogin)}}/>

    </DarkModeContextProvider>

  );
}

export default App;
