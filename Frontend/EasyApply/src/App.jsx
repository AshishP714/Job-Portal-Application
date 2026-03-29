
import './App.css'
import Header from './componant/Header'
import Footer from './componant/Footer'
import {  Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import AdminDashboard from './pages/AdminDashboard'
import UserDashboard from './pages/UserDashboard'
import Addjobs from './pages/Addjobs'
import ShowJobs from './pages/ShowJobs'






function App() {
 

  return (
    <>
      <Header />
        <div className="container mt-4 mb-5">
        <Routes>

         <Route path="/" element={<Home/>} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/addjobs" element={<Addjobs />} />
          <Route path="/showjobs" element={<ShowJobs />} />
      
          
          </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
