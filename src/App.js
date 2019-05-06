import React, { Component } from 'react';
import Header from './common/header';
import ItemList from './components/ItemList';
import Footer from './common/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ItemList />
        <Footer />
      </div>
    );
  }
}

export default App;
