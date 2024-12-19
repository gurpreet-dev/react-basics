import React from 'react'
import { NavLink, Link } from 'react-router'

function Header() {
    return (
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <Link to="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
                    <span className="fs-4">React Basics</span>
                </Link>

                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <NavLink to="/" className={ ({ isActive }) => `me-3 py-2 link-body-emphasis text-decoration-none ${isActive ? "fw-bold" : ""}`}>Home</NavLink>
                    <NavLink to="/about" className={ ({ isActive }) => `me-3 py-2 link-body-emphasis text-decoration-none ${isActive ? "fw-bold" : ""}`}>About</NavLink>
                    <NavLink to="/contact" className={ ({ isActive }) => `me-3 py-2 link-body-emphasis text-decoration-none ${isActive ? "fw-bold" : ""}`}>Contact</NavLink>
                    <NavLink to="/users" className={ ({ isActive }) => `me-3 py-2 link-body-emphasis text-decoration-none ${isActive ? "fw-bold" : ""}`}>Users</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header