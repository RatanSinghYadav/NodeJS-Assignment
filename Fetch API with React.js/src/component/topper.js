import React, {useState, useEffect } from 'react';

function Topper() {
    const [data, setData] = useState([]);

    async function Topper() {
        const res = await fetch(`http://localhost:5000/students/highest-gpa`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const topStudent = await res.json();
        setData(topStudent.highestStudent);

    }

    useEffect(() => {
        Topper();
    }, []);

    return (
        <div>
            <h2 style={{ margin: '20px 0px 0px 30px' }}>Student detail</h2>
            <div style={{ margin: '0px 0px 0px 30px' }}>
                <h4>Student id: {data.id}</h4>
                <h4>Name: {data.first_name}</h4>
                <h4>GPA: {data.GPA}</h4>
                <br />
              </div>
        </div>
    )
}

export default Topper;