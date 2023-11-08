import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import MainLayOut from "../LayOuts/MainLayOut";
import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";
import Error404 from "../Components/Additional/Error404";
import ErrorPage from "../Pages/ErrorPage";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "signin",
        element: <SignInPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

export default MainRouter;
