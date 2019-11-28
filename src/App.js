import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import UseStateExample from './usestate-example';
import UseEffectExample from './use-effect-example';
import FunctionProps from './function-props';
import UseContextExample from "./use-context-example";


import { AppContext } from './create-context';
import ContextConsumer2 from './context-consumer2';
import ContextConsumer from './context-consumer';

function App() {
  const [show, setShow] = useState(false);
  const [age, setAge] = useState(0);
  const [name, setName] = useState('Testing Context');

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
      </React.Fragment> */}
      <AppContext.Provider value={{name, setName}}>
        Use Context Example : 
        <UseContextExample />
        <ContextConsumer />
      </AppContext.Provider>
      {/* <BrowserRouter>
        <React.Fragment>
          <Link to="/useState">UseStateExample | </Link>
          <Link to="/useEffect">UseEffectExample</Link>
        </React.Fragment>
        <Switch>
          <Route path="/" component={UseStateExample} exact/>
          <Route path="/useState" component={UseStateExample} />
          <Route path="/useEffect" render={()=> <UseEffectExample />} />
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
