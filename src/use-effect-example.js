import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('Radha');

    /**
     * useEffect is to handle the side effect from functional components
     * useEffect will run, after every render function(flushing changes to the DOM)
     * using useEffect, we can achive componentDidMount(), componentDidUpdate() and componentWiillUnMount()
     * By default, it runs both after the first render and after every update
     */
    useEffect(() => {
        // ("if there is a chnage in state varible 'name', then useEffect wll run, if any other variable updates, this useEffect will not run.")
        console.log(name, counter)
    }, [name]); //if [counter] pass variable name when you want to conditaionally render based on counter variable status chnage
    // if it is [], then it will behave like componentDidMount

    // We can use multiple useEffect
    useEffect(() => {
        const btn = document.getElementById('btn');
        btn.addEventListener('click', () => {console.log("added") });
        const intr = setInterval(()=> {console.log('set Interval')}, 1000)

        // returned function will be called on component unmount 
        return () => {
            clearInterval(intr);
        }
       // return () => console.log('unmounting...');
    })
    const increment = () => {
        setCounter(counter + 1);

    }
    const nameChange = () => {
        setName(Math.random())
    }
    return (

        <React.Fragment>
            <p>Counter: You have clicked {counter} times</p>
            <p>Name: {name}</p>
            <button id="btn" >
                Add Event 
            </button>
            <button id="btn1" onClick={increment}>
                COunter
            </button>
            <button id="btn2" onClick={nameChange}>
                Name
            </button>
        </React.Fragment>
    )

}

export default UseEffectExample;