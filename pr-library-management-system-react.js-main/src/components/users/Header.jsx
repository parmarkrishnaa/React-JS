import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Header.css'

function Header() {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"))
    setUser(loggedUser)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    setOpen(false)
    setMenuOpen(false)
    navigate('/')
  }

  return (
    <>
      <header className="user-header">
        <div className="container">
          <div className="row align-items-center py-3">

            {/* LOGO */}
            <div className="col-md-4 col-6">
              <NavLink to="/" className="logo">
                📚 Library
              </NavLink>
            </div>

            {/* TOGGLE BUTTON (SM + MD) */}
            <div className="col-6 d-md-block d-lg-none text-end">
              <button
                className="profile-btn"
                onClick={() => setMenuOpen(prev => !prev)}
              >
                ☰
              </button>
            </div>

            {/* NAV + AUTH (DESKTOP) */}
            <div className="col-md-8 d-none d-lg-flex justify-content-end align-items-center">
              <nav className="user-nav">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/books" className="nav-link">Books</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </nav>

              <div className="user-auth">
                {user ? (
                  <div className="dropdown">
                    <button
                      type="button"
                      className="profile-btn"
                      onClick={() => setOpen(prev => !prev)}
                    >
                      👤 {user.username || user.name}
                    </button>

                    {open && (
                      <div className="dropdown-menu" style={{ display: 'block' }}>
                        <NavLink to="/profile" onClick={() => setOpen(false)}>
                          My Profile
                        </NavLink>
                        <NavLink to="/my-books" onClick={() => setOpen(false)}>
                          My Books
                        </NavLink>
                        <button onClick={handleLogout}>
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink to="/login" className="signin-btn">
                    Sign In
                  </NavLink>
                )}
              </div>
            </div>
          </div>

          {/* MOBILE + TABLET MENU */}
          {menuOpen && (
            <div className="mobile-menu d-lg-none">
              <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
              <NavLink to="/books" onClick={() => setMenuOpen(false)}>Books</NavLink>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>

              <hr />

              {user ? (
                <>
                  <div className="mobile-user">
                    👤 {user.username || user.name}
                  </div>
                  <NavLink to="/profile" onClick={() => setMenuOpen(false)}>My Profile</NavLink>
                  <NavLink to="/my-books" onClick={() => setMenuOpen(false)}>My Books</NavLink>
                  <button onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                  Sign In
                </NavLink>
              )}
            </div>
          )}

        </div>
      </header>
    </>
  )
}

export default Header;