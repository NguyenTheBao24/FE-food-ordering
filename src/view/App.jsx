import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Header from './header/header';

import Login from './login/login';
import Admin from './login/admin/admin';
import Employee from './login/employee/Employee';



function App() {

  return <>
    <Router>

      {/* <Header></Header> */}
     
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path='/admin' element={<Admin></Admin>}/>
        <Route path='/employee' element={<Employee></Employee>}/>
      </Routes>
    </Router>
  </>
}

export default App;
