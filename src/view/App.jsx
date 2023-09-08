import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Header from './header/header';
import Body from './body/body';
import Nav from './nav/nav';
import Loginnv from './login/nhanvien';
import Food from './food/Food';



function App() {

  return <>
    <Router>

      <Header></Header>
      <Body></Body>
      <Nav></Nav>
      <Food></Food>
      <Routes>
        {/* <Route path="/">
          <Header></Header>ư
          <Body></Body>
          <Nav></Nav>
          <Food></Food>

        </Route> */}
        <Route path="/login" component={Loginnv} />
      </Routes>
    </Router>
  </>
}

export default App;
