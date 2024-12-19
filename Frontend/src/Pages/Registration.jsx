import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import api from "../Utils/Axios";
import {toast} from "react-toastify";

const Registration = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password1: "",
        password2: "",
    });
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password1 !== formData.password2) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await api.post("auth/registration/", {
                username: formData.username,
                email: formData.email,
                password1: formData.password1,
                password2: formData.password2,
            });

            // Handle success (e.g., redirect or show success message)
            toast.success("Registration SuccessFully")
        } catch (error) {
            // Handle error (e.g., show error message)
            if (error.response) {
                // If the server responded with an error
                setError(error.response.data.message || "An error occurred");
            } else {
                // If there was an error with the request itself
                setError("Network error, please try again later");
            }
        }
    };

    return (
        <>
            <section className="form_page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="form_block">
                                <div className="text_block">
                                    <Link
                                        to="/"
                                        className="educate_link_btn color-primary h6 mb-48"
                                    >
                                        <i className="far fa-chevron-left" /> Back To Home
                                    </Link>
                                    <div className="title">
                                        <img
                                            src="assets/media/shapes/mic-speaker.png"
                                            alt=""
                                            className="speaker_icon"
                                        />
                                        <h2 className="mb-48">Create an account</h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <a href="#" className="link-btn h6 mb-24">
                                                <img src="assets/media/icons/brands/google.png" alt="" />
                                                Sign up with Google
                                            </a>
                                        </div>
                                        <div className="col-sm-6">
                                            <a href="#" className="link-btn h6 mb-24">
                                                <img
                                                    src="assets/media/icons/brands/facebook-icon.png"
                                                    alt=""
                                                />
                                                Sign up with Facebook
                                            </a>
                                        </div>
                                    </div>
                                    <h5 className="or mb-4p">or</h5>
                                    <div className="text-center">
                                        <h6 className="mb-24">Sign up with your email address</h6>
                                    </div>
                                     {error && (
                                            <div className="error-message" style={{ color: "red" }}>
                                                {error}
                                            </div>
                                        )}
                                    <form
                                        onSubmit={handleSubmit}
                                        className="form-validator"
                                        noValidate="novalidate"
                                    >
                                        <div className="mb-24">
                                            <input
                                                type="text"
                                                className="form-control p_lg"
                                                id="username"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleInputChange}
                                                required=""
                                                placeholder="Username"
                                            />
                                        </div>
                                        <div className="mb-24">
                                            <input
                                                type="email"
                                                className="form-control p_lg"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required=""
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="mb-24">
                                            <input
                                                type="password"
                                                className="form-control p_lg"
                                                id="password1"
                                                name="password1"
                                                value={formData.password1}
                                                onChange={handleInputChange}
                                                required=""
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="mb-24">
                                            <input
                                                type="password"
                                                className="form-control p_lg"
                                                id="password2"
                                                name="password2"
                                                value={formData.password2}
                                                onChange={handleInputChange}
                                                required=""
                                                placeholder="Confirm Password"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="b-unstyle educate-btn w-100 mb-24"
                                        >
                                            <span className="educate-btn__curve" />
                                            Create Account
                                        </button>
                                    </form>
                                    <div className="text-end">
                                        <h6>
                                            Already have an account?{" "}
                                            <Link to="/login" className="color-primary">
                                                {" "}
                                                Login
                                            </Link>
                                        </h6>
                                    </div>
                                </div>
                                <div className="shapes">
                                    <img src="assets/media/shapes/vector-9.png" alt="" />
                                    <img src="assets/media/shapes/vector-8.png" alt="" />
                                    <img src="assets/media/shapes/circle-lines-3.png" alt="" />
                                    <img src="assets/media/shapes/location.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Registration;
