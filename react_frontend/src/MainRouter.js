import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Dashboard from './Components/User/Dashboard'
import Login from './Components/User/Auth/Login'
import Register from './Components/User/Auth/Register'

function MainRouter() {
    return (
    <Router>
      <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />


      </Routes>
    </Router>
    )
}

export default MainRouter
 