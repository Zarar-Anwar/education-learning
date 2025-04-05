import {useState, useContext} from "react";
import axios from "axios";
import {Store} from "../Utils/Store";
import {Link} from "react-router-dom";
import api from "../Utils/Axios";
import {toast} from "react-toastify";

const Contact = () => {
    const {state} = useContext(Store);
    const {ContactInfo} = state;

    // State to handle form data and submission status
    const [formData, setFormData] = useState({
        fullname: "",
        subject: "",
        message: "",
        email: "",
        phone: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(null);

    // Handle form input changes
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitSuccess(null);

        try {
            const response = await api.post('contact-us/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            setSubmitSuccess(true);
            toast.success("Form Submitted")
        } catch (error) {
            setSubmitSuccess(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section className="page_title_banner">
                <div className="container">
                    <div className="content">
                        <div className="title">
                            <h1>Contact Us</h1>
                            <img src="assets/media/shapes/tag-2.png" alt="" className="tag"/>
                        </div>
                        <div
                            className="educate-tilt"
                            data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 2, "speed": 700, "scale": 1 }'
                        >
                            <img
                                src="assets/media/resources/page_title.png"
                                alt=""
                                className="main_img"
                            />
                        </div>
                        <img
                            src="assets/media/shapes/circle-lines-2.png"
                            alt=""
                            className="circle_vector"
                        />
                    </div>
                </div>
            </section>

            <section className="py-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-24 mb-lg-0">
                            <h6 className="color-primary mb-8">–––– Contact Form</h6>
                            <h2 className="mb-16">
                                Write Us Anytime, We Would
                                <br/> Love To Hear From <span className="fm-sec">You!</span>
                            </h2>
                            <p className="mb-32">
                                Contact us Here <br/>
                                
                            </p>
                            <form
                                onSubmit={handleSubmit}
                                className="contact-form form-validator"
                                noValidate="novalidate"
                            >
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-24">
                                            <input
                                                type="text"
                                                className="form-control p_lg"
                                                name="fullname"
                                                value={formData.fullname}
                                                onChange={handleChange}
                                                required
                                                placeholder="First Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-24">
                                            <input
                                                type="text"
                                                className="form-control p_lg"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                placeholder="Subject"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-24">
                                            <input
                                                type="email"
                                                className="form-control p_lg"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-24">
                                            <input
                                                type="text"
                                                className="form-control p_lg"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="Phone"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-24">
                                    <textarea
                                        className="form-control p_lg"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Message"
                                    />
                                </div>
                                <div className="text-end">
                                    <button type="submit" className="educate-btn" disabled={isSubmitting}>
                                        <span className="educate-btn__curve"/>
                                        {isSubmitting ? "Submitting..." : "Send Message"}
                                    </button>
                                </div>


                            </form>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="educate-tilt"
                                data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 2, "speed": 700, "scale": 1 }'
                            >
                                <img src="assets/media/resources/contat.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="contact_links pt-60">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="contact_link_block mb-48 mb-lg-0">
                                    <div className="icon">
                                        <i className="fal fa-map-marker-alt"/>
                                    </div>
                                    <h6 className="dark-gray">{ContactInfo.address}</h6>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <Link to={`tel:${ContactInfo.contact_phone}`}
                                      className="contact_link_block mb-48 mb-lg-0">
                                    <div className="icon">
                                        <i className="fal fa-phone-alt"/>
                                    </div>
                                    <span className="h6">{ContactInfo.contact_phone}</span>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link to={`mailto:${ContactInfo.contact_email}`} className="contact_link_block">
                                    <div className="icon">
                                        <i className="fal fa-envelope"/>
                                    </div>
                                    <span className="h6">{ContactInfo.contact_email}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
