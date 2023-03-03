import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

export default function About() {
const [tasks, setTasks]= useState([])

  useEffect(()=>{
    console.log("i am going to call api here")
    fetch("http://localhost:5000/tasks/").then(res=>{
    res.json().then(tasks=>{
      setTasks(tasks.result)
    })
    }).catch(error=>{
      console.log("this is error", error)
    })
  },[])
  
  console.log(tasks, 'tasks')
  return (
    <>
    {tasks && tasks[0] &&<h1 style={{margin: "20px"}}>{tasks[0]["description"]}</h1>}
      <h5>done</h5>
      <Link to="/">Go Back</Link>
    </>
  );
}