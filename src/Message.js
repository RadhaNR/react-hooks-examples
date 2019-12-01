import React, { useRef, useLayoutEffect } from 'react';

const Message = ({ boxRef, children }) => {
    const msgRef = useRef(null);
    useLayoutEffect(() => {
        const rect = boxRef.current.getBoundingClientRect();
        msgRef.current.style.top = `${rect.height + rect.top}px`;
    }, []);

    return <span ref={msgRef} className="msg">{children}</span>;
};

export default Message;