import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../Utils/Axios";
import { Helmet } from "react-helmet";
import { Store } from "../../Utils/Store";

const Material = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = useContext(Store);
    const { UserInfo } = state;
    const { subjectId } = location.state || {};

    const [material, setMaterial] = useState([]);
    const [mcqs, setMcqs] = useState([]);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [started, setStarted] = useState(false);
    const [User, setUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [timeLeft, setTimeLeft] = useState(2400); // 40 minutes in seconds
    const [timerStarted, setTimerStarted] = useState(false);

    // Fetch user info
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await api.get("/user-info/", {
                    headers: { Authorization: `Token ${UserInfo}` },
                });
                setUser(response.data);
            } catch (error) {
                console.error("Failed to fetch user info:", error);
                setUser({ name: "Guest", email: "guest@example.com" });
            }
        };
        fetchUserDetails();
    }, []);

    // Start MCQs
    useEffect(() => {
        if (started) {
            api.get("/mcqs/").then((res) => {
                setMcqs(res.data.slice(0, 100));
                setAnswers({});
                setResult(null);
                setTimeLeft(2400);
                setTimerStarted(true);
            });
        }
    }, [started]);

    // Timer logic
    useEffect(() => {
        let timer;
        if (timerStarted && timeLeft > 0) {
            timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        } else if (timerStarted && timeLeft === 0) {
            handleSubmit(); // Auto submit when time ends
        }
        return () => clearTimeout(timer);
    }, [timeLeft, timerStarted]);

    const handleChange = (qid, selected) => {
        setAnswers((prev) => ({ ...prev, [qid]: selected }));
    };

    const handleSubmit = () => {
        api.post("/submit-test/", {
            answers,
            email: User.email,
        }).then((res) => {
            setResult(res.data);
            setStarted(false);
            setTimerStarted(false);
        });
    };

    useEffect(() => {
        if (!subjectId) {
            navigate("/courses");
            return;
        }

        api.get(`/material/`)
            .then((response) => {
                const matched = response.data.filter((m) => m.subject === subjectId);
                setMaterial(matched);
            })
            .catch((error) => {
                console.error("Error fetching Material:", error);
            });
    }, [subjectId, navigate]);

    const filteredMaterial = material.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    return (
        <>
            <Helmet>
                <style>{`
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
                        align-items: center;
                    }

                    .modal-content-custom {
                        background: white;
                        padding: 30px;
                        border-radius: 10px;
                        max-height: 80vh;
                        overflow-y: auto;
                        width: 90%;
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
                `}</style>
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
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </form>

                    <div className="text-center mt-4">
                        {!started && !result && (
                            <button className="btn btn-primary w-100" onClick={() => setStarted(true)}>
                                Take a Test
                            </button>
                        )}
                    </div>

                    {started && (
                        <div className="modal-backdrop">
                            <div className="modal-content-custom">
                                <button className="btn-close" onClick={() => setStarted(false)}>×</button>
                                <h3 className="text-center mb-4">MCQ Test</h3>
                                <div className="d-flex justify-content-between mb-3">
                                    <span><strong>Time Left:</strong> {formatTime(timeLeft)}</span>
                                    <span><strong>Left MCQs:</strong> {100 - Object.keys(answers).length}</span>
                                </div>
                                <form>
                                    {mcqs.map((q, index) => (
                                        <div key={q.id} className="card mb-3">
                                            <div className="card-header">
                                                {index + 1}. {q.question}
                                            </div>
                                            <div className="card-body">
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
                            </div>
                        </div>
                    )}

                    {result && (
                        <div className="alert alert-info mt-4 text-center">
                            <h4>Test Completed!</h4>
                            <p>Correct: {result.correct}</p>
                            <p>Wrong: {result.wrong}</p>
                            <p>Total Score: {result.score} / {result.total}</p>
                            <p>Percentage: {result.percentage.toFixed(2)}%</p>
                            <button className="btn btn-outline-primary mt-2" onClick={() => {
                                setResult(null);
                                setAnswers({});
                                setMcqs([]);
                                setTimeLeft(2400);
                            }}>
                                Retake Test
                            </button>
                        </div>
                    )}

                    <div className="row mt-5">
                        {filteredMaterial.length > 0 ? (
                            filteredMaterial.map((item) => (
                                <div className="col-lg-3 m-3" key={item.id}>
                                    <div className="card shadow-sm mb-4" style={{ width: "280px" }}>
                                        <div className="position-relative">
                                            <div className="position-absolute top-0 start-0 m-2">
                                                <img
                                                    src={`http://localhost:8000${item.image}`}
                                                    alt="Course Tag"
                                                    className="img-thumbnail border-0"
                                                    style={{ width: "80px", height: "70px", objectFit: "cover" }}
                                                />
                                            </div>
                                        </div>
                                        <div className="card-body text-center">
                                            <h5 className="card-title mb-2 text-truncate">{item.name}</h5>
                                            <a
                                                href={`http://localhost:8000${item.pdf}`}
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
                                <h6 className="text-danger">No Materials Found</h6>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Material;
