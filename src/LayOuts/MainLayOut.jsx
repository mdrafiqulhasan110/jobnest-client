import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/NavBar/Footer";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const MainLayOut = () => {
  const { loading } = useContext(AuthContext);

  return loading ? (
    <div className='min-h-screen flex justify-center items-center'>
      <span className='loading loading-dots loading-lg'></span>
    </div>
  ) : (
    <div className='flex flex-col justify-between min-h-screen'>
      <Navbar>
        <ToastContainer></ToastContainer>
        <div className='w-screen max-w-[1400px] px-4 mx-auto '>
          <Outlet></Outlet>
        </div>
      </Navbar>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
