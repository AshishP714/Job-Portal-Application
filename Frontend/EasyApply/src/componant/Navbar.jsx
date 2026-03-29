import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <ul className="navbar-nav flex-row align-items-center gap-3">

      {!role && (
        <>
          <li><Link className="text-white text-decoration-none" to="/">Home</Link></li>
          <li><Link className="text-white text-decoration-none" to="/login">Login</Link></li>
          <li><Link className="text-white text-decoration-none" to="/register">Register</Link></li>
        </>
      )}

      {role === "ADMIN" && (
        <>
          <li><Link className="text-white text-decoration-none" to="/admin">Dashboard</Link></li>
          <li><Link className="text-white text-decoration-none" to="/addjobs">Add Jobs</Link></li>
          <li><Link className="text-white text-decoration-none" to="/showjobs">Jobs</Link></li>
          <li>
            <button onClick={logout} className="btn btn-light btn-sm">
              Logout
            </button>
          </li>
        </>
      )}

      {role === "USER" && (
        <>
          <li><Link className="text-white text-decoration-none" to="/user">Home</Link></li>
          <li><Link className="text-white text-decoration-none" to="/showjobs">Jobs</Link></li>
          <li>
            <button onClick={logout} className="btn btn-light btn-sm">
              Logout
            </button>
          </li>
        </>
      )}
    </ul>
  );
};

export default Navbar;
