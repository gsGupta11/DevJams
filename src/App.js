import React from 'react';
import './App.css';
import Login from './components/login';
import ReactDOM from 'react-dom';
import Graph from './components/Graph';
import Recenttrade from './components/recenttrade';
import Orderbook from './components/orderbook';
import CRNMI from './components/cr&mi.js';
// import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  
  render()
  {
    return (

      <Router>
      <div className="App">
            {/* <Graph/> */}
            <Route exact path="/" component={Login}/>
          
           <Route path="/market" component={Recenttrade}/>
           {/* <Orderbook/> */}
           {/* <CRNMI/> */}
      </div>
      </Router>
    );
  }
}

export default App;
