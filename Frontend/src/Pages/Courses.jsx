const Courses = () => {
    return (
        <>
            <section className="page_title_banner">
                <div className="container">
                    <div className="content">
                        <div className="title">
                            <h1>Course Listing</h1>
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
                    <div className="filter_row">
                        <div className="left_block">
                            <div className="select_filter">
                                <span className="dark-gray">Short by:</span>
                                <select
                                    name="select"
                                    className="has-nice-select"
                                    style={{display: "none"}}
                                >
                                    <option value={1}>Newest</option>
                                    <option value={2}>Oldest</option>
                                    <option value={3}>Popular</option>
                                    <option value={4}>A-Z</option>
                                </select>
                                <div className="nice-select has-nice-select" tabIndex={0}>
                                    <span className="current">Newest</span>
                                    <ul className="list">
                                        <li data-value={1} className="option selected">
                                            Newest
                                        </li>
                                        <li data-value={2} className="option">
                                            Oldest
                                        </li>
                                        <li data-value={3} className="option">
                                            Popular
                                        </li>
                                        <li data-value={4} className="option">
                                            A-Z
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="select_filter">
                                <span className="dark-gray">Category:</span>
                                <select
                                    name="select"
                                    className="has-nice-select"
                                    style={{display: "none"}}
                                >
                                    <option value={1}>Student Life</option>
                                    <option value={2}>Creative Arts</option>
                                    <option value={3}>Graphic Design</option>
                                    <option value={4}>Economic</option>
                                </select>
                                <div className="nice-select has-nice-select" tabIndex={0}>
                                    <span className="current">Student Life</span>
                                    <ul className="list">
                                        <li data-value={1} className="option selected">
                                            Student Life
                                        </li>
                                        <li data-value={2} className="option">
                                            Creative Arts
                                        </li>
                                        <li data-value={3} className="option">
                                            Graphic Design
                                        </li>
                                        <li data-value={4} className="option">
                                            Economic
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right_block">
                            <h6 className="dark-gray">Showing 1-9 of 50 results</h6>
                            <form
                                action="https://uiparadox.co.uk/templates/educate/v2/blog-grid-left.html"
                                className="search_bar"
                            >
                                <button type="submit">
                                    <i className="fal fa-search"/>
                                </button>
                                <input
                                    type="search"
                                    className="form-control"
                                    placeholder="Search here"
                                />
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="course__card mb-24">
                                <div className="course__card__icon">
                                    <img src="assets/media/icons/ps.png" alt=""/>
                                </div>
                                <div className="course__card__content">
                                    <div className="left__block">
                                        <img
                                            src="assets/media/courses/tag-1.png"
                                            alt=""
                                            className="course_tag"
                                        />
                                        <h4 className="mb-4p">
                                            <a href="course-detail.html">Photoshop Course</a>
                                        </h4>
                                        <p className="h6 mb-24">Graphics Design</p>
                                        <ul className="course_info p-0 mb-32">
                                            <li>
                                                <i className="fal fa-presentation"/>
                                                45 Videos
                                            </li>
                                            <li>
                                                <i className="fal fa-clock"/>
                                                05+ Hours
                                            </li>
                                        </ul>
                                        <div className="author_card">
                                            <img
                                                src="assets/media/courses/authors/a-1.png"
                                                alt=""
                                                className="author_img"
                                            />
                                            <div className="author_text_block">
                                                <a href="team-detail.html" className="h6 mb-4p">
                                                    Benny Martin
                                                </a>
                                                <p>Adobe Embassador</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right__block">
                                        <div className="price_block mb-16">
                                            <div className="price_vector">
                                                <img src="assets/media/shapes/vector-group.png" alt=""/>
                                            </div>
                                            <span className="h3 color-white">$45</span>
                                        </div>
                                        <a
                                            href="course-detail.html"
                                            className="educate-btn sm mx-xl-auto me-2"
                                        >
                                            <span className="educate-btn__curve"/>
                                            Buy Now
                                        </a>
                                    </div>
                                    <img
                                        src="assets/media/shapes/vector-1.png"
                                        alt=""
                                        className="bottom_vector"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="course__card mb-24">
                                <div className="course__card__icon">
                                    <img src="assets/media/icons/ai.png" alt=""/>
                                </div>
                                <div className="course__card__content">
                                    <div className="left__block">
                                        <img
                                            src="assets/media/courses/tag-2.png"
                                            alt=""
                                            className="course_tag"
                                        />
                                        <h4 className="mb-4p">
                                            <a href="course-detail.html">Artificial Intelligence</a>
                                        </h4>
                                        <p className="h6 mb-24">Graphics Design</p>
                                        <ul className="course_info p-0 mb-32">
                                            <li>
                                                <i className="fal fa-presentation"/>
                                                45 Videos
                                            </li>
                                            <li>
                                                <i className="fal fa-clock"/>
                                                05+ Hours
                                            </li>
                                        </ul>
                                        <div className="author_card">
                                            <img
                                                src="assets/media/courses/authors/a-2.png"
                                                alt=""
                                                className="author_img"
                                            />
                                            <div className="author_text_block">
                                                <a href="team-detail.html" className="h6 mb-4p">
                                                    Ethan Wilson
                                                </a>
                                                <p>AI Expert</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right__block">
                                        <div className="price_block mb-16">
                                            <div className="price_vector">
                                                <img src="assets/media/shapes/vector-group.png" alt=""/>
                                            </div>
                                            <span className="h3 color-white">$40</span>
                                        </div>
                                        <a
                                            href="course-detail.html"
                                            className="educate-btn sm mx-xl-auto me-2"
                                        >
                                            <span className="educate-btn__curve"/>
                                            Buy Now
                                        </a>
                                    </div>
                                    <img
                                        src="assets/media/shapes/vector-1.png"
                                        alt=""
                                        className="bottom_vector"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="course__card mb-24">
                                <div className="course__card__icon">
                                    <img src="assets/media/icons/desktop.png" alt=""/>
                                </div>
                                <div className="course__card__content">
                                    <div className="left__block">
                                        <img
                                            src="assets/media/courses/tag-1.png"
                                            alt=""
                                            className="course_tag"
                                        />
                                        <h4 className="mb-4p">
                                            <a href="course-detail.html">Web Design Course</a>
                                        </h4>
                                        <p className="h6 mb-24">Graphics Design</p>
                                        <ul className="course_info p-0 mb-32">
                                            <li>
                                                <i className="fal fa-presentation"/>
                                                45 Videos
                                            </li>
                                            <li>
                                                <i className="fal fa-clock"/>
                                                05+ Hours
                                            </li>
                                        </ul>
                                        <div className="author_card">
                                            <img
                                                src="assets/media/courses/authors/a-3.png"
                                                alt=""
                                                className="author_img"
                                            />
                                            <div className="author_text_block">
                                                <a href="team-detail.html" className="h6 mb-4p">
                                                    Ava Johnson
                                                </a>
                                                <p>Web Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right__block">
                                        <div className="price_block mb-16">
                                            <div className="price_vector">
                                                <img src="assets/media/shapes/vector-group.png" alt=""/>
                                            </div>
                                            <span className="h3 color-white">$45</span>
                                        </div>
                                        <a
                                            href="course-detail.html"
                                            className="educate-btn sm mx-xl-auto me-2"
                                        >
                                            <span className="educate-btn__curve"/>
                                            Buy Now
                                        </a>
                                    </div>
                                    <img
                                        src="assets/media/shapes/vector-1.png"
                                        alt=""
                                        className="bottom_vector"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="course__card mb-24">
                                <div className="course__card__icon">
                                    <img src="assets/media/icons/figma.png" alt=""/>
                                </div>
                                <div className="course__card__content">
                                    <div className="left__block">
                                        <img
                                            src="assets/media/courses/tag-2.png"
                                            alt=""
                                            className="course_tag"
                                        />
                                        <h4 className="mb-4p">
                                            <a href="course-detail.html">Figma Course</a>
                                        </h4>
                                        <p className="h6 mb-24">Graphics Design</p>
                                        <ul className="course_info p-0 mb-32">
                                            <li>
                                                <i className="fal fa-presentation"/>
                                                45 Videos
                                            </li>
                                            <li>
                                                <i className="fal fa-clock"/>
                                                05+ Hours
                                            </li>
                                        </ul>
                                        <div className="author_card">
                                            <img
                                                src="assets/media/courses/authors/a-4.png"
                                                alt=""
                                                className="author_img"
                                            />
                                            <div className="author_text_block">
                                                <a href="team-detail.html" className="h6 mb-4p">
                                                    Emma Mitchell
                                                </a>
                                                <p>Ui Engineer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right__block">
                                        <div className="price_block mb-16">
                                            <div className="price_vector">
                                                <img src="assets/media/shapes/vector-group.png" alt=""/>
                                            </div>
                                            <span className="h3 color-white">$45</span>
                                        </div>
                                        <a
                                            href="course-detail.html"
                                            className="educate-btn sm mx-xl-auto me-2"
                                        >
                                            <span className="educate-btn__curve"/>
                                            Buy Now
                                        </a>
                                    </div>
                                    <img
                                        src="assets/media/shapes/vector-1.png"
                                        alt=""
                                        className="bottom_vector"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="course__card mb-24">
                                <div className="course__card__icon">
                                    <img src="assets/media/icons/ai2.png" alt=""/>
                                </div>
                                <div className="course__card__content">
                                    <div className="left__block">
                                        <img
                                            src="assets/media/courses/tag-1.png"
                                            alt=""
                                            className="course_tag"
                                        />
                                        <h4 className="mb-4p">
                                            <a href="course-detail.html">Illustrator Course</a>
                                        </h4>
                                        <p className="h6 mb-24">Graphics Design</p>
                                        <ul className="course_info p-0 mb-32">
                                            <li>
                                                <i className="fal fa-presentation"/>
                                                45 Videos
                                            </li>
                                            <li>
                                                <i className="fal fa-clock"/>
                                                05+ Hours
                                            </li>
                                        </ul>
                                        <div className="author_card">
                                            <img
                                                src="assets/media/courses/authors/a-5.png"
                                                alt=""
                                                className="author_img"
                                            />
                                            <div className="author_text_block">
                                                <a href="team-detail.html" className="h6 mb-4p">
                                                    Benny Martin
                                                </a>
                                                <p>Adobe Embassador</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right__block">
                                        <div className="price_block mb-16">
                                            <div className="price_vector">
                                                <img src="assets/media/shapes/vector-group.png" alt=""/>
                                            </div>
                                            <span className="h3 color-white">$45</span>
                                        </div>
                                        <a
                                            href="course-detail.html"
                                            className="educate-btn sm mx-xl-auto me-2"
                                        >
                                            <span className="educate-btn__curve"/>
                                            Buy Now
                                        </a>
                                    </div>
                                    <img
                                        src="assets/media/shapes/vector-1.png"
                                        alt=""
                                        className="bottom_vector"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="course__card mb-24">
                                <div className="course__card__icon">
                                    <img src="assets/media/icons/ai3.png" alt=""/>
                                </div>
                                <div className="course__card__content">
                                    <div className="left__block">
                                        <img
                                            src="assets/media/courses/tag-2.png"
                                            alt=""
                                            className="course_tag"
                                        />
                                        <h4 className="mb-4p">
                                            <a href="course-detail.html">After Effects Course</a>
                                        </h4>
                                        <p className="h6 mb-24">Graphics Design</p>
                                        <ul className="course_info p-0 mb-32">
                                            <li>
                                                <i className="fal fa-presentation"/>
                                                45 Videos
                                            </li>
                                            <li>
                                                <i className="fal fa-clock"/>
                                                05+ Hours
                                            </li>
                                        </ul>
                                        <div className="author_card">
                                            <img
                                                src="assets/media/courses/authors/a-6.png"
                                                alt=""
                                                className="author_img"
                                            />
                                            <div className="author_text_block">
                                                <a href="team-detail.html" className="h6 mb-4p">
                                                    Miller Noah
                                                </a>
                                                <p>Senior Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right__block">
                                        <div className="price_block mb-16">
                                            <div className="price_vector">
                                                <img src="assets/media/shapes/vector-group.png" alt=""/>
                                            </div>
                                            <span className="h3 color-white">$45</span>
                                        </div>
                                        <a
                                            href="course-detail.html"
                                            className="educate-btn sm mx-xl-auto me-2"
                                        >
                                            <span className="educate-btn__curve"/>
                                            Buy Now
                                        </a>
                                    </div>
                                    <img
                                        src="assets/media/shapes/vector-1.png"
                                        alt=""
                                        className="bottom_vector"
                                    />
                                </div>
                            </div>
                        </div>
                        <ul className="pagination">
                            <li className="page-item">
                                <a href="#" className="page-link arrow" aria-label="next">
                                    <i className="far fa-chevron-left"/>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link current" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a href="#" className="page-link arrow" aria-label="next">
                                    <i className="far fa-chevron-right"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Courses