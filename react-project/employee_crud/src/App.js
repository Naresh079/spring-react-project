import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import ViewEmployee from './Components/ViewEmployee';

function App(){
  return <div>
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/addEmployee" element={<AddEmployee/>}></Route>
        <Route exact path="/editEmployee/:id" element={<EditEmployee/>} />
        <Route exact path="/ViewEmployee/:id" element={<ViewEmployee/>} />
      </Routes>
    </Router>
  </div>
}

export default App;
