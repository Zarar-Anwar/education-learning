import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";
import api from "../Utils/Axios";

import { Link } from "react-router-dom";
import { Store } from "../Utils/Store";
import { useContext } from "react";
import { toast } from "react-toastify";
import CourseComponent from "./include/CourseComponent";
function Home() {
  const [courses, setCourses] = useState([]);
  const { state } = useContext(Store);
  const {UserInfo, ContactInfo } = state;


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
                    <Link to="/login" className="educate-btn sec">
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
            src="assets/media/banners/hero-banner-1/home-banner.png"
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
                Begin Your Learning, <br /> Something For{" "}
                <span className="fm-sec">Everyone</span>
              </h2>
            </div>
            <a href="courses.html" className="educate-btn d-md-block d-none">
              <span className="educate-btn__curve" />
              View All
            </a>
          </div>
          <div className="row">
            {/* MDCAT Preparation */}

            {courses.length > 0 ? (
              courses.map((course, index) => (
               <CourseComponent course={course} />
              ))
            ) : (
              <div className="text-center">
                <h6 className="text-danger">No Courses Found</h6>
              </div>
            )}
          </div>

        </div>
      </section >



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
                  alt="quote icon"
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
                  <footer>— Inamullah, Web Development Student</footer>
                </blockquote>
              </div>
            </div>

            <div className="col-xl-7 col-lg-10 offset-xl-0 offset-lg-1">
              <div className="testimonials_slider_1_block">
                <div className="testimonials_slider slick-slider">
                  <div className="slick-list">
                    <div className="slick-track">
                      <div className="testimonial_card">
                        <div className="testimonial_card_img_block">
                          <img
                            src="assets/media/users/bu.png"
                            alt="user image"
                            className="user_img"
                          />
                        </div>
                        <div className="testimonial_card_content_block">
                          <h4>Nadeem Mubarik</h4>
                          <span>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </span>
                          <p>
                            "The ETEA preparation course gave me the confidence I needed to excel. The mock tests were incredibly realistic!"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="slick-dots">
                    <li className="slick-active">
                      <button type="button" aria-selected="true">1</button>
                    </li>
                    <li>
                      <button type="button">2</button>
                    </li>
                    <li>
                      <button type="button">3</button>
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
            <p className="mt-16 color-white" style={{ marginTop: "50px" }}>
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
