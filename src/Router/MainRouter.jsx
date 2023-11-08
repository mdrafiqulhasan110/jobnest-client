import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import MainLayOut from "../LayOuts/MainLayOut";
import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";
import ErrorPage from "../Pages/ErrorPage";
import AllJobsPage from "../Pages/AllJobsPage";
import AddJobPage from "../Pages/AddJobPage";
import BlogPage from "../Pages/BlogPage";
import MyJobPage from "../Pages/MyJobPage";

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
      {
        path: "jobs",
        element: <AllJobsPage />,
      },
      {
        path: "myjob",
        element: <MyJobPage />,
      },
      {
        path: "addjob",
        element: <AddJobPage />,
      },
      {
        path: "blogs",
        element: <BlogPage />,
      },
    ],
  },
]);

export default MainRouter;
