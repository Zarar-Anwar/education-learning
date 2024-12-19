import {Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <section className="form_page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="form_block">
                                <div className="text_block">
                                    <Link to="/"
                                        className="educate_link_btn color-primary h6 mb-48"
                                    >
                                        <i className="far fa-chevron-left"/> Back To Home
                                    </Link>
                                    <div className="title">
                                        <img
                                            src="assets/media/shapes/mic-speaker.png"
                                            alt=""
                                            className="speaker_icon"
                                        />
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
                                                <img
                                                    src="assets/media/icons/brands/facebook-icon.png"
                                                    alt=""
                                                />
                                                Log in with Facebook
                                            </Link>
                                        </div>
                                    </div>
                                    <h5 className="or mb-4p">or</h5>
                                    <div className="text-center">
                                        <h6 className="mb-24">Login with your email address</h6>
                                    </div>
                                    <form
                                        action="https://uiparadox.co.uk/templates/educate/v2/login.html"
                                        className="form-validator"
                                        noValidate="novalidate"
                                    >
                                        <div className="mb-24">
                                            <input
                                                type="email"
                                                className="form-control p_lg"
                                                id="login-email"
                                                name="login-email"
                                                required=""
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="mb-24">
                                            <input
                                                type="password"
                                                className="form-control p_lg"
                                                id="login-password"
                                                name="login-password"
                                                required=""
                                                placeholder="Password"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="b-unstyle educate-btn w-100 mb-24"
                                        >
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
    )
}

export default Login