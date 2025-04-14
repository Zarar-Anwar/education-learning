import React, { useEffect, useState } from "react";
import api from "../../Utils/Axios";

const MCQTest = () => {
    const { state } = useState()
    const { UserInfo } = state
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
        const token = UserInfo;

        api
            .post(
                "/submit-test/",
                {
                    answers,
                    headers: {
                        Authorization: `Token ${token}`,
                        "Content-Type": "application/json",
                    },

                }
            )
            .then((res) => {
                setResult(res.data);
            })
            .catch((err) => {
                console.error("Error submitting test:", err.response || err);
            });
    };



    return (
        <div className="container mt-5" >
            {!started ? (
                <button
                    className="btn btn-primary mt-2 w-100"
                    onClick={() => setStarted(true)}
                >
                    Take a Test
                </button>
            ) : (
                <div>
                    <h3 className="mb-4">MCQ Test</h3>
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
                        <button
                            type="button"
                            className="btn btn-success w-100"
                            onClick={handleSubmit}
                        >
                            Submit Test
                        </button>
                    </form>
                    {result && (
                        <div className="alert alert-info mt-4">
                            <h5>Test Result</h5>
                            <p>Score: {result.score} / {result.total}</p>
                            <p>Percentage: {result.percentage.toFixed(2)}%</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MCQTest;
