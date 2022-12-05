import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/home/Home";
import About from "../components/pages/about/About";
import LoginForm from "../components/pages/login/LoginForm";
import Main from "../root/Main";
import Contact from "../components/pages/contact/Contact";
import Appointment from "../components/pages/appointment/Appointment";
import Register from "../components/pages/login/Register";
import Login from "../components/pages/login/Login";
import Dashboard from "../dashboard/Dashboard";
import PrivateRoute from "../private/PrivateRoute";
import DashboardLayout from "../root/DashboardLayout";
import AllUsers from "../dashboard/AllUsers";
import AdminRoute from "../private/AdminRoute";
import AddDoctor from "../dashboard/AddDoctor";
import ManageDoctor from "../dashboard/ManageDoctor";
import Payment from "../dashboard/payment/Payment";
import DisplayError from "../components/common/displayError/DisplayError";
import Review from "../components/pages/Review";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/reviews',
                element: <Review></Review>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/loginForm',
                element: <LoginForm></LoginForm>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/manageDoctors',
                element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://doctor-portal-server-eight-kappa.vercel.app/bookings/${params.id}`)
            },
        ]
    }
])