import {createBrowserRouter} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import LandingPage from "./Pages/Landing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path:"/chat",
        element:<LandingPage/>
    }
])

export default router;