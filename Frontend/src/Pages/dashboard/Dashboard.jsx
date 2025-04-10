import React, {useEffect, useState} from "react";
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

function Dashboard() {
    const [data, setData] = useState([]);
    const [week_data, setWeekData] = useState([])
    const [month_data, setMonthData] = useState([])

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
                                                <h4 className="fs-16 mb-1">Good Morning,</h4>
                                                <p className="text-muted mb-0">
                                                    Here's what's happening with your store today.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    {/* Existing Cards */}
                                    <div className="col-xl-12 col-md-6">
                                        <div className="card card-animate">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                            Total Earnings
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-end justify-content-between mt-4">
                                                    <div>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                                            RS {data.total_earnings}
                                                        </h4>
                                                    </div>
                                                    <div className="avatar-sm flex-shrink-0">
                            <span className="avatar-title bg-success-subtle rounded fs-3">
                              <i className="bx bxs-coin text-success"/>
                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <div className="card card-animate">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                            Total Shipping
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    {/* Yearly Shipping */}
                                                    <div
                                                        className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="fw-semibold">Yearly:</span>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                                                            {data.yearly_shipping}
                                                        </h4>
                                                    </div>
                                                    {/* Monthly Shipping */}
                                                    <div
                                                        className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="fw-semibold">Monthly:</span>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                                                            {data.monthly_shipping}
                                                        </h4>
                                                    </div>
                                                    {/* Weekly Shipping */}
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="fw-semibold">Weekly:</span>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                                                            {data.weekly_shipping}
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-4">
        <span className="avatar-title bg-success-subtle rounded fs-3">
          <i className="bx bxs-ship text-success"/>
        </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <div className="card card-animate">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                            Total Transactions
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    {/* Yearly Transactions */}
                                                    <div
                                                        className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="fw-semibold">Yearly:</span>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                                                            {data.yearly_transactions}
                                                        </h4>
                                                    </div>
                                                    {/* Monthly Transactions */}
                                                    <div
                                                        className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="fw-semibold">Monthly:</span>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                                                            {data.monthly_transactions}
                                                        </h4>
                                                    </div>
                                                    {/* Weekly Transactions */}
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="fw-semibold">Weekly:</span>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                                                            {data.weekly_transactions}
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-4">
        <span className="avatar-title bg-success-subtle rounded fs-3">
          <i className="bx bx-money-withdraw text-success"/>
        </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Other Cards... */}
                                </div>

                                {/* Row for Bar Chart */}
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title mb-4">Earnings This Week</h4>
                                                <ResponsiveContainer width="100%" height={400}>
                                                    <BarChart
                                                        data={week_data}
                                                        margin={{
                                                            top: 20,
                                                            right: 30,
                                                            left: 20,
                                                            bottom: 5,
                                                        }}
                                                    >
                                                        <CartesianGrid strokeDasharray="3 3"/>
                                                        <XAxis dataKey="day"/>
                                                        <YAxis/>
                                                        <Tooltip/>
                                                        <Legend/>
                                                        <Bar dataKey="earnings" fill="rgb(9 206 108)"/>
                                                    </BarChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title mb-4">Earnings in Months</h4>
                                                <ResponsiveContainer width="100%" height={400}>
                                                    <BarChart
                                                        data={month_data}
                                                        margin={{
                                                            top: 20,
                                                            right: 30,
                                                            left: 20,
                                                            bottom: 5,
                                                        }}
                                                    >
                                                        <CartesianGrid strokeDasharray="3 3"/>
                                                        <XAxis dataKey="month"/>
                                                        <YAxis/>
                                                        <Tooltip/>
                                                        <Legend/>
                                                        <Bar dataKey="earnings" fill="rgb(9 206 108)"/>
                                                    </BarChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
