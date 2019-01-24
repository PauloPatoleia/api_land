import React, { Component } from 'react';
import Header from './components/Header/Header';
import FilterOptions from './components/FilterOptions/FilterOptions';
import ApiCardsList from './components/ApiCardsList/ApiCardsList'

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App pt-1">
          <Header></Header>
          <FilterOptions></FilterOptions>
          <ApiCardsList></ApiCardsList>
      </div>
    );  
  }
}

export default App;
