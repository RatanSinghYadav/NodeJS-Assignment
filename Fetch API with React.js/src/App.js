import {  BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './component/home.js';
import Student from './component/iStudent';
import Topper from './component/topper';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/allStudents' element={<Home/>}/>
          <Route path='/student/:id' element={<Student/>}/>
          <Route path='/topper' element={<Topper/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
