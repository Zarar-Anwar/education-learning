import React from 'react'
import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <nav className="main-menu">
                    <div className="container">
                        <div className="main-menu__block">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link to="/">
                                        <img src="assets/media/logo.png" alt="Educate"/>
                                    </Link>
                                </div>
                                <div className="main-menu__nav">
                                    <ul className="main-menu__list">
                                        <li className="dropdown current">
                                            <Link to="/" className="">
                                                HOME
                                            </Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link to="/courses">COURSES</Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link to="/about-us">ABOUT</Link>
                                        </li>

                                        <li>
                                            <Link to="/contact-us">CONTACT</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="main-menu__right">
                                <Link to="/login" className="main-menu__login">
                                    <i className="fal fa-user"/>
                                </Link>
                                <Link to="/registration" className="educate-btn sm d-xl-flex d-none">
                                    <span className="educate-btn__curve"/>
                                    Enroll Now
                                </Link>
                                <Link to="#" className="main-menu__toggler mobile-nav__toggler">
                                    <i className="fa fa-bars"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header