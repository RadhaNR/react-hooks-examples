import React from 'react';
const Input = ({type, name, placeholder}, ref) => {
    return (
        <React.Fragment>
            <input type={type} name={name} placeholder={placeholder} ref={ref}/>
        </React.Fragment>
    )
}
const ForwardRef = React.forwardRef(Input); // we can pass ref from parent to child using React.forwardRef
export default ForwardRef;