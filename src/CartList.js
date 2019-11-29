import React, { useContext } from 'react';
import { DELETE_FROM_CART, CLEAR_CART } from './action-types';
import { ProductContext } from './ProductContext';

const CartList = () => {
    const { list, dispatch } = useContext(ProductContext);

    const deleteFromCart = (product) => {
        dispatch({ type: DELETE_FROM_CART, id: product.id });
    }
    const clearCart = () => {
        dispatch({ type: CLEAR_CART })
    }
    return (
        <div>
            {
                list.length > 0 ?
                    <React.Fragment>
                        {
                            list.map((product, i) => {
                                return <React.Fragment key={i}>
                                    <p>
                                        {i + 1}. Name: {product.name}, Price: {product.price}
                                        <button onClick={() => deleteFromCart(product)}> X </button>
                                    </p>
                                </React.Fragment>
                            })
                        }
                        <button onClick={clearCart}>Clear Cart</button>
                    </React.Fragment>
                    : <div>No Item found</div>
            }
        </div>
    )
}
export default CartList;