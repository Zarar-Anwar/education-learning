import React, { useContext, useEffect, useState } from "react";
import api from "../Utils/Axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Store } from "../Utils/Store";

const CoursesDetails = () => {
  const [subjects, setSubjects] = useState([]);
  const [filteredSubjects, setFilteredSubjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const {state} = useContext(Store)
  const {UserInfo} = state

  const location = useLocation();
  const navigate = useNavigate();
  const { courseId } = location.state || {};

  useEffect(() => {
    if (!courseId) {
      navigate("/courses");
      return;
    }

    api
      .get(`/subjects/`)
      .then((response) => {
        const matched = response.data.filter(
          (subject) => subject.test === courseId
        );
        setSubjects(matched);
        setFilteredSubjects(matched);
      })
      .catch((error) => {
        console.error("Error fetching subjects:", error);
      });
  }, [courseId, navigate]);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    setFilteredSubjects(
      subjects.filter((subject) =>
        subject.name.toLowerCase().includes(query)
      )
    );
  }, [searchQuery, subjects]);

  return (
    <>
      <section className="page_title_banner">
        <div className="container">
          <div className="content">
            <div className="title">
              <h1>Course Subjects</h1>
              <img src="assets/media/shapes/tag-2.png" alt="" className="tag" />
            </div>
            <div className="educate-tilt">
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
                Showing {filteredSubjects.length} of {subjects.length} results
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
            {filteredSubjects.length > 0 ? (
              filteredSubjects.map((subject) => (
                <div className="col-lg-3" key={subject.id}>
                  <Link to={UserInfo ?`/student-dashboard`:`/login`} state={{ subjectId: subject.id }}>
                    <div className="course__card mb-24" style={{ width: "200px" }}>
                      <div className="course__card__icon"></div>
                      <div className="course__card__content" style={{ marginBottom: "150px" }}>
                        <div className="left__block">
                          <img
                            
                            style={{ marginTop: "30px", height:"150px",width:"150px" }}
                            src={`http://localhost:8000${subject.icon}`}
                            alt="Course Tag"
                            className="course_tag"
                          />
                          <h4 className="mb-4p">{subject.name}</h4>
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
        </div>
      </section>
    </>
  );
};

export default CoursesDetails;
