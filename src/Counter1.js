import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle';

const Counter1 = () => {
    const [counter, setCounter] = useState(0);
    useDocumentTitle(counter);
   
    return (
        <div>
            <button onClick={()=> setCounter(counter + 1)}>Counter1 : {counter}</button>
        </div>
    )
}

export default Counter1;