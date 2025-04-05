import { useContext, useEffect, useState } from "react"
import { Store } from "../Utils/Store"
import api from "../Utils/Axios"

const StudentProfile = () => {
    const { state } = useContext(Store)
    const { UserInfo } = state
    const [user, setUser] = useState()

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await api.get("/user-info/", {
                    headers: { Authorization: `Token ${UserInfo}` }, // Add token in headers
                });
                setUser(response.data)
            } catch (error) {
                console.error("Failed to fetch user info:", error);
                return { name: "Guest", email: "guest@example.com" }; // Default values
            }
        };
        fetchUserDetails();

    }, [])


    return (
        <>
            <section className="page_title_banner">
                <div className="container">
                    <div className="content">
                        <div className="title">
                            <h1>Student Profile</h1>
                            <img src="assets/media/shapes/tag-2.png" alt="" className="tag" />
                        </div>
                        <div
                            className="educate-tilt"
                            data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 2, "speed": 700, "scale": 1 }'
                            style={{
                                willChange: "transform",
                                transform: "perspective(300px) rotateX(0deg) rotateY(0deg)"
                            }}
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

            <section className="team_detail py-60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img
                                src="assets/images/studen_image.png"
                                alt=""
                                className="br-15 shadow mb-32 mb-lg-0"
                            />
                        </div>
                        <div className="col-md-7">
                            <h2 className="mb-16">
                                {user?.username?.charAt(0).toUpperCase() + user?.username?.slice(1)}
                            </h2>                            <span className="h5 color-primary mb-16">
                                <i className="fal fa-box me-2" />
                                {user?.email}
                            </span>

                            <div className="teacher_stats mb-16">
                                <div className="stats_block">
                                    <div className="d-flex justify-content-between align-items-center mb-16">
                                        <span className="h5">Engagements Score</span>
                                        <span className="h5">90%</span>
                                    </div>
                                    <div className="skill_box mb-8">
                                        <div className="progress_bar" style={{ width: "90%" }} />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                                <div className="stats_block">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="title">
                                            <i className="fal fa-presentation" />
                                            Lectures
                                        </h5>
                                        <span className="h6 dark-gray">450+ Videos</span>
                                    </div>
                                </div>
                                <div className="stats_block">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="title">
                                            <i className="fal fa-stars" />
                                            Awards Won
                                        </h5>
                                        <span className="h6 dark-gray">45+ Teaching Awards</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default StudentProfile