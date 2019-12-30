import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import {Route} from "react-router-dom";

const Home = () => {
  return(
    <HomePage/>
  )
}

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
        <Route path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
