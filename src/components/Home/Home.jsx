import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';
import AllJobs from '../AllJobs/AllJobs';

const Home = () => {
    const [jobs,setJobs] = useState([])
    const [allJobs,setAllJobs] = useState([])

    useEffect(()=>{
        fetch('category.json')
        .then(res=>res.json())
        .then(data=>setJobs(data));
    },[])

    useEffect(()=>{
        fetch('featuredJobs.json')
        .then(res=>res.json())
        .then(data=>setAllJobs(data));
    },[])

    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-between bg-red-50 lg:px-12 pt-8'>
                <div className='sm:w-full lg:w-1/2 ml-3 lg:ml-6'>
                    <h1 className='text-3xl font-bold mt-10'>Job hunting <br /> for next future <br /> career</h1>
                    <p className='font-semibold my-6'>Looking to land your dream job, but not sure where to start? This brings us to this guide. We wanted to create the most comprehensive guide to job hunt in the world, something that can turn a job search newbie into an expert in no time! And, well, hope we succeeded...</p>
                    <button className="btn btn-active btn-info mb-5">Get Started</button>
                </div>
                <div className='sm:w-full lg:w-1/2 flex justify-end'>
                    <img className='rounded-lg h-96 w-96' src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                </div>
            </div>
            <div className='mt-16 lg:px-12'>
                <div className='text-center mb-12'>
                    <h1 className='text-3xl font-bold mb-3'>Job Category List</h1>
                    <p className='font-semibold'>Different type of job opportunities with all the information you need.</p>
                </div>
                <div className='grid sm:grid-cols-1 lg:grid-cols-4 gap-8'>
                    {
                            jobs.map(job=><JobCategory
                            key={job.id}
                            job={job}
                            ></JobCategory>)
                    }
                </div>
                <div className='text-center mt-24'>
                    <h1 className='text-3xl font-bold mb-3'>Featured Job</h1>
                    <p className='font-semibold'>Explore thousands of job opportunities with all the information you need. Its your future...</p>
                </div>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-12 mt-12'>
                    {
                            allJobs.map(job=><AllJobs
                                key={job.id}
                                job={job}
                            ></AllJobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;

//<div className='grid sm:grid-cols-1 lg:grid-cols-2 lg:px-12 mt-8'>
