import React, { useState } from 'react';

const UseStateExample = () => {
    /**
     *  useState() is react hooks lets you create state variable, and it will take initial value as argument
     *  State hook will return 2 thing, 1. current state value, 2. function to update it
     *  counter is a state variable
     *  We can also create multiple state varibale using useState method
    */

    const [counter, setCounter] = useState(0);
    const [num, setNum] = useState(0);
    const [name, setName] = useState('RADHA')

    const increment = (n) => {
        setCounter(counter + n);
        setNum(num + n);
        setName(Math.random())
    }
    return (
        <div>
            <p>Counter: {counter}</p>
            <p>Number: {num}</p>
            <p>Name: {name}</p>
            <button onClick={() => increment(1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    )
}

export default UseStateExample;