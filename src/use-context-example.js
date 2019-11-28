import React, { useState, useEffect } from 'react';
import ContextConsumer2 from './context-consumer2';
import { ThemeContext } from './create-context2';

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