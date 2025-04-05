import React, { useEffect, useState } from "react";
import api from "../Utils/Axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Courses = () => {
  const [subjects, setSubjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { courseId } = location.state || {};


  useEffect(() => {
    // if (!courseId) {
    //   navigate("/courses"); // Redirect if no courseId is passed
    //   return;
    // }
    api
      .get(`/subjects/`)
      .then((response) => {
        const filteredSubjects = response.data.filter(
          (subject) => subject.test === courseId
        );
        setSubjects(filteredSubjects);
      })
      .catch((error) => {
        console.error("Error fetching course:", error);
      });
  }, [courseId, navigate]);

  return (
    <>
      <section className="page_title_banner">
        <div className="container">
          <div className="content">
            <div className="title">
              <h1>Course Subjects</h1>
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
                Showing {subjects.length} of {subjects.length} results
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
            {subjects.length > 0 ? (
              subjects.map((subject) => (
                <div className="col-lg-3" key={subject.id}>
                  <Link
                    to={{
                      pathname: "/mcqs-list",
                    }}
                    state={{ subjectId: subject.id }}
                  >
                    <div className="course__card mb-24" style={{width:"200px"}}>
                      <div className="course__card__icon"></div>
                      <div
                        className="course__card__content"
                        style={{ marginBottom: "150px" }}
                      >
                        <div className="left__block">
                          <img
                            style={{ marginTop: "30px" }}
                            width="130px"
                            src={`http://localhost:8000${subject.icon}`}
                            alt="Course Tag"
                            className="course_tag"
                          />
                          <h4 className="mb-4p">
                            <Link
                              to={{
                                pathname: "/mcqs-list",
                              }}
                              state={{ subjectId: subject.id }}
                            >
                              {subject.name}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="text-center">
                <h6 className="text-danger">No Subjects Found</h6>
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
