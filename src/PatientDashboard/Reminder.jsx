import React from 'react';
// import remain from '../components/PatientComponents/remain';
import { useNavigate,Route,Routes } from 'react-router-dom';
import  Reminderimg from '../data/PatientData/Reminderimg.jpeg';
const Reminder = () => {
  const navigate = useNavigate();
  const navigateToContacts = () => {
 
    navigate('/Remind');
  }
  return (
    <div>
      <div className='text-center place-content-center min-[320px]:text-center max-[600px]:bg-sky-300'>
       <div className=' w-1/3 h-2/3 mx-auto  '> <img className="d-flex  "src={Reminderimg} alt="img"/></div>
           <p className='text-grey-400  dark:text-white'>Set a reminder for medicines,to drink enough water,or to take a break at work .</p>
             
             <button type="button" class="rounded-none  hover:rounded-lg bg-blue-400 hover:bg-blue-600 Class text-3xl "  onClick={navigateToContacts}> Add a Reminder</button>
             
      </div>

    </div>
  )
}


export default Reminder;