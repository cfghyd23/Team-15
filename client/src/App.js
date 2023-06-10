import React,{ useState } from "react";
import { Login} from "./login";
import './App.css';
import {Register} from "./Register";
import { Loginuser } from "./loginuser";
import { Registeruser } from "./Registeruser";
function App() {
  const [currentForm,setCurrentForm] = useState('login');

  const toggleForm= (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
     {
      currentForm ==="login"? <Login onFormSwitch={toggleForm} />: <Register onFormSwitch={toggleForm} />
     }
    </div>
  );
}

export default App;
