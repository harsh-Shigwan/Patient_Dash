import RecordsPage2 from "../PatientDashboard/RecordsPage2"
import { useNavigate,Route,Routes } from 'react-router-dom';
import React, { useState } from "react";


 
const Records = () => {
  const navigate = useNavigate();
  const navigateToContacts = () => {
 
    navigate('/RecordsPage2');
  }
  return (
    <div>
      <div className='mt-15 text-center place-content-center min-[320px]:text-center max-[600px]:bg-sky-300'>
       <div className='pr-50 w-1/3 h-2/3 mx-auto '> <img className="d-flex  " src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg" alt="img"/></div>
           <p className='text-grey-400  dark:text-white'>Set a reminder for medicines,to drink enough water,or to take a break at work .</p>
             
             <button type="button" class="rounded-none  hover:rounded-lg bg-blue-400 hover:bg-blue-600 Class text-3xl "  onClick={navigateToContacts}> Add Records</button>
            
      </div>

    </div>
  )
}

  
export default Records;