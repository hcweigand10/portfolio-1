import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project/:project-name" element={<ProjectView/>}/>
      </Routes>
    </Router>
  );
}

export default App;
