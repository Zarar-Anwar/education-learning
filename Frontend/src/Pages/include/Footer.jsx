import {useContext} from "react"
import {Store} from "../../Utils/Store"
import {Link} from "react-router-dom";

function Footer() {
    const {state} = useContext(Store)
    const {ContactInfo} = state

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
                                    <Link to="index.html" className="mb-8">
                                        <img src="assets/media/logo.png" alt=""/>
                                     </Link>
                                    <p className="description_text">
                                        Lorem ipsum dolor sit amet consectetur. Non convallis sed id
                                        aliquam tempus. Volutpat tortor tincidunt egestas sit risus donec.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-sm-6">
                                <div className="footer_widget">
                                    <h5 className="medium-black mb-16">Explore</h5>
                                    <ul className="unstyled list">
                                        <li>
                                            <Link to="/about-us">
                                                <i className="fad fa-chevron-right"/>
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/gallery">
                                                <i className="fad fa-chevron-right"/>
                                                Gallery
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/courses">
                                                <i className="fad fa-chevron-right"/>
                                                Courses
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-sm-6">
                                <div className="footer_widget">
                                    <h5 className="medium-black mb-16">Information</h5>
                                    <ul className="unstyled list">
                                        <li>
                                            <Link to="/login">
                                                <i className="fad fa-chevron-right"/>
                                                Login
                                             </Link>
                                        </li>
                                        <li>
                                            <Link to="/registration">
                                                <i className="fad fa-chevron-right"/>
                                                Register
                                             </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us">
                                                <i className="fad fa-chevron-right"/>
                                                Contact Us
                                             </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-6">
                                <div className="footer_widget">
                                    <h5 className="medium-black mb-16">Contact Us</h5>
                                    <ul className="unstyled list">
                                        <li className="mb-16">
                                            <i className="fal fa-map-marker-alt"/>
                                            {ContactInfo.address}
                                        </li>
                                        <li className="mb-16">
                                            <Link to={`mailto:${ContactInfo.contact_email}`}>
                                                <i className="fal fa-envelope"/>
                                                {ContactInfo.contact_email}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={`tel:${ContactInfo.contact_phone}`}>
                                                <i className="fal fa-phone-alt"/>
                                                {ContactInfo.contact_phone}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
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