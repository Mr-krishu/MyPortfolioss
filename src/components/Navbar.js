import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.PNG';
const Navbar = () => {
    return (
        <>
            <nav  className="navbar navbar-expand-lg navbar-custom">
                <NavLink className="navbar-brand" to="/">
                    { <img src={logo} alt='logo' width="45%" />  }
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">Signup</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
