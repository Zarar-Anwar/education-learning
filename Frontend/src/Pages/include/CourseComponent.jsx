import { useContext } from "react";
import { Store } from "../../Utils/Store";
import api from "../../Utils/Axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const CourseComponent = ({ course }) => {
    const { state } = useContext(Store);
    const { UserInfo, ContactInfo } = state;
    const handleEnroll = (courseId) => {
        api.post("/enroll-course/", { test_id: courseId }, {
            headers: {
                Authorization: `Token ${UserInfo}`,
            },
        })
            .then((response) => {
                // Handle success
                toast.success("Successfully enrolled!");
            })
            .catch((error) => {
                // Handle error
                if (error.response) {
                    // Server responded with an error code
                    const errorMessage = error.response.data.error || error.response.data.message || "An error occurred";
                    toast.error(errorMessage);
                } else if (error.request) {
                    // No response received
                    console.error("No response received from the server", error.request);
                    alert("Enrollment failed, please try again.");
                } else {
                    // Something else caused an error
                    console.error("Error in the request", error.message);
                    alert("Error enrolling in course");
                }
            });
    };
    return (
        <>
            <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="150ms"
                style={{
                    visibility: "visible",
                    animationDelay: "150ms",
                    animationName: "fadeInUp",
                }}
            >
                <div className="course__category__card_1 mb-24">
                    <div className="course__category__card_text ">
                        <h4 className="course__category__card_title h4 mb-16">
                            {course.name}
                        </h4>
                        <p className="mb-40">
                            {course.description}                    </p>
                        <ul className="category__info p-0 mb-8">

                            <li>
                                <i className="fal fa-graduation-cap" /> 20 Student Enrolled
                            </li>

                        </ul>
                    </div>
                    <div className="text-center">
                        <img
                            width="60%"
                            src={`http://localhost:8000/${course.icon}`}
                            alt="MDCAT Preparation"
                            className="image"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            onClick={(e) => {
                                e.preventDefault(); // prevent navigation since Link is wrapping
                                handleEnroll(course.id);
                            }}
                            className="btn btn-primary mt-2 w-100"
                        >
                            Enroll
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseComponent