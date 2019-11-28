import React, { useEffect } from 'react';

const FunctionProps = (props) => {

    useEffect(() => {
        console.log('in functional comp: ', props)
    }, [props.name, props.age]);

    
    return (
        <React.Fragment>
            <p>Name: {props.name} </p>
            <p>Age: {props.age} </p>
        </React.Fragment>
    )
}

export default FunctionProps;