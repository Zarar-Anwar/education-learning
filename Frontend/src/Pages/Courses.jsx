import React, { useContext, useEffect, useState } from "react";
import api from "../Utils/Axios";
import { Link } from "react-router-dom";
import { Store } from "../Utils/Store";
import { toast } from "react-toastify";
import CourseComponent from "./include/CourseComponent";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { state } = useContext(Store)
  const { UserInfo } = state

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

  const handleEnroll = (courseId) => {
    api.post("/enroll-course/", { test_id: courseId }, {
      headers: {
        Authorization: `Token ${UserInfo}`,
      },
    })
      .then((response) => {
        // Handle success
        toast.success("Successfully enrolled!");
      })
      .catch((error) => {
        // Handle error
        if (error.response) {
          // Server responded with an error code
          const errorMessage = error.response.data.error || error.response.data.message || "An error occurred";
          toast.error(errorMessage);
        } else if (error.request) {
          // No response received
          console.error("No response received from the server", error.request);
          alert("Enrollment failed, please try again.");
        } else {
          // Something else caused an error
          console.error("Error in the request", error.message);
          alert("Error enrolling in course");
        }
      });
  };

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
                <CourseComponent course={course} />
              ))
            ) : (
              <div className="text-center">
                <h6 className="text-danger">No Courses Found</h6>
              </div>
            )}
          </div>

          <ul className="pagination p-5" style={{ marginTop: "50px" }}>
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
