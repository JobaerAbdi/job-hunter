import React from "react";
import { Link } from "react-router-dom";

const AllJobs = ({ job }) => {
  console.log(job);
  const { id, logo, jobTitle, companyName, onsite, remote, location, salary } = job;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl bg-amber-50 py-8">
        <div className="ml-10">
          <img className="w-28 h-12 rounded-lg"
            src={logo}
            alt="Job"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{jobTitle}</h2>
          <h2 className="card-title">{companyName}</h2>
          <div className="flex gap-8">
            <span className="border-4 py-2 px-5">{onsite}</span>
            <span className="border-4 py-2 px-5">{remote}</span>
          </div>
          <div className="flex gap-8">
            <span className="py-2 px-5">{location}</span>
            <span className="py-2 px-5">Salary : {salary}</span>
          </div>
          <div className="card-actions justify-start">
            <Link to = {`/jobDetails/${id}`}>
               <button className="btn btn-info">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;