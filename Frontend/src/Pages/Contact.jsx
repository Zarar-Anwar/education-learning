const Contact = () => {
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
                                Lorem ipsum dolor sit amet consectetur. Non convallis sed id <br/>
                                aliquam tempus. Volutpat tortor tincidunt egestas sit risus donec.
                            </p>
                            <form
                                method="post"
                                action="https://uiparadox.co.uk/templates/educate/v2/contact.html"
                                className="contact-form form-validator"
                                noValidate="novalidate"
                            >
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-24">
                                            <input
                                                type="text"
                                                className="form-control p_lg"
                                                id="name"
                                                name="name"
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
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-24">
                                            <input
                                                type="email"
                                                className="form-control p_lg"
                                                id="email"
                                                name="email"
                                                required=""
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-24">
                                            <input
                                                type="text"
                                                className="form-control p_lg"
                                                id="subject"
                                                name="subject"
                                                required=""
                                                placeholder="Subject"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-24">
            <textarea
                className="form-control p_lg"
                id="detail-message"
                name="message"
                rows={5}
                required=""
                placeholder="Message"
                defaultValue={""}
            />
                                </div>
                                <div className="text-end">
                                    <button type="submit" className="educate-btn">
                                        <span className="educate-btn__curve"/>
                                        Send Message
                                    </button>
                                </div>
                                {/* Alert Message */}
                                <div id="message" className="alert-msg"/>
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
                                    <h6 className="dark-gray">123 Main Street, Anytown, USA.</h6>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <a href="tel:123456789" className="contact_link_block mb-48 mb-lg-0">
                                    <div className="icon">
                                        <i className="fal fa-phone-alt"/>
                                    </div>
                                    <span className="h6">+1 234 567 890</span>
                                </a>
                            </div>
                            <div className="col-lg-4">
                                <a href="mailto:example@info.com" className="contact_link_block">
                                    <div className="icon">
                                        <i className="fal fa-envelope"/>
                                    </div>
                                    <span className="h6">email@example.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Contact