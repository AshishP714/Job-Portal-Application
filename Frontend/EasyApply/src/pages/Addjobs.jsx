import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddJobs = () => {

  const navigate = useNavigate();

  const [job, setJob] = useState({
    companyName: "",
    description: "",
    location: "",
  });

  function jobhandler(e) {
    const { name, value } = e.target;
    setJob(prev => ({ ...prev, [name]: value }));
  }

  function jobadded(e) {
    e.preventDefault();

    axios.post(
      "http://localhost:8080/jobs/saved",
      job,
      {
        headers: {
          role: localStorage.getItem("role"),
        },
      }
    )
    .then(() => {
      alert("Job Added Successfully ✅");
      navigate("/showjobs");
    })
    .catch(error => console.log(error));
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-md-6">
          <div className="card shadow-lg border-0">

            <div
              className="card-header text-white text-center fw-bold"
              style={{
                background: "linear-gradient(90deg, #667eea, #764ba2)"
              }}
            >
              Add New Job
            </div>

            <div className="card-body p-4">

              <form onSubmit={jobadded}>

                {/* Company Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter company name"
                    name="companyName"
                    value={job.companyName}
                    onChange={jobhandler}
                    required
                  />
                </div>

                {/* Description */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Job Description
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Enter job description"
                    name="description"
                    value={job.description}
                    onChange={jobhandler}
                    required
                  />
                </div>

                {/* Location */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter job location"
                    name="location"
                    value={job.location}
                    onChange={jobhandler}
                    required
                  />
                </div>

                {/* Button */}
                <div className="d-grid">
                  <button className="btn btn-primary btn-lg">
                    ➕ Add Job
                  </button>
                </div>

              </form>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddJobs;
