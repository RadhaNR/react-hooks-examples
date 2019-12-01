import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle';

const Counter2 = () => {
    const [counter, setCounter] = useState(0);
    useDocumentTitle(counter);
    return (
        <div>
            <button onClick={()=> setCounter(counter + 1)}>Counter2 : {counter}</button>
        </div>
    )
}

export default Counter2;