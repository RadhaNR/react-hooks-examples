import React, { useState, useMemo } from 'react';

const UseMemo = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    // useEffect(()=> {
    //     console.log('useEffect')
    // })
    const increaseCounter1 = () => {
        console.log('increaseCounter1')
        setCounter1(counter1 + 1)
    }
    const increaseCounter2 = () => {
        console.log('increaseCounter2')
        setCounter2(counter2 + 1)
    }
    /**
     * useMemo : will memoize the value
     * When ever there is a chnage in dependent property, then it will recompute the value and cache the result and return the result
     * When ever there is no chnage or someother properties chnages(which is not there in dependecy list), it won't call this function.
     * instead it will take result from cache
     */
    const isEven = useMemo(() => {
        console.log('isEVen')
        //This is to show performance optiomization for testing complex calculations - testing purpose 
       // let i = 0;
        //while (i < 2000000000) i++;
        return counter1 % 2 === 0;
    }, [counter1]) // should call this method only if there any chnages to counter1 not on counter2

    return (
        <div>
            <button onClick={increaseCounter1}>Button One - {counter1}</button>
            <span>  Even: {isEven ? 'Yes' : 'No'}</span>
            <br />
            <button onClick={increaseCounter2}>Button Two - {counter2}</button>
        </div>

    )
}
export default UseMemo;