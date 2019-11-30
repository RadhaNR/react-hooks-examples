import React, {useEffect} from 'react';

const Header = ()=> {
    useEffect(()=> {
        console.log('in Header')
    })
    return (
        <div>Header</div>
    )
}

//By default, React.memo will compare all props passed to the component by referential equality. 
//If these props are unchanged, React.memo will reuse the last rendered result, 
//therefore, it prevents the component from being rerendered
export default React.memo(Header); // it will act like pure component