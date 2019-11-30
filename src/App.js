import React, { useState, useReducer, useContext } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import UseStateExample from './UseStateExample';
import UseEffectExample from './UseEffectExample';
import FunctionProps from './FunctionProps';
import UseContextExample from "./UseContextExample";
import { AppContext } from './CreateContext';
import ContextConsumer2 from './ContextConsumer2';
import ContextConsumer from './ContextConsumer';

import CounterExample from './useReducer/counter-example/CounterExample';

import ProductList from './ProductList';
import CartList from './CartList';

import { ProductContext } from './ProductContext';
import { reducer, initialState } from './CartReducer';
import { apiReducer } from './ApiReducer';
import UseReactMemo from './UseReactMemo';

function App() {
  const [show, setShow] = useState(false);
  const [age, setAge] = useState(0);
  const [name, setName] = useState('Testing Context');

  const [list, dispatch] = useReducer(reducer, initialState);
  const [apiRes, apiDispatch] = useReducer(apiReducer, initialState)
  console.log(list);

  const showHide = () => {
    setShow(!show);
    setAge(Math.random());
    setName(Math.random());
  }
  return (
    <div className="App">
      <button onClick={showHide}>Show/Hide</button><br />
      {/* <React.Fragment>
        UseState Example: <UseStateExample />
      </React.Fragment><hr />
      <React.Fragment>
        UseEffect Example: {show && <UseEffectExample />}
      </React.Fragment><hr/>
      <React.Fragment>
        Function - Props example: <FunctionProps name={'Radah'} age={age}/>
      </React.Fragment>
      <AppContext.Provider value={{name, setName}}>
        Use Context Example : 
        <UseContextExample />
        <ContextConsumer />
      </AppContext.Provider> */}
      <ProductContext.Provider value={{ list, dispatch }}>
        <BrowserRouter>
          <React.Fragment>
            <Link to="/useState">UseStateExample | </Link>
            <Link to="/useEffect">UseEffectExample | </Link>
            <Link to="/useReducer">User Reducer Example | </Link>
            <Link to="/productList">Product List | </Link>
            <Link to="/cartList">Cart List({list.length}) | </Link>
            <Link to="/useReactMemo">UseReactMemo</Link>

          </React.Fragment>
          <Switch>
            <Route path="/" component={UseStateExample} exact />
            <Route path="/useState" component={UseStateExample} />
            <Route path="/useEffect" render={() => <UseEffectExample />} />
            <Route path="/useReducer" component={CounterExample} />
            <Route path="/productList" component={ProductList} />
            <Route path="/cartList" component={CartList} />
            <Route path="/useReactMemo" component = {UseReactMemo} />
          </Switch>
        </BrowserRouter>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
