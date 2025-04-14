import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Store } from "../../Utils/Store";
import api from "../../Utils/Axios";
import CourseEnrollCompo from "./include/CourseEnrollCompo";

const Enrolled = () => {
    const [courses, setCourses] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const { state } = useContext(Store);
    const { UserInfo } = state;

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
    }, []);

    // Handle course deletion


    return (
        <>

            <section className="py-60 mb-5" style={{ marginTop: "50px" }}>
                <div className="container">
                    <div className="filter_row">
                        <div className="right_block">
                            <h6 className="dark-gray">
                                Showing {courses.length} of {courses.length} results
                            </h6>
                            <form className="search_bar" onSubmit={(e) => e.preventDefault()}>
                                <button type="submit">
                                    <i className="fal fa-search" />
                                </button>
                                <input
                                    type="search"
                                    className="form-control"
                                    placeholder="Search here"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        {courses.length > 0 ? (
                            courses.map((course) => (
                                <Link
                                    to={{
                                        pathname: "/student-enroll-detail",
                                    }}
                                    state={{ courseId: course.test }}
                                >
                                    <CourseEnrollCompo course={course} />
                                </Link>
                            ))
                        ) : (
                            <div className="text-center">
                                <h6 className="text-danger">No Courses Found</h6>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Enrolled;
