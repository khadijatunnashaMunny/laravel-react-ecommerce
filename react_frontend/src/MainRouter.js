import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Components/User/Home';
import Dashboard from './Components/User/Dashboard';
import Login from './Components/User/Auth/Login';
import Register from './Components/User/Auth/Register';
import axios from 'axios';
axios.defaults.baseURL="http://localhost:8000";
axios.defaults.headers.post['Accept']='application/json';
axios.defaults.headers.post['Content-Type']='application/json';
axios.defaults.withCredentials = true;

function MainRouter() {
    return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />


      </Routes>
    </Router>
    )
}

export default MainRouter
 