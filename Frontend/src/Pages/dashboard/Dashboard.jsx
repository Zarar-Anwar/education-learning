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
    const {state} = useContext(Store)
    const {UserInfo} = state
    const [User, setUser] = useState(null);

    const [data, setData] = useState([]);
    const [week_data, setWeekData] = useState([])
    const [month_data, setMonthData] = useState([])

    const [courses, setCourses] = useState([]);
 

    useEffect(() => {
        // Fetch the enrolled courses of the current user
        api
            .get("/enrolled-courses/", {
                headers: {
                    Authorization: `Token ${UserInfo}`,
                },
            })
            .then((response) => {
                setCourses(response.data);
                console.log(courses)
            })
            .catch((error) => {
                console.error("Error fetching enrolled courses:", error);
            });
        console.log(courses)
    }, []);

    const data_list = async () => {
        try {
            const result = await api.get("dashboard/");
            setData(result.data.data);
            setWeekData(result.data.data.weekly_data);
            setMonthData(result.data.data.monthly_data);
        } catch (error) {
        }
    };
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
        data_list();
    }, []);
    return (
        <>
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

                                    {/* Existing Cards */}
                                    <div className="col-xl-12 col-md-6">
                                        <div className="card card-animate shadow-sm border-0">
                                            <div className="card-body">
                                                {/* Image and Title in one line */}
                                                <div className="d-flex align-items-center justify-content-start gap-3 mb-3">
                                                    <img src="/userdefault.jpg" alt="User" width="40" height="40" className="rounded-circle" />
                                                    <h5 className="mb-0 text-uppercase fw-medium text-muted"><strong>{User?.username}</strong></h5>
                                                </div>

                                                {/* Bootstrap Table */}
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





                                    {/* Other Cards... */}
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title mb-4">Dahsboard</h4>
                                                <ResponsiveContainer width="100%" height={350}>
                                                    <BarChart
                                                        // data={week_data}
                                                        data={[
                                                            { day: "Mon", earnings: 150 },
                                                            { day: "Tue", earnings: 200 },
                                                            { day: "Wed", earnings: 100 },
                                                            { day: "Thu", earnings: 300 },
                                                            { day: "Fri", earnings: 250 },
                                                            { day: "Sat", earnings: 180 },
                                                            { day: "Sun", earnings: 90 },
                                                        ]}
                                                        margin={{
                                                            top: 20,
                                                            right: 30,
                                                            left: 20,
                                                            bottom: 5,
                                                        }}
                                                    >
                                                        <CartesianGrid strokeDasharray="3 3" />
                                                        <XAxis dataKey="day" />
                                                        <YAxis />
                                                        <Tooltip />
                                                        <Legend />
                                                        <Bar dataKey="earnings" fill="rgb(9 206 108)" />
                                                    </BarChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Row for Bar Chart */}

                                {/* End Bar Chart Row */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
