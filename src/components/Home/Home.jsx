import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='flex justify-between bg-red-50 lg:px-12 pt-8'>
                <div className='w-1/2 ml-6'>
                    <h1 className='text-3xl font-bold mt-10'>Job hunting <br /> for next future <br /> career</h1>
                    <p className='font-semibold my-6'>Looking to land your dream job, but not sure where to start? This brings us to this guide. We wanted to create the most comprehensive guide to job hunt in the world, something that can turn a job search newbie into an expert in no time! And, well, hope we succeeded...</p>
                    <button className="btn btn-active btn-info">Get Started</button>
                </div>
                <div className='w-1/2 flex justify-end'>
                    <img className='rounded-lg h-96 w-96' src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;

//<div className='grid sm:grid-cols-1 lg:grid-cols-2 lg:px-12 mt-8'>
