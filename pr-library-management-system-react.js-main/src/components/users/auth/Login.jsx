import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const [user, setUser] = useState({})
  const [userList, setUserList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const oldList = JSON.parse(localStorage.getItem('users')) || []
    setUserList(oldList)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const foundUser = userList.find(
      u => u.email === user.email && u.password === user.password
    )

    if (foundUser) {
      localStorage.setItem('user', JSON.stringify(foundUser))
      navigate('/')
    } else {
      alert('Invalid Email or Password')
    }
  }

  return (
    <>
      {/* ====== LOGIN PAGE ====== */}
      <div className="login-wrapper">
        <div className="login-card">
          <h2 className="login-title">Welcome Back 👋</h2>
          <p className="login-subtitle">Login to continue</p>

          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>

            <button className="login-btn">Login</button>
          </form>

          <div className="login-links">
            <span>
              Don’t have an account?
              <NavLink to="/signup"> Signup</NavLink>
            </span>

            <NavLink to="/admin/login" className="admin-link">
              Admin Login
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;