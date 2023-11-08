import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MenuItems = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/jobs"}>All Jobs</NavLink>
      </li>
      <li>
        <NavLink to={"/blogs"}>Blog</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to={"/addjob"}>Add Job</NavLink>
          </li>
          <li>
            <NavLink to={"/myjob"}>My Jobs</NavLink>
          </li>
          <li>
            <NavLink to={"/appliedjob"}>Applied Job</NavLink>
          </li>
          <li onClick={() => logOut()}>
            <p>LogOut</p>
          </li>
        </>
      )}
    </>
  );
};

export default MenuItems;
