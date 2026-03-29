import axios from "axios";
import React, { useEffect, useState } from "react";
import UpdateJobs from "./UpdateJobs";

const ShowJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [jobid, setJobid] = useState(null);
  const role = localStorage.getItem("role");

  useEffect(() => {
    getjobs();
  }, []);

  function getjobs() {
    axios.get("http://localhost:8080/jobs/all")
      .then(res => setJobs(res.data));
  }

  function applyJob(jobid) {
    const application = {
      userId: localStorage.getItem("userId"),
      jobId: jobid,
    };

    axios.post(
      "http://localhost:8080/jobapplication/apply",
      application,
      { headers: { role } }
    )
    .then(() => alert("Applied Successfully ✅"));
  }

  function deleteJob(jobid) {
    axios.delete(
      "http://localhost:8080/jobs/remove/" + jobid,
      { headers: { role } }
    ).then(() => {
      alert("Job Deleted ❌");
      getjobs();
    });
  }

  return (
    <div className="container mt-4">
      <div className="card shadow-lg">
        <div className="card-header bg-dark text-white fw-bold">
          Available Jobs
        </div>

        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Company</th>
                <th>Description</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {jobs.map((job, index) => (
                <tr key={job.jobId}>
                  <td>{index + 1}</td>
                  <td className="fw-semibold">{job.companyName}</td>
                  <td>{job.description}</td>
                  <td>{job.location}</td>
                  <td>
                    {role === "ADMIN" && (
                      <>
                        <button
                          className="btn btn-danger btn-sm me-2"
                          onClick={() => deleteJob(job.jobId)}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => setJobid(job.jobId)}
                        >
                          Edit
                        </button>
                      </>
                    )}

                    {role === "USER" && (
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => applyJob(job.jobId)}
                      >
                        Apply
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {jobid && (
        <UpdateJobs
          jid={jobid}
          setjobid={setJobid}
          getjobs={getjobs}
        />
      )}
    </div>
  );
};

export default ShowJobs;
