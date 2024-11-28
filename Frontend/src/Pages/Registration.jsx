const Registration = () => {
    return (
        <>
            <section className="form_page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="form_block">
                                <div className="text_block">
                                    <a
                                        href="index.html"
                                        className="educate_link_btn color-primary h6 mb-48"
                                    >
                                        <i className="far fa-chevron-left"/> Back To Home
                                    </a>
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
                                                <img src="assets/media/icons/brands/google.png" alt=""/>
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
                                    <form
                                        action="https://uiparadox.co.uk/templates/educate/v2/register.html"
                                        className="form-validator"
                                        noValidate="novalidate"
                                    >
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="mb-24">
                                                    <input
                                                        type="text"
                                                        className="form-control p_lg"
                                                        id="first-name"
                                                        name="first-name"
                                                        required=""
                                                        placeholder="First Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-24">
                                                    <input
                                                        type="text"
                                                        className="form-control p_lg"
                                                        id="last-name"
                                                        name="last-name"
                                                        required=""
                                                        placeholder="Last Name"
                                                    />
                                                </div>
                                            </div>
                                        </div>
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
                                            Create Account
                                        </button>
                                    </form>
                                    <div className="text-end">
                                        <h6>
                                            Already have an account?{" "}
                                            <a href="login.html" className="color-primary">
                                                {" "}
                                                Login
                                            </a>
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

export default Registration