import React, { createContext, useReducer, useEffect } from 'react';

import { ItemReducer } from '../reducers/ItemReducer';
import { HttpReducer } from '../reducers/HttpReducer';
import Axios from 'axios';

export const ItemContext = createContext();


const ItemContextProvider = (props) => {
    const [items, dispatch] = useReducer(ItemReducer, []);
    const [httpState, dispatchHTTPState] = useReducer(HttpReducer, { loading: false, errorMsg: null })

   
    useEffect(() => {

        dispatchHTTPState({ type: 'START_LOADING' })
        Axios.get('http://localhost:3001/items').then((response => {
            dispatch({ type: 'SET_ITEMS', items: response.data.items })
            dispatchHTTPState({ type: 'END_LOADING' })
        }
        )).catch(error => {
            dispatchHTTPState({ type: 'ERROR', msg: 'an error...' })

        })

    }, [])

    return (
        <ItemContext.Provider value={{ items, dispatch, httpState, dispatchHTTPState }}>
            {props.children}
        </ItemContext.Provider>
    );
}

export default ItemContextProvider;