import { Link, NavLink } from "react-router-dom";
import MenuItems from "./MenuItems";
import { AiOutlineBars } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = ({ children }) => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className='drawer'>
      <input
        id='my-drawer-3'
        type='checkbox'
        className='drawer-toggle'
      />
      <div className='drawer-content flex flex-col'>
        {/* Navbar */}
        <div className='w-full navbar bg-base-300 border-b-primary border-b-4 mb-10'>
          <div className='w-full flex justify-between mx-auto max-w-[1400px] px-2'>
            <div>
              <div className='flex-none lg:hidden'>
                <label
                  htmlFor='my-drawer-3'
                  aria-label='open sidebar'
                >
                  <AiOutlineBars />
                </label>
              </div>
              <div className='hidden lg:block'>
                <Link
                  to={"./"}
                  className='flex items-center'
                >
                  <img
                    className='h-12'
                    src='../favicon.png'
                    alt=''
                  />
                  <h2 className='text-3xl font-bold'>
                    <span className='text-primary  '>Job</span>Nest
                  </h2>
                </Link>
              </div>
            </div>
            <div className=' flex lg:justify-between justify-end'>
              <div className='px-2 mx-2 lg:hidden'>
                <Link
                  to={"./"}
                  className='flex items-center'
                >
                  <img
                    className='h-6'
                    src='../favicon.png'
                    alt=''
                  />
                  <h2 className='text-xl font-bold'>
                    <span className='text-primary  '>Job</span>Nest
                  </h2>
                </Link>
              </div>
              <ul className='hidden lg:flex gap-2 menu menu-horizontal'>
                {/* Navbar menu content here */}
                <MenuItems></MenuItems>
              </ul>
            </div>
            {user ? (
              <>
                <div
                  data-tip={user.displayName}
                  className='tooltip tooltip-left dropdown dropdown-end border rounded-full w-10 border-primary '
                >
                  <label
                    tabIndex={0}
                    className=' dark:border-white'
                  >
                    <img
                      className='w-10 rounded-full cursor-pointer'
                      src={user?.photoURL ? user.photoURL : "https://static-00.iconduck.com/assets.00/user-avatar-icon-512x512-vufpcmdn.png"}
                    />
                  </label>
                  <ul
                    tabIndex={0}
                    className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
                  >
                    <li>
                      <p className='hover:text-white'>
                        Hello, <span className='underline text-blue-500'>{user.displayName}</span>
                      </p>
                    </li>
                    <li>
                      <p onClick={() => logOut()}>Logout</p>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <button className='p-2 rounded-lg  bg-primary text-white'>
                <NavLink to={"signin"}>Sign In</NavLink>
              </button>
            )}
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-3'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu p-4 w-80 min-h-full bg-base-200'>
          {/* Sidebar content here */}
          <MenuItems></MenuItems>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
