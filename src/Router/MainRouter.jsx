import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default MainRouter;
