import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Header from './header/header';

import Login from './login/login';



function App() {

  return <>
    <Router>

      {/* <Header></Header> */}
     
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  </>
}

export default App;
