// src/components/Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/dashboard" style={{ marginRight: '10px' }}>Dashboard</Link>
      <Link to="/new-ticket" style={{ marginRight: '10px' }}>New Ticket</Link>
      <Link to="/my-tickets" style={{ marginRight: '10px' }}>My Tickets</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  )
}

export default Navbar
