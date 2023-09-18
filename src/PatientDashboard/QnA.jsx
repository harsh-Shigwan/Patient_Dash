import React from 'react';
import { useNavigate,Route,Routes } from 'react-router-dom';
const QnA = () => {
  const navigate = useNavigate();
  const navigateToContacts = () => {
 
    navigate('/QandA');
  }
  return (
    <div>
      <div className=' bg-white dark:bg-secondary-dark-bg text-center place-content-center min-[320px]:text-center max-[600px]:bg-sky-300'>
       <div className=' w-1/3 h-2/3 mx-auto '> <img className="d-flex  " src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg" alt="img"/></div>
           <p className='text-grey-400  dark:text-white'>Feel free to ask your questions here !!</p>
             
             <button type="button" class="rounded-none  hover:rounded-lg bg-blue-400 hover:bg-blue-600 Class text-3xl "  onClick={navigateToContacts}> Ask Your Questions</button>
             
      </div>

    </div>
  )
}
export default QnA;