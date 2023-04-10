import React from "react";

const JobCategory = ({ job }) => {
  console.log(job);
  const { name, logo, availableJob } = job;
  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-2xl bg-slate-100 p-5">
        <div className="ml-10">
          <img className="w-16 rounded-md" src={logo} alt="Job" />
        </div>
        <div className="card-body ml-6">
          <h2 className="card-title font-bold">{name}</h2>
          <p className="font-semibold">{availableJob}+ Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
