import React, { useEffect, useState } from "react";
import api from "../Utils/Axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

const McqsList = () => {
    const [mcqs, setMcqs] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const { subjectId } = location.state || {};
  
  
    useEffect(() => {
      // if (!courseId) {
      //   navigate("/courses"); // Redirect if no courseId is passed
      //   return;
      // }
      api
        .get(`/mcqs/`)
        .then((response) => {
          const filteredSubjects = response.data.filter(
            (mcqs) => mcqs.subject === subjectId
          );
          setMcqs(filteredSubjects);
        })
        .catch((error) => {
          console.error("Error fetching course:", error);
        });
    }, [subjectId, navigate]);
  

  return (
    <>
      <section className="page_title_banner">
        <div className="container">
          <div className="content">
            <div className="title">
              <h1>Subject Mcqs</h1>
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
                Showing {mcqs.length} of {mcqs.length} results
              </h6>
              <form
                className="search_bar"
                onSubmit={(e) => e.preventDefault()}
              >
                <button type="submit">
                  <i className="fal fa-search" />
                </button>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search subjects"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
          </div>
        

          <div className="mt-5">
            {mcqs.map((mcq) => (
              <div className="subject-mcqs-section" key={mcq.id}>
                <h5 className="mb-3">MCQs for {mcq.name}</h5>
                {mcqs.length > 0 ? (
                  <ul>
                    {mcqs.map((mcq, index) => (
                      <li key={index}>
                        <strong>{mcq.question}</strong>
                        <ul>
                          <li>A: {mcq.option_a}</li>
                          <li>B: {mcq.option_b}</li>
                          <li>C: {mcq.option_c}</li>
                          <li>D: {mcq.option_d}</li>
                        </ul>
                        <p>Correct Answer: {mcq.correct_option}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No MCQs available for this subject.</p>
                )}
              </div>
            ))}
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

export default McqsList;
