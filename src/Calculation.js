import React, {useEffect} from 'react';

const Calculation = (props)=> {
    useEffect(()=> {
        console.log('in Calculation')
    })
    return (
        <div>
            Is {props.evenOdd} odd or even ? : {props.checkNum () ? 'Yes': 'No'}
        </div>
    )
}
export default React.memo(Calculation);