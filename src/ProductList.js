import React, { useEffect, useContext , useState} from 'react';
import { ADD_TO_CART, SUCCESS_CALLBACK, ERROR_CALLBACK } from './action-types';
import { ProductContext } from './ProductContext';
import axios from 'axios';

//const productList = [{ id: 1, name: 'iPhone', price: 131234 }, { id: 2, name: 'Laptop', price: 34235 }, { id: 3, name: 'TV', price: 8888 }];


const ProductList = () => {

    const { list, dispatch } = useContext(ProductContext);
    const addToCart = (item) => {
        dispatch({ type: ADD_TO_CART, payload: item })
    }

    const [productList, setProductList]= useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/productList').then((response) => {
            console.log(response)
           // dispatch({ type: SUCCESS_CALLBACK, payload: response.data });
           setProductList(response.data)
        }).catch((err) => {
            //dispatch({ type: ERROR_CALLBACK, payload: err.message })
        })
    }, [])

    return (
        <React.Fragment>
                    {
                        productList.length < 1?
                            <div>Loading</div> :

                            <React.Fragment>
                                {
                                    productList.map((product, i) => {
                                        return <React.Fragment key={i}>
                                            <p >Name: {product.name}, Price: {product.price}
                                                <button onClick={() => addToCart(product)}>Add to Cart</button>
                                            </p>
                                        </React.Fragment>
                                    })
                                }
                            </React.Fragment>
                    }
                </React.Fragment>
        // <div>
        //     {list.length < 1 ?
        //         <div>Loading</div> :
        //         <React.Fragment>
        //             {
        //                 list.loading ?
        //                     <div>Loading</div> :

        //                     <React.Fragment>
        //                         {list[0].response.length}
        //                         {
        //                             list[0].response.map((product, i) => {
        //                                 return <React.Fragment key={i}>
        //                                     <p >Name: {product.name}, Price: {product.price}
        //                                         <button onClick={() => addToCart(product)}>Add to Cart</button>
        //                                     </p>
        //                                 </React.Fragment>
        //                             })
        //                         }
        //                     </React.Fragment>
        //             }
        //         </React.Fragment>
        //     }

        // </div>
    )
}
export default ProductList;