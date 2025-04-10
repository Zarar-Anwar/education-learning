import React, {useEffect, useState} from "react";
import api from "../Utils/Axios";

function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Change this value for more or less items per page

    const transactions_list = async () => {
        try {
            const result = await api.get("transactions-list/");
            setTransactions(result.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        transactions_list();
    }, []);

    // Calculate the number of pages
    const totalPages = Math.ceil(transactions.length / itemsPerPage);

    // Get the current items to display
    const currentItems = transactions
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // Sort by latest transaction

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">TRANSACTIONS LIST</h4>
                                </div>
                                <div className="card-body">
                                    <div className="live-preview">
                                        <div className="table-responsive table-card">
                                            <table
                                                className="table align-middle table-nowrap table-striped-columns mb-0">
                                                <thead className="table-light">
                                                <tr>
                                                    <th scope="col">Id</th>
                                                    <th scope="col">User</th>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Payment Method</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {currentItems.length > 0 ? (
                                                    currentItems.map((object) => (
                                                        <tr key={object.id}>
                                                            <td className="fw-medium">{object.id}</td>
                                                            <td>{object.user}</td>
                                                            <td>
                                                                {object.product.map((item) => (
                                                                    <p key={item.id}>{item.slug}</p>
                                                                ))}
                                                            </td>
                                                            <td>{object.payment_method}</td>
                                                            <td>{object.payment_amount}</td>
                                                            <td>{new Date(object.created_at).toLocaleDateString()}</td>
                                                            <td>
                                                                    <span
                                                                        className={`badge ${object.status === "PENDING" ? "bg-warning" : object.status === "COMPLETED" ? "bg-success" : "bg-danger"}`}>
                                                                        {object.status}
                                                                    </span>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <span style={{fontSize: "15px"}} className="badge text-danger">NO TRANSACTIONS FOUND</span>
                                                )}
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* Pagination */}
                                        <div className="col-sm-12 col-md-7 mt-5">
                                            <div className="dataTables_paginate paging_simple_numbers">
                                                <ul className="pagination">
                                                    <li className={`paginate_button page-item previous ${currentPage === 1 ? 'disabled' : ''}`}>
                                                        <a onClick={() => handlePageChange(currentPage - 1)}
                                                           className="page-link">Previous</a>
                                                    </li>
                                                    {[...Array(totalPages)].map((_, index) => (
                                                        <li key={index}
                                                            className={`paginate_button page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                                            <a onClick={() => handlePageChange(index + 1)}
                                                               className="page-link">{index + 1}</a>
                                                        </li>
                                                    ))}
                                                    <li className={`paginate_button page-item next ${currentPage === totalPages ? 'disabled' : ''}`}>
                                                        <a onClick={() => handlePageChange(currentPage + 1)}
                                                           className="page-link">Next</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
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

export default Transactions;
