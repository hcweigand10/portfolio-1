import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";

import Home from './components/pages/Home';
import ProjectView from "./components/pages/ProjectView"
import StickyFooter from './components/StickyFooter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project/:project-name" element={<ProjectView/>}/>
      </Routes>
      <StickyFooter/>
    </Router>
  );
}

export default App;
