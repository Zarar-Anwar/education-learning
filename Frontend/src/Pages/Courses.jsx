import React, { useEffect, useState } from "react";
import api from "../Utils/Axios";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <section className="page_title_banner">
        <div className="container">
          <div className="content">
            <div className="title">
              <h1>Course Listing</h1>
              <img src="assets/media/shapes/tag-2.png" alt="" className="tag" />
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
            <div className="right_block">
              <h6 className="dark-gray">
                Showing {filteredCourses.length} of {courses.length} results
              </h6>
              <form className="search_bar" onSubmit={(e) => e.preventDefault()}>
                <button type="submit">
                  <i className="fal fa-search" />
                </button>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
          </div>
          <div className="row">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div className="col-lg-6" key={course.id}>
                  <Link
                    to={{
                      pathname: "/course-detail",
                    }}
                    state={{ courseId: course.id }}
                  >
                    <div className="course__card mb-24">
                      <div className="course__card__icon">
                        <img
                          width="130px"
                          src={`http://localhost:8000${course.icon}`}
                          alt={course.name}
                        />
                      </div>
                      <div className="course__card__content">
                        <div className="left__block">
                          <img
                            width="130px"
                            src={`http://localhost:8000${course.tag}`}
                            alt="Course Tag"
                            className="course_tag"
                          />
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
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="text-center">
                <h6 className="text-danger">No Courses Found</h6>
              </div>
            )}
          </div>

          {/* Pagination (Static for now; Implement dynamic pagination if needed) */}
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link arrow" aria-label="prev">
                <i className="far fa-chevron-left" />
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
                <i className="far fa-chevron-right" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Courses;
