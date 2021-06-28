import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './normalize.css';
import './style.css';
import Navbar from './Components/Navbar';

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./Pages/Contact";

function App() {
  return (
      
        <div>
          <Navbar />
          <Home />
          <Projects />
          <Blogs />
          <Contact />
      
    </div>
   
  );
}

export default App;
