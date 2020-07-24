import React, { useContext } from 'react';

import { ItemContext } from '../contexts/ItemContext';
import { DarkModeContext } from '../contexts/DarkModeContext';
import ShoppingList from './ShoppingList';
import NewIItemForm from './NewIItemForm';

import './Body.css'
import Axios from 'axios';

function Body({ isLogin }) {
  const { isDark } = useContext(DarkModeContext);
  const { items, dispatch, httpState, dispatchHTTPState, increasePage, decreasePage } = useContext(ItemContext);


  const addItem = async (title) => {
    try {
      const response = await Axios.post('http://localhost:3001/items', { title });
      dispatch({ type: 'ADD_ITEM', item: response.data.newItem });
    } catch (error) {
      dispatchHTTPState({ type: 'ERROR', msg: 'an error...' })
    }

  }
  const cleanError = () => {
    dispatchHTTPState({ type: 'CLEAN_ERROR' })
  }

  const removeItem = async (item) => {
    try {
      await Axios.delete(`http://localhost:3001/items/${item._id}`);
      dispatch({ type: 'REMOVE_ITEM', item });
    } catch (error) {
      dispatchHTTPState({ type: 'ERROR', msg: 'an error...' })

    }
  }

  return (
    <div className={`shopping-list-body ${isDark && 'dark'}`}>
      {isLogin ?
        <>
          <NewIItemForm inputValue={'New item'} buttonValue={'ADD'}  addItem={addItem} />
          <ShoppingList items={items} removeItem={removeItem} loading={httpState.loading} errorMsg={httpState.errorMsg} decrease={decreasePage} increase={increasePage} cleanError={cleanError} />
        </>
        :
        <>
        </>
      }


    </div>
  );
}

export default Body;
