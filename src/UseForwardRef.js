import React, { useRef } from 'react';
import Input from './InputForwadRef';

const UseForwardRef = () => {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const paraRef = useRef(null);

    const onHandleSubmit = (e) => {
        e.preventDefault()
        console.log(firstNameRef.current.value, lastNameRef.current.value, paraRef.current.textContent);
        let obj = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value
        }
        console.log(obj)
    }

    return (
        <React.Fragment>
            <p ref={paraRef}>This is paragraph</p>
            <form>
                <Input type="text" placeholder="Enter FirstName" ref={firstNameRef}  name='firstName'/>
                <Input type="text" placeholder="Enter LastName" ref={lastNameRef} name='lastName' />
                <button onClick={onHandleSubmit}> Submit </button>
            </form>
        </React.Fragment>
    )
}
export default UseForwardRef;