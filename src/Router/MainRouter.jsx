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
import PrivateRoute from "./PrivateRoute";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => fetch(`http://localhost:5000/jobs`),
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
        loader: () => fetch(`http://localhost:5000/jobs`),
      },
      {
        path: "jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetailsPage />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "myjob",
        element: (
          <PrivateRoute>
            <MyJobPage />
          </PrivateRoute>
        ),
      },
      {
        path: "appliedjob",
        element: (
          <PrivateRoute>
            <AppliedJobPage />
          </PrivateRoute>
        ),
      },
      {
        path: "addjob",
        element: (
          <PrivateRoute>
            <AddJobPage />
          </PrivateRoute>
        ),
      },
      {
        path: "updatejob/:id",
        element: (
          <PrivateRoute>
            <UpdateJobPage />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "blogs",
        element: <BlogPage />,
      },
    ],
  },
]);

export default MainRouter;
