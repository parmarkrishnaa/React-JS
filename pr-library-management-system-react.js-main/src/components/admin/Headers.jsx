import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Headers.css";

function Header({ handleLogout }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="topbar">
                <button className="menu-btn d-xl-none" onClick={() => setOpen(true)}>
                    ☰
                </button>

                <h5 className="title">Library Admin</h5>

                <div className="top-right">
                    <img
                        src="/assets/images/user.png"
                        alt="user"
                        className="user-img"
                    />
                    <button onClick={handleLogout} className="logout-btn">
                        Logout
                    </button>
                </div>
            </header>

            {/* OVERLAY */}
            {open && <div className="overlay" onClick={() => setOpen(false)} />}

            {/* SIDEBAR */}
            <aside className={`sidebar ${open ? "open" : ""}`}>
                <div className="logo">📚 Library</div>

                <NavLink to="/admin" onClick={() => setOpen(false)}>
                    Dashboard
                </NavLink>

                <NavLink to="/admin/add-book" onClick={() => setOpen(false)}>
                    Add Book
                </NavLink>

                <NavLink to="/admin/view-books" onClick={() => setOpen(false)}>
                    View Books
                </NavLink>
            </aside>
        </>
    );
}

export default Header;