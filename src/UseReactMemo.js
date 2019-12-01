import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Calculation from './Calculation';

const UseReactMemo = () => {
    const [num, setNum] = useState(0);
    const [age, setAge] = useState(23);
    const [evenOdd, setEvenOdd] = useState(0);

    useEffect(() => {
        console.log('in UseReactMemo')
    })
    const checkNum = () => {
        console.log(evenOdd)
        let i = 0
        while(i < 2000000000) i++;
        if ( evenOdd % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    const generate = useCallback(() => {
        setNum(num + 1)
    }, [num])

    //When ever component re-renders this function will get called every time,to avoid this we will use useCallback
    const contentGenerate = useCallback(() => {
        setAge(Math.random())
    }, [age]);
    
    const setNumber = () => {
        setEvenOdd(evenOdd + 1)
    }
    return (
        <React.Fragment>
            <p>{num}</p>
            <button onClick={generate}>Generate</button>
            <Header />
            <hr />
            <Content age={age} contentGenerate={contentGenerate} /><br /><br />
            <hr />
            <Footer />
        </React.Fragment>
    )
}

export default UseReactMemo;