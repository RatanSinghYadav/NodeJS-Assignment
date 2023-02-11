const express = require('express');
const student = require('./student');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.get('/allStudents',(req,res)=>{
    res.send(student);
});

app.post('/addStudent',(req,res)=>{
    const data = req.body
    res.send(data);
    student.push(data);

})

app.get('/student/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const studentId = student.filter((e)=> e.id === id)
    res.send(studentId);
    console.log(studentId);
})

// app.get('/topper',(req,res)=>{
//     const topper = student.reduce((prev, current) => (prev.GPA > current.GPA) ? prev : current).GPA;
    
//     res.json(topper);
// });

app.get('/topper', (req, res) => {
    let highestGPA = 0;
    let highestStudent;
  
    student.forEach(student => {
      if (student.GPA > highestGPA) {
        highestGPA = student.GPA;
        highestStudent = student;
      }
    });
  
    res.json({
      highestGPA,
      highestStudent,
    });
  });



app.listen(5000,()=>{
    console.log('Server is running...');
    console.log(`http://localhost:${5000}`);
})