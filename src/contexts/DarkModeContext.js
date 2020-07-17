import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext();

const DarkModeContextProvider  = props => {
    const [isDark, setIsDark] = useState(false);

    const toggle = () => {
         setIsDark(!isDark);
    }
    return (
        <DarkModeContext.Provider value={{isDark, toggle}}>
            {props.children}
        </DarkModeContext.Provider>
      );
}
 
export default DarkModeContextProvider;