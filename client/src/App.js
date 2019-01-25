import React, { Component } from 'react';
import Header from './components/Header/Header';
import FilterOptions from './components/FilterOptions/FilterOptions';
import ApiCardsList from './components/ApiCardsList/ApiCardsList';
import Navbar from './components/Navbar/Navbar'
import Loading from './components/Loading/Loading'
import $ from 'jquery'; 

import './App.css';

class App extends Component {

  state = {
    Category: "Animals",
    HTTPS: "",
    Cors:"",
    Auth: "",
    Categories: ["example"],
    Results: []
  }

  categoryOnChange = (e) => {
      console.log("category has been changed")
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    $.getJSON('categories')
      .then(res => {
        this.setState({ Categories: res })
      })

      $.getJSON('entries', {Category: this.state.Category})
      .then(res => {
        this.setState({ Results: res.entries })
      })
  }

  render() {

    if(!this.state.Results.length)
            return <Loading></Loading>;

      

    return (
      
      <div style={{background: "#0f2027", /* Old browsers */
        background: "-moz-linear-gradient(-45deg, #0f2027 0%, #2197b0 50%, #0f2027 100%)",
        background: "-webkit-linear-gradient(-45deg, #0f2027 0%,#2197b0 50%,#0f2027 100%)",
        background: "linear-gradient(135deg, #0f2027 0%,#2197b0 50%,#0f2027 100%)",
        filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#0f2027', endColorstr='#0f2027',GradientType=1 )",
        backgroundRepeat: "no-repeat"}} className="App pt-1">
          <Navbar></Navbar>
          <Header></Header>
          <FilterOptions options={this.state.Categories}></FilterOptions>
          <ApiCardsList apis={this.state.Results}></ApiCardsList>
      </div>
    );  
  }
}

export default App;
