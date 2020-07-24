import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { ItemContext } from '../contexts/ItemContext';

export const useHttpClient = () => {
    const [isLoading, setIstLoading] = useState(false);
    const [error, setError] = useState();
    const { dispatch } = useContext(ItemContext);


    useEffect(() => {
        const fetchData = async () => {
            setIstLoading(true);
          try {
            const response = await Axios.get('http://localhost:3001/items');

            if (!response.statusText){
                throw new Error()
            }
            const items = response.data.items;
            dispatch({
              type: 'SET_ITEMS', items});
            
          } catch (error) { 
              setError('an error...');
          }
          setIstLoading(false);
        }
        fetchData()
      }, []) 

      return [isLoading, error];
}