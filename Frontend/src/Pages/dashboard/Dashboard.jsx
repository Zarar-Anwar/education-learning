import React, { useContext, useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import api from "../../Utils/Axios";
import { Link } from "react-router-dom";
import { Store } from "../../Utils/Store";

function Dashboard() {
    const { state } = useContext(Store);
    const { UserInfo } = state;

    const [User, setUser] = useState(null);
    const [data, setData] = useState([]);
    const [week_data, setWeekData] = useState([]);
    const [month_data, setMonthData] = useState([]);
    const [courses, setCourses] = useState([]);
    const [studentTests, setStudentTests] = useState([]);

    useEffect(() => {
        api
            .get("/student-tests/")
            .then((res) => {
                setStudentTests(res.data);
            })
            .catch((err) => {
                console.error("Error fetching student tests:", err);
            });
    }, []);

    useEffect(() => {
        api
            .get("/enrolled-courses/", {
                headers: {
                    Authorization: `Token ${UserInfo}`,
                },
            })
            .then((response) => {
                setCourses(response.data);
            })
            .catch((error) => {
                console.error("Error fetching enrolled courses:", error);
            });
    }, []);

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

    useEffect(() => {
        const data_list = async () => {
            try {
                const result = await api.get("dashboard/");
                setData(result.data.data);
                setWeekData(result.data.data.weekly_data);
                setMonthData(result.data.data.monthly_data);
            } catch (error) {
                console.error("Failed to fetch dashboard data:", error);
            }
        };
        data_list();
    }, []);

    // Filter and map data for graphs
    const testChartData = studentTests
        .filter((test) => User && test.email === User.email)
        .map((test) => ({
            name: test.test?.name || `Test ${test.id}`,
            score: test.score,
        }));

    const courseChartData = courses.map((course) => ({
        name: course.course_name || `Course ${course.id}`,
        progress: course.progress || 0,
    }));

    return (
        <div className="page-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="h-100">
                            <div className="row mb-3 pb-1">
                                <div className="col-12">
                                    <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                                        <div className="flex-grow-1">
                                            <h1 className="mb-1 text-center">Welcome</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12 col-md-6">
                                    <div className="card card-animate shadow-sm border-0">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-start gap-3 mb-3">
                                                <img src="/userdefault.jpg" alt="User" width="40" height="40" className="rounded-circle" />
                                                <h5 className="mb-0 text-uppercase fw-medium text-muted"><strong>{User?.username}</strong></h5>
                                            </div>

                                            <div className="table-responsive">
                                                <table className="table table-striped table-hover table-bordered mb-0">
                                                    <thead className="table-light">
                                                        <tr>
                                                            <th scope="col">Id</th>
                                                            <th scope="col">Username</th>
                                                            <th scope="col">Email</th>
                                                            <th scope="col">Enrolled Courses</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">
                                                                <Link to="/student-enrolled" className="text-decoration-none text-dark">
                                                                    #
                                                                </Link>
                                                            </th>
                                                            <td>
                                                                <Link to="/student-enrolled" className="text-decoration-none text-dark">
                                                                    {User?.username}
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                <Link to="/student-enrolled" className="text-decoration-none text-dark">
                                                                    {User?.email}
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                <Link to="/student-enrolled" className="text-decoration-none text-dark">
                                                                    {courses.length}
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Test Scores Chart */}
                            {testChartData.length > 0 && (
                                <div className="row mt-4">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Test Scores</h5>
                                                <ResponsiveContainer width="100%" height={350}>
                                                    <BarChart
                                                        data={testChartData}
                                                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                                    >
                                                        <CartesianGrid strokeDasharray="3 3" />
                                                        <XAxis dataKey="name" />
                                                        <YAxis />
                                                        <Tooltip />
                                                        <Legend />
                                                        <Bar dataKey="score" fill="#8884d8" />
                                                    </BarChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Course Progress Chart */}
                            {courseChartData.length > 0 && (
                                <div className="row mt-4">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Course Progress</h5>
                                                <ResponsiveContainer width="100%" height={350}>
                                                    <BarChart
                                                        data={courseChartData}
                                                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                                    >
                                                        <CartesianGrid strokeDasharray="3 3" />
                                                        <XAxis dataKey="name" />
                                                        <YAxis />
                                                        <Tooltip />
                                                        <Legend />
                                                        <Bar dataKey="progress" fill="rgb(9 206 108)" />
                                                    </BarChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
