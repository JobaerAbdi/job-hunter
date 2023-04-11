import React from 'react';
import { Link } from 'react-router-dom';

const AppliedDetailsJob = ({job}) => {
    console.log(job);
    const { id, logo, jobTitle, companyName, onsite, remote, location, salary } = job;

    return (
    <div className='flex justify-between px-12 mt-20'>
      <div>
        <img className="w-96 h-56 rounded-lg" src={logo} alt="Job"/>
      </div>
      <div>
          <h2 className="text-2xl font-bold mt-4">{jobTitle}</h2>
          <h2 className="font-bold my-4">{companyName}</h2>
          <div className="flex gap-8 mb-6">
            <span className="border-4 py-2 px-5">{onsite}</span>
            <span className="border-4 py-2 px-5">{remote}</span>
          </div>
          <div className="flex">
            <span className="font-semibold">{location}</span>
            <span className=" font-semibold">Salary : {salary}</span>
          </div>
       </div>
       <div className='mt-20'>
       <Link to = {`/jobDetails/${id}`}>
          <button className="btn btn-info">View Details</button>
       </Link>
       </div>
    </div>
    );
};

export default AppliedDetailsJob;
