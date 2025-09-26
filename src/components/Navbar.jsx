import { NavLink } from "react-router-dom"
import './Navbar.scss';
import { useAuth } from "../store/auth";
import logo from '../images/logo.webp';
import { FaAlignLeft, FaAlignRight } from "react-icons/fa";
import { useState } from 'react';

export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div id="box-navbar" className={showMenu ? 'nav-active' : ''}>
                <div id="logo-box">
                    <NavLink to='/' id="logo">
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                
                <div className={`nav-content ${showMenu ? 'show' : ''}`}>
                    <ul className="nav-links">
                        <li><NavLink to="/" onClick={() => setShowMenu(false)}>Home</NavLink></li>
                        <li><NavLink to="/achievement" onClick={() => setShowMenu(false)}>Achievement</NavLink></li>
                        <li><NavLink to="/about" onClick={() => setShowMenu(false)}>About</NavLink></li>
                        <li><NavLink to="/contact" onClick={() => setShowMenu(false)}>Contact</NavLink></li>
                    </ul>

                    <div id="login-reg-box">
                        <ul>
                            {isLoggedIn ? (
                                <li className="logout-nav"><NavLink to="/logout" onClick={() => setShowMenu(false)}>Logout</NavLink></li>
                            ) : (
                                <>
                                    <li className="login-nav"><NavLink to="/login" onClick={() => setShowMenu(false)}>Login</NavLink></li>
                                    <li className="register-li">
                                        <NavLink className="register" to="/register" onClick={() => setShowMenu(false)}>
                                            Get Started
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="mobile-nav-btn" onClick={toggleMenu}>
                    {showMenu ? (
                        <FaAlignRight className="mobile-nav-icon" />
                    ) : (
                        <FaAlignLeft className="mobile-nav-icon" />
                    )}
                </div>
            </div>
        </>
    );
}
