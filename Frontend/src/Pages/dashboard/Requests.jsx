import React, {useEffect, useState} from "react";
import api from "../Utils/Axios";
import {Link} from "react-router-dom";

function Requests() {
    const [shipping, setShipping] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Set the number of items per page

    const shipping_list = async () => {
        try {
            const result = await api.get("shipping-list/");
            const pendingShipping = result.data.filter(item =>
                item.status === "pending" || item.status === "PENDING"
            );
            setShipping(pendingShipping);
        } catch (error) {
            console.error("Error fetching shipping data:", error);
        }
    };

    const handleReceiptUpload = async (id, file) => {
        const formData = new FormData();
        formData.append("receipt", file);

        try {
            await api.post(`upload-receipt/${id}/`, formData);
            shipping_list(); // Refresh the list after upload
        } catch (error) {
            console.error("Error uploading receipt:", error);
        }
    };

    const handleAcceptShipping = async (id) => {
        const confirmed = window.confirm("Are you sure you want to accept this shipping request?");
        if (confirmed) {
            try {
                await api.post(`accept-shipping/${id}/`);
                shipping_list(); // Refresh the list after acceptance
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
                shipping_list(); // Refresh the list after rejection
            } catch (error) {
                console.error("Error rejecting shipping:", error);
            }
        }
    };

    useEffect(() => {
        shipping_list();
    }, []);

    // Pagination logic
    const totalPages = Math.ceil(shipping.length / itemsPerPage);
    const currentItems = shipping.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">
                                        REQUEST FOR SHIPMENT
                                    </h4>
                                </div>
                                <div className="card-header align-items-center d-flex">
                                    <h6 className="text-danger mb-0 flex-grow-1">
                                        NOTE: ***KINDLY ADD SCREENSHOT OF BANK RECEIPT WHEN IT IS BANK PAYMENT BEFORE
                                        APPROVAL***
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <div className="live-preview">
                                        <div className="table-responsive table-card">
                                            <table
                                                className="table align-middle table-nowrap table-striped-columns mb-0">
                                                <thead className="table-light">
                                                <tr>
                                                    <th scope="col">Id</th>
                                                    <th scope="col">Full Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Phone</th>
                                                    <th scope="col">Address</th>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Payment</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Screenshot</th>
                                                    <th scope="col" style={{width: 150}}>Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {currentItems.length > 0
                                                    ? currentItems.map((item) => (
                                                        <tr key={item.id}>
                                                            <td className="fw-medium">{item.id}</td>
                                                            <td>{item.firstname} {item.lastname}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.phone_number}</td>
                                                            <td>{item.address}</td>
                                                            <td>
                                                                {item.product.map(product => (
                                                                    <p key={product.id}>{product.slug}</p>
                                                                ))}
                                                            </td>
                                                            <td>{item.transaction_choice}</td>
                                                            <td>{new Date(item.created_at).toLocaleDateString()}</td>
                                                            <td>
                                                                {item.transaction_choice === "bank" && (
                                                                    <input
                                                                        required
                                                                        type="file"
                                                                        onChange={(e) => handleReceiptUpload(item.id, e.target.files[0])}
                                                                    />
                                                                )}
                                                            </td>
                                                            <td>
                                                                <Link
                                                                    to="#"
                                                                    className="badge bg-success mx-2"
                                                                    onClick={() => handleAcceptShipping(item.id)}
                                                                >
                                                                    Accepted
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    className="badge bg-danger"
                                                                    onClick={() => handleRejectShipping(item.id)}
                                                                >
                                                                    Rejected
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    ))
                                                    :
                                                    <span style={{fontSize: "15px"}} className="badge text-danger">NO REQUESTS FOUND</span>
                                                }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* Pagination Controls */}
                                <div className="card-footer">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination justify-content-center">
                                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                <a className="page-link"
                                                   onClick={() => handlePageChange(currentPage - 1)}>Previous</a>
                                            </li>
                                            {[...Array(totalPages)].map((_, index) => (
                                                <li key={index}
                                                    className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                                    <a className="page-link"
                                                       onClick={() => handlePageChange(index + 1)}>{index + 1}</a>
                                                </li>
                                            ))}
                                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                                <a className="page-link"
                                                   onClick={() => handlePageChange(currentPage + 1)}>Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* end card-body */}
                            </div>
                            {/* end card */}
                        </div>
                        {/* end col */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Requests;
