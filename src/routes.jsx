// src/routes.js
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import NewTicket from './pages/NewTicket'
import MyTickets from './pages/MyTickets'
import ViewTicket from './pages/ViewTicket'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import AdminDashboard from './pages/AdminDashboard'
import UserDashboard from './pages/UserDashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/userdashboard" element={<UserDashboard />} />
      <Route path="/new-ticket" element={<NewTicket />} />
      <Route path="/my-ticket" element={<MyTickets />} />
      <Route path="/my-tickets/:id" element={<ViewTicket />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  )
}

export default AppRoutes
