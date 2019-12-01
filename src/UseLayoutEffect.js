import React from 'react';
import  Message  from "./Message";

const UseLayoutEffect = () => {
    const [show, setShow] = React.useState(false);
    const boxRef = React.useRef(null);

    return (
        <div>
            <div ref={boxRef} className="box" onClick={() => setShow(prev => !prev)}>Click me</div>
            {show && <Message boxRef={boxRef}>Foo bar baz</Message>}
        </div>
    );
}

export default UseLayoutEffect;