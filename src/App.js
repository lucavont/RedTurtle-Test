import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import esercizio1 from './pages/esercizio1.js'
import Home from './pages/Home.js'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/es-1" element={<esercizio1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
