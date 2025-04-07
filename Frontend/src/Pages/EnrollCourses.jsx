import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../Utils/Axios";
import { Store } from "../Utils/Store";
import { toast } from "react-toastify";

const EnrollCourses = () => {
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
            })
            .catch((error) => {
                console.error("Error fetching enrolled courses:", error);
            });
    }, []);

    // Handle course deletion
    const handleDeleteCourse = (courseId, event) => {
        event.preventDefault();  // Prevent Link navigation
        api
            .delete(`/enrolled-courses/${courseId}/delete/`, {
                headers: {
                    Authorization: `Token ${UserInfo}`,
                },
            })
            .then((response) => {
                // Filter out the deleted course from the state
                setCourses((prevCourses) =>
                    prevCourses.filter((course) => course.test !== courseId)
                );
                toast.error("Deleted..")
            })
            .catch((error) => {
                console.error("Error deleting course:", error);
            });
    };

    return (
        <>
            <section className="page_title_banner">
                <div className="container">
                    <div className="content">
                        <div className="title">
                            <h1>Enrolled Courses</h1>
                            <img src="assets/media/shapes/tag-2.png" alt="" className="tag" />
                        </div>
                        <div
                            className="educate-tilt"
                            data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 2, "speed": 700, "scale": 1 }'
                        >
                            <img
                                src="assets/media/resources/page_title.png"
                                alt=""
                                className="main_img"
                            />
                        </div>
                        <img
                            src="assets/media/shapes/circle-lines-2.png"
                            alt=""
                            className="circle_vector"
                        />
                    </div>
                </div>
            </section>

            <section className="py-60 mb-5">
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
                                <div className="col-lg-4" key={course.id}>
                                    <Link
                                        to={{
                                            pathname: "/course-detail",
                                        }}
                                        state={{ courseId: course.test }}
                                    >
                                        <div className="course__card mb-20" style={{ width: "300px" }}>
                                            <div className="course__card__content">
                                                <button
                                                    onClick={(e) => handleDeleteCourse(course.test, e)} // Pass the event here
                                                    className="btn btn-danger mt-2"
                                                >
                                                    Delete
                                                </button>
                                                <div className="progress mt-3" style={{ height: "8px", borderRadius: "5px", backgroundColor: "#eee" }}>
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{
                                                            width: `${course.progress || 0}%`,
                                                            backgroundColor: "#007bff",
                                                            borderRadius: "5px",
                                                        }}
                                                        aria-valuenow={course.progress || 0}
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    />
                                                </div>
                                                <small className="text-muted mt-1 d-block">
                                                    Progress: {course.progress || 0}%
                                                </small>
                                                <div className="left__block">
                                                    <img
                                                        width="100px"
                                                        style={{ marginTop: "70px" }}
                                                        src={`http://localhost:8000${course.course_icon}`}
                                                        alt="Course Tag"
                                                        className="course_tag"
                                                    />
                                                    <h4 className="mb-4p">
                                                        <Link
                                                            to={{
                                                                pathname: "/course-detail",
                                                            }}
                                                            state={{ courseId: course.id }}
                                                        >
                                                            {course.course_name}
                                                        </Link>
                                                    </h4>
                                                    <p className="h6 mb-24">{course.course_description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
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

export default EnrollCourses;
