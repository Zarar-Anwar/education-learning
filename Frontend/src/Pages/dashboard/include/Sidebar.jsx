import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../../../Utils/Store";
import { toast } from "react-toastify";

const Sidebar = () => {
    const token = localStorage.getItem('access_token');
    console.log(token)
    const { dispatch } = useContext(Store)
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("UserInfo");
        dispatch({ type: "UserLoggedOut" });
        toast.warning("Logged Out Successfully");
        navigate("/")
    };

    return (
        <>
            <div className="app-menu navbar-menu">
                {/* LOGO */}
                <div className="navbar-brand-box">
                    {/* Dark Logo*/}
                    <Link to="/" className="logo logo-dark">
                        <span className="logo-sm">
                            <img src="assets/images/logo-sm.png" alt="" height={22} />
                        </span>
                        <span className="logo-lg">
                            <img src="assets/logo-5.png" alt="" width="100px" />
                        </span>
                    </Link>
                    <button
                        type="button"
                        className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
                        id="vertical-hover"
                    >
                        <i className="ri-record-circle-line" />
                    </button>
                </div>
                <div id="scrollbar">
                    <div className="container-fluid dropdown-custom-right">
                            <span className="d-flex ">
                                <img
                                    className="rounded-circle mx-auto header-profile-user"
                                    src="/userdefault.jpg"
                                    alt="Header Avatar"
                                />
                            </span>
                        <ul className="navbar-nav" id="navbar-nav">
                           
                            <li className="nav-item">
                                <Link className="nav-link menu-link" to="/">
                                    <i className="bx bx-paperclip" /> <span>Website</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link menu-link" to="/student-dashboard">
                                    <i className="bx bxs-dashboard" /> <span>Dashboard</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link menu-link" to="/student-enrolled">
                                    <i className="bx bx-git-pull-request" /> <span>Enrolled Courses</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link menu-link" to="/student-test">
                                    <i className="bx bxs-paper-plane" /> <span>Test</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link menu-link" to="/shipping">
                                    <i className="bx bxs-box" /> <span>Chat</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link menu-link" to="/" onClick={handleLogout}>
                                    <i className="mdi mdi-logout text-muted fs-16 align-middle me-1" />{" "}
                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Sidebar */}
                </div>
                <div className="sidebar-background" />
            </div>
        </>
    );
};

export default Sidebar;
