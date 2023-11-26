import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../../Layout/Errorpage/Errorpage";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import EnrollCourse from "../../Pages/EnrollCourse/EnrollCourse";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Resgister from "../../Pages/Register/Resgister";
import CourseCard from "../../Pages/Shaerd/CourseCard/CourseCard";
import CourseDetails from "../../Pages/Shaerd/CourseDetails/CourseDetails";
import Courses from "../../Pages/Shaerd/Courses/Courses";
import Faq from "../../Pages/Shaerd/Faq/Faq";
import Privateroute from "../Privateroute/Privateroute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-10-server-rho.vercel.app/course-details')
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-10-server-rho.vercel.app/course-details')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://assignment-10-server-rho.vercel.app/course-details')
            },
            {
                path: '/course/:id',
                element: <CourseCard></CourseCard>,
                loader: ({ params }) => fetch(`https://assignment-10-server-rho.vercel.app/course/${params.id}`)
            },
            {
                path: '/singlecourse/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://assignment-10-server-rho.vercel.app/singlecourse/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Resgister></Resgister>
            },
            {
                path: '/enroll',
                element: <Privateroute><EnrollCourse></EnrollCourse></Privateroute>
            }
        ]
    }
])