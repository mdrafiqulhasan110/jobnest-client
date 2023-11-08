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
import JobDetailsPage from "../Pages/JobDetailsPage";
import UpdateJobPage from "../Pages/UpdateJobPage";
import AppliedJobPage from "../Pages/AppliedJobPage";

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
        path: "detail",
        element: <JobDetailsPage />,
      },
      {
        path: "myjob",
        element: <MyJobPage />,
      },
      {
        path: "appliedjob",
        element: <AppliedJobPage />,
      },
      {
        path: "addjob",
        element: <AddJobPage />,
      },
      {
        path: "updatejob",
        element: <UpdateJobPage />,
      },
      {
        path: "blogs",
        element: <BlogPage />,
      },
    ],
  },
]);

export default MainRouter;
