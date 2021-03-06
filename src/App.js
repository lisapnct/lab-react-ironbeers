import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import Beers from './pages/Beers';
import Header from './components/Header';
import OneBeer from './pages/OneBeer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:id" component={OneBeer} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
