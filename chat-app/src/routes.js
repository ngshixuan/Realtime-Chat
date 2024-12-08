import {createBrowserRouter} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import LandingPage from "./Pages/Landing";
import Chat from "./Pages/Chat"
import Test from "./Pages/TestReadData";

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
        element:<Chat/>
    },
    {
        path:"/test",
        element:<Test/>
    }
])

export default router;