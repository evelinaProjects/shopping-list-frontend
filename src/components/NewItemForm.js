import React, { useContext, useState } from 'react';

import { ItemContext } from '../contexts/ItemContext';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { DarkModeContext } from '../contexts/DarkModeContext';

import './NewItemForm.css';
import Axios from 'axios';

const NewItemForm = () => {
  const { dispatch, dispatchHTTPState } = useContext(ItemContext);
  const { isDark } = useContext(DarkModeContext);
  const [title, setTitle] = useState('')


  const typeitemHandler = event => {
    setTitle(event.target.value);
  }

  const additemHandler = event => {
    event.preventDefault();
    Axios.post('http://localhost:3001/items/',{title}).then((response) => {
      const item = response.data.newItem;
      dispatch({ type: 'ADD_ITEM', item });
    }).catch(error => {
      dispatchHTTPState({ type: 'ERROR', msg: 'an error...' })
  })
   
    event.target.reset();
  }

  return (
    <form className={`form ${isDark && 'dark'}`} onSubmit={additemHandler}>
      <Input value={'New item'} typeitemHandler={typeitemHandler} mode={isDark ? 'dark' : ''} />
      <Button value={'ADD'} type={'submit'} mode={isDark ? 'dark' : ''} />
    </form>
  );
}

export default NewItemForm;