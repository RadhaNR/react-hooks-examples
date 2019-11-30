import React, { useEffect } from 'react';

const Content = (props) => {

    useEffect(() => {
        console.log('in Content effect')
    })
    return (
        <div>
            Content Page
            <p>Age: {props.age}</p>
            <button onClick={()=> props.contentGenerate()}>Generate Age</button>
        </div>
    )
}

//By default, React.memo will compare all props passed to the component by referential equality. 
//If these props are unchanged, React.memo will reuse the last rendered result, 
//therefore, it prevents the component from being rerendered
export default React.memo(Content);