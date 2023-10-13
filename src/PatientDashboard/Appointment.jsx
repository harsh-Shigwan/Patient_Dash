 import React from 'react'
 
 const Appointment = () => {
   return (
     <div className=' flex' >
     <div className='ml-5 mt-10 w-2/5 h-screen'><div
     className=" relative rounded-xl bg-white box-border w-[278px] h-[116px] overflow-hidden text-left text-sm text-blue-900 font-inter border-[1px] border-solid border-teal-300"
     id="div1"
   >
     <div className="absolute top-[11px] left-[11px] leading-[150%] font-medium">
       16/10/23
     </div>
     <div className="absolute top-[9px] left-[183px] rounded bg-teal-100 box-border w-[84px] overflow-hidden flex flex-row items-center justify-center py-0.5 px-[3px] border-[1px] border-solid border-teal-400">
       <div className="relative leading-[150%]">Dr. Ashish</div>
     </div>
     <div className="absolute top-[40px] left-[0px] bg-teal-50 w-[278px] h-[100px] overflow-hidden flex flex-row items-start justify-start py-[9px] px-2 box-border text-[12px]">
       <div className="relative leading-[150%] inline-block w-[233px] shrink-0">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
         vulputate libero et velit interdum, ac aliquet odio mattis.
       </div>
     </div>
   </div><div
     className="  relative  mt-10 rounded-xl bg-white box-border w-[278px] h-[116px] overflow-hidden text-left text-sm text-blue-900 font-inter border-[1px] border-solid border-teal-300"
     id="div1"
   >
     <div className="absolute top-[11px] left-[11px] leading-[150%] font-medium">
       16/10/23
     </div>
     <div className="absolute top-[9px] left-[183px] rounded bg-teal-100 box-border w-[84px] overflow-hidden flex flex-row items-center justify-center py-0.5 px-[3px] border-[1px] border-solid border-teal-400">
       <div className="relative leading-[150%]">Dr. Ashish</div>
     </div>
     <div className="absolute top-[40px] left-[0px] bg-teal-50 w-[278px] h-[100px] overflow-hidden flex flex-row items-start justify-start py-[9px] px-2 box-border text-[12px]">
       <div className="relative leading-[150%] inline-block w-[233px] shrink-0">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
         vulputate libero et velit interdum, ac aliquet odio mattis.
       </div>
     </div>
   </div></div>
     <div className=' w-3/5 bg-red-600 h-full'>hello</div>
     <button className=' h-10 w-20 bg-indigo-600'> Add Appointment </button>
     </div>
   )
 }
 
 export default Appointment