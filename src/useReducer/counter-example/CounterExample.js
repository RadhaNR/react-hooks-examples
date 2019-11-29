import React, { useState, useReducer } from 'react'
import {reducer, initialState} from './counter-reducer';

const CounterExample = () => {
    const [counter, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <p>Counter : {counter} </p>
            <button onClick={() => dispatch({ type: 'INR' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DEC' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    )
}

export default CounterExample;