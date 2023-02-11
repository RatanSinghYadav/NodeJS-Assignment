import React,{useState,useEffect} from 'react';

function Home() {
    const [data, setData] = useState([]);

     const allStudent = async()=>{
        const res = await fetch('http://localhost:5000/allStudents',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }

        });
        const userData = await res.json()
        setData(userData);
     }

     useEffect(()=>{
        allStudent();
     },[]);

    return (
        <div>
            <h2 style={{margin:'20px 0px 0px 30px'}}>All student data!</h2>
            {
                data.map((e, id) => {
                    return (
                        <>
                            <div key={id} style={{margin:'0px 0px 0px 30px'}}>
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

export default Home;