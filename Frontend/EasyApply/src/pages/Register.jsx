import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    uname: "",
    email: "",
    password: "",
    role: "",
    phoneNo: ""
  });

  function inputhandler(e) {
    const { name, value } = e.target;
    setUser(old => ({ ...old, [name]: value }));
  }

  function registerUser(e) {
    e.preventDefault();

    axios.post("http://localhost:8080/auth/saved", user)
      .then((res) => {
        alert("Registration successful");
        console.log(res.data);
        navigate("/login");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">

      <div className="card shadow-lg p-4" style={{ width: "420px", borderRadius: "15px" }}>

        <h3 className="text-center mb-4 text-primary fw-bold">
          Create Account
        </h3>

        <form onSubmit={registerUser}>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="uname"
              value={user.uname}
              onChange={inputhandler}
              required
            />
            <label>Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={inputhandler}
              required
            />
            <label>Email</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={inputhandler}
              required
            />
            <label>Password</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              name="phoneNo"
              value={user.phoneNo}
              onChange={inputhandler}
              required
            />
            <label>Phone Number</label>
          </div>

          <div className="mb-3">
            <select
              className="form-select"
              name="role"
              value={user.role}
              onChange={inputhandler}
              required
            >
              <option value="">Select Role</option>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <button className="btn btn-primary w-100 py-2 fw-bold">
            Register
          </button>

          <p className="text-center mt-3">
            Already have an account?
            <span
              className="text-primary ms-1"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>

        </form>

      </div>
    </div>
  );
};

export default Register;
