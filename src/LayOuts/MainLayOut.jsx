import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar/Navbar";

const MainLayOut = () => {
  return (
    <div>
      <Navbar>
        <Outlet></Outlet>
      </Navbar>
    </div>
  );
};

export default MainLayOut;
