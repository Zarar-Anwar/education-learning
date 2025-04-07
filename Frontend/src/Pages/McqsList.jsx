import React, { useEffect, useState } from "react";
import api from "../Utils/Axios";
import { useLocation, useNavigate } from "react-router-dom";

const McqsList = () => {
  const [mcqs, setMcqs] = useState([]);
  const [filteredMcqs, setFilteredMcqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const { subjectId } = location.state || {};

  useEffect(() => {
    if (!subjectId) {
      navigate("/courses");
      return;
    }

    api
      .get(`/mcqs/`)
      .then((response) => {
        const matched = response.data.filter((mcq) => mcq.subject === subjectId);
        setMcqs(matched);
        setFilteredMcqs(matched);
      })
      .catch((error) => {
        console.error("Error fetching MCQs:", error);
      });
  }, [subjectId, navigate]);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    setFilteredMcqs(
      mcqs.filter((mcq) =>
        mcq.question.toLowerCase().includes(query)
      )
    );
  }, [searchQuery, mcqs]);

  return (
    <>
      <section className="page_title_banner">
        <div className="container">
          <div className="content">
            <div className="title">
              <h1>Subject MCQs</h1>
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
                Showing {filteredMcqs.length} of {mcqs.length} results
              </h6>
              <form className="search_bar" onSubmit={(e) => e.preventDefault()}>
                <button type="submit">
                  <i className="fal fa-search" />
                </button>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search questions"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
          </div>

          <div className="mt-5">
            {filteredMcqs.length > 0 ? (
              <ul>
                {filteredMcqs.map((mcq, index) => (
                  <li key={index} className="mb-4">
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
        </div>
      </section>
    </>
  );
};

export default McqsList;
