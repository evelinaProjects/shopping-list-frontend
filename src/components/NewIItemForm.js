import React, { useContext, useState } from 'react';

import Input from '../shared/Input';
import Button from '../shared/Button';
import { DarkModeContext } from '../contexts/DarkModeContext';

import './NewIItemForm.css';

const NewIItemForm = ({addItem, inputValue, buttonValue }) => {
  const [title, setTitle] = useState('')
  const { isDark } = useContext(DarkModeContext);


  const typeitemHandler = event => {
    setTitle(event.target.value);
  }

  const additemHandler = event => {
    event.preventDefault();
    addItem(title);
    event.target.reset();
  }

  return (
    <form className={`form ${isDark && 'dark'}`} onSubmit={additemHandler}>
      <Input value={inputValue} typeitemHandler={typeitemHandler} mode={isDark ? 'dark' : ''} />
      <Button value={buttonValue} type={'submit'} mode={isDark ? 'dark' : ''} />
    </form>
  );
}

export default NewIItemForm;