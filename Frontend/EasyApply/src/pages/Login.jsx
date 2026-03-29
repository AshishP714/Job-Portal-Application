import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  function loginHandler(e) {
    const { name, value } = e.target;
    setLogin(old => ({ ...old, [name]: value }));
  }

  function userLogin(e) {
    e.preventDefault();

    axios.post("http://localhost:8080/auth/login", login)
      .then((res) => {
        alert("Login Successful");

        localStorage.setItem("role", res.data.role);
        localStorage.setItem('userId',res.data.userId)
        
        if (res.data.role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid Email or Password");
      });
  }

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">

      <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "15px" }}>

        <h3 className="text-center mb-4 text-primary fw-bold">
          Welcome Back
        </h3>

        <form onSubmit={userLogin}>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={login.email}
              onChange={loginHandler}
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
              value={login.password}
              onChange={loginHandler}
              required
            />
            <label>Password</label>
          </div>

          <button className="btn btn-primary w-100 py-2 fw-bold">
            Login
          </button>

          <p className="text-center mt-3">
            Don’t have an account?
            <span
              className="text-primary ms-1"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>

        </form>

      </div>

    </div>
  );
};

export default Login;
