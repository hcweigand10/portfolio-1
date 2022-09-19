import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import React from "react"

import Home from './components/pages/Home';
import ProjectView from "./components/pages/ProjectView"
import NotFound from "./components/pages/NotFound"
import StickyFooter from './components/StickyFooter';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects/:project" element={<ProjectView/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <StickyFooter/>
    </Router>
  );
}

export default App;
