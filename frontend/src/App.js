import React from 'react'
import { Navigate, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Calendar from './Calendar'
import Home from './Home';
const App =(props) =>{
  return (
    <div>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home {...props} />} />
        <Route path="/calendar" element={<Calendar {...props} />} />
      </Routes>
      </div>
    </div>
  )
}

export default App 