import React, { useContext, useState } from 'react';

import { ItemContext } from '../contexts/ItemContext';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { DarkModeContext } from '../contexts/DarkModeContext';

import './NewItemForm.css';

const NewItemForm = () => {
  const { dispatch } = useContext(ItemContext);
  const [title, setTitle] = useState('')
  const { isDark } = useContext(DarkModeContext);


  const typeitemHandler = event => {
    setTitle(event.target.value);
  }

  const additemHandler = event => {
    event.preventDefault();
    dispatch({
      type: 'ADD_ITEM', item: {
        title
      }
    });
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