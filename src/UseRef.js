import React, { useRef } from 'react';

const UseRef = () => {
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
                <input type="text" placeholder="Enter FirstName" ref={firstNameRef} />
                <input type="text" placeholder="Enter LastName" ref={lastNameRef} />
                <button onClick={onHandleSubmit}> Submit </button>
            </form>
        </React.Fragment>
    )
}
export default UseRef;