import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; 

const Statistics = () => {

    const assignmentMarks = [
        {no: 1, name: 'Assignment01', Mark : 60},
        {no: 2, name: 'Assignment02', Mark : 60},
        {no: 3, name: 'Assignment03', Mark : 56},
        {no: 4, name: 'Assignment04', Mark : 60},
        {no: 5, name: 'Assignment05', Mark : 59},
        {no: 6, name: 'Assignment06', Mark : 60},
        {no: 7, name: 'Assignment07', Mark : 60},
        {no: 8, name: 'Assignment08', Mark : 60},
    ]; 

    return (
        <div className='mt-20 ml-20'>
            <AreaChart
                width={1300}
                height={500}
                data={assignmentMarks}
            >
                <Area type="monotone" stroke="##8884d8" fill="#82ca9d" dataKey="Mark"></Area>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </AreaChart>
        </div>
    );
};

export default Statistics; 