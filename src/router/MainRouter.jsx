import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import MainHome from "../pages/HomePage/MainHome";
import SignUp from "../pages/SignUp/signUp";
import Login from "../pages/Login/Login";
import AddToy from "../pages/AddToyPage/AddToy";
import MyToy from "../pages/MyToys/MyToy";
import PrivateRoute from "./PrivateRoute";
import AllToy from "../pages/AllToyPage/AllToy";
import SingleToy from "../pages/SingleToyDetails/SingleToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <MainHome></MainHome>
            }, {
                path: '/signup',
                element: <SignUp></SignUp>
            }, {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addToy',
                element: <AddToy></AddToy>
            },
            {
                path: '/myToy',
                element: <PrivateRoute>
                    <MyToy></MyToy>
                </PrivateRoute>
            },
            {
                path: '/allToy',
                element: <AllToy></AllToy>
            },
            {
                path: '/allToy/:id',
                element: <SingleToy></SingleToy>
            }
        ]
    },
]);


export default router