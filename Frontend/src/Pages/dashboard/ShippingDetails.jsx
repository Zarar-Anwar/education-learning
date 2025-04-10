import React from 'react'
import {Link, useLocation} from 'react-router-dom';
import api from "../Utils/Axios";

function ShippingDetails() {
    const location = useLocation();
    const {shipping} = location.state || {};
    const handleAcceptShipping = async (id) => {
        const confirmed = window.confirm("Are you sure you want to accept this shipping request?");
        if (confirmed) {
            try {
                await api.post(`accept-shipping/${id}/`);
            } catch (error) {
                console.error("Error accepting shipping:", error);
            }
        }
    };

    const handleRejectShipping = async (id) => {
        const confirmed = window.confirm("Are you sure you want to reject this shipping request?");
        if (confirmed) {
            try {
                await api.post(`reject-shipping/${id}/`);
            } catch (error) {
                console.error("Error rejecting shipping:", error);
            }
        }
    };
    return (
        <>
            <div className="page-content">
                <div className="container-fluid">
                    {/* start page title */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0 font-size-18">Shipping Details</h4>
                            </div>
                        </div>
                    </div>
                    {/* end page title */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="product-detai-imgs">
                                                <img width="100%" src="/assets/images/about.jpg" alt="sd"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="mt-5">
                                                <h5 className="mb-3">{shipping.product.slug} :</h5>
                                                <div className="table-responsive">
                                                    {shipping.status === "PENDING" && (
                                                        <div className="mb-3">
                                                            <h4 className="mb-3">Review Shipping Request</h4>
                                                            <Link
                                                                to="#"
                                                                className="btn btn-lg btn-success mx-2"
                                                                onClick={() => handleAcceptShipping(shipping.id)}
                                                            >
                                                                Accept
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="btn btn-lg btn-danger mx-2"
                                                                onClick={() => handleRejectShipping(shipping.id)}
                                                            >
                                                                Reject
                                                            </Link>
                                                        </div>
                                                    )}

                                                    <table className="table mb-0 table-bordered">
                                                        <tbody>
                                                        <tr>
                                                            <th scope="row">Status</th>
                                                            <td>
                                                                    <span
                                                                        className={`badge ${shipping.status === "PENDING" ? "bg-warning" : shipping.status === "COMPLETED" ? "bg-success" : "bg-danger"}`}>
                                                                        {shipping.status}
                                                                    </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" style={{width: 400}}>
                                                                User
                                                            </th>
                                                            <td>{shipping.firstname} {shipping.lastname}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Email</th>
                                                            <td>{shipping.email}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Phone</th>
                                                            <td>{shipping.phone_number}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Post Code</th>
                                                            <td>{shipping.postcode}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Address</th>
                                                            <td>{shipping.address}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">City</th>
                                                            <td>{shipping.town_or_city}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">State</th>
                                                            <td>{shipping.state}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Transaction Choice</th>
                                                            <td>{shipping.transaction_choice}</td>
                                                        </tr>
                                                        {shipping.screenshot ? (
                                                            <tr>
                                                                <th scope="row">Screenshot</th>
                                                                <td>
                                                                    <Link tp={shipping.screenshot} target="_blank"
                                                                          rel="noopener noreferrer">
                                                                        <img src={shipping.screenshot} alt="Screenshot"
                                                                             style={{width: '100px', height: 'auto'}}/>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        ) : null}


                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end row */}

                                    {/* end Specifications */}

                                </div>
                            </div>
                            {/* end card */}
                        </div>
                    </div>
                    {/* end row */}


                </div>
                {" "}
                {/* container-fluid */}
            </div>

        </>
    )
}

export default ShippingDetails
