import React, { useContext } from 'react';

import { DarkModeContext } from '../contexts/DarkModeContext';
import ShoppingList from './ShoppingList';
import NewItemForm from './NewItemForm';
import SignForm from './SignForm';

import './Body.css'
import Card from '../shared/Card';

function Body({ isLogin, setIsLogin}) {
  const { isDark } = useContext(DarkModeContext);


  return (
    <div className={`body ${isDark && 'dark'}`}>
      {isLogin ?
        <Card>
          <NewItemForm inputValue={'New item'} buttonValue={'ADD'} />
          <ShoppingList />
        </Card>
        :
        <Card>
          <SignForm setIsLogin={setIsLogin}/>
        </Card>
      }


    </div>
  );
}

export default Body;
