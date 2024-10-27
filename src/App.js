import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from './pages/About/About';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Projects from './pages/Projects/Projects';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
          <div>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/projects" element={<Projects />}/>
              <Route path="/about" element={<About />}/>
            </Routes>
          </div>
      </div>
    );
  }
}

export default App;