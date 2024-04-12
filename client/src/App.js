// App.js

import React, { useContext } from 'react';
import RestaurantList from './components/RestaurantList';
import DishesMenu from './components/DishesMenu';
import Cart from './components/Cart';
import { RestaurantContext } from './contexts/RestaurantContext';
import './App.css'; // Import the CSS file

const App = () => {
  const { selectedRestaurant } = useContext(RestaurantContext);

  return (
    <>
      <div className="container">
        <h1 className="header">{/*GFG*/}Git Restaurant App</h1>
        <Cart style={{ position: "absolute", right: "20px", top: "20px" }} />
        <RestaurantList />
        {/*my code = selectedRestaurant &&*/ <DishesMenu />}
      </div>
    </>
  );
};

export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
