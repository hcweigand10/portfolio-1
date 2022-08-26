import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from './components/pages/Home';
import ProjectView from "./components/pages/ProjectView"
import StickyFooter from './components/StickyFooter';
import 'bootstrap/dist/css/bootstrap.min.css';


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
