const About = () => {
    return (
        <>
            <section className="page_title_banner">
                <div className="container">
                    <div className="content">
                        <div className="title">
                            <h1>About Us</h1>
                            <img src="assets/media/shapes/tag-2.png" alt="" className="tag"/>
                        </div>
                        <div
                            className="educate-tilt"
                            data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 2, "speed": 700, "scale": 1 }'
                            style={{
                                willChange: "transform",
                                transform: "perspective(300px) rotateX(0deg) rotateY(0deg)"
                            }}
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
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-48 mb-lg-0">
                            <div className="heading mb-16">
                                <h6 className="color-primary mb-8">–––– About Us</h6>
                                <h2>
                                    Cultivating a Digital Learning{" "}
                                    <span className="fm-sec">Ecosystem.</span>
                                </h2>
                            </div>
                            <p className="mb-32">
                                Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam
                                tempus. Volutpat tortor tincidunt egestas sit risus donec.
                            </p>
                            <div
                                className="about__card mb-24 wow fadeInLeft animated"
                                data-wow-delay="200ms"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "200ms",
                                    animationName: "fadeInLeft"
                                }}
                            >
                                <div className="about__card__icon">
                                    <img src="assets/media/icons/Clock.png" alt=""/>
                                </div>
                                <div className="about__card__content">
                                    <h5 className="mb-4p">Latest Courses</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Non convallis sed id
                                        aliquam tempus. Volutpat tortor tincidunt egestas sit risus.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="about__card mb-24 wow fadeInLeft animated"
                                data-wow-delay="400ms"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "400ms",
                                    animationName: "fadeInLeft"
                                }}
                            >
                                <div className="about__card__icon">
                                    <img src="assets/media/icons/WiFi.png" alt=""/>
                                </div>
                                <div className="about__card__content">
                                    <h5 className="mb-4p">Live Classes</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Non convallis sed id
                                        aliquam tempus. Volutpat tortor tincidunt egestas sit risus.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="about__card mb-24 wow fadeInLeft animated"
                                data-wow-delay="600ms"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "600ms",
                                    animationName: "fadeInLeft"
                                }}
                            >
                                <div className="about__card__icon">
                                    <img src="assets/media/icons/star.png" alt=""/>
                                </div>
                                <div className="about__card__content">
                                    <h5 className="mb-4p">Nurtured Students</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Non convallis sed id
                                        aliquam tempus. Volutpat tortor tincidunt egestas sit risus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="educate-tilt"
                                data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 2, "speed": 700, "scale": 1 }'
                            >
                                <img src="assets/media/resources/about-1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="benefits py-60">
                <div className="container">
                    <div className="heading_block">
                        <h6 className="color-primary mb-8">–––– Benefits</h6>
                        <h2 className="mb-32">
                            Cultivating a Digital Learning <br/>
                            <span className="fm-sec">Ecosystem.</span>
                        </h2>
                        <a href="courses.html" className="educate-btn">
                            <span className="educate-btn__curve"/>
                            View All
                        </a>
                    </div>
                    <div className="row">
                        <div
                            className="col-xxl-2 col-lg-3 col-sm-6 offset-xxl-2 card_block wow fadeInUp animated"
                            data-wow-delay="200ms"
                            style={{
                                visibility: "visible",
                                animationDelay: "200ms",
                                animationName: "fadeInUp"
                            }}
                        >
                            <div className="feature__card mb-24 mb-xl-0">
                                <div className="feature__icon">
                                    <img src="assets/media/icons/Pricing.png" alt=""/>
                                </div>
                                <div className="feature__content">
                                    <h5 className="mb-8">Free Trials</h5>
                                    <p>Lorem ipsum dolor sit amet consectetu. </p>
                                    <img
                                        src="assets/media/shapes/feture-bg-shape.png"
                                        alt=""
                                        className="feature-bg-shape"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xxl-2 col-lg-3 col-sm-6 card_block wow fadeInUp animated"
                            data-wow-delay="400ms"
                            style={{
                                visibility: "visible",
                                animationDelay: "400ms",
                                animationName: "fadeInUp"
                            }}
                        >
                            <div className="feature__card mb-24 mb-xl-0">
                                <div className="feature__icon">
                                    <img src="assets/media/icons/Quality.png" alt=""/>
                                </div>
                                <div className="feature__content">
                                    <h5 className="mb-8">Lifetime Access</h5>
                                    <p>Lorem ipsum dolor sit amet consectetu. </p>
                                    <img
                                        src="assets/media/shapes/feture-bg-shape.png"
                                        alt=""
                                        className="feature-bg-shape"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xxl-2 col-lg-3 col-sm-6 card_block wow fadeInUp animated"
                            data-wow-delay="600ms"
                            style={{
                                visibility: "visible",
                                animationDelay: "600ms",
                                animationName: "fadeInUp"
                            }}
                        >
                            <div className="feature__card mb-24 mb-sm-0">
                                <div className="feature__icon">
                                    <img src="assets/media/icons/Check-mark.png" alt=""/>
                                </div>
                                <div className="feature__content">
                                    <h5 className="mb-8">Best Teachers</h5>
                                    <p>Lorem ipsum dolor sit amet consectetu. </p>
                                    <img
                                        src="assets/media/shapes/feture-bg-shape.png"
                                        alt=""
                                        className="feature-bg-shape"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xxl-2 col-lg-3 col-sm-6 card_block wow fadeInUp animated"
                            data-wow-delay="800ms"
                            style={{
                                visibility: "visible",
                                animationDelay: "800ms",
                                animationName: "fadeInUp"
                            }}
                        >
                            <div className="feature__card">
                                <div className="feature__icon">
                                    <img src="assets/media/icons/Support.png" alt=""/>
                                </div>
                                <div className="feature__content">
                                    <h5 className="mb-8">24/7 Support</h5>
                                    <p>Lorem ipsum dolor sit amet consectetu. </p>
                                    <img
                                        src="assets/media/shapes/feture-bg-shape.png"
                                        alt=""
                                        className="feature-bg-shape"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xxl-2 col-sm-6 card_block wow fadeInUp d-xxl-block d-none animated"
                            data-wow-delay="800ms"
                            style={{
                                visibility: "visible",
                                animationDelay: "800ms",
                                animationName: "fadeInUp"
                            }}
                        >
                            <div className="feature__card">
                                <div className="feature__icon">
                                    <img src="assets/media/icons/Transfer.png" alt=""/>
                                </div>
                                <div className="feature__content">
                                    <h5 className="mb-8">Daily Updates</h5>
                                    <p>Lorem ipsum dolor sit amet consectetu. </p>
                                    <img
                                        src="assets/media/shapes/feture-bg-shape.png"
                                        alt=""
                                        className="feature-bg-shape"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team py-60">
                <img src="assets/media/shapes/dots-1.png" alt="" className="dots"/>
                <img src="assets/media/icons/3dtag.png" alt="" className="tag"/>
                <div className="row align-items-center">
                    <div className="col-xl-5">
                        <div className="team_one__content mb-64 mb-xl-0">
                            <div className="heading mb-16">
                                <h6 className="color-primary mb-8">–––– Our Teachers</h6>
                                <h2>
                                    Meet the Dedicated <br/> Educators Shaping
                                    <br/> Your <span className="fm-sec">Future.</span>
                                </h2>
                            </div>
                            <p className="mb-24">
                                Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam
                                tempus. Volutpat tortor tincidunt egestas sit risus donec.
                            </p>
                            <a href="team.html" className="educate-btn">
                                <span className="educate-btn__curve"/>
                                View All
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="team-slider py-60 ms-2 ms-xl-0 slick-initialized slick-slider slick-dotted">
                            <div className="slick-list draggable">
                                <div
                                    className="slick-track"
                                    style={{
                                        opacity: 1,
                                        width: 25000,
                                        transform: "translate3d(-720px, 0px, 0px)"
                                    }}
                                >
                                    <div
                                        className="team__card mb-24 slick-slide slick-cloned"
                                        style={{}}
                                        tabIndex={-1}
                                        role="tabpanel"
                                        id=""
                                        aria-describedby="slick-slide-control03"
                                        data-slick-index={-2}
                                        aria-hidden="true"
                                    >
                                        <div className="team__img_block">
                                            <img
                                                src="assets/media/team/Card-4.png"
                                                alt=""
                                                className="team_img"
                                            />
                                            <div className="team__content_block">
                                                <div className="team__text_block">
                                                    <h5 className="mb-8">
                                                        <a href="team-detail.html" tabIndex={-1}>
                                                            Mia Thompson
                                                        </a>
                                                    </h5>
                                                    <ul className="team__info unstyled mb-16">
                                                        <li>
                                                            <i className="fas fa-star"/>5
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-graduation-cap"/>
                                                            Literature
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-clock"/>
                                                            60+
                                                        </li>
                                                    </ul>
                                                    <p className="team_info_text mb-24">
                                                        Lorem ipsum dolor sit amet consectetur. Non convallis sed
                                                        id aliquam tempus.{" "}
                                                    </p>
                                                    <a
                                                        href="courses.html"
                                                        className="educate-btn mx-auto"
                                                        tabIndex={-1}
                                                    >
                                                        <span className="educate-btn__curve"/>
                                                        View All
                                                    </a>
                                                    <img
                                                        src="assets/media/shapes/feture-bg-shape.png"
                                                        alt=""
                                                        className="text_block_bg_shape"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="team__card mb-24 slick-slide slick-cloned"
                                        style={{}}
                                        tabIndex={-1}
                                        role="tabpanel"
                                        id=""
                                        aria-describedby="slick-slide-control04"
                                        data-slick-index={-1}
                                        aria-hidden="true"
                                    >
                                        <div className="team__img_block">
                                            <img
                                                src="assets/media/team/Card-5.png"
                                                alt=""
                                                className="team_img"
                                            />
                                            <div className="team__content_block">
                                                <div className="team__text_block">
                                                    <h5 className="mb-8">
                                                        <a href="team-detail.html" tabIndex={-1}>
                                                            Mia Thompson
                                                        </a>
                                                    </h5>
                                                    <ul className="team__info unstyled mb-16">
                                                        <li>
                                                            <i className="fas fa-star"/>5
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-graduation-cap"/>
                                                            Literature
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-clock"/>
                                                            60+
                                                        </li>
                                                    </ul>
                                                    <p className="team_info_text mb-24">
                                                        Lorem ipsum dolor sit amet consectetur. Non convallis sed
                                                        id aliquam tempus.{" "}
                                                    </p>
                                                    <a
                                                        href="courses.html"
                                                        className="educate-btn mx-auto"
                                                        tabIndex={-1}
                                                    >
                                                        <span className="educate-btn__curve"/>
                                                        View All
                                                    </a>
                                                    <img
                                                        src="assets/media/shapes/feture-bg-shape.png"
                                                        alt=""
                                                        className="text_block_bg_shape"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="team__card mb-24 slick-slide slick-current slick-active"
                                        style={{}}
                                        tabIndex={0}
                                        role="tabpanel"
                                        id="slick-slide00"
                                        aria-describedby="slick-slide-control00"
                                        data-slick-index={0}
                                        aria-hidden="false"
                                    >
                                        <div className="team__img_block">
                                            <img
                                                src="assets/media/team/Card.png"
                                                alt=""
                                                className="team_img"
                                            />
                                            <div className="team__content_block">
                                                <div className="team__text_block">
                                                    <h5 className="mb-8">
                                                        <a href="team-detail.html" tabIndex={0}>
                                                            Angel Whites
                                                        </a>
                                                    </h5>
                                                    <ul className="team__info unstyled mb-16">
                                                        <li>
                                                            <i className="fas fa-star"/>5
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-graduation-cap"/>
                                                            Economics
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-clock"/>
                                                            60+
                                                        </li>
                                                    </ul>
                                                    <p className="team_info_text mb-24">
                                                        Lorem ipsum dolor sit amet consectetur. Non convallis sed
                                                        id aliquam tempus.{" "}
                                                    </p>
                                                    <a
                                                        href="courses.html"
                                                        className="educate-btn mx-auto"
                                                        tabIndex={0}
                                                    >
                                                        <span className="educate-btn__curve"/>
                                                        View All
                                                    </a>
                                                    <img
                                                        src="assets/media/shapes/feture-bg-shape.png"
                                                        alt=""
                                                        className="text_block_bg_shape"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="team__card mb-24 slick-slide slick-active"
                                        style={{}}
                                        tabIndex={0}
                                        role="tabpanel"
                                        id="slick-slide01"
                                        aria-describedby="slick-slide-control01"
                                        data-slick-index={1}
                                        aria-hidden="false"
                                    >
                                        <div className="team__img_block">
                                            <img
                                                src="assets/media/team/Card-2.png"
                                                alt=""
                                                className="team_img"
                                            />
                                            <div className="team__content_block">
                                                <div className="team__text_block">
                                                    <h5 className="mb-8">
                                                        <a href="team-detail.html" tabIndex={0}>
                                                            Mike Noah{" "}
                                                        </a>
                                                    </h5>
                                                    <ul className="team__info unstyled mb-16">
                                                        <li>
                                                            <i className="fas fa-star"/>5
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-graduation-cap"/>
                                                            Developer
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-clock"/>
                                                            60+
                                                        </li>
                                                    </ul>
                                                    <p className="team_info_text mb-24">
                                                        Lorem ipsum dolor sit amet consectetur. Non convallis sed
                                                        id aliquam tempus.{" "}
                                                    </p>
                                                    <a
                                                        href="courses.html"
                                                        className="educate-btn mx-auto"
                                                        tabIndex={0}
                                                    >
                                                        <span className="educate-btn__curve"/>
                                                        View All
                                                    </a>
                                                    <img
                                                        src="assets/media/shapes/feture-bg-shape.png"
                                                        alt=""
                                                        className="text_block_bg_shape"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="team__card mb-24 slick-slide"
                                        style={{}}
                                        tabIndex={-1}
                                        role="tabpanel"
                                        id="slick-slide02"
                                        aria-describedby="slick-slide-control02"
                                        data-slick-index={2}
                                        aria-hidden="true"
                                    >
                                        <div className="team__img_block">
                                            <img
                                                src="assets/media/team/Card-3.png"
                                                alt=""
                                                className="team_img"
                                            />
                                            <div className="team__content_block">
                                                <div className="team__text_block">
                                                    <h5 className="mb-8">
                                                        <a href="team-detail.html" tabIndex={-1}>
                                                            Sophia Parker
                                                        </a>
                                                    </h5>
                                                    <ul className="team__info unstyled mb-16">
                                                        <li>
                                                            <i className="fas fa-star"/>5
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-graduation-cap"/>
                                                            Ui Engineer
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-clock"/>
                                                            60+
                                                        </li>
                                                    </ul>
                                                    <p className="team_info_text mb-24">
                                                        Lorem ipsum dolor sit amet consectetur. Non convallis sed
                                                        id aliquam tempus.{" "}
                                                    </p>
                                                    <a
                                                        href="courses.html"
                                                        className="educate-btn mx-auto"
                                                        tabIndex={-1}
                                                    >
                                                        <span className="educate-btn__curve"/>
                                                        View All
                                                    </a>
                                                    <img
                                                        src="assets/media/shapes/feture-bg-shape.png"
                                                        alt=""
                                                        className="text_block_bg_shape"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="team__card mb-24 slick-slide"
                                        style={{}}
                                        tabIndex={-1}
                                        role="tabpanel"
                                        id="slick-slide03"
                                        aria-describedby="slick-slide-control03"
                                        data-slick-index={3}
                                        aria-hidden="true"
                                    >
                                        <div className="team__img_block">
                                            <img
                                                src="assets/media/team/Card-4.png"
                                                alt=""
                                                className="team_img"
                                            />
                                            <div className="team__content_block">
                                                <div className="team__text_block">
                                                    <h5 className="mb-8">
                                                        <a href="team-detail.html" tabIndex={-1}>
                                                            Mia Thompson
                                                        </a>
                                                    </h5>
                                                    <ul className="team__info unstyled mb-16">
                                                        <li>
                                                            <i className="fas fa-star"/>5
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-graduation-cap"/>
                                                            Literature
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-clock"/>
                                                            60+
                                                        </li>
                                                    </ul>
                                                    <p className="team_info_text mb-24">
                                                        Lorem ipsum dolor sit amet consectetur. Non convallis sed
                                                        id aliquam tempus.{" "}
                                                    </p>
                                                    <a
                                                        href="courses.html"
                                                        className="educate-btn mx-auto"
                                                        tabIndex={-1}
                                                    >
                                                        <span className="educate-btn__curve"/>
                                                        View All
                                                    </a>
                                                    <img
                                                        src="assets/media/shapes/feture-bg-shape.png"
                                                        alt=""
                                                        className="text_block_bg_shape"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="team__card mb-24 slick-slide"
                                        style={{}}
                                        tabIndex={-1}
                                        role="tabpanel"
                                        id="slick-slide04"
                                        aria-describedby="slick-slide-control04"
                                        data-slick-index={4}
                                        aria-hidden="true"
                                    >
                                        <div className="team__img_block">
                                            <img
                                                src="assets/media/team/Card-5.png"
                                                alt=""
                                                className="team_img"
                                            />
                                            <div className="team__content_block">
                                                <div className="team__text_block">
                                                    <h5 className="mb-8">
                                                        <a href="team-detail.html" tabIndex={-1}>
                                                            Mia Thompson
                                                        </a>
                                                    </h5>
                                                    <ul className="team__info unstyled mb-16">
                                                        <li>
                                                            <i className="fas fa-star"/>5
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-graduation-cap"/>
                                                            Literature
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-clock"/>
                                                            60+
                                                        </li>
                                                    </ul>
                                                    <p className="team_info_text mb-24">
                                                        Lorem ipsum dolor sit amet consectetur. Non convallis sed
                                                        id aliquam tempus.{" "}
                                                    </p>
                                                    <a
                                                        href="courses.html"
                                                        className="educate-btn mx-auto"
                                                        tabIndex={-1}
                                                    >
                                                        <span className="educate-btn__curve"/>
                                                        View All
                                                    </a>
                                                    <img
                                                        src="assets/media/shapes/feture-bg-shape.png"
                                                        alt=""
                                                        className="text_block_bg_shape"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="team__card mb-24 slick-slide slick-cloned"
                                        style={{}}
                                        tabIndex={-1}
                                        role="tabpanel"
                                        id=""
                                        aria-describedby="slick-slide-control00"
                                        data-slick-index={5}
                                        aria-hidden="true"
                                    >
                                        <div className="team__img_block">
                                            <img
                                                src="assets/media/team/Card.png"
                                                alt=""
                                                className="team_img"
                                            />
                                            <div className="team__content_block">
                                                <div className="team__text_block">
                                                    <h5 className="mb-8">
                                                        <a href="team-detail.html" tabIndex={-1}>
                                                            Angel Whites
                                                        </a>
                                                    </h5>
                                                    <ul className="team__info unstyled mb-16">
                                                        <li>
                                                            <i className="fas fa-star"/>5
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-graduation-cap"/>
                                                            Economics
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-clock"/>
                                                            60+
                                                        </li>
                                                    </ul>
                                                    <p className="team_info_text mb-24">
                                                        Lorem ipsum dolor sit amet consectetur. Non convallis sed
                                                        id aliquam tempus.{" "}
                                                    </p>
                                                    <a
                                                        href="courses.html"
                                                        className="educate-btn mx-auto"
                                                        tabIndex={-1}
                                                    >
                                                        <span className="educate-btn__curve"/>
                                                        View All
                                                    </a>
                                                    <img
                                                        src="assets/media/shapes/feture-bg-shape.png"
                                                        alt=""
                                                        className="text_block_bg_shape"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="team__card mb-24 slick-slide slick-cloned"
                                        style={{}}
                                        tabIndex={-1}
                                        role="tabpanel"
                                        id=""
                                        aria-describedby="slick-slide-control01"
                                        data-slick-index={6}
                                        aria-hidden="true"
                                    >
                                        <div className="team__img_block">
                                            <img
                                                src="assets/media/team/Card-2.png"
                                                alt=""
                                                className="team_img"
                                            />
                                            <div className="team__content_block">
                                                <div className="team__text_block">
                                                    <h5 className="mb-8">
                                                        <a href="team-detail.html" tabIndex={-1}>
                                                            Mike Noah{" "}
                                                        </a>
                                                    </h5>
                                                    <ul className="team__info unstyled mb-16">
                                                        <li>
                                                            <i className="fas fa-star"/>5
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-graduation-cap"/>
                                                            Developer
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-clock"/>
                                                            60+
                                                        </li>
                                                    </ul>
                                                    <p className="team_info_text mb-24">
                                                        Lorem ipsum dolor sit amet consectetur. Non convallis sed
                                                        id aliquam tempus.{" "}
                                                    </p>
                                                    <a
                                                        href="courses.html"
                                                        className="educate-btn mx-auto"
                                                        tabIndex={-1}
                                                    >
                                                        <span className="educate-btn__curve"/>
                                                        View All
                                                    </a>
                                                    <img
                                                        src="assets/media/shapes/feture-bg-shape.png"
                                                        alt=""
                                                        className="text_block_bg_shape"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="team__card mb-24 slick-slide slick-cloned"
                                        style={{}}
                                        tabIndex={-1}
                                        role="tabpanel"
                                        id=""
                                        aria-describedby="slick-slide-control02"
                                        data-slick-index={7}
                                        aria-hidden="true"
                                    >
                                        <div className="team__img_block">
                                            <img
                                                src="assets/media/team/Card-3.png"
                                                alt=""
                                                className="team_img"
                                            />
                                            <div className="team__content_block">
                                                <div className="team__text_block">
                                                    <h5 className="mb-8">
                                                        <a href="team-detail.html" tabIndex={-1}>
                                                            Sophia Parker
                                                        </a>
                                                    </h5>
                                                    <ul className="team__info unstyled mb-16">
                                                        <li>
                                                            <i className="fas fa-star"/>5
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-graduation-cap"/>
                                                            Ui Engineer
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-clock"/>
                                                            60+
                                                        </li>
                                                    </ul>
                                                    <p className="team_info_text mb-24">
                                                        Lorem ipsum dolor sit amet consectetur. Non convallis sed
                                                        id aliquam tempus.{" "}
                                                    </p>
                                                    <a
                                                        href="courses.html"
                                                        className="educate-btn mx-auto"
                                                        tabIndex={-1}
                                                    >
                                                        <span className="educate-btn__curve"/>
                                                        View All
                                                    </a>
                                                    <img
                                                        src="assets/media/shapes/feture-bg-shape.png"
                                                        alt=""
                                                        className="text_block_bg_shape"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="team__card mb-24 slick-slide slick-cloned"
                                        style={{}}
                                        tabIndex={-1}
                                        role="tabpanel"
                                        id=""
                                        aria-describedby="slick-slide-control03"
                                        data-slick-index={8}
                                        aria-hidden="true"
                                    >
                                        <div className="team__img_block">
                                            <img
                                                src="assets/media/team/Card-4.png"
                                                alt=""
                                                className="team_img"
                                            />
                                            <div className="team__content_block">
                                                <div className="team__text_block">
                                                    <h5 className="mb-8">
                                                        <a href="team-detail.html" tabIndex={-1}>
                                                            Mia Thompson
                                                        </a>
                                                    </h5>
                                                    <ul className="team__info unstyled mb-16">
                                                        <li>
                                                            <i className="fas fa-star"/>5
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-graduation-cap"/>
                                                            Literature
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-clock"/>
                                                            60+
                                                        </li>
                                                    </ul>
                                                    <p className="team_info_text mb-24">
                                                        Lorem ipsum dolor sit amet consectetur. Non convallis sed
                                                        id aliquam tempus.{" "}
                                                    </p>
                                                    <a
                                                        href="courses.html"
                                                        className="educate-btn mx-auto"
                                                        tabIndex={-1}
                                                    >
                                                        <span className="educate-btn__curve"/>
                                                        View All
                                                    </a>
                                                    <img
                                                        src="assets/media/shapes/feture-bg-shape.png"
                                                        alt=""
                                                        className="text_block_bg_shape"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="team__card mb-24 slick-slide slick-cloned"
                                        style={{}}
                                        tabIndex={-1}
                                        role="tabpanel"
                                        id=""
                                        aria-describedby="slick-slide-control04"
                                        data-slick-index={9}
                                        aria-hidden="true"
                                    >
                                        <div className="team__img_block">
                                            <img
                                                src="assets/media/team/Card-5.png"
                                                alt=""
                                                className="team_img"
                                            />
                                            <div className="team__content_block">
                                                <div className="team__text_block">
                                                    <h5 className="mb-8">
                                                        <a href="team-detail.html" tabIndex={-1}>
                                                            Mia Thompson
                                                        </a>
                                                    </h5>
                                                    <ul className="team__info unstyled mb-16">
                                                        <li>
                                                            <i className="fas fa-star"/>5
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-graduation-cap"/>
                                                            Literature
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-clock"/>
                                                            60+
                                                        </li>
                                                    </ul>
                                                    <p className="team_info_text mb-24">
                                                        Lorem ipsum dolor sit amet consectetur. Non convallis sed
                                                        id aliquam tempus.{" "}
                                                    </p>
                                                    <a
                                                        href="courses.html"
                                                        className="educate-btn mx-auto"
                                                        tabIndex={-1}
                                                    >
                                                        <span className="educate-btn__curve"/>
                                                        View All
                                                    </a>
                                                    <img
                                                        src="assets/media/shapes/feture-bg-shape.png"
                                                        alt=""
                                                        className="text_block_bg_shape"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="slick-dots" style={{}} role="tablist">
                                <li className="slick-active" role="presentation">
                                    <button
                                        type="button"
                                        role="tab"
                                        id="slick-slide-control00"
                                        aria-controls="slick-slide00"
                                        aria-label="1 of 3"
                                        tabIndex={0}
                                        aria-selected="true"
                                    >
                                        1
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button
                                        type="button"
                                        role="tab"
                                        id="slick-slide-control01"
                                        aria-controls="slick-slide01"
                                        aria-label="2 of 3"
                                        tabIndex={-1}
                                    >
                                        2
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button
                                        type="button"
                                        role="tab"
                                        id="slick-slide-control02"
                                        aria-controls="slick-slide02"
                                        aria-label="3 of 3"
                                        tabIndex={-1}
                                    >
                                        3
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button
                                        type="button"
                                        role="tab"
                                        id="slick-slide-control03"
                                        aria-controls="slick-slide03"
                                        aria-label="4 of 3"
                                        tabIndex={-1}
                                    >
                                        4
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button
                                        type="button"
                                        role="tab"
                                        id="slick-slide-control04"
                                        aria-controls="slick-slide04"
                                        aria-label="5 of 3"
                                        tabIndex={-1}
                                    >
                                        5
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="counter_item">
                                <div className="counter_item_info_block mb-16">
                                    <img src="assets/media/shapes/vector-group-3.png" alt=""/>
                                    <h2 className="counter_info">
              <span
                  className="count_one odometer odometer-auto-theme"
                  data-count={20}
              >
                <div className="odometer-inside">
                  <span className="odometer-digit">
                    <span className="odometer-digit-spacer">8</span>
                    <span className="odometer-digit-inner">
                      <span className="odometer-ribbon">
                        <span className="odometer-ribbon-inner">
                          <span className="odometer-value">0</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </span>
                                        <span>k</span>
                                    </h2>
                                </div>
                                <h5>Students Enrolled</h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="counter_item">
                                <div className="counter_item_info_block mb-16">
                                    <img src="assets/media/shapes/vector-group-3.png" alt=""/>
                                    <h2 className="counter_info">
              <span
                  className="count_one odometer odometer-auto-theme"
                  data-count={50}
              >
                <div className="odometer-inside">
                  <span className="odometer-digit">
                    <span className="odometer-digit-spacer">8</span>
                    <span className="odometer-digit-inner">
                      <span className="odometer-ribbon">
                        <span className="odometer-ribbon-inner">
                          <span className="odometer-value">0</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </span>
                                        <span>k</span>
                                    </h2>
                                </div>
                                <h5>Students Enrolled</h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="counter_item">
                                <div className="counter_item_info_block mb-16">
                                    <img src="assets/media/shapes/vector-group-3.png" alt=""/>
                                    <h2 className="counter_info">
              <span
                  className="count_one odometer odometer-auto-theme"
                  data-count={98}
              >
                <div className="odometer-inside">
                  <span className="odometer-digit">
                    <span className="odometer-digit-spacer">8</span>
                    <span className="odometer-digit-inner">
                      <span className="odometer-ribbon">
                        <span className="odometer-ribbon-inner">
                          <span className="odometer-value">0</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </span>
                                        <span>%</span>
                                    </h2>
                                </div>
                                <h5>Students Enrolled</h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="counter_item">
                                <div className="counter_item_info_block mb-16">
                                    <img src="assets/media/shapes/vector-group-3.png" alt=""/>
                                    <h2 className="counter_info">
              <span
                  className="count_one odometer odometer-auto-theme"
                  data-count={200}
              >
                <div className="odometer-inside">
                  <span className="odometer-digit">
                    <span className="odometer-digit-spacer">8</span>
                    <span className="odometer-digit-inner">
                      <span className="odometer-ribbon">
                        <span className="odometer-ribbon-inner">
                          <span className="odometer-value">0</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </span>
                                        <span>+</span>
                                    </h2>
                                </div>
                                <h5>Students Enrolled</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-10 offset-xl-0 offset-lg-1 order-xl-1 order-2">
                            <div className="testimonials_slider_2 slick-initialized slick-slider slick-dotted">
                                <div className="slick-list draggable" style={{padding: "0px 15%"}}>
                                    <div
                                        className="slick-track"
                                        style={{
                                            opacity: 1,
                                            width: 15000,
                                            transform: "translate3d(-725px, 0px, 0px)"
                                        }}
                                    >
                                        <div
                                            className="testimonial_card_2 slick-slide slick-cloned"
                                            data-slick-index={-3}
                                            id=""
                                            aria-hidden="true"
                                            tabIndex={-1}
                                        >
                                            <div className="testimonial_card_img_block">
                                                <img
                                                    src="assets/media/shapes/vector-group-2.png"
                                                    alt=""
                                                    className="bg_vector"
                                                />
                                                <img
                                                    src="assets/media/users/u-4.png"
                                                    alt=""
                                                    className="user_img"
                                                />
                                            </div>
                                            <div className="testimonial">
                                                <h4 className="mb-16">Jophie Alen</h4>
                                                <span className="mb-16">
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                  </span>
                                                <p className="review_text">
                                                    Lorem ipsum dolor sit amet consectetur. Non convallis sed id
                                                    aliquam tempus.
                                                </p>
                                            </div>
                                            <div className="quote_block"/>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 78 64"
                                                fill="none"
                                                className="quote_mark"
                                            >
                                                <path
                                                    d="M55.8684 63.0894C52.6269 63.0894 49.6698 62.606 46.997 61.6392C44.3242 60.6156 42.0495 59.2224 40.1729 57.4595C38.2963 55.6397 36.8177 53.4503 35.7372 50.8913C34.7136 48.3322 34.2018 45.4888 34.2018 42.3611C34.2018 39.1197 34.7705 35.736 35.9078 32.2102C37.1021 28.6845 38.8081 25.1302 41.0259 21.5476C43.2438 17.9649 45.9165 14.4391 49.0443 10.9702C52.2288 7.44441 55.8399 4.06079 59.8775 0.819336L69.6872 8.49646C67.8106 10.43 66.1045 12.2782 64.5691 14.0411C63.0905 15.8039 61.7257 17.5668 60.4746 19.3297C59.2236 21.0926 58.0578 22.9124 56.9773 24.789C55.9537 26.6657 55.0154 28.656 54.1623 30.7601L77.3643 42.3611C77.3643 45.432 76.7672 48.2469 75.573 50.806C74.4356 53.365 72.9002 55.5544 70.9667 57.3742C69.0332 59.1939 66.7585 60.6156 64.1426 61.6392C61.5267 62.606 58.7686 63.0894 55.8684 63.0894ZM22.1666 63.0894C18.9251 63.0894 15.968 62.606 13.2952 61.6392C10.6224 60.6156 8.34773 59.2224 6.4711 57.4595C4.59447 55.6397 3.11591 53.4503 2.03543 50.8913C1.01181 48.3322 0.5 45.4888 0.5 42.3611C0.5 39.1197 1.06868 35.736 2.20603 32.2102C3.40025 28.6845 5.10628 25.1302 7.32411 21.5476C9.54195 17.9649 12.2147 14.4391 15.3424 10.9702C18.527 7.44441 22.1381 4.06079 26.1757 0.819336L35.9854 8.49646C34.1088 10.43 32.4027 12.2782 30.8673 14.0411C29.3887 15.8039 28.0239 17.5668 26.7728 19.3297C25.5217 21.0926 24.356 22.9124 23.2755 24.789C22.2519 26.6657 21.3135 28.656 20.4605 30.7601L43.6625 42.3611C43.6625 45.432 43.0654 48.2469 41.8712 50.806C40.7338 53.365 39.1984 55.5544 37.2649 57.3742C35.3314 59.1939 33.0567 60.6156 30.4408 61.6392C27.8249 62.606 25.0668 63.0894 22.1666 63.0894Z"/>
                                            </svg>
                                        </div>
                                        <div
                                            className="testimonial_card_2 slick-slide slick-cloned"
                                            data-slick-index={-2}
                                            id=""
                                            aria-hidden="true"
                                            tabIndex={-1}
                                        >
                                            <div className="testimonial_card_img_block">
                                                <img
                                                    src="assets/media/shapes/vector-group-2.png"
                                                    alt=""
                                                    className="bg_vector"
                                                />
                                                <img
                                                    src="assets/media/users/u-5.png"
                                                    alt=""
                                                    className="user_img"
                                                />
                                            </div>
                                            <div className="testimonial">
                                                <h4 className="mb-16">Jophie Alen</h4>
                                                <span className="mb-16">
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                  </span>
                                                <p className="review_text">
                                                    Lorem ipsum dolor sit amet consectetur. Non convallis sed id
                                                    aliquam tempus.
                                                </p>
                                            </div>
                                            <div className="quote_block"/>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 78 64"
                                                fill="none"
                                                className="quote_mark"
                                            >
                                                <path
                                                    d="M55.8684 63.0894C52.6269 63.0894 49.6698 62.606 46.997 61.6392C44.3242 60.6156 42.0495 59.2224 40.1729 57.4595C38.2963 55.6397 36.8177 53.4503 35.7372 50.8913C34.7136 48.3322 34.2018 45.4888 34.2018 42.3611C34.2018 39.1197 34.7705 35.736 35.9078 32.2102C37.1021 28.6845 38.8081 25.1302 41.0259 21.5476C43.2438 17.9649 45.9165 14.4391 49.0443 10.9702C52.2288 7.44441 55.8399 4.06079 59.8775 0.819336L69.6872 8.49646C67.8106 10.43 66.1045 12.2782 64.5691 14.0411C63.0905 15.8039 61.7257 17.5668 60.4746 19.3297C59.2236 21.0926 58.0578 22.9124 56.9773 24.789C55.9537 26.6657 55.0154 28.656 54.1623 30.7601L77.3643 42.3611C77.3643 45.432 76.7672 48.2469 75.573 50.806C74.4356 53.365 72.9002 55.5544 70.9667 57.3742C69.0332 59.1939 66.7585 60.6156 64.1426 61.6392C61.5267 62.606 58.7686 63.0894 55.8684 63.0894ZM22.1666 63.0894C18.9251 63.0894 15.968 62.606 13.2952 61.6392C10.6224 60.6156 8.34773 59.2224 6.4711 57.4595C4.59447 55.6397 3.11591 53.4503 2.03543 50.8913C1.01181 48.3322 0.5 45.4888 0.5 42.3611C0.5 39.1197 1.06868 35.736 2.20603 32.2102C3.40025 28.6845 5.10628 25.1302 7.32411 21.5476C9.54195 17.9649 12.2147 14.4391 15.3424 10.9702C18.527 7.44441 22.1381 4.06079 26.1757 0.819336L35.9854 8.49646C34.1088 10.43 32.4027 12.2782 30.8673 14.0411C29.3887 15.8039 28.0239 17.5668 26.7728 19.3297C25.5217 21.0926 24.356 22.9124 23.2755 24.789C22.2519 26.6657 21.3135 28.656 20.4605 30.7601L43.6625 42.3611C43.6625 45.432 43.0654 48.2469 41.8712 50.806C40.7338 53.365 39.1984 55.5544 37.2649 57.3742C35.3314 59.1939 33.0567 60.6156 30.4408 61.6392C27.8249 62.606 25.0668 63.0894 22.1666 63.0894Z"/>
                                            </svg>
                                        </div>
                                        <div
                                            className="testimonial_card_2 slick-slide slick-cloned"
                                            data-slick-index={-1}
                                            id=""
                                            aria-hidden="true"
                                            tabIndex={-1}
                                        >
                                            <div className="testimonial_card_img_block">
                                                <img
                                                    src="assets/media/shapes/vector-group-2.png"
                                                    alt=""
                                                    className="bg_vector"
                                                />
                                                <img
                                                    src="assets/media/users/u--6.png"
                                                    alt=""
                                                    className="user_img"
                                                />
                                            </div>
                                            <div className="testimonial">
                                                <h4 className="mb-16">Jophie Alen</h4>
                                                <span className="mb-16">
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                  </span>
                                                <p className="review_text">
                                                    Lorem ipsum dolor sit amet consectetur. Non convallis sed id
                                                    aliquam tempus.
                                                </p>
                                            </div>
                                            <div className="quote_block"/>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 78 64"
                                                fill="none"
                                                className="quote_mark"
                                            >
                                                <path
                                                    d="M55.8684 63.0894C52.6269 63.0894 49.6698 62.606 46.997 61.6392C44.3242 60.6156 42.0495 59.2224 40.1729 57.4595C38.2963 55.6397 36.8177 53.4503 35.7372 50.8913C34.7136 48.3322 34.2018 45.4888 34.2018 42.3611C34.2018 39.1197 34.7705 35.736 35.9078 32.2102C37.1021 28.6845 38.8081 25.1302 41.0259 21.5476C43.2438 17.9649 45.9165 14.4391 49.0443 10.9702C52.2288 7.44441 55.8399 4.06079 59.8775 0.819336L69.6872 8.49646C67.8106 10.43 66.1045 12.2782 64.5691 14.0411C63.0905 15.8039 61.7257 17.5668 60.4746 19.3297C59.2236 21.0926 58.0578 22.9124 56.9773 24.789C55.9537 26.6657 55.0154 28.656 54.1623 30.7601L77.3643 42.3611C77.3643 45.432 76.7672 48.2469 75.573 50.806C74.4356 53.365 72.9002 55.5544 70.9667 57.3742C69.0332 59.1939 66.7585 60.6156 64.1426 61.6392C61.5267 62.606 58.7686 63.0894 55.8684 63.0894ZM22.1666 63.0894C18.9251 63.0894 15.968 62.606 13.2952 61.6392C10.6224 60.6156 8.34773 59.2224 6.4711 57.4595C4.59447 55.6397 3.11591 53.4503 2.03543 50.8913C1.01181 48.3322 0.5 45.4888 0.5 42.3611C0.5 39.1197 1.06868 35.736 2.20603 32.2102C3.40025 28.6845 5.10628 25.1302 7.32411 21.5476C9.54195 17.9649 12.2147 14.4391 15.3424 10.9702C18.527 7.44441 22.1381 4.06079 26.1757 0.819336L35.9854 8.49646C34.1088 10.43 32.4027 12.2782 30.8673 14.0411C29.3887 15.8039 28.0239 17.5668 26.7728 19.3297C25.5217 21.0926 24.356 22.9124 23.2755 24.789C22.2519 26.6657 21.3135 28.656 20.4605 30.7601L43.6625 42.3611C43.6625 45.432 43.0654 48.2469 41.8712 50.806C40.7338 53.365 39.1984 55.5544 37.2649 57.3742C35.3314 59.1939 33.0567 60.6156 30.4408 61.6392C27.8249 62.606 25.0668 63.0894 22.1666 63.0894Z"/>
                                            </svg>
                                        </div>
                                        <div
                                            className="testimonial_card_2 slick-slide slick-current slick-active slick-center"
                                            data-slick-index={0}
                                            aria-hidden="false"
                                            tabIndex={0}
                                            role="tabpanel"
                                            id="slick-slide10"
                                            aria-describedby="slick-slide-control10"
                                        >
                                            <div className="testimonial_card_img_block">
                                                <img
                                                    src="assets/media/shapes/vector-group-2.png"
                                                    alt=""
                                                    className="bg_vector"
                                                />
                                                <img
                                                    src="assets/media/users/u-4.png"
                                                    alt=""
                                                    className="user_img"
                                                />
                                            </div>
                                            <div className="testimonial">
                                                <h4 className="mb-16">Jophie Alen</h4>
                                                <span className="mb-16">
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                  </span>
                                                <p className="review_text">
                                                    Lorem ipsum dolor sit amet consectetur. Non convallis sed id
                                                    aliquam tempus.
                                                </p>
                                            </div>
                                            <div className="quote_block"/>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 78 64"
                                                fill="none"
                                                className="quote_mark"
                                            >
                                                <path
                                                    d="M55.8684 63.0894C52.6269 63.0894 49.6698 62.606 46.997 61.6392C44.3242 60.6156 42.0495 59.2224 40.1729 57.4595C38.2963 55.6397 36.8177 53.4503 35.7372 50.8913C34.7136 48.3322 34.2018 45.4888 34.2018 42.3611C34.2018 39.1197 34.7705 35.736 35.9078 32.2102C37.1021 28.6845 38.8081 25.1302 41.0259 21.5476C43.2438 17.9649 45.9165 14.4391 49.0443 10.9702C52.2288 7.44441 55.8399 4.06079 59.8775 0.819336L69.6872 8.49646C67.8106 10.43 66.1045 12.2782 64.5691 14.0411C63.0905 15.8039 61.7257 17.5668 60.4746 19.3297C59.2236 21.0926 58.0578 22.9124 56.9773 24.789C55.9537 26.6657 55.0154 28.656 54.1623 30.7601L77.3643 42.3611C77.3643 45.432 76.7672 48.2469 75.573 50.806C74.4356 53.365 72.9002 55.5544 70.9667 57.3742C69.0332 59.1939 66.7585 60.6156 64.1426 61.6392C61.5267 62.606 58.7686 63.0894 55.8684 63.0894ZM22.1666 63.0894C18.9251 63.0894 15.968 62.606 13.2952 61.6392C10.6224 60.6156 8.34773 59.2224 6.4711 57.4595C4.59447 55.6397 3.11591 53.4503 2.03543 50.8913C1.01181 48.3322 0.5 45.4888 0.5 42.3611C0.5 39.1197 1.06868 35.736 2.20603 32.2102C3.40025 28.6845 5.10628 25.1302 7.32411 21.5476C9.54195 17.9649 12.2147 14.4391 15.3424 10.9702C18.527 7.44441 22.1381 4.06079 26.1757 0.819336L35.9854 8.49646C34.1088 10.43 32.4027 12.2782 30.8673 14.0411C29.3887 15.8039 28.0239 17.5668 26.7728 19.3297C25.5217 21.0926 24.356 22.9124 23.2755 24.789C22.2519 26.6657 21.3135 28.656 20.4605 30.7601L43.6625 42.3611C43.6625 45.432 43.0654 48.2469 41.8712 50.806C40.7338 53.365 39.1984 55.5544 37.2649 57.3742C35.3314 59.1939 33.0567 60.6156 30.4408 61.6392C27.8249 62.606 25.0668 63.0894 22.1666 63.0894Z"/>
                                            </svg>
                                        </div>
                                        <div
                                            className="testimonial_card_2 slick-slide slick-active"
                                            data-slick-index={1}
                                            aria-hidden="false"
                                            tabIndex={0}
                                            role="tabpanel"
                                            id="slick-slide11"
                                            aria-describedby="slick-slide-control11"
                                        >
                                            <div className="testimonial_card_img_block">
                                                <img
                                                    src="assets/media/shapes/vector-group-2.png"
                                                    alt=""
                                                    className="bg_vector"
                                                />
                                                <img
                                                    src="assets/media/users/u-5.png"
                                                    alt=""
                                                    className="user_img"
                                                />
                                            </div>
                                            <div className="testimonial">
                                                <h4 className="mb-16">Jophie Alen</h4>
                                                <span className="mb-16">
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                  </span>
                                                <p className="review_text">
                                                    Lorem ipsum dolor sit amet consectetur. Non convallis sed id
                                                    aliquam tempus.
                                                </p>
                                            </div>
                                            <div className="quote_block"/>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 78 64"
                                                fill="none"
                                                className="quote_mark"
                                            >
                                                <path
                                                    d="M55.8684 63.0894C52.6269 63.0894 49.6698 62.606 46.997 61.6392C44.3242 60.6156 42.0495 59.2224 40.1729 57.4595C38.2963 55.6397 36.8177 53.4503 35.7372 50.8913C34.7136 48.3322 34.2018 45.4888 34.2018 42.3611C34.2018 39.1197 34.7705 35.736 35.9078 32.2102C37.1021 28.6845 38.8081 25.1302 41.0259 21.5476C43.2438 17.9649 45.9165 14.4391 49.0443 10.9702C52.2288 7.44441 55.8399 4.06079 59.8775 0.819336L69.6872 8.49646C67.8106 10.43 66.1045 12.2782 64.5691 14.0411C63.0905 15.8039 61.7257 17.5668 60.4746 19.3297C59.2236 21.0926 58.0578 22.9124 56.9773 24.789C55.9537 26.6657 55.0154 28.656 54.1623 30.7601L77.3643 42.3611C77.3643 45.432 76.7672 48.2469 75.573 50.806C74.4356 53.365 72.9002 55.5544 70.9667 57.3742C69.0332 59.1939 66.7585 60.6156 64.1426 61.6392C61.5267 62.606 58.7686 63.0894 55.8684 63.0894ZM22.1666 63.0894C18.9251 63.0894 15.968 62.606 13.2952 61.6392C10.6224 60.6156 8.34773 59.2224 6.4711 57.4595C4.59447 55.6397 3.11591 53.4503 2.03543 50.8913C1.01181 48.3322 0.5 45.4888 0.5 42.3611C0.5 39.1197 1.06868 35.736 2.20603 32.2102C3.40025 28.6845 5.10628 25.1302 7.32411 21.5476C9.54195 17.9649 12.2147 14.4391 15.3424 10.9702C18.527 7.44441 22.1381 4.06079 26.1757 0.819336L35.9854 8.49646C34.1088 10.43 32.4027 12.2782 30.8673 14.0411C29.3887 15.8039 28.0239 17.5668 26.7728 19.3297C25.5217 21.0926 24.356 22.9124 23.2755 24.789C22.2519 26.6657 21.3135 28.656 20.4605 30.7601L43.6625 42.3611C43.6625 45.432 43.0654 48.2469 41.8712 50.806C40.7338 53.365 39.1984 55.5544 37.2649 57.3742C35.3314 59.1939 33.0567 60.6156 30.4408 61.6392C27.8249 62.606 25.0668 63.0894 22.1666 63.0894Z"/>
                                            </svg>
                                        </div>
                                        <div
                                            className="testimonial_card_2 slick-slide"
                                            data-slick-index={2}
                                            aria-hidden="true"
                                            tabIndex={-1}
                                            role="tabpanel"
                                            id="slick-slide12"
                                            aria-describedby="slick-slide-control12"
                                        >
                                            <div className="testimonial_card_img_block">
                                                <img
                                                    src="assets/media/shapes/vector-group-2.png"
                                                    alt=""
                                                    className="bg_vector"
                                                />
                                                <img
                                                    src="assets/media/users/u--6.png"
                                                    alt=""
                                                    className="user_img"
                                                />
                                            </div>
                                            <div className="testimonial">
                                                <h4 className="mb-16">Jophie Alen</h4>
                                                <span className="mb-16">
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                  </span>
                                                <p className="review_text">
                                                    Lorem ipsum dolor sit amet consectetur. Non convallis sed id
                                                    aliquam tempus.
                                                </p>
                                            </div>
                                            <div className="quote_block"/>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 78 64"
                                                fill="none"
                                                className="quote_mark"
                                            >
                                                <path
                                                    d="M55.8684 63.0894C52.6269 63.0894 49.6698 62.606 46.997 61.6392C44.3242 60.6156 42.0495 59.2224 40.1729 57.4595C38.2963 55.6397 36.8177 53.4503 35.7372 50.8913C34.7136 48.3322 34.2018 45.4888 34.2018 42.3611C34.2018 39.1197 34.7705 35.736 35.9078 32.2102C37.1021 28.6845 38.8081 25.1302 41.0259 21.5476C43.2438 17.9649 45.9165 14.4391 49.0443 10.9702C52.2288 7.44441 55.8399 4.06079 59.8775 0.819336L69.6872 8.49646C67.8106 10.43 66.1045 12.2782 64.5691 14.0411C63.0905 15.8039 61.7257 17.5668 60.4746 19.3297C59.2236 21.0926 58.0578 22.9124 56.9773 24.789C55.9537 26.6657 55.0154 28.656 54.1623 30.7601L77.3643 42.3611C77.3643 45.432 76.7672 48.2469 75.573 50.806C74.4356 53.365 72.9002 55.5544 70.9667 57.3742C69.0332 59.1939 66.7585 60.6156 64.1426 61.6392C61.5267 62.606 58.7686 63.0894 55.8684 63.0894ZM22.1666 63.0894C18.9251 63.0894 15.968 62.606 13.2952 61.6392C10.6224 60.6156 8.34773 59.2224 6.4711 57.4595C4.59447 55.6397 3.11591 53.4503 2.03543 50.8913C1.01181 48.3322 0.5 45.4888 0.5 42.3611C0.5 39.1197 1.06868 35.736 2.20603 32.2102C3.40025 28.6845 5.10628 25.1302 7.32411 21.5476C9.54195 17.9649 12.2147 14.4391 15.3424 10.9702C18.527 7.44441 22.1381 4.06079 26.1757 0.819336L35.9854 8.49646C34.1088 10.43 32.4027 12.2782 30.8673 14.0411C29.3887 15.8039 28.0239 17.5668 26.7728 19.3297C25.5217 21.0926 24.356 22.9124 23.2755 24.789C22.2519 26.6657 21.3135 28.656 20.4605 30.7601L43.6625 42.3611C43.6625 45.432 43.0654 48.2469 41.8712 50.806C40.7338 53.365 39.1984 55.5544 37.2649 57.3742C35.3314 59.1939 33.0567 60.6156 30.4408 61.6392C27.8249 62.606 25.0668 63.0894 22.1666 63.0894Z"/>
                                            </svg>
                                        </div>
                                        <div
                                            className="testimonial_card_2 slick-slide slick-cloned slick-center"
                                            data-slick-index={3}
                                            id=""
                                            aria-hidden="true"
                                            tabIndex={-1}
                                        >
                                            <div className="testimonial_card_img_block">
                                                <img
                                                    src="assets/media/shapes/vector-group-2.png"
                                                    alt=""
                                                    className="bg_vector"
                                                />
                                                <img
                                                    src="assets/media/users/u-4.png"
                                                    alt=""
                                                    className="user_img"
                                                />
                                            </div>
                                            <div className="testimonial">
                                                <h4 className="mb-16">Jophie Alen</h4>
                                                <span className="mb-16">
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                  </span>
                                                <p className="review_text">
                                                    Lorem ipsum dolor sit amet consectetur. Non convallis sed id
                                                    aliquam tempus.
                                                </p>
                                            </div>
                                            <div className="quote_block"/>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 78 64"
                                                fill="none"
                                                className="quote_mark"
                                            >
                                                <path
                                                    d="M55.8684 63.0894C52.6269 63.0894 49.6698 62.606 46.997 61.6392C44.3242 60.6156 42.0495 59.2224 40.1729 57.4595C38.2963 55.6397 36.8177 53.4503 35.7372 50.8913C34.7136 48.3322 34.2018 45.4888 34.2018 42.3611C34.2018 39.1197 34.7705 35.736 35.9078 32.2102C37.1021 28.6845 38.8081 25.1302 41.0259 21.5476C43.2438 17.9649 45.9165 14.4391 49.0443 10.9702C52.2288 7.44441 55.8399 4.06079 59.8775 0.819336L69.6872 8.49646C67.8106 10.43 66.1045 12.2782 64.5691 14.0411C63.0905 15.8039 61.7257 17.5668 60.4746 19.3297C59.2236 21.0926 58.0578 22.9124 56.9773 24.789C55.9537 26.6657 55.0154 28.656 54.1623 30.7601L77.3643 42.3611C77.3643 45.432 76.7672 48.2469 75.573 50.806C74.4356 53.365 72.9002 55.5544 70.9667 57.3742C69.0332 59.1939 66.7585 60.6156 64.1426 61.6392C61.5267 62.606 58.7686 63.0894 55.8684 63.0894ZM22.1666 63.0894C18.9251 63.0894 15.968 62.606 13.2952 61.6392C10.6224 60.6156 8.34773 59.2224 6.4711 57.4595C4.59447 55.6397 3.11591 53.4503 2.03543 50.8913C1.01181 48.3322 0.5 45.4888 0.5 42.3611C0.5 39.1197 1.06868 35.736 2.20603 32.2102C3.40025 28.6845 5.10628 25.1302 7.32411 21.5476C9.54195 17.9649 12.2147 14.4391 15.3424 10.9702C18.527 7.44441 22.1381 4.06079 26.1757 0.819336L35.9854 8.49646C34.1088 10.43 32.4027 12.2782 30.8673 14.0411C29.3887 15.8039 28.0239 17.5668 26.7728 19.3297C25.5217 21.0926 24.356 22.9124 23.2755 24.789C22.2519 26.6657 21.3135 28.656 20.4605 30.7601L43.6625 42.3611C43.6625 45.432 43.0654 48.2469 41.8712 50.806C40.7338 53.365 39.1984 55.5544 37.2649 57.3742C35.3314 59.1939 33.0567 60.6156 30.4408 61.6392C27.8249 62.606 25.0668 63.0894 22.1666 63.0894Z"/>
                                            </svg>
                                        </div>
                                        <div
                                            className="testimonial_card_2 slick-slide slick-cloned"
                                            data-slick-index={4}
                                            id=""
                                            aria-hidden="true"
                                            tabIndex={-1}
                                        >
                                            <div className="testimonial_card_img_block">
                                                <img
                                                    src="assets/media/shapes/vector-group-2.png"
                                                    alt=""
                                                    className="bg_vector"
                                                />
                                                <img
                                                    src="assets/media/users/u-5.png"
                                                    alt=""
                                                    className="user_img"
                                                />
                                            </div>
                                            <div className="testimonial">
                                                <h4 className="mb-16">Jophie Alen</h4>
                                                <span className="mb-16">
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                  </span>
                                                <p className="review_text">
                                                    Lorem ipsum dolor sit amet consectetur. Non convallis sed id
                                                    aliquam tempus.
                                                </p>
                                            </div>
                                            <div className="quote_block"/>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 78 64"
                                                fill="none"
                                                className="quote_mark"
                                            >
                                                <path
                                                    d="M55.8684 63.0894C52.6269 63.0894 49.6698 62.606 46.997 61.6392C44.3242 60.6156 42.0495 59.2224 40.1729 57.4595C38.2963 55.6397 36.8177 53.4503 35.7372 50.8913C34.7136 48.3322 34.2018 45.4888 34.2018 42.3611C34.2018 39.1197 34.7705 35.736 35.9078 32.2102C37.1021 28.6845 38.8081 25.1302 41.0259 21.5476C43.2438 17.9649 45.9165 14.4391 49.0443 10.9702C52.2288 7.44441 55.8399 4.06079 59.8775 0.819336L69.6872 8.49646C67.8106 10.43 66.1045 12.2782 64.5691 14.0411C63.0905 15.8039 61.7257 17.5668 60.4746 19.3297C59.2236 21.0926 58.0578 22.9124 56.9773 24.789C55.9537 26.6657 55.0154 28.656 54.1623 30.7601L77.3643 42.3611C77.3643 45.432 76.7672 48.2469 75.573 50.806C74.4356 53.365 72.9002 55.5544 70.9667 57.3742C69.0332 59.1939 66.7585 60.6156 64.1426 61.6392C61.5267 62.606 58.7686 63.0894 55.8684 63.0894ZM22.1666 63.0894C18.9251 63.0894 15.968 62.606 13.2952 61.6392C10.6224 60.6156 8.34773 59.2224 6.4711 57.4595C4.59447 55.6397 3.11591 53.4503 2.03543 50.8913C1.01181 48.3322 0.5 45.4888 0.5 42.3611C0.5 39.1197 1.06868 35.736 2.20603 32.2102C3.40025 28.6845 5.10628 25.1302 7.32411 21.5476C9.54195 17.9649 12.2147 14.4391 15.3424 10.9702C18.527 7.44441 22.1381 4.06079 26.1757 0.819336L35.9854 8.49646C34.1088 10.43 32.4027 12.2782 30.8673 14.0411C29.3887 15.8039 28.0239 17.5668 26.7728 19.3297C25.5217 21.0926 24.356 22.9124 23.2755 24.789C22.2519 26.6657 21.3135 28.656 20.4605 30.7601L43.6625 42.3611C43.6625 45.432 43.0654 48.2469 41.8712 50.806C40.7338 53.365 39.1984 55.5544 37.2649 57.3742C35.3314 59.1939 33.0567 60.6156 30.4408 61.6392C27.8249 62.606 25.0668 63.0894 22.1666 63.0894Z"/>
                                            </svg>
                                        </div>
                                        <div
                                            className="testimonial_card_2 slick-slide slick-cloned"
                                            data-slick-index={5}
                                            id=""
                                            aria-hidden="true"
                                            tabIndex={-1}
                                        >
                                            <div className="testimonial_card_img_block">
                                                <img
                                                    src="assets/media/shapes/vector-group-2.png"
                                                    alt=""
                                                    className="bg_vector"
                                                />
                                                <img
                                                    src="assets/media/users/u--6.png"
                                                    alt=""
                                                    className="user_img"
                                                />
                                            </div>
                                            <div className="testimonial">
                                                <h4 className="mb-16">Jophie Alen</h4>
                                                <span className="mb-16">
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                  </span>
                                                <p className="review_text">
                                                    Lorem ipsum dolor sit amet consectetur. Non convallis sed id
                                                    aliquam tempus.
                                                </p>
                                            </div>
                                            <div className="quote_block"/>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 78 64"
                                                fill="none"
                                                className="quote_mark"
                                            >
                                                <path
                                                    d="M55.8684 63.0894C52.6269 63.0894 49.6698 62.606 46.997 61.6392C44.3242 60.6156 42.0495 59.2224 40.1729 57.4595C38.2963 55.6397 36.8177 53.4503 35.7372 50.8913C34.7136 48.3322 34.2018 45.4888 34.2018 42.3611C34.2018 39.1197 34.7705 35.736 35.9078 32.2102C37.1021 28.6845 38.8081 25.1302 41.0259 21.5476C43.2438 17.9649 45.9165 14.4391 49.0443 10.9702C52.2288 7.44441 55.8399 4.06079 59.8775 0.819336L69.6872 8.49646C67.8106 10.43 66.1045 12.2782 64.5691 14.0411C63.0905 15.8039 61.7257 17.5668 60.4746 19.3297C59.2236 21.0926 58.0578 22.9124 56.9773 24.789C55.9537 26.6657 55.0154 28.656 54.1623 30.7601L77.3643 42.3611C77.3643 45.432 76.7672 48.2469 75.573 50.806C74.4356 53.365 72.9002 55.5544 70.9667 57.3742C69.0332 59.1939 66.7585 60.6156 64.1426 61.6392C61.5267 62.606 58.7686 63.0894 55.8684 63.0894ZM22.1666 63.0894C18.9251 63.0894 15.968 62.606 13.2952 61.6392C10.6224 60.6156 8.34773 59.2224 6.4711 57.4595C4.59447 55.6397 3.11591 53.4503 2.03543 50.8913C1.01181 48.3322 0.5 45.4888 0.5 42.3611C0.5 39.1197 1.06868 35.736 2.20603 32.2102C3.40025 28.6845 5.10628 25.1302 7.32411 21.5476C9.54195 17.9649 12.2147 14.4391 15.3424 10.9702C18.527 7.44441 22.1381 4.06079 26.1757 0.819336L35.9854 8.49646C34.1088 10.43 32.4027 12.2782 30.8673 14.0411C29.3887 15.8039 28.0239 17.5668 26.7728 19.3297C25.5217 21.0926 24.356 22.9124 23.2755 24.789C22.2519 26.6657 21.3135 28.656 20.4605 30.7601L43.6625 42.3611C43.6625 45.432 43.0654 48.2469 41.8712 50.806C40.7338 53.365 39.1984 55.5544 37.2649 57.3742C35.3314 59.1939 33.0567 60.6156 30.4408 61.6392C27.8249 62.606 25.0668 63.0894 22.1666 63.0894Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <ul className="slick-dots" style={{}} role="tablist">
                                    <li className="slick-active" role="presentation">
                                        <button
                                            type="button"
                                            role="tab"
                                            id="slick-slide-control10"
                                            aria-controls="slick-slide10"
                                            aria-label="1 of 2"
                                            tabIndex={0}
                                            aria-selected="true"
                                        >
                                            1
                                        </button>
                                    </li>
                                    <li role="presentation">
                                        <button
                                            type="button"
                                            role="tab"
                                            id="slick-slide-control11"
                                            aria-controls="slick-slide11"
                                            aria-label="2 of 2"
                                            tabIndex={-1}
                                        >
                                            2
                                        </button>
                                    </li>
                                    <li role="presentation">
                                        <button
                                            type="button"
                                            role="tab"
                                            id="slick-slide-control12"
                                            aria-controls="slick-slide12"
                                            aria-label="3 of 2"
                                            tabIndex={-1}
                                        >
                                            3
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-5 order-xl-2 order-1">
                            <div className="testimonials_text_block st_2">
                                <img
                                    src="assets/media/shapes/quote3d.png"
                                    alt=""
                                    className="quote_icon"
                                />
                                <h6 className="color-primary mb-8">–––– Testimonials</h6>
                                <h2 className="mb-16">
                                    Student’s Stories! Some Awesome Comments By Our{" "}
                                    <span className="fm-sec">Students!</span>
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam
                                    tempus. Volutpat tortor tincidunt egestas sit risus donec.
                                </p>
                                <img
                                    src="assets/media/shapes/vector-2.png"
                                    alt=""
                                    className="vector_hol"
                                />
                                <img
                                    src="assets/media/shapes/dots-1.png"
                                    alt=""
                                    className="dots_group"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="discount_banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-5">
                            <div className="banner_text_block">
                                <div className="title_block mb-16">
                                    <h2 className="title">
                                        Get a
                                        <span className="fm-sec">
                30% Discount!
                <img
                    src="assets/media/shapes/line-vector.png"
                    alt=""
                    className="line_shape"
                />
                <img
                    src="assets/media/shapes/mic-speaker.png"
                    alt=""
                    className="mic_speaker"
                />
              </span>
                                    </h2>
                                </div>
                                <h4 className="mb-12">Create Your Free Account Today! </h4>
                                <p className="mb-24">
                                    Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam
                                    tempus. Volutpat tortor tincidunt egestas sit risus donec.
                                </p>
                                <a href="register.html" className="educate-btn">
                                    <span className="educate-btn__curve"/>
                                    Join Now
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="discount_countdown">
                                <div className="dial">
                                    <ul className="top-remain">
                                        <li>60</li>
                                        <li>59</li>
                                        <li>58</li>
                                    </ul>
                                    <ul className="top-coming">
                                        <li>56</li>
                                        <li>55</li>
                                        <li>54</li>
                                    </ul>
                                </div>
                                <img
                                    src="assets/media/shapes/paint-shape.png"
                                    alt=""
                                    className="paint_shape"
                                />
                                <ul className="countdown unstyled">
                                    <li>
                                        <h2>02</h2>
                                        <h6>Days</h6>
                                    </li>
                                    {" "}
                                    <li>
                                        <h2>11</h2>
                                        <h6>Hrs</h6>
                                    </li>
                                    {" "}
                                    <li>
                                        <h2>31</h2>
                                        <h6>Min</h6>
                                    </li>
                                    {" "}
                                    <li>
                                        <h2>
                                            <span>57</span>
                                        </h2>
                                        <h6>Sec</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About