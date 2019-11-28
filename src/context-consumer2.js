import React, { useContext } from 'react';
import { AppContext } from './create-context';
import { ThemeContext } from './create-context2';

const ContextConsumer2 = () => {
    const { name, setName } = useContext(AppContext);
    const { theme, setTheme } = useContext(ThemeContext)
    
    const changeSetting = () => {
        setName('Radha' + Math.random());
        setTheme({
            backgroundColor: 'white',
            color: 'black'
        })
    }
    console.log(theme)
    return (
        <div style={{ backgroundColor: theme.backgroundColor }}>
            ContextConsumer2---- {name}
            <button onClick={changeSetting}>Change Name</button>
        </div>
    )
}

export default ContextConsumer2;