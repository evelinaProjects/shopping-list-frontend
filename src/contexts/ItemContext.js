import React, { createContext, useReducer } from 'react';
import { ItemReducer } from '../reducers/ItemReducer';

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
    const [items, dispatch] = useReducer(ItemReducer,[]);

    return (
        <ItemContext.Provider value={{ items, dispatch }}>
            {props.children}
        </ItemContext.Provider>
    );
}

export default ItemContextProvider;