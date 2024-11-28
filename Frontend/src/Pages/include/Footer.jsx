function Footer() {

    return (
        <>
            <footer>
                <div className="footer_main py-60">
                    <img
                        src="assets/media/shapes/vector-7.png"
                        alt=""
                        className="vector_shape"
                    />
                    <img src="assets/media/shapes/dots-1.png" alt="" className="dots"/>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 ">
                                <div className="footer_widget">
                                    <a href="index.html" className="mb-8">
                                        <img src="assets/media/logo.png" alt=""/>
                                    </a>
                                    <p className="description_text">
                                        Lorem ipsum dolor sit amet consectetur. Non convallis sed id
                                        aliquam tempus. Volutpat tortor tincidunt egestas sit risus donec.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-sm-6">
                                <div className="footer_widget">
                                    <h5 className="medium-black mb-16">Quick Links</h5>
                                    <ul className="unstyled list">
                                        <li>
                                            <a href="#">
                                                <i className="fad fa-chevron-right"/>
                                                Courses
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fad fa-chevron-right"/>
                                                Join a Career
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fad fa-chevron-right"/>
                                                Upcoming Events
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-sm-6">
                                <div className="footer_widget">
                                    <h5 className="medium-black mb-16">Explore</h5>
                                    <ul className="unstyled list">
                                        <li>
                                            <a href="about.html">
                                                <i className="fad fa-chevron-right"/>
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="gallery.html">
                                                <i className="fad fa-chevron-right"/>
                                                Gallery
                                            </a>
                                        </li>
                                        <li>
                                            <a href="team-detail.html">
                                                <i className="fad fa-chevron-right"/>
                                                Teacher’s Detail
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-sm-6">
                                <div className="footer_widget">
                                    <h5 className="medium-black mb-16">Information</h5>
                                    <ul className="unstyled list">
                                        <li>
                                            <a href="login.html">
                                                <i className="fad fa-chevron-right"/>
                                                Login
                                            </a>
                                        </li>
                                        <li>
                                            <a href="register.html">
                                                <i className="fad fa-chevron-right"/>
                                                Register
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                <i className="fad fa-chevron-right"/>
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer_widget">
                                    <h5 className="medium-black mb-16">Contact Us</h5>
                                    <ul className="unstyled list">
                                        <li className="mb-16">
                                            <i className="fal fa-map-marker-alt"/>
                                            631 Elgin ST. Celina, State 111111
                                        </li>
                                        <li className="mb-16">
                                            <a href="mailto:info@example.com">
                                                <i className="fal fa-envelope"/>
                                                email@example.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:123456789">
                                                <i className="fal fa-phone-alt"/>
                                                +1 234 567 890
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-row">
                            <ul className="unstyled social_icons_list">
                                <li>
                                    <img src="assets/media/icons/brands/Instagram.png" alt=""/>
                                </li>
                                <li>
                                    <img src="assets/media/icons/brands/Facebook.png" alt=""/>
                                </li>
                                <li>
                                    <img src="assets/media/icons/brands/Twitter.png" alt=""/>
                                </li>
                                <li>
                                    <img src="assets/media/icons/brands/Linkedin.png" alt=""/>
                                </li>
                            </ul>
                            <div className="newsletter_block">
                                <h5>Newsletter</h5>
                                <form className="newsletter">
                                    <input
                                        type="email"
                                        className="form-control"
                                        required=""
                                        placeholder="Your email"
                                    />
                                    <button type="submit" className="educate-btn sm">
                                        <span className="educate-btn__curve"/>
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright_row">
                    <p>©2024 Educate All Rights Reserved.</p>
                </div>
            </footer>

        </>
    )
}

export default Footer