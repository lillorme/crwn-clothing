import React from 'react';
import Home from './Pages/Home/HomePage';
import {Route} from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import './App.css';

const HatsPage = (props: any) =>{
  console.log(props);
  return(
    <div>
      <h1>Hats Page</h1>
    </div>
  )
  
}

const App = () => {
  return (
    <div>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/shop/hats' component={HatsPage} />
    </div>
  );
}

export default App;
