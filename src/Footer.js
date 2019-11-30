import React, {useEffect} from 'react';

const Footer = ()=> {
    useEffect(()=> {
        console.log('in Footer')
    })
    return (
        <div>Footer</div>
    )
}

//By default, React.memo will compare all props passed to the component by referential equality. 
//If these props are unchanged, React.memo will reuse the last rendered result, 
//therefore, it prevents the component from being rerendered
export default React.memo(Footer);// it will act like pure component 