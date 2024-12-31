import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Base from "./Pages/Base";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import CoursesDetails from "./Pages/CoursesDetails";
import McqsList from "./Pages/McqsList";


function App() {
    return (
        <>
            <BrowserRouter>

                {/* ToastContainer */}
                <ToastContainers/>

                {/* Routes */}
                <Routes>

                    {/* Web Routes */}
                    <Route path='/' element={<Base><Home/></Base>}/>
                    <Route path='/courses' element={<Base><Courses/></Base>}/>
                    <Route path='/course-detail' element={<Base><CoursesDetails/></Base>}/>
                    <Route path='/mcqs-list' element={<Base><McqsList/></Base>}/>
                    <Route path='/about-us' element={<Base><About/></Base>}/>
                    <Route path='/contact-us' element={<Base><Contact/></Base>}/>


                    <Route path='/login' element={<Login/>}/>
                    <Route path='/registration' element={<Registration/>}/>

                    <Route path='*' element={<PageNotFound404/>}/>

                </Routes>

            </BrowserRouter>
        </>
    );
}

export default App;
