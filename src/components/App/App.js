import React, { Component } from 'react';
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import PageOne from '../PageOne/PageOne.js';
import PageTwo from '../PageTwo/PageTwo.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Cool JPEGS!</h1>
          <ul className="header">
            <li><NavLink to="/PageOne/PageOne.js">Cool JPEG 1</NavLink></li>
            <li><NavLink to="/PageTwo/PageTwo.js">Cool JPEG 2</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route path="/PageOne/PageOne.js" element={<PageOne />}/>
              <Route path="/PageTwo/PageTwo.js" element={<PageTwo />}/>
            </Routes>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;
