import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import api from "../../Utils/Axios";
import { Helmet } from "react-helmet";

const Material = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { subjectId } = location.state || {};
    const [material, setMaterial] = useState([]);
    const [subject, setSubjects] = useState([]);
    const [mcqs, setMcqs] = useState([]);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (started) {
            api.get("/mcqs/").then((res) => {
                setMcqs(res.data);
            });
        }
    }, [started]);

    const handleChange = (qid, selected) => {
        setAnswers({ ...answers, [qid]: selected });
    };

    const handleSubmit = () => {
        api
            .post("/submit-test/", {
                answers,
            })
            .then((res) => {
                setResult(res.data);
            });
    };

    useEffect(() => {
        if (!subjectId) {
            navigate("/courses");
            return;
        }

        api
            .get(`/material/`)
            .then((response) => {
                const matched = response.data.filter((material) => material.subject === subjectId);
                setMaterial(matched);
            })
            .catch((error) => {
                console.error("Error fetching Material:", error);
            });
    }, [subjectId, navigate]);



    // useEffect(() => {
    //     if (!subjectId) {
    //         navigate("/student-enrolled");
    //         return;
    //     }

    //     api
    //         .get(`/subjects/`)
    //         .then((response) => {
    //             const matched = response.data.filter(
    //                 (subject) => subject.test === courseId
    //             );
    //             setSubjects(matched);

    //         })
    //         .catch((error) => {
    //             console.error("Error fetching subjects:", error);
    //         });
    // }, [subjectId, navigate]);


    return (
        <>
            <Helmet>
                <style>
                    {`
                        .modal-backdrop {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: rgba(0, 0, 0, 0.6);
                            z-index: 1050;
                            display: flex;
                            justify-content: center;
                            align-items: center;X
                        }

                        .modal-content-custom {
                            background: white;
                            padding: 30px;
                            border-radius: 10px;
                            max-height: 80vh;
                            overflow-y: auto;
                            width: 80%;
                            position: relative;
                        }

                        .btn-close {
                            position: absolute;
                            top: 10px;
                            right: 15px;
                            background: transparent;
                            border: none;
                            font-size: 25px;
                            cursor: pointer;
                        }
                    `}
                </style>
            </Helmet>

            <section className="py-60 mt-5">
                <div className="container">
                    <form className="search_bar" onSubmit={(e) => e.preventDefault()}>
                        <button type="submit">
                            <i className="fal fa-search" />
                        </button>
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search here"
                        />
                    </form>
                    <div className="filter_row mt-3">
                        <div className="right_block">
                            <div className="text-center">
                                <div className="container mt-5" >
                                    {!started && (
                                        <button
                                            className="btn btn-primary mt-2 w-100"
                                            onClick={() => setStarted(true)}
                                        >
                                            Take a Test
                                        </button>
                                    )}
                                    {started && (
                                        <div className="modal-backdrop">
                                            <div className="modal-content-custom">
                                                <button className="btn-close" onClick={() => setStarted(false)}>×</button>
                                                <h3 className=" mb-4 text-center">MCQ Test</h3>
                                                <form>
                                                    {mcqs.map((q, index) => (
                                                        <div key={q.id} className="card mb-3 ">
                                                            <div className="card-header">
                                                                {index + 1}. {q.question}
                                                            </div>
                                                            <div className="card-body ">
                                                                {["a", "b", "c", "d"].map((opt) => (
                                                                    <div className="form-check" key={opt}>
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name={`question-${q.id}`}
                                                                            id={`${q.id}-${opt}`}
                                                                            value={opt}
                                                                            checked={answers[q.id] === opt}
                                                                            onChange={() => handleChange(q.id, opt)}
                                                                        />
                                                                        <label className="form-check-label" htmlFor={`${q.id}-${opt}`}>
                                                                            {q[`option_${opt}`]}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <button type="button" className="btn btn-success w-100" onClick={handleSubmit}>
                                                        Submit Test
                                                    </button>
                                                </form>

                                                {result && (
                                                    <div className="alert alert-info mt-4 text-center">
                                                        <h5>Test Result</h5>
                                                        <p>Score: {result.score} / {result.total}</p>
                                                        <p>Percentage: {result.percentage.toFixed(2)}%</p>
                                                        <button className="btn btn-outline-primary mt-2" onClick={() => {
                                                            setResult(null);
                                                            setAnswers({});
                                                            setStarted(true); // Retake test
                                                        }}>Retake Test</button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}


                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {material.length > 0 ? (
                            material.map((material) => (
                                <div className="col-lg-3 m-3" key={material.id}>
                                    <div className="card shadow-sm mb-4" style={{ width: "280px" }}>
                                        <div className="position-relative">

                                            {/* Optional Overlay Icon on Top */}
                                            <div className="position-absolute top-0 start-0 m-2">
                                                <img
                                                    src={`http://localhost:8000${material.image}`}
                                                    alt="Course Tag"
                                                    className="img-thumbnail border-0"
                                                    style={{ width: "80px", height: "70px", objectFit: "cover" }}
                                                />
                                            </div>
                                        </div>

                                        <div className="card-body text-center">
                                            <h5 className="card-title mb-2 text-truncate">{material.name}</h5>
                                            <a
                                                href={`http://localhost:8000${material.pdf}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-outline-primary btn-sm"
                                            >
                                                View Full PDF
                                            </a>
                                        </div>
                                    </div>
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

export default Material;
