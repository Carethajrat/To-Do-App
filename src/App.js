import React from 'react';
import { useEffect, useState } from 'react';
import { Button } from './components/Button.js'; 
import { ListComponent } from './components/ListComponent.js';
import './App.css';


function App() { 
   const [task,setTask] = useState("");
  const [components, setComponents] = useState([task]); 
  const [isTrue,setIsTrue] = useState(false);

  useEffect(() => {
      setTask(task)
  },[task])

  function updateText(e) {
    setTask(e.target.value)
  }
  function addTask(e) { 
    e.preventDefault();
    setIsTrue(true);
    setComponents([...components, task])

  } 


    return(
    <>
      {/* The navigation in here */}
    <div className="container-fluid text-center mb-5">
      <div className='row row-cols-1'>
        <div className='col-12 ' style={{backgroundColor:"grey",background:"linear-gradient(45deg,rgba(0,0,0,0.3),rgba(0,0,0,0.7))"}}>
          <nav>
            <h1 className='fw-bold text-white' style={{fontSize:"50px"}}>To-Do App</h1> 
          </nav>
        </div>
      </div> 
    </div>
    {/* To Do section in here */}
    <div className='container mt-5'>
      <div className='row row-cols-1'>
        <div className='col-lg-9 col-sm-12 'style={{margin:"auto"}}>
        <form className='d-flex form-group justify-content-center text-dark m-3'>
        <input type='text' value={task} className='me-2 p-2' onChange={updateText} placeholder="What's in your mind?" style={{width:"600px"}}/>
        <Button onClick={addTask} text="Add Task" /> 
        </form>
         
        </div>
        <div className='col-9' style={{margin:"auto"}}>
        {
        isTrue  &&
        components.map((item, i) => ( <ListComponent text={item} key={i} isTrue={isTrue} /> ))
        }
        </div>
        </div>
      </div>
    </>
    )
   
} 

export default App;