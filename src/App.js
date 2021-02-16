// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import BookData from './components/BookData';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" component={BookData} />

    </Switch>
    </BrowserRouter>
  );
}

export default App;
