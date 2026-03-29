import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Find Your Dream Job with EasyApply</h1>
          <p className="lead mt-3">
            Apply to thousands of jobs with just one click.
          </p>

          <div className="mt-4">
            <button className="btn btn-light me-3">Find Jobs</button>
            <button className="btn btn-outline-light">Post a Job</button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container my-5">
        <div className="row text-center">

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title">Quick Apply</h5>
                <p className="card-text">
                  Apply to jobs in seconds using EasyApply.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title">Verified Companies</h5>
                <p className="card-text">
                  Get hired by trusted and verified employers.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title">Career Growth</h5>
                <p className="card-text">
                  Find opportunities that boost your career.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Job Categories */}
      <div className="bg-light py-5">
        <div className="container">
          <h3 className="text-center mb-4">Popular Job Categories</h3>

          <div className="row text-center">

            <div className="col-md-3 mb-3">
              <div className="p-3 bg-white shadow rounded">IT & Software</div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="p-3 bg-white shadow rounded">Marketing</div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="p-3 bg-white shadow rounded">Finance</div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="p-3 bg-white shadow rounded">Design</div>
            </div>

          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="container my-5">
        <div className="row align-items-center">

          <div className="col-md-8">
            <h3>Ready to start your career journey?</h3>
            <p>Create your profile and start applying today.</p>
          </div>

          <div className="col-md-4 text-md-end">
            <button className="btn btn-primary btn-lg">Get Started</button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
