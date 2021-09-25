import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Alert from './Alert';

export default function Navbar() {

    let location = useLocation();

    const onClick = () => {
        localStorage.removeItem('token');
        Alert("Success", "Logged out successfully")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ fontSize: '1.5rem' }}>Notes Collector</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/addnote' ? 'active' : ''}`} to="/addnote">Add Note</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/mynotes' ? 'active' : ''}`} to="/mynotes">My Notes</Link>
                            </li>
                        </ul>
                        <div>
                            {!localStorage.getItem('token')
                                ?
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item ">
                                        <Link className={`nav-link ${location.pathname === '/login' ? 'text-primary' : ''}`} aria-current="page" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === '/signup' ? 'text-primary' : ''}`} to="/signup">Signup</Link>
                                    </li>
                                </ul>
                                :
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item ">
                                        <Link className='nav-link text-danger' aria-current="page" to="/login" onClick={onClick}>Logout</Link>
                                    </li>
                                </ul>}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
