import React, { useState, useEffect } from 'react';
import ContextConsumer2 from './ContextConsumer2';
import { ThemeContext } from './CreateContext2';

const themes = {
    backgroundColor: 'black',
    color: 'white'

}

//export const ThemeContext = React.createContext(null);

const UseContextExample = () => {
    const [theme, setTheme] = useState(themes)
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ContextConsumer2 />
        </ThemeContext.Provider>
    )
}
export default UseContextExample;