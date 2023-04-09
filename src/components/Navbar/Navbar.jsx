import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-red-50 shadow-lg lg:px-12">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              <Link to="/">
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <Link to="/statistics">
                <li>
                  <a>Statistics</a>
                </li>
              </Link>
              <Link to="/jobs">
                <li>
                  <a>Applied Jobs</a>
                </li>
              </Link>
              <Link to="/blogs">
                <li>
                  <a>Blogs</a>
                </li>
              </Link>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case font-bold text-2xl">
            Job Hunter
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li className="mr-9">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive && "bg-cyan-300 text-black px-3 py-1 rounded-md"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="mr-9">
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive && "bg-cyan-300 text-black px-3 py-1 rounded-md"
                }
              >
                Statistics
              </NavLink>
            </li>
            <li className="mr-9">
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  isActive && "bg-cyan-300 text-black px-3 py-1 rounded-md"
                }
              >
                Applied Jobs
              </NavLink>
            </li>
            <li className="mr-9">
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive && "bg-cyan-300 text-black px-3 py-1 rounded-md"
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Apply Now</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
