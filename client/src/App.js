import Dashboard from './components/Dashboard'
import Details from './components/Details';
import Navbar from './components/Navbar'
import UserDashboard from './components/UserDashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';
import { LoginUser } from './components/LoginUser';

function App() {
  // const [currentForm,setCurrentForm] = useState('login');

  // const toggleForm= (formName) => {
  //   setCurrentForm(formName);
  // }
  return (
    <Router>
      {/* <LoginUser /> */}
    <div>
      <Routes>
      <Route exact path="/Dashboard" element={
      <>
      <Navbar/>
      <Dashboard />
      </>
      } />
      <Route exact path="/Details" element={<Details/>} />
      <Route exact path="/userDashboard" element={<UserDashboard/>} />
      <Route exact path="/UserForm" element={<UserForm/>} />

      </Routes>
    </div>
    </Router>

  );
}

export default App;
