import React, { useEffect, useState } from 'react';

const AppliedJobs = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('featuredJobs.json')
        .then(res=>res.json())
        .then(data=>setData(data));
    },[setData])

    useEffect(()=>{
        let jobData = {};
        const storedData = localStorage.getItem('apply-job')
        if (storedData) {
          jobData = JSON.parse(storedData)
        };
        let newArr = [];
        for(const id in jobData){
            const foundJob = data.find(singleData=> singleData.id === id);
            if(foundJob){
                foundJob.quantity = jobData[id];
                newArr.push(foundJob)
            }
        }
        setCart(newArr);
    },[])
    console.log(cart);
    
    return (
        <div>
            <h1>aaaaaaaaaaaaaaa</h1>
        </div>
    );
};

export default AppliedJobs;