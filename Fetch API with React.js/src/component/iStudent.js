import React, {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

function Student() {
  const [data, setData] = useState([]);

  const {id} = useParams();
  async function selectStudent() {
    const res = await fetch(`http://localhost:5000/student/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const userId = await res.json();
    setData(userId);
  }

  useEffect(() => {
    selectStudent();
  },[]);

  return (
    <div>
      <h2 style={{ margin: '20px 0px 0px 30px' }}>Student detail</h2>
      {
        data.map((e, id) => {
          return (
            <>
              <div key={id} style={{ margin: '0px 0px 0px 30px' }}>
                <h4>Student id: {e.id}</h4>
                <h4>Name: {e.first_name}</h4>
                <h4>GPA: {e.GPA}</h4>
                <br />
              </div>
            </>
          )
        })
      }

    </div>
  )
}

export default Student;