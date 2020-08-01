import React, { createContext, useState } from 'react';

export const userContext = createContext();

const UserContextProvider = (props) => {
    const [users, setUsers] = useState([])
    return ( 
        <userContext.Provider value={{users, setUsers}}>
            {props.children}
        </userContext.Provider>
     );
}
 
export default UserContextProvider;