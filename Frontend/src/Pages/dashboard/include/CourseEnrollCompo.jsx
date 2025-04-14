import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Store } from "../../../Utils/Store";
import api from "../../../Utils/Axios";

const CourseEnrollCompo = ({ course }) => {
    const { state } = useContext(Store);
    const { UserInfo } = state;

    const handleDeleteCourse = (courseId, event) => {
        event.preventDefault();
        api
            .delete(`/enrolled-course/${courseId}/delete/`, {
                headers: {
                    Authorization: `Token ${UserInfo}`,
                },
            })
            .then(() => {
                // Remove the course from local state
                window.location.reload()

                toast.error("Deleted..");
            })
            .catch((error) => {
                console.error("Error deleting course:", error);
                toast.error("Something went wrong!");
            });
    };

    return (
        <>

            <div
                key={course.id}
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="150ms"
                style={{
                    visibility: "visible",
                    animationDelay: "150ms",
                    animationName: "fadeInUp",
                }}
            >
                <div className="course__category__card_1 mb-24">
                    <div className="course__category__card_text">
                        <h4 className="course__category__card_title h4 mb-16">
                            {course.course_name}
                        </h4>
                        <p className="mb-40">{course.course_description}</p>
                        <div className="progress mt-3 mb-3" style={{ height: "8px", borderRadius: "5px", backgroundColor: "#eee" }}>
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
                        <ul className="category__info p-0 mb-8">
                            <li>
                                <i className="fal fa-graduation-cap" /> 20 Student Enrolled
                            </li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <img
                            width="60%"
                            src={`http://localhost:8000/${course.course_icon}`}
                            alt="Course Icon"
                            className="image"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            onClick={(e) => handleDeleteCourse(course.course_id, e)}
                            className="btn btn-danger mt-2 w-100"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CourseEnrollCompo;
