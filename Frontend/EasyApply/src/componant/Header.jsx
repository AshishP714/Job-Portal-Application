import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="px-4 py-3 shadow"
      style={{
        background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
        color: "white",
      }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="logo"
            width="45"
            className="me-2"
          />
          <h4 className="mb-0 fw-bold">EasyApply</h4>
        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default Header;
