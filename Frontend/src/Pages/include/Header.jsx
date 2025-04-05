import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Store } from '../../Utils/Store';
import { toast } from 'react-toastify';

function Header() {
    const { state , dispatch } = useContext(Store)
    const { UserInfo } = state
     const handleLogout = () => {
            localStorage.removeItem("UserInfo");
            dispatch({ type: "UserLoggedOut" });
            toast.warning("Logged Out Successfully");
        };
    return (
        <>
            <header>
                <nav className="main-menu">
                    <div className="container">
                        <div className="main-menu__block">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link to="/">
                                        <img src="assets/media/logo.png" alt="Educate" />
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
                                {UserInfo ?
                                  <div className="dropdown d-xl-flex d-none">
                                  <button
                                    className="btn btn-warning dropdown-toggle"
                                    type="button"
                                    id="accountDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    Account
                                  </button>
                                  <ul className="dropdown-menu" aria-labelledby="accountDropdown">
                                    <li>
                                      <Link to="/profile" className="dropdown-item">Profile</Link>
                                    </li>
                                    <li>
                                      <Link to="/enroll-course" className="dropdown-item">Enroll Courses</Link>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <Link onClick={handleLogout} className="dropdown-item">Logout</Link>
                                    </li>
                                  </ul>
                                </div>
                                
                                    : <>
                                        <Link to="/login" className="main-menu__login">
                                            <i className="fal fa-user" />
                                        </Link>
                                        <Link to="/registration" className="educate-btn sm d-xl-flex d-none">
                                            <span className="educate-btn__curve" />
                                            Enroll Now
                                        </Link>
                                        <Link to="#" className="main-menu__toggler mobile-nav__toggler">
                                            <i className="fa fa-bars" />
                                        </Link>
                                    </>
                                }

                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="stricky-header stricked-menu main-menu">
                <div className="sticky-header__content">
                    <div className="container">
                        <div className="main-menu__block">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link to="/">
                                        <img src="assets/media/logo.png" alt="Educate" />
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
                            {UserInfo ?
                                  <div className="dropdown d-xl-flex d-none">
                                  <button
                                    className="btn btn-warning dropdown-toggle"
                                    type="button"
                                    id="accountDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    Account
                                  </button>
                                  <ul className="dropdown-menu" aria-labelledby="accountDropdown">
                                    <li>
                                      <Link to="/profile" className="dropdown-item">Profile</Link>
                                    </li>
                                    <li>
                                      <Link to="/enroll-course" className="dropdown-item">Enroll Courses</Link>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <Link onClick={handleLogout} className="dropdown-item">Logout</Link>
                                    </li>
                                  </ul>
                                </div>
                                
                                    : <>
                                        <Link to="/login" className="main-menu__login">
                                            <i className="fal fa-user" />
                                        </Link>
                                        <Link to="/registration" className="educate-btn sm d-xl-flex d-none">
                                            <span className="educate-btn__curve" />
                                            Enroll Now
                                        </Link>
                                        <Link to="#" className="main-menu__toggler mobile-nav__toggler">
                                            <i className="fa fa-bars" />
                                        </Link>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header