import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../../Context/Provider/ProviderContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { User, LogOut } = useContext(AuthContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    LogOut()
      .then(() => {
        Swal.fire({
          title: "Log Out Successfully",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,
          icon: "warning",
        });
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            background: isActive ? "purple" : "white",
            color: isActive ? "white" : "",
            border: isActive ? "2px solid yellow" : "",
          })}
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/craftItemsNav"
          style={({ isActive }) => ({
            background: isActive ? "purple" : "white",
            color: isActive ? "white" : "",
            border: isActive ? "2px solid yellow" : "",
          })}
          onClick={() => setIsOpen(false)}
        >
          All Art & Craft Items
        </NavLink>
      </li>
      {User && (
        <>
          <li>
            <NavLink
              to="/addItems"
              style={({ isActive }) => ({
                background: isActive ? "purple" : "white",
                color: isActive ? "white" : "",
                border: isActive ? "2px solid yellow" : "",
              })}
              onClick={() => setIsOpen(false)}
            >
              Add Craft Item
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myItems"
              style={({ isActive }) => ({
                background: isActive ? "purple" : "white",
                color: isActive ? "white" : "",
                border: isActive ? "2px solid yellow" : "",
              })}
              onClick={() => setIsOpen(false)}
            >
              My Art & Craft List
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-[#124E66] border rounded shadow-lg">
      <div className="navbar-start">
        <div className="dropdown" onClick={toggleDropdown}>
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-slate-100 rounded-box w-52 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost md:text-3xl">
          <i className="text-yellow-200">
            <Typewriter
              words={["woodsSense"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </i>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {User ? (
          <div className="flex items-center">
            <a className="btn btn-circle">
              <img
                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] border rounded-full"
                src={User?.photoURL || "user"}
                alt={User?.displayName || "user"}
                title={User?.displayName || "user"}
              />
            </a>
            <button
              onClick={handleLogOut}
              className="btn btn-ghost border-2 border-yellow-300 text-yellow-300 ml-2"
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn btn-squre border-3 border-black w-[40px] h-[5px] text-[10px] md:w-[100px] md:h-[50px] md:text-[15px]"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;