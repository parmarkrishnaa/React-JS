import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Signup.css'

function Signup() {
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
    const newUsers = [...userList, { ...user, id: Date.now() }]
    localStorage.setItem('users', JSON.stringify(newUsers))
    navigate('/login')
  }

  return (
    <>
      <div className="signup-page">
        <div className="signup-box">
          <h2>Create Account</h2>
          <p className="subtitle">Start your journey with us</p>

          <form onSubmit={handleSubmit}>
            <div className="field">
              <input
                type="text"
                name="username"
                placeholder="Full Name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                onChange={handleChange}
                required
              />
            </div>

            <button className="signup-btn">Create Account</button>
          </form>

          <div className="footer-text">
            Already registered?
            <NavLink to="/login"> Login</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;