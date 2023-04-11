import React, { useEffect, useState } from 'react';
import AppliedDetailsJob from '../AppliedDetailsJob/AppliedDetailsJob';

const AppliedJobs = () => {
    const [allJobs, setAllJobs] = useState([]);

    useEffect(()=>{
        fetch('featuredJobs.json')
        .then(res=>res.json())
        .then(data=>setAllJobs(data));
    },[setAllJobs])

    let jobData = {};
    const storedData = localStorage.getItem('apply-job')
    if (storedData) {
      jobData = JSON.parse(storedData)
    };

    const appliedJobs = [];
    for(const id in jobData){
        const foundJob = allJobs.find(jobs=> jobs.id === id);
        if(foundJob){
            appliedJobs.push(foundJob)
        }
    };

    
    return (
        <div>       
            <h1 className='text-2xl font-bold text-center py-20 bg-slate-200'>Applied Jobs</h1>
            {
                appliedJobs.map(job=><AppliedDetailsJob
                key={job.id}
                job={job}
                ></AppliedDetailsJob>)
            }
        </div>
    );
};

export default AppliedJobs;