import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import MainHome from "../pages/HomePage/MainHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <MainHome></MainHome>
            }
        ]
    },
]);


export default router