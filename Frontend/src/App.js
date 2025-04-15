import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Pages/Base";
import Base2 from "./Pages/dashboard/Base";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import CoursesDetails from "./Pages/CoursesDetails";
import McqsList from "./Pages/McqsList";
import StudentProfile from "./Pages/StudentProfile";
import EnrollCourses from "./Pages/EnrollCourses";
import AttorneyProtected from "./Security/Protected";
import Dashboard from "./Pages/dashboard/Dashboard";
import Enrolled from "./Pages/dashboard/Enrolled";
import CoursesDetailEnroll from "./Pages/dashboard/CourseDetailEnroll";
import Material from "./Pages/dashboard/Material";
import MCQTest from "./Pages/dashboard/McqTest";
import StuTest from "./Pages/dashboard/Test";
import Chat from "./Pages/dashboard/Chat";


function App() {
    return (
        <>
            <BrowserRouter>

                {/* ToastContainer */}
                <ToastContainers />

                {/* Routes */}
                <Routes>

                    {/* Web Routes */}
                    <Route path='/' element={<Base><Home /></Base>} />
                    <Route path='/courses' element={<Base><Courses /></Base>} />
                    <Route path='/course-detail' element={<Base><CoursesDetails /></Base>} />
                    <Route path='/mcqs-list' element={<Base><McqsList /></Base>} />
                    <Route path='/about-us' element={<Base><About /></Base>} />
                    <Route path='/contact-us' element={<Base><Contact /></Base>} />
                    <Route path='/profile' element={<Base><AttorneyProtected><StudentProfile /></AttorneyProtected></Base>} />
                    <Route path='/enroll-course' element={<Base><AttorneyProtected><EnrollCourses /></AttorneyProtected></Base>} />

                    {/* Student Routes */}
                    <Route path='/student-dashboard' element={<Base2><Dashboard /></Base2>} />
                    <Route path='/student-enrolled' element={<Base2><Enrolled /></Base2>} />
                    <Route path='/student-enroll-detail' element={<Base2><CoursesDetailEnroll /></Base2>} />
                    <Route path='/student-enroll-material' element={<Base2><Material /></Base2>} />
                    <Route path='/student-dashboard' element={<Base2><Dashboard /></Base2>} />
                    <Route path='/student-mcqs' element={<Base2><MCQTest /></Base2>} />
                    <Route path='/student-test' element={<Base2><StuTest /></Base2>} />
                    <Route path='/student-chat' element={<Base2><Chat /></Base2>} />


                    <Route path='/login' element={<Login />} />
                    <Route path='/registration' element={<Registration />} />

                    <Route path='*' element={<PageNotFound404 />} />

                </Routes>

            </BrowserRouter>
        </>
    );
}

export default App;
