import React, { Component } from 'react'
import './App.css';

import Header from './components/Header';
import AddEntry from './components/AddEntry';
import CBTTemplate from './components/CBTTemplate';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
        <div className="app">
            <Header />

            <CBTTemplate />

            <Footer />
      </div>
    );
  }
}
