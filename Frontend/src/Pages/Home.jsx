import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";
import api from "../Utils/Axios";

import { Link } from "react-router-dom";
import { Store } from "../Utils/Store";
import { useContext } from "react";
function Home() {
  const [courses, setCourses] = useState([]);
  const {state} = useContext(Store);
  const {ContactInfo} = state;

  useEffect(() => {
    api
      .get("/tests/")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <section className="hero-banner-1">
        <div className="container">
          <div className="icons">
            <img
              src="assets/media/shapes/dollar.png"
              alt=""
              className="dollar wow zoomIn animated"
              data-wow-delay="400ms"
              style={{
                visibility: "visible",
                animationDelay: "400ms",
                animationName: "zoomIn",
              }}
            />
            <img
              src="assets/media/shapes/mic.png"
              alt=""
              className="mic wow zoomIn animated"
              data-wow-delay="500ms"
              style={{
                visibility: "visible",
                animationDelay: "500ms",
                animationName: "zoomIn",
              }}
            />
            <img
              src="assets/media/shapes/light.png"
              alt=""
              className="light wow zoomIn animated"
              data-wow-delay="600ms"
              style={{
                visibility: "visible",
                animationDelay: "600ms",
                animationName: "zoomIn",
              }}
            />
            <img
              src="assets/media/shapes/camera.png"
              alt=""
              className="camera wow zoomIn animated"
              data-wow-delay="700ms"
              style={{
                visibility: "visible",
                animationDelay: "700ms",
                animationName: "zoomIn",
              }}
            />
          </div>
          <div className="content">
            <div
              className="text_block wow fadeInUp animated"
              data-wow-delay="800ms"
              style={{
                visibility: "visible",
                animationDelay: "800ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="row">
                <div className="col-xl-6 col-lg-8">
                  <img
                    src="assets/media/shapes/tag.png"
                    alt=""
                    className="mb-24 tag wow slideInDown animated"
                    data-wow-delay="550ms"
                    style={{
                      visibility: "visible",
                      animationDelay: "550ms",
                      animationName: "animation-upDown-2",
                    }}
                  />
                  <h1 className="mb-16 title">
                    Best Online Learning{" "}
                    <span className="fm-sec">
                      Resources!{" "}
                      <img
                        src="assets/media/shapes/rocket.png"
                        alt=""
                        className="rocket wow zoomIn animated"
                        data-wow-delay="700ms"
                        style={{
                          visibility: "visible",
                          animationDelay: "700ms",
                          animationName: "zoomIn",
                        }}
                      />
                    </span>
                  </h1>

                  <div className="btn_block">
                    <Link to="/contact-us" className="educate-btn sec">
                      <span className="educate-btn__curve" />
                      Enroll Now{" "}
                    </Link>
                    <img
                      src="assets/media/shapes/arrow.png"
                      alt=""
                      className="arrow"
                    />
                  </div>
                  <div
                    className="video-btn wow zoomIn animated"
                    data-wow-delay="700ms"
                    style={{
                      visibility: "visible",
                      animationDelay: "700ms",
                      animationName: "zoomIn",
                    }}
                  >
                    <img
                      src="assets/media/banners/hero-banner-1/round-text.png"
                      alt=""
                      className="text-vector"
                    />
                    <a
                      href="https://www.youtube.com/watch?v=8nXX1WOuvrk"
                      className="play-btn video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner_feature_card">
            <div className="card_block">
              <h6 className="mb-4p">Award Winning Courses</h6>
              <p>Based on Latest Knowledge</p>
              <img
                src="assets/media/shapes/target-2.png"
                alt=""
                className="target_icon"
              />
            </div>
          </div>
          <img
            src="assets/media/banners/hero-banner-1/main-img.png"
            alt=""
            className="main-img"
          />
        </div>
      </section>

      <section className="py-60">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-sm-6 wow fadeInUp"
              data-wow-delay="200ms"
              style={{
                visibility: "hidden",
                animationDelay: "200ms",
                animationName: "none",
              }}
            >
              <div className="feature__card mb-24 mb-xl-0">
                <div className="feature__icon">
                  <img src="assets/media/icons/Pricing.png" alt="" />
                </div>
                <div className="feature__content">
                  <h5 className="mb-8">Free Trials</h5>
                  <p>
                    Lorem ipsum dolor sit amet cons ectetur. Non convallis sed
                    id.
                  </p>
                  <img
                    src="assets/media/shapes/feture-bg-shape.png"
                    alt=""
                    className="feature-bg-shape"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-sm-6 wow fadeInUp"
              data-wow-delay="400ms"
              style={{
                visibility: "hidden",
                animationDelay: "400ms",
                animationName: "none",
              }}
            >
              <div className="feature__card mb-24 mb-xl-0">
                <div className="feature__icon">
                  <img src="assets/media/icons/Quality.png" alt="" />
                </div>
                <div className="feature__content">
                  <h5 className="mb-8">Lifetime Access</h5>
                  <p>
                    Lorem ipsum dolor sit amet cons ectetur. Non convallis sed
                    id.
                  </p>
                  <img
                    src="assets/media/shapes/feture-bg-shape.png"
                    alt=""
                    className="feature-bg-shape"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-sm-6 wow fadeInUp"
              data-wow-delay="600ms"
              style={{
                visibility: "hidden",
                animationDelay: "600ms",
                animationName: "none",
              }}
            >
              <div className="feature__card mb-24 mb-sm-0">
                <div className="feature__icon">
                  <img src="assets/media/icons/Check-mark.png" alt="" />
                </div>
                <div className="feature__content">
                  <h5 className="mb-8">Best Teachers</h5>
                  <p>
                    Lorem ipsum dolor sit amet cons ectetur. Non convallis sed
                    id.
                  </p>
                  <img
                    src="assets/media/shapes/feture-bg-shape.png"
                    alt=""
                    className="feature-bg-shape"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-sm-6 wow fadeInUp"
              data-wow-delay="800ms"
              style={{
                visibility: "hidden",
                animationDelay: "800ms",
                animationName: "none",
              }}
            >
              <div className="feature__card">
                <div className="feature__icon">
                  <img src="assets/media/icons/Support.png" alt="" />
                </div>
                <div className="feature__content">
                  <h5 className="mb-8">24/7 Support</h5>
                  <p>
                    Lorem ipsum dolor sit amet cons ectetur. Non convallis sed
                    id.
                  </p>
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
          Welcome to our preparation system, where students can freely prepare themselves for tests and assessments. Our platform offers a seamless and supportive environment, empowering learners to enhance their knowledge and confidence.
        </p>
        <div
          className="about__card mb-24 wow fadeInLeft"
          data-wow-delay="200ms"
          style={{
            visibility: "hidden",
            animationDelay: "200ms",
            animationName: "none",
          }}
        >
          <div className="about__card__icon">
            <img src="assets/media/icons/Clock.png" alt="" />
          </div>
          <div className="about__card__content">
            <h5 className="mb-4p">Flexible Timings</h5>
            <p>
              Prepare at your own pace with flexible schedules that fit your lifestyle.
            </p>
          </div>
        </div>
        <div
          className="about__card mb-24 wow fadeInLeft"
          data-wow-delay="400ms"
          style={{
            visibility: "hidden",
            animationDelay: "400ms",
            animationName: "none",
          }}
        >
          <div className="about__card__icon">
            <img src="assets/media/icons/WiFi.png" alt="" />
          </div>
          <div className="about__card__content">
            <h5 className="mb-4p">Unlimited Access</h5>
            <p>
              Gain access to a wide range of resources, tests, and materials anytime, anywhere.
            </p>
          </div>
        </div>
        <div
          className="text-end wow fadeInUp"
          data-wow-delay="600ms"
          style={{
            visibility: "hidden",
            animationDelay: "600ms",
            animationName: "none",
          }}
        >
          <a href="about.html" className="educate-btn">
            <span className="educate-btn__curve" />
            Learn More
          </a>
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="educate-tilt"
          data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 2, "speed": 700, "scale": 1 }'
        >
          <img src="assets/media/resources/about-1.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>


<section className="py-60">
  <div className="container">
    <div className="section-title mb-48">
      <div className="heading">
        <h6 className="color-primary mb-8">–––– Course Categories</h6>
        <h2>
          Begin Your Learning, <br /> Something For <span className="fm-sec">Everyone</span>
        </h2>
      </div>
      <a href="courses.html" className="educate-btn d-md-block d-none">
        <span className="educate-btn__curve" />
        View All
      </a>
    </div>
    <div className="row">
      <div
        className="col-xl-4 col-md-6 wow fadeInUp"
        data-wow-delay="150ms"
        style={{
          visibility: "hidden",
          animationDelay: "150ms",
          animationName: "none",
        }}
      >
        <div className="course__category__card_1 mb-24">
          <div className="course__category__card_text">
            <h4 className="course__category__card_title h4 mb-16">
              Cooking &amp; Culinary
            </h4>
            <p className="mb-40">
              Explore culinary skills and master the art of cooking with our comprehensive courses.
            </p>
            <ul className="category__info p-0 mb-8">
              <li>
                <i className="fas fa-star" />5
              </li>
              <li>
                <i className="fal fa-graduation-cap" />
                10 Teachers
              </li>
              <li>
                <i className="fal fa-clock" />
                60+
              </li>
            </ul>
          </div>
          <img
            src="assets/media/courses/categories/c-1.png"
            alt="Cooking & Culinary"
            className="image"
          />
        </div>
      </div>
      <div
        className="col-xl-4 col-md-6 wow fadeInUp"
        data-wow-delay="300ms"
        style={{
          visibility: "hidden",
          animationDelay: "300ms",
          animationName: "none",
        }}
      >
        <div className="course__category__card_1 mb-24">
          <div className="course__category__card_text">
            <h4 className="course__category__card_title h4 mb-16">
              Economic &amp; Finances
            </h4>
            <p className="mb-40">
              Understand financial principles and economics with our expert-guided courses.
            </p>
            <ul className="category__info p-0 mb-8">
              <li>
                <i className="fas fa-star" />5
              </li>
              <li>
                <i className="fal fa-graduation-cap" />
                10 Teachers
              </li>
              <li>
                <i className="fal fa-clock" />
                60+
              </li>
            </ul>
          </div>
          <img
            src="assets/media/courses/categories/c-2.png"
            alt="Economic & Finances"
            className="image"
          />
        </div>
      </div>
      <div
        className="col-xl-4 col-md-6 wow fadeInUp"
        data-wow-delay="450ms"
        style={{
          visibility: "hidden",
          animationDelay: "450ms",
          animationName: "none",
        }}
      >
        <div className="course__category__card_1 mb-24">
          <div className="course__category__card_text">
            <h4 className="course__category__card_title h4 mb-16">
              Creative Arts
            </h4>
            <p className="mb-40">
              Dive into creative arts, from painting to digital design, and unlock your artistic potential.
            </p>
            <ul className="category__info p-0 mb-8">
              <li>
                <i className="fas fa-star" />5
              </li>
              <li>
                <i className="fal fa-graduation-cap" />
                10 Teachers
              </li>
              <li>
                <i className="fal fa-clock" />
                60+
              </li>
            </ul>
          </div>
          <img
            src="assets/media/courses/categories/c-4.png"
            alt="Creative Arts"
            className="image"
          />
        </div>
      </div>
      <div
        className="col-xl-4 col-md-6 wow fadeInUp"
        data-wow-delay="600ms"
        style={{
          visibility: "hidden",
          animationDelay: "600ms",
          animationName: "none",
        }}
      >
        <div className="course__category__card_1 mb-24 mb-xl-0">
          <div className="course__category__card_text">
            <h4 className="course__category__card_title h4 mb-16">
              Graphic Design
            </h4>
            <p className="mb-40">
              Learn the fundamentals of graphic design and unleash your creativity through digital mediums.
            </p>
            <ul className="category__info p-0 mb-8">
              <li>
                <i className="fas fa-star" />5
              </li>
              <li>
                <i className="fal fa-graduation-cap" />
                10 Teachers
              </li>
              <li>
                <i className="fal fa-clock" />
                60+
              </li>
            </ul>
          </div>
          <img
            src="assets/media/courses/categories/c-3.png"
            alt="Graphic Design"
            className="image"
          />
        </div>
      </div>
      <div
        className="col-xl-4 col-md-6 wow fadeInUp"
        data-wow-delay="750ms"
        style={{
          visibility: "hidden",
          animationDelay: "750ms",
          animationName: "none",
        }}
      >
        <div className="course__category__card_1 mb-24 mb-xl-0">
          <div className="course__category__card_text">
            <h4 className="course__category__card_title h4 mb-16">
              Artificial Intelligence
            </h4>
            <p className="mb-40">
              Explore the world of AI and machine learning with courses designed to enhance your technical expertise.
            </p>
            <ul className="category__info p-0 mb-8">
              <li>
                <i className="fas fa-star" />5
              </li>
              <li>
                <i className="fal fa-graduation-cap" />
                10 Teachers
              </li>
              <li>
                <i className="fal fa-clock" />
                60+
              </li>
            </ul>
          </div>
          <img
            src="assets/media/courses/categories/c-5.png"
            alt="Artificial Intelligence"
            className="image"
          />
        </div>
      </div>
      <div
        className="col-xl-4 col-md-6 wow fadeInUp"
        data-wow-delay="900ms"
        style={{
          visibility: "hidden",
          animationDelay: "900ms",
          animationName: "none",
        }}
      >
        <div className="course__category__card_1 mb-24 mb-xl-0">
          <div className="course__category__card_text">
            <h4 className="course__category__card_title h4 mb-16">
              Computer Sciences
            </h4>
            <p className="mb-40">
              Advance your knowledge in computer science and gain expertise in programming and system design.
            </p>
            <ul className="category__info p-0 mb-8">
              <li>
                <i className="fas fa-star" />5
              </li>
              <li>
                <i className="fal fa-graduation-cap" />
                10 Teachers
              </li>
              <li>
                <i className="fal fa-clock" />
                60+
              </li>
            </ul>
          </div>
          <img
            src="assets/media/courses/categories/c-6.png"
            alt="Computer Sciences"
            className="image"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="courses-1 py-60">
        <div className="container">
          <div className="section-title mb-48">
            <div className="heading">
              <h6 className="color-primary mb-8">–––– Popular Courses</h6>
              <h2>
                Courses Presented To <br /> You By{" "}
                <span className="fm-sec">Experts</span>
              </h2>
            </div>
            <Link to="/courses" className="educate-btn d-md-block d-none">
              <span className="educate-btn__curve" />
              View All
            </Link>
          </div>

          <div className="row">
            {courses.length > 0 ? (
              courses.map((course, index) => (
                <div className="col-lg-3 col-md-6" key={course.id}>
                  <div className="course__card mb-24">
                    <div className="course__card__icon"></div>
                    <div className="course__card__content">
                      <div className="left__block">
                        <h4 className="mb-4p">
                          <Link
                            to={{
                              pathname: "/course-detail",
                            }}
                            state={{ courseId: course.id }}
                          >
                            {course.name}
                          </Link>
                        </h4>
                        <p className="h6 mb-24">{course.description}</p>
                      </div>
                      <div className="right__block">
                        <div className="price_block mb-16">
                          <div className="price_vector">
                            <img
                              src="assets/media/shapes/vector-group.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <Link
                          to={{
                            pathname: "/course-detail",
                          }}
                          state={{ courseId: course.id }}
                          className="educate-btn sm mx-xl-auto me-2"
                        >
                          <span className="educate-btn__curve" />
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center">
                <h6 className="text-danger">No Courses Found</h6>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="testimonials py-60">
        <div className="container">
          <div className="row">
          <div className="col-xl-5">
  <div className="testimonials_text_block">
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
      Hear what our students have to say about their learning journey with us. Our courses have empowered them to grow, achieve their goals, and gain valuable knowledge that has transformed their lives.
    </p>
    <blockquote className="testimonial">
      <p>
        "The courses provided here have exceeded my expectations. The instructors are highly knowledgeable and always ready to assist. The hands-on approach to learning has been incredibly beneficial. I feel more confident and equipped to tackle real-world challenges."
      </p>
      <footer>— John Doe, Web Development Student</footer>
    </blockquote>

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

            <div className="col-xl-7 col-lg-10 offset-xl-0 offset-lg-1">
              <div className="testimonials_slider_1_block">
                <img
                  src="assets/media/shapes/bg-elements-1.png"
                  alt=""
                  className="bg_elements"
                />
                <div className="testimonials_slider slick-initialized slick-slider slick-dotted">
                  <div className="slick-list draggable">
                    <div
                      className="slick-track"
                      style={{
                        opacity: 1,
                        width: 4872,
                        transform: "translate3d(-696px, 0px, 0px)",
                      }}
                    >
                      <div
                        className="card-block slick-slide slick-cloned"
                        data-slick-index={-1}
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 696 }}
                      >
                        <div className="testimonial_card">
                          <div className="testimonial_card_img_block">
                            <img
                              src="assets/media/users/Image.png"
                              alt=""
                              className="user_img"
                            />
                            <div className="quote_block" />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 78 64"
                              fill="none"
                              className="quote_mark"
                            >
                              <path d="M55.8684 63.0894C52.6269 63.0894 49.6698 62.606 46.997 61.6392C44.3242 60.6156 42.0495 59.2224 40.1729 57.4595C38.2963 55.6397 36.8177 53.4503 35.7372 50.8913C34.7136 48.3322 34.2018 45.4888 34.2018 42.3611C34.2018 39.1197 34.7705 35.736 35.9078 32.2102C37.1021 28.6845 38.8081 25.1302 41.0259 21.5476C43.2438 17.9649 45.9165 14.4391 49.0443 10.9702C52.2288 7.44441 55.8399 4.06079 59.8775 0.819336L69.6872 8.49646C67.8106 10.43 66.1045 12.2782 64.5691 14.0411C63.0905 15.8039 61.7257 17.5668 60.4746 19.3297C59.2236 21.0926 58.0578 22.9124 56.9773 24.789C55.9537 26.6657 55.0154 28.656 54.1623 30.7601L77.3643 42.3611C77.3643 45.432 76.7672 48.2469 75.573 50.806C74.4356 53.365 72.9002 55.5544 70.9667 57.3742C69.0332 59.1939 66.7585 60.6156 64.1426 61.6392C61.5267 62.606 58.7686 63.0894 55.8684 63.0894ZM22.1666 63.0894C18.9251 63.0894 15.968 62.606 13.2952 61.6392C10.6224 60.6156 8.34773 59.2224 6.4711 57.4595C4.59447 55.6397 3.11591 53.4503 2.03543 50.8913C1.01181 48.3322 0.5 45.4888 0.5 42.3611C0.5 39.1197 1.06868 35.736 2.20603 32.2102C3.40025 28.6845 5.10628 25.1302 7.32411 21.5476C9.54195 17.9649 12.2147 14.4391 15.3424 10.9702C18.527 7.44441 22.1381 4.06079 26.1757 0.819336L35.9854 8.49646C34.1088 10.43 32.4027 12.2782 30.8673 14.0411C29.3887 15.8039 28.0239 17.5668 26.7728 19.3297C25.5217 21.0926 24.356 22.9124 23.2755 24.789C22.2519 26.6657 21.3135 28.656 20.4605 30.7601L43.6625 42.3611C43.6625 45.432 43.0654 48.2469 41.8712 50.806C40.7338 53.365 39.1984 55.5544 37.2649 57.3742C35.3314 59.1939 33.0567 60.6156 30.4408 61.6392C27.8249 62.606 25.0668 63.0894 22.1666 63.0894Z" />
                            </svg>
                          </div>
                          <div className="testimonial_card_content_block">
                            <div className="testimonial">
                              <h4 className="mb-16">Jophie Alen</h4>
                              <span className="mb-16">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </span>
                              <p className="review_text">
                                Lorem ipsum dolor sit amet consectetur. Non
                                convallis sed id aliquam tempus. Volutpat tortor
                                tincidunt egestas sit risus donec.
                              </p>
                            </div>
                            <img
                              src="assets/media/shapes/bg-elements-2.png"
                              alt=""
                              className="bottom_shape"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-block slick-slide slick-current slick-active"
                        data-slick-index={0}
                        aria-hidden="false"
                        tabIndex={0}
                        role="tabpanel"
                        id="slick-slide30"
                        aria-describedby="slick-slide-control30"
                        style={{ width: 696 }}
                      >
                        <div className="testimonial_card">
                          <div className="testimonial_card_img_block">
                            <img
                              src="assets/media/users/Image.png"
                              alt=""
                              className="user_img"
                            />
                            <div className="quote_block" />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 78 64"
                              fill="none"
                              className="quote_mark"
                            >
                              <path d="M55.8684 63.0894C52.6269 63.0894 49.6698 62.606 46.997 61.6392C44.3242 60.6156 42.0495 59.2224 40.1729 57.4595C38.2963 55.6397 36.8177 53.4503 35.7372 50.8913C34.7136 48.3322 34.2018 45.4888 34.2018 42.3611C34.2018 39.1197 34.7705 35.736 35.9078 32.2102C37.1021 28.6845 38.8081 25.1302 41.0259 21.5476C43.2438 17.9649 45.9165 14.4391 49.0443 10.9702C52.2288 7.44441 55.8399 4.06079 59.8775 0.819336L69.6872 8.49646C67.8106 10.43 66.1045 12.2782 64.5691 14.0411C63.0905 15.8039 61.7257 17.5668 60.4746 19.3297C59.2236 21.0926 58.0578 22.9124 56.9773 24.789C55.9537 26.6657 55.0154 28.656 54.1623 30.7601L77.3643 42.3611C77.3643 45.432 76.7672 48.2469 75.573 50.806C74.4356 53.365 72.9002 55.5544 70.9667 57.3742C69.0332 59.1939 66.7585 60.6156 64.1426 61.6392C61.5267 62.606 58.7686 63.0894 55.8684 63.0894ZM22.1666 63.0894C18.9251 63.0894 15.968 62.606 13.2952 61.6392C10.6224 60.6156 8.34773 59.2224 6.4711 57.4595C4.59447 55.6397 3.11591 53.4503 2.03543 50.8913C1.01181 48.3322 0.5 45.4888 0.5 42.3611C0.5 39.1197 1.06868 35.736 2.20603 32.2102C3.40025 28.6845 5.10628 25.1302 7.32411 21.5476C9.54195 17.9649 12.2147 14.4391 15.3424 10.9702C18.527 7.44441 22.1381 4.06079 26.1757 0.819336L35.9854 8.49646C34.1088 10.43 32.4027 12.2782 30.8673 14.0411C29.3887 15.8039 28.0239 17.5668 26.7728 19.3297C25.5217 21.0926 24.356 22.9124 23.2755 24.789C22.2519 26.6657 21.3135 28.656 20.4605 30.7601L43.6625 42.3611C43.6625 45.432 43.0654 48.2469 41.8712 50.806C40.7338 53.365 39.1984 55.5544 37.2649 57.3742C35.3314 59.1939 33.0567 60.6156 30.4408 61.6392C27.8249 62.606 25.0668 63.0894 22.1666 63.0894Z" />
                            </svg>
                          </div>
                          <div className="testimonial_card_content_block">
                            <div className="testimonial">
                              <h4 className="mb-16">Jophie Alen</h4>
                              <span className="mb-16">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </span>
                              <p className="review_text">
                                Lorem ipsum dolor sit amet consectetur. Non
                                convallis sed id aliquam tempus. Volutpat tortor
                                tincidunt egestas sit risus donec.
                              </p>
                            </div>
                            <img
                              src="assets/media/shapes/bg-elements-2.png"
                              alt=""
                              className="bottom_shape"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-block slick-slide"
                        data-slick-index={1}
                        aria-hidden="true"
                        tabIndex={-1}
                        role="tabpanel"
                        id="slick-slide31"
                        aria-describedby="slick-slide-control31"
                        style={{ width: 696 }}
                      >
                        <div className="testimonial_card">
                          <div className="testimonial_card_img_block">
                            <img
                              src="assets/media/users/Image.png"
                              alt=""
                              className="user_img"
                            />
                            <div className="quote_block" />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 78 64"
                              fill="none"
                              className="quote_mark"
                            >
                              <path d="M55.8684 63.0894C52.6269 63.0894 49.6698 62.606 46.997 61.6392C44.3242 60.6156 42.0495 59.2224 40.1729 57.4595C38.2963 55.6397 36.8177 53.4503 35.7372 50.8913C34.7136 48.3322 34.2018 45.4888 34.2018 42.3611C34.2018 39.1197 34.7705 35.736 35.9078 32.2102C37.1021 28.6845 38.8081 25.1302 41.0259 21.5476C43.2438 17.9649 45.9165 14.4391 49.0443 10.9702C52.2288 7.44441 55.8399 4.06079 59.8775 0.819336L69.6872 8.49646C67.8106 10.43 66.1045 12.2782 64.5691 14.0411C63.0905 15.8039 61.7257 17.5668 60.4746 19.3297C59.2236 21.0926 58.0578 22.9124 56.9773 24.789C55.9537 26.6657 55.0154 28.656 54.1623 30.7601L77.3643 42.3611C77.3643 45.432 76.7672 48.2469 75.573 50.806C74.4356 53.365 72.9002 55.5544 70.9667 57.3742C69.0332 59.1939 66.7585 60.6156 64.1426 61.6392C61.5267 62.606 58.7686 63.0894 55.8684 63.0894ZM22.1666 63.0894C18.9251 63.0894 15.968 62.606 13.2952 61.6392C10.6224 60.6156 8.34773 59.2224 6.4711 57.4595C4.59447 55.6397 3.11591 53.4503 2.03543 50.8913C1.01181 48.3322 0.5 45.4888 0.5 42.3611C0.5 39.1197 1.06868 35.736 2.20603 32.2102C3.40025 28.6845 5.10628 25.1302 7.32411 21.5476C9.54195 17.9649 12.2147 14.4391 15.3424 10.9702C18.527 7.44441 22.1381 4.06079 26.1757 0.819336L35.9854 8.49646C34.1088 10.43 32.4027 12.2782 30.8673 14.0411C29.3887 15.8039 28.0239 17.5668 26.7728 19.3297C25.5217 21.0926 24.356 22.9124 23.2755 24.789C22.2519 26.6657 21.3135 28.656 20.4605 30.7601L43.6625 42.3611C43.6625 45.432 43.0654 48.2469 41.8712 50.806C40.7338 53.365 39.1984 55.5544 37.2649 57.3742C35.3314 59.1939 33.0567 60.6156 30.4408 61.6392C27.8249 62.606 25.0668 63.0894 22.1666 63.0894Z" />
                            </svg>
                          </div>
                          <div className="testimonial_card_content_block">
                            <div className="testimonial">
                              <h4 className="mb-16">Jophie Alen</h4>
                              <span className="mb-16">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </span>
                              <p className="review_text">
                                Lorem ipsum dolor sit amet consectetur. Non
                                convallis sed id aliquam tempus. Volutpat tortor
                                tincidunt egestas sit risus donec.
                              </p>
                            </div>
                            <img
                              src="assets/media/shapes/bg-elements-2.png"
                              alt=""
                              className="bottom_shape"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-block slick-slide"
                        data-slick-index={2}
                        aria-hidden="true"
                        tabIndex={-1}
                        role="tabpanel"
                        id="slick-slide32"
                        aria-describedby="slick-slide-control32"
                        style={{ width: 696 }}
                      >
                        <div className="testimonial_card">
                          <div className="testimonial_card_img_block">
                            <img
                              src="assets/media/users/Image.png"
                              alt=""
                              className="user_img"
                            />
                            <div className="quote_block" />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 78 64"
                              fill="none"
                              className="quote_mark"
                            >
                              <path d="M55.8684 63.0894C52.6269 63.0894 49.6698 62.606 46.997 61.6392C44.3242 60.6156 42.0495 59.2224 40.1729 57.4595C38.2963 55.6397 36.8177 53.4503 35.7372 50.8913C34.7136 48.3322 34.2018 45.4888 34.2018 42.3611C34.2018 39.1197 34.7705 35.736 35.9078 32.2102C37.1021 28.6845 38.8081 25.1302 41.0259 21.5476C43.2438 17.9649 45.9165 14.4391 49.0443 10.9702C52.2288 7.44441 55.8399 4.06079 59.8775 0.819336L69.6872 8.49646C67.8106 10.43 66.1045 12.2782 64.5691 14.0411C63.0905 15.8039 61.7257 17.5668 60.4746 19.3297C59.2236 21.0926 58.0578 22.9124 56.9773 24.789C55.9537 26.6657 55.0154 28.656 54.1623 30.7601L77.3643 42.3611C77.3643 45.432 76.7672 48.2469 75.573 50.806C74.4356 53.365 72.9002 55.5544 70.9667 57.3742C69.0332 59.1939 66.7585 60.6156 64.1426 61.6392C61.5267 62.606 58.7686 63.0894 55.8684 63.0894ZM22.1666 63.0894C18.9251 63.0894 15.968 62.606 13.2952 61.6392C10.6224 60.6156 8.34773 59.2224 6.4711 57.4595C4.59447 55.6397 3.11591 53.4503 2.03543 50.8913C1.01181 48.3322 0.5 45.4888 0.5 42.3611C0.5 39.1197 1.06868 35.736 2.20603 32.2102C3.40025 28.6845 5.10628 25.1302 7.32411 21.5476C9.54195 17.9649 12.2147 14.4391 15.3424 10.9702C18.527 7.44441 22.1381 4.06079 26.1757 0.819336L35.9854 8.49646C34.1088 10.43 32.4027 12.2782 30.8673 14.0411C29.3887 15.8039 28.0239 17.5668 26.7728 19.3297C25.5217 21.0926 24.356 22.9124 23.2755 24.789C22.2519 26.6657 21.3135 28.656 20.4605 30.7601L43.6625 42.3611C43.6625 45.432 43.0654 48.2469 41.8712 50.806C40.7338 53.365 39.1984 55.5544 37.2649 57.3742C35.3314 59.1939 33.0567 60.6156 30.4408 61.6392C27.8249 62.606 25.0668 63.0894 22.1666 63.0894Z" />
                            </svg>
                          </div>
                          <div className="testimonial_card_content_block">
                            <div className="testimonial">
                              <h4 className="mb-16">Jophie Alen</h4>
                              <span className="mb-16">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </span>
                              <p className="review_text">
                                Lorem ipsum dolor sit amet consectetur. Non
                                convallis sed id aliquam tempus. Volutpat tortor
                                tincidunt egestas sit risus donec.
                              </p>
                            </div>
                            <img
                              src="assets/media/shapes/bg-elements-2.png"
                              alt=""
                              className="bottom_shape"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-block slick-slide slick-cloned"
                        data-slick-index={3}
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 696 }}
                      >
                        <div className="testimonial_card">
                          <div className="testimonial_card_img_block">
                            <img
                              src="assets/media/users/Image.png"
                              alt=""
                              className="user_img"
                            />
                            <div className="quote_block" />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 78 64"
                              fill="none"
                              className="quote_mark"
                            >
                              <path d="M55.8684 63.0894C52.6269 63.0894 49.6698 62.606 46.997 61.6392C44.3242 60.6156 42.0495 59.2224 40.1729 57.4595C38.2963 55.6397 36.8177 53.4503 35.7372 50.8913C34.7136 48.3322 34.2018 45.4888 34.2018 42.3611C34.2018 39.1197 34.7705 35.736 35.9078 32.2102C37.1021 28.6845 38.8081 25.1302 41.0259 21.5476C43.2438 17.9649 45.9165 14.4391 49.0443 10.9702C52.2288 7.44441 55.8399 4.06079 59.8775 0.819336L69.6872 8.49646C67.8106 10.43 66.1045 12.2782 64.5691 14.0411C63.0905 15.8039 61.7257 17.5668 60.4746 19.3297C59.2236 21.0926 58.0578 22.9124 56.9773 24.789C55.9537 26.6657 55.0154 28.656 54.1623 30.7601L77.3643 42.3611C77.3643 45.432 76.7672 48.2469 75.573 50.806C74.4356 53.365 72.9002 55.5544 70.9667 57.3742C69.0332 59.1939 66.7585 60.6156 64.1426 61.6392C61.5267 62.606 58.7686 63.0894 55.8684 63.0894ZM22.1666 63.0894C18.9251 63.0894 15.968 62.606 13.2952 61.6392C10.6224 60.6156 8.34773 59.2224 6.4711 57.4595C4.59447 55.6397 3.11591 53.4503 2.03543 50.8913C1.01181 48.3322 0.5 45.4888 0.5 42.3611C0.5 39.1197 1.06868 35.736 2.20603 32.2102C3.40025 28.6845 5.10628 25.1302 7.32411 21.5476C9.54195 17.9649 12.2147 14.4391 15.3424 10.9702C18.527 7.44441 22.1381 4.06079 26.1757 0.819336L35.9854 8.49646C34.1088 10.43 32.4027 12.2782 30.8673 14.0411C29.3887 15.8039 28.0239 17.5668 26.7728 19.3297C25.5217 21.0926 24.356 22.9124 23.2755 24.789C22.2519 26.6657 21.3135 28.656 20.4605 30.7601L43.6625 42.3611C43.6625 45.432 43.0654 48.2469 41.8712 50.806C40.7338 53.365 39.1984 55.5544 37.2649 57.3742C35.3314 59.1939 33.0567 60.6156 30.4408 61.6392C27.8249 62.606 25.0668 63.0894 22.1666 63.0894Z" />
                            </svg>
                          </div>
                          <div className="testimonial_card_content_block">
                            <div className="testimonial">
                              <h4 className="mb-16">Jophie Alen</h4>
                              <span className="mb-16">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </span>
                              <p className="review_text">
                                Lorem ipsum dolor sit amet consectetur. Non
                                convallis sed id aliquam tempus. Volutpat tortor
                                tincidunt egestas sit risus donec.
                              </p>
                            </div>
                            <img
                              src="assets/media/shapes/bg-elements-2.png"
                              alt=""
                              className="bottom_shape"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-block slick-slide slick-cloned"
                        data-slick-index={4}
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 696 }}
                      >
                        <div className="testimonial_card">
                          <div className="testimonial_card_img_block">
                            <img
                              src="assets/media/users/Image.png"
                              alt=""
                              className="user_img"
                            />
                            <div className="quote_block" />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 78 64"
                              fill="none"
                              className="quote_mark"
                            >
                              <path d="M55.8684 63.0894C52.6269 63.0894 49.6698 62.606 46.997 61.6392C44.3242 60.6156 42.0495 59.2224 40.1729 57.4595C38.2963 55.6397 36.8177 53.4503 35.7372 50.8913C34.7136 48.3322 34.2018 45.4888 34.2018 42.3611C34.2018 39.1197 34.7705 35.736 35.9078 32.2102C37.1021 28.6845 38.8081 25.1302 41.0259 21.5476C43.2438 17.9649 45.9165 14.4391 49.0443 10.9702C52.2288 7.44441 55.8399 4.06079 59.8775 0.819336L69.6872 8.49646C67.8106 10.43 66.1045 12.2782 64.5691 14.0411C63.0905 15.8039 61.7257 17.5668 60.4746 19.3297C59.2236 21.0926 58.0578 22.9124 56.9773 24.789C55.9537 26.6657 55.0154 28.656 54.1623 30.7601L77.3643 42.3611C77.3643 45.432 76.7672 48.2469 75.573 50.806C74.4356 53.365 72.9002 55.5544 70.9667 57.3742C69.0332 59.1939 66.7585 60.6156 64.1426 61.6392C61.5267 62.606 58.7686 63.0894 55.8684 63.0894ZM22.1666 63.0894C18.9251 63.0894 15.968 62.606 13.2952 61.6392C10.6224 60.6156 8.34773 59.2224 6.4711 57.4595C4.59447 55.6397 3.11591 53.4503 2.03543 50.8913C1.01181 48.3322 0.5 45.4888 0.5 42.3611C0.5 39.1197 1.06868 35.736 2.20603 32.2102C3.40025 28.6845 5.10628 25.1302 7.32411 21.5476C9.54195 17.9649 12.2147 14.4391 15.3424 10.9702C18.527 7.44441 22.1381 4.06079 26.1757 0.819336L35.9854 8.49646C34.1088 10.43 32.4027 12.2782 30.8673 14.0411C29.3887 15.8039 28.0239 17.5668 26.7728 19.3297C25.5217 21.0926 24.356 22.9124 23.2755 24.789C22.2519 26.6657 21.3135 28.656 20.4605 30.7601L43.6625 42.3611C43.6625 45.432 43.0654 48.2469 41.8712 50.806C40.7338 53.365 39.1984 55.5544 37.2649 57.3742C35.3314 59.1939 33.0567 60.6156 30.4408 61.6392C27.8249 62.606 25.0668 63.0894 22.1666 63.0894Z" />
                            </svg>
                          </div>
                          <div className="testimonial_card_content_block">
                            <div className="testimonial">
                              <h4 className="mb-16">Jophie Alen</h4>
                              <span className="mb-16">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </span>
                              <p className="review_text">
                                Lorem ipsum dolor sit amet consectetur. Non
                                convallis sed id aliquam tempus. Volutpat tortor
                                tincidunt egestas sit risus donec.
                              </p>
                            </div>
                            <img
                              src="assets/media/shapes/bg-elements-2.png"
                              alt=""
                              className="bottom_shape"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-block slick-slide slick-cloned"
                        data-slick-index={5}
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 696 }}
                      >
                        <div className="testimonial_card">
                          <div className="testimonial_card_img_block">
                            <img
                              src="assets/media/users/Image.png"
                              alt=""
                              className="user_img"
                            />
                            <div className="quote_block" />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 78 64"
                              fill="none"
                              className="quote_mark"
                            >
                              <path d="M55.8684 63.0894C52.6269 63.0894 49.6698 62.606 46.997 61.6392C44.3242 60.6156 42.0495 59.2224 40.1729 57.4595C38.2963 55.6397 36.8177 53.4503 35.7372 50.8913C34.7136 48.3322 34.2018 45.4888 34.2018 42.3611C34.2018 39.1197 34.7705 35.736 35.9078 32.2102C37.1021 28.6845 38.8081 25.1302 41.0259 21.5476C43.2438 17.9649 45.9165 14.4391 49.0443 10.9702C52.2288 7.44441 55.8399 4.06079 59.8775 0.819336L69.6872 8.49646C67.8106 10.43 66.1045 12.2782 64.5691 14.0411C63.0905 15.8039 61.7257 17.5668 60.4746 19.3297C59.2236 21.0926 58.0578 22.9124 56.9773 24.789C55.9537 26.6657 55.0154 28.656 54.1623 30.7601L77.3643 42.3611C77.3643 45.432 76.7672 48.2469 75.573 50.806C74.4356 53.365 72.9002 55.5544 70.9667 57.3742C69.0332 59.1939 66.7585 60.6156 64.1426 61.6392C61.5267 62.606 58.7686 63.0894 55.8684 63.0894ZM22.1666 63.0894C18.9251 63.0894 15.968 62.606 13.2952 61.6392C10.6224 60.6156 8.34773 59.2224 6.4711 57.4595C4.59447 55.6397 3.11591 53.4503 2.03543 50.8913C1.01181 48.3322 0.5 45.4888 0.5 42.3611C0.5 39.1197 1.06868 35.736 2.20603 32.2102C3.40025 28.6845 5.10628 25.1302 7.32411 21.5476C9.54195 17.9649 12.2147 14.4391 15.3424 10.9702C18.527 7.44441 22.1381 4.06079 26.1757 0.819336L35.9854 8.49646C34.1088 10.43 32.4027 12.2782 30.8673 14.0411C29.3887 15.8039 28.0239 17.5668 26.7728 19.3297C25.5217 21.0926 24.356 22.9124 23.2755 24.789C22.2519 26.6657 21.3135 28.656 20.4605 30.7601L43.6625 42.3611C43.6625 45.432 43.0654 48.2469 41.8712 50.806C40.7338 53.365 39.1984 55.5544 37.2649 57.3742C35.3314 59.1939 33.0567 60.6156 30.4408 61.6392C27.8249 62.606 25.0668 63.0894 22.1666 63.0894Z" />
                            </svg>
                          </div>
                          <div className="testimonial_card_content_block">
                            <div className="testimonial">
                              <h4 className="mb-16">Jophie Alen</h4>
                              <span className="mb-16">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </span>
                              <p className="review_text">
                                Lorem ipsum dolor sit amet consectetur. Non
                                convallis sed id aliquam tempus. Volutpat tortor
                                tincidunt egestas sit risus donec.
                              </p>
                            </div>
                            <img
                              src="assets/media/shapes/bg-elements-2.png"
                              alt=""
                              className="bottom_shape"
                            />
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
                        id="slick-slide-control30"
                        aria-controls="slick-slide30"
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
                        id="slick-slide-control31"
                        aria-controls="slick-slide31"
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
                        id="slick-slide-control32"
                        aria-controls="slick-slide32"
                        aria-label="3 of 3"
                        tabIndex={-1}
                      >
                        3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-60">
  <div className="container">
    <div className="section-title mb-48">
      <div className="heading">
        <h6 className="color-primary mb-8">–––– Blogs</h6>
        <h2>
          Latest News By
          <br /> Talented <span className="fm-sec">Authors!</span>
        </h2>
      </div>
    
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="blog_card mb-24 mb-xl-0">
          <div className="blog_card_img_block">
            <img src="assets/media/blog/b-1.png" alt="" />
            <p className="date">9 May 2024</p>
          </div>
          <div className="blog_card_text_block">
            <h5 className="mb-8">
              <a className="blog_title" href="blog-detail.html">
                Remote Learning Tips: Thrive in Online Classes
              </a>
            </h5>
            <p className="mb-24">
              Discover effective strategies to excel in online classes. Learn
              how to stay motivated, manage your time, and utilize digital
              tools to enhance your learning experience.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="author">
                <img src="assets/media/users/u-1.png" alt="" />
                <h6 className="dark-gray">Michal Clark</h6>
              </div>
              <a
                href="blog-detail.html"
                className="h6 color-primary educate_link_btn"
              >
                Read More
                <i className="far fa-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="blog_card mb-24 mb-xl-0">
          <div className="blog_card_img_block">
            <img src="assets/media/blog/b-2.png" alt="" />
            <p className="date">9 May 2024</p>
          </div>
          <div className="blog_card_text_block">
            <h5 className="mb-8">
              <a className="blog_title" href="blog-detail.html">
                The Power of Lifelong Learning: Why It Matters?
              </a>
            </h5>
            <p className="mb-24">
              Explore the importance of lifelong learning and how it contributes
              to personal growth and career advancement. Discover key benefits
              and tips for embracing continuous education.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="author">
                <img src="assets/media/users/u-2.png" alt="" />
                <h6 className="dark-gray">Jeremy Jhon</h6>
              </div>
              <a
                href="blog-detail.html"
                className="h6 color-primary educate_link_btn"
              >
                Read More
                <i className="far fa-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="blog_card">
          <div className="blog_card_img_block">
            <img src="assets/media/blog/b-3.png" alt="" />
            <p className="date">9 May 2024</p>
          </div>
          <div className="blog_card_text_block">
            <h5 className="mb-8">
              <a className="blog_title" href="blog-detail.html">
                The Art of Effective Note-Taking: Strategies for Students
              </a>
            </h5>
            <p className="mb-24">
              Learn practical techniques for note-taking that improve
              comprehension and retention. These strategies will help you stay
              organized and focused during your studies.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="author">
                <img src="assets/media/users/u-3.png" alt="" />
                <h6 className="dark-gray">Yuki Kabuto</h6>
              </div>
              <a
                href="blog-detail.html"
                className="h6 color-primary educate_link_btn"
              >
                Read More
                <i className="far fa-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="py-60">
  <div className="container">
    <div className="contact_banner">
      <h2 className="mb-8 color-white">
        Ask Any Questions
        <br />
        <span className="fm-sec">You Want!</span>
      </h2>
      <p className="mb-16 color-white">
        Contact us on this number for any questions!
      </p>
      <div className="mx-auto">
        <Link to={`tel:${ContactInfo.contact_phone}`} className="h5 phone_number">
         {ContactInfo.contact_phone}
        </Link>
      </div>
      <p className="mt-16 color-white" style={{marginTop:"50px"}}>
        Or feel free to reach out via email at{" "}
        <Link to={`mailto:${ContactInfo.contact_email}`} className="h5 phone_number">
        {ContactInfo.contact_email}
        </Link>
      </p>
      <div className="icons">
        <img
          src="assets/media/shapes/dots-1.png"
          alt=""
          className="element-1"
        />
        <img
          src="assets/media/shapes/vector-3.png"
          alt=""
          className="element-2"
        />
        <img
          src="assets/media/shapes/paint.png"
          alt=""
          className="element-3"
        />
        <img
          src="assets/media/shapes/vector-4.png"
          alt=""
          className="element-5"
        />
        <img
          src="assets/media/shapes/dots-1.png"
          alt=""
          className="element-4"
        />
        <img
          src="assets/media/shapes/tag.png"
          alt=""
          className="element-6"
        />
        <img
          src="assets/media/shapes/errow.png"
          alt=""
          className="element-7"
        />
        <img
          src="assets/media/shapes/circle-lines.png"
          alt=""
          className="element-8"
        />
        <img
          src="assets/media/shapes/mic-speaker.png"
          alt=""
          className="element-9"
        />
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default Home;
