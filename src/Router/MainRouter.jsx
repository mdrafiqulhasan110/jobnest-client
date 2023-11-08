import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import MainLayOut from "../LayOuts/MainLayOut";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default MainRouter;
