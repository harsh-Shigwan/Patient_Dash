import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar';
//import './App.css';

const time = ['08:00','09:00','10:00','14:00','15:00']

function Times(props) {

 const [event, setEvent] = useState(null)
 const [info, setInfo] = useState(false)

 function displayInfo(e) {
   setInfo(true);
   setEvent(e.target.innerText);
}

return (
    <div className="times  mx-auto">
    <div className='flex space-x-5 rounded-t-sm border-2 h-10 w-10 '>
    {time.map(times => {
     return (
     <div className=' bg-violet-600 flex space-x-5'>
       <button onClick={(e)=> displayInfo(e)}> {times} </button>
     </div>
         )
      })}</div>
     <div className=' bg-orange-400 flex-auto'>
       {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
     </div>
  </div>
   )
 }
 
 export default Times;