import React, { useState } from 'react';

import DarkModeContextProvider from './contexts/DarkModeContext';
import ShoppingListHeader from './components/ShoppingListHeader';
import Body from './components/Body';

import './App.css'
import ItemContextProvider from './contexts/ItemContext';
import Button from './shared/Button';
import UserContextProvider from './contexts/UserContext';

 const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <DarkModeContextProvider>
      <div className="shopping-list-container">
        <ShoppingListHeader />
        <ItemContextProvider>
          <UserContextProvider>
          <Body isLogin={isLogin} setIsLogin={setIsLogin}/>   
          </UserContextProvider>
        </ItemContextProvider>
      </div>
      {isLogin ? <Button value='logout' handler={()=>{setIsLogin(!isLogin)}}/> : '' }

    </DarkModeContextProvider>

  );
}

export default App;
