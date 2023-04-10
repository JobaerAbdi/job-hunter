import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const {pid} = useParams();
    const load = useLoaderData();

    const findData = load.find(fd => +fd.id === +pid);
    console.log(findData);

    const {description,responsibility,background,experience,salary,jobTitle,Phone,mail} = findData;
    return (
        <div className='flex'>
            <div>
                <h1>Job Description : {description}</h1>
                <h1>Job Responsibility : {responsibility}</h1>
                <h1>Educational Requirements : {background}</h1>
                <h1>Experiences : {experience}</h1>
            </div>
            <div>
                <h1>{salary}</h1>
                <h1>{jobTitle}</h1>
                <h1>{Phone}</h1>
                <h1>{mail}</h1>
            </div>

        </div>
    );
};

export default JobDetails;