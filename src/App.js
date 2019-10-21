import React from 'react';
import './App.css';
import Login from './components/login';
import ReactDOM from 'react-dom';
import Graph from './components/Graph';

class App extends React.Component {
  
  render()
  {
    return (
      <div className="App">
            <Graph/>
          <Login/>

      </div>
    );
  }
}

export default App;
