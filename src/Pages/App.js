import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.css';

import Categories from './Categories';
import Home from './Home';
import Task from './Task';
import Tasks from './Tasks';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="/task" Component={Task}/>
        <Route path="/tasks" Component={Tasks}/>
        <Route path="/categories" Component={Categories}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
