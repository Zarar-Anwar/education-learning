import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import api from "../Utils/Axios";
import {toast} from "react-toastify";

const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("auth/login/", {
                username: formData.username,
                email: formData.email,
                password: formData.password,
            });

            // Handle successful login (e.g., redirect, show success message)
            toast.success("Login SuccessFully")
            navigate("/dashboard")
        } catch (error) {
            // Handle error (e.g., show error message)
            if (error.response) {
                setError(error.response.data.message || "An error occurred");
            } else {
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
                                    <Link to="/" className="educate_link_btn color-primary h6 mb-48">
                                        <i className="far fa-chevron-left"/> Back To Home
                                    </Link>
                                    <div className="title">
                                        <img src="assets/media/shapes/mic-speaker.png" alt="" className="speaker_icon"/>
                                        <h2 className="mb-48">Login</h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <Link to="#" className="link-btn h6 mb-24">
                                                <img src="assets/media/icons/brands/google.png" alt=""/>
                                                Log in with Google
                                            </Link>
                                        </div>
                                        <div className="col-sm-6">
                                            <Link to="#" className="link-btn h6 mb-24">
                                                <img src="assets/media/icons/brands/facebook-icon.png" alt=""/>
                                                Log in with Facebook
                                            </Link>
                                        </div>
                                    </div>
                                    <h5 className="or mb-4p">or</h5>
                                    <div className="text-center">
                                        <h6 className="mb-24">Login with your email address</h6>
                                    </div>
                                    {error && <div className="error-message" style={{color: "red"}}>{error}</div>}

                                    <form onSubmit={handleSubmit} className="form-validator" noValidate="novalidate">
                                        <div className="mb-24">
                                            <input
                                                type="text"
                                                className="form-control p_lg"
                                                id="username"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleInputChange}
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
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="mb-24">
                                            <input
                                                type="password"
                                                className="form-control p_lg"
                                                id="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                                placeholder="Password"
                                            />
                                        </div>
                                        <button type="submit" className="b-unstyle educate-btn w-100 mb-24">
                                            <span className="educate-btn__curve"/>
                                            Login
                                        </button>
                                    </form>
                                    <div className="bottom-row">
                                        <h6>
                                            Don’t have an account?{" "}
                                            <Link to="/registration" className="color-primary">
                                                Register
                                            </Link>
                                        </h6>
                                        <h6>
                                            <Link to="#" className="color-primary">
                                                Forgot Password?
                                            </Link>
                                        </h6>
                                    </div>
                                </div>
                                <div className="shapes">
                                    <img src="assets/media/shapes/vector-9.png" alt=""/>
                                    <img src="assets/media/shapes/vector-8.png" alt=""/>
                                    <img src="assets/media/shapes/circle-lines-3.png" alt=""/>
                                    <img src="assets/media/shapes/location.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
