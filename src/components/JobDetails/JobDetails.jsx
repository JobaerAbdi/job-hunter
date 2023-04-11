import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const [job, setJob] = useState({})
    const jobData = useLoaderData();
    const {pid} = useParams();

    useEffect(()=>{
        const findData = jobData.find(fd => +fd.id === +pid);
        if(findData){
            setJob(findData)
        }
    },[jobData, pid])

    const handleAddToDb = (id)=>{
        let jobData = {}
  
        const storedData = localStorage.getItem('apply-job')
        if (storedData) {
          jobData = JSON.parse(storedData)
        }
      
        const quantity = jobData[id]
        if (quantity) {
          const newQuantity = quantity + 1
          jobData[id] = newQuantity
        } else {
          jobData[id] = 1
        }
        localStorage.setItem('apply-job', JSON.stringify(jobData));
    };


    const {id,description,responsibility,background,experience,salary,jobTitle,Phone,mail} = job;
   
    return (
        <div>
            <h1 className='text-2xl font-bold text-center py-20 bg-slate-200'>Job Details</h1>
            <div className='flex lg:px-12 mt-16'>
                <div className='w-4/5 h-96'>
                    <h1><span className='font-bold'>Job Description :</span>  {description}</h1>
                    <h1 className='my-6'><span className='font-bold'>Job Responsibility :</span> {responsibility}</h1>
                    <h1><span className='font-bold'>Educational Requirements :</span> {background}</h1>
                    <h1 className='mt-6'><span className='font-bold'>Experiences :</span> {experience}</h1>
                </div>
                <div className='w-1/5 h-96 bg-purple-100 rounded-lg p-6 '>
                    <h1 className='font-bold mb-5'>Job Details :</h1>
                    <h1><span className='font-bold'>Salary : </span>{salary}</h1>
                    <h1><span className='font-bold'>Job Title : </span>{jobTitle}</h1>
                    <h1 className='font-bold my-5'>Contact Information :</h1>
                    <h1><span className='font-bold'>Phone : </span>{Phone}</h1>
                    <h1 className='mb-16'><span className='font-bold'>Email : </span>{mail}</h1>
                    <button onClick={()=>handleAddToDb(id)} className="btn btn-info w-full">Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;