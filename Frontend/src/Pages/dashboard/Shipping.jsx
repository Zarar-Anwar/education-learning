import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import api from "../Utils/Axios";

function Shipping() {
    const [shipping, setShipping] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Change this to set how many items per page you want

    const shipping_list = async () => {
        try {
            const result = await api.get("shipping-list/");
            // Filter shipping items with status "FAILED" or "COMPLETED"
            const filteredShipping = result.data.filter(
                (item) => item.status === "FAILED" || item.status === "COMPLETED"
            );
            // Sort by created_at in descending order (latest first)
            const sortedShipping = filteredShipping.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            setShipping(sortedShipping);
        } catch (error) {
            console.error("Error fetching shipping list:", error);
        }
    };

    useEffect(() => {
        shipping_list();
    }, []);

    // Get current shipping items for the page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = shipping.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Total pages
    const totalPages = Math.ceil(shipping.length / itemsPerPage);

    return (
        <div>
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">
                                        SHIPPINGS LIST
                                    </h4>
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
                                                    <th scope="col">Status</th>
                                                    <th scope="col" style={{width: 150}}>
                                                        Action
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {currentItems.length > 0
                                                    ? currentItems.map((item) => (
                                                        <tr key={item.id}>
                                                            <td className="fw-medium">{item.id}</td>
                                                            <td>
                                                                {item.firstname} {item.lastname}
                                                            </td>
                                                            <td>{item.email}</td>
                                                            <td>{item.phone_number}</td>
                                                            <td>{item.address}</td>
                                                            <td>
                                                                {item.product.map((prod) => (
                                                                    <p key={prod.id}>{prod.slug}</p>
                                                                ))}
                                                            </td>
                                                            <td>{item.transaction_choice}</td>
                                                            <td>{new Date(item.created_at).toLocaleDateString()}</td>
                                                            <td>
                                                                {item.status === "PENDING" || item.status === "pending" ? (
                                                                    <span className="badge bg-warning">
                                                                            Pending
                                                                        </span>
                                                                ) : item.status === "COMPLETED" || item.status === "completed" ? (
                                                                    <span className="badge bg-success">
                                                                            Completed
                                                                        </span>
                                                                ) : (
                                                                    <span className="badge bg-danger">
                                                                            Rejected
                                                                        </span>
                                                                )}
                                                            </td>
                                                            <td>
                                                                <Link to={{
                                                                    pathname: `/shipping-details/${item.id}`,
                                                                }}
                                                                      state={{shipping: item}}
                                                                      className="badge bg-primary">
                                                                    Details
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    ))
                                                    : <span style={{fontSize: "15px"}} className="badge text-danger">NO SHIPPING FOUND</span>
                                                }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* Pagination */}
                                <div className="col-sm-12 col-md-7 mt-3">
                                    <div className="dataTables_paginate paging_simple_numbers">
                                        <ul className="pagination">
                                            <li className={`paginate_button page-item previous ${currentPage === 1 ? "disabled" : ""}`}>
                                                <a onClick={() => paginate(currentPage - 1)}
                                                   className="page-link">Previous</a>
                                            </li>
                                            {[...Array(totalPages)].map((_, index) => (
                                                <li className={`paginate_button page-item ${currentPage === index + 1 ? "active" : ""}`}
                                                    key={index}>
                                                    <a onClick={() => paginate(index + 1)}
                                                       className="page-link">{index + 1}</a>
                                                </li>
                                            ))}
                                            <li className={`paginate_button page-item next ${currentPage === totalPages ? "disabled" : ""}`}>
                                                <a onClick={() => paginate(currentPage + 1)}
                                                   className="page-link">Next</a>
                                            </li>
                                        </ul>
                                    </div>
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

export default Shipping;
