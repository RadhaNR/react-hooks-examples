import React, { useContext } from 'react';
import { AppContext } from './create-context';

const ContextConsumer = () => {
    const { name } = useContext(AppContext);
    return (
        <div>
            ContextConsumer: {name}
        </div>
    )
}

export default ContextConsumer;