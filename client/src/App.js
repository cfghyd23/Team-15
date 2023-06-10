import Dashboard from './components/Dashboard'
import Details from './components/Details';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Routes>
      <Route exact path="/Dashboard" element={<Dashboard />} />
      <Route path="/Details" element={<Details/>} />

      </Routes>

    </div>
    </Router>

  );
}

export default App;
