import axios from "axios";
import React, { useEffect, useState } from "react";

const UpdateJobs = ({ jid, setjobid, getjobs }) => {

  const [job, setJob] = useState({
    companyName: "",
    description: "",
    location: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/jobs/byId/" + jid)
      .then((res) => setJob(res.data))
      .catch((error) => console.log(error));
  }, [jid]);

  function jobhandler(e) {
    const { name, value } = e.target;
    setJob(prev => ({ ...prev, [name]: value }));
  }

  function jobupdate(e) {
    e.preventDefault();

    axios
      .put(
        "http://localhost:8080/jobs/edit/" + jid,
        job,
        {
          headers: {
            role: localStorage.getItem("role"),
          },
        }
      )
      .then(() => {
        alert("Job Updated Successfully ✅");
        setjobid(null);
        getjobs();
      })
      .catch(error => console.log(error));
  }

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ background: "rgba(0,0,0,0.4)", zIndex: 999 }}
    >
      <div className="card shadow-lg border-0" style={{ width: "450px" }}>

        <div
          className="card-header text-white fw-bold"
          style={{
            background: "linear-gradient(90deg, #ff758c, #ff7eb3)",
          }}
        >
          ✏️ Edit Job
        </div>

        <div className="card-body p-4">
          <form onSubmit={jobupdate}>

            {/* Company */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Company Name</label>
              <input
                type="text"
                className="form-control"
                name="companyName"
                value={job.companyName}
                onChange={jobhandler}
                required
              />
            </div>

            {/* Description */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Description</label>
              <textarea
                className="form-control"
                rows="3"
                name="description"
                value={job.description}
                onChange={jobhandler}
                required
              />
            </div>

            {/* Location */}
            <div className="mb-4">
              <label className="form-label fw-semibold">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={job.location}
                onChange={jobhandler}
                required
              />
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setjobid(null)}
              >
                Cancel
              </button>

              <button className="btn btn-success">
                Update Job
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default UpdateJobs;
