import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import api from "../../Utils/Axios";
import { Store } from "../../Utils/Store";

function StuTest() {
    const [User, setUser] = useState(null);
    const [studentTests, setStudentTests] = useState([]);
    const { state } = useContext(Store);
    const { UserInfo } = state;

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
    }, [UserInfo]);

    useEffect(() => {
        axios
            .get("/student-tests/")
            .then((res) => {
                setStudentTests(res.data);
            })
            .catch((err) => {
                console.error("Error fetching student tests:", err);
            });
    }, []);

    const filteredTests = studentTests.filter(
        (test) => User && test.email === User.email
    );

    return (
        <div className="container mt-5" >
            <div className="card shadow-lg border-0" style={{marginTop:"90px"}}>
                <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">📊 My Test Results</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover align-middle text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Test Name</th>
                                    <th scope="col">Date Taken</th>
                                    <th scope="col">Score (%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTests.length > 0 ? (
                                    filteredTests.map((test, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{test.email}</td>
                                            <td>{test.test_name}</td>
                                            <td>
                                                {new Date(test.date_taken).toLocaleString()}
                                            </td>
                                            <td>
                                                <span className="badge bg-success fs-6">
                                                    {test.score}%
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center py-3">
                                            <strong>No test data available.</strong>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StuTest;
