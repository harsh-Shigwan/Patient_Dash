import React, { useState } from 'react'
import { useNavigate,Route,Routes } from 'react-router-dom';
const Doc1 = () => {
  const [ showModel , setShowModel]= useState( false);
  const Model =()=>{
    const navigate = useNavigate();
    const navigateToContacts = () => {
   
      navigate('/Appointment');
    }
    return (  
      <div className=' fixed left-0 top-0 bottom-0 right-0 bg-teal-100 '><div className='  '>
       
    </div>  <div className=" relative rounded-[17px] mt-11  top-[100px] left-[360px]  bg-white w-[647px] h-[293px] overflow-hidden text-left text-[22px] text-blue-900 font-text-sm-font-semibold">
    <div className="absolute top-[50px] left-[59px] leading-[150%] font-medium inline-block w-[529px]">
      Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
      libero et velit interdum, ac aliquet odio mattis.
    </div>
    <button
      className=" cursor-pointer [border:none] py-[13px] px-[135px] bg-blue-700 absolute top-[212px] left-[263px] rounded-[9px] w-[123px] h-[47px] overflow-hidden flex flex-row items-center justify-center box-border"
      autoFocus={true}
    >
      <div className="relative text-base leading-[150%] font-medium font-text-sm-font-semibold text-white text-left"  onClick={navigateToContacts}>
        Close
      </div>
    </button>
  </div></div>
    ) 
  }
    return (
      <div>
  <section
  className="relative w-3/4 mx-40   h-[639px] overflow-hidden text-left text-lg text-primary-900 font-text-lg-font-normal border-[1px] border-solid border-teal-300"
  id="doccard"
>
  <div className="absolute top-[0px] left-[0px] bg-teal-100 w-[674px] h-[85px] overflow-hidden flex flex-col items-start justify-center py-[11px] px-[23px] box-border text-3xl">
    <div className="w-[316px] flex flex-row items-center justify-start gap-[31px]">
      <img
        className="relative w-9 h-9 overflow-hidden shrink-0"
        alt=""
        src="/twemojihospital.svg"
      />
      <div className="relative leading-[150%] font-medium">
        In Clinic Appointment
      </div>
    </div>
  </div>
  <div className="absolute top-[133px] left-[26px] leading-[150%] font-semibold text-teal-500">{`Change Date & Time`}</div>
  <div className="absolute top-[105px] left-[25px] w-[627px] flex flex-row items-start justify-start gap-[240px] text-3xl">
    <div className="flex flex-row items-center justify-start gap-[15px]">
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0"
        alt=""
        src="/claritydateline.svg"
      />
      <div className="relative leading-[150%]">
        <span>On</span>
       
        <span className="font-semibold">12 Oct 2023</span>
        
      </div>
    </div>
    <div className="flex flex-row items-center justify-start gap-[14px]">
      <img
        className="relative w-[23px] h-[23px] overflow-hidden shrink-0"
        alt=""
        src="/formkittime.svg"
      />
      <div className="relative leading-[150%]">
        <span>Time</span>
        <span className="font-semibold">11:30Am</span>
      </div>
    </div>
  </div>
  <div className="absolute top-[220px] left-[57px] flex flex-row items-center justify-start gap-[74px]">
    <img
      className="relative rounded-[145.5px] w-[177px] h-[182px] object-cover"
      alt=""
      src="/image-20@2x.png"
    />
    <div className="flex flex-col items-start justify-start">
      <div className="relative text-3xl leading-[150%] font-semibold">
        Dr. Raghav Gupta
      </div>
      <div className="relative leading-[150%] text-gray">M.B.B.S</div>
      <div className="relative leading-[150%] text-gray">
        18+ years of experience overall
      </div>
      <div className="relative leading-[150%]">Santacruz, Mumbai</div>
      <div className="relative text-[14px] leading-[150%]">
        Millennium Smile Dental Clinic
      </div>
    </div>
  </div>
  <div className="absolute top-[409px] left-[57px] w-[526px] h-[211px]">
    <img
      className="absolute top-[14px] left-[0px] w-[164px] h-[183px] object-cover"
      alt=""
      src="/image-26@2x.png"
    />
    <div className="absolute top-[14px] left-[234px] flex flex-col items-start justify-start gap-[18px]">
      <div className="relative leading-[150%] font-semibold inline-block w-[143px] h-6 shrink-0">
        Dental Solutions
      </div>
      <div className="relative text-base leading-[150%] font-medium text-blue-800 inline-block w-[292px] h-[92px] shrink-0">
        Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        vulputate libero et velit interdum, ac aliquet odio mattis.
      </div>
    </div>
    <div className="absolute top-[164px] left-[234px] rounded-[10px] bg-blue-100 w-[154px] overflow-hidden flex flex-row items-center justify-center py-[9px] px-1.5 box-border gap-[8px] text-base">
      <img
        className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
        alt=""
        src="/streamlinetravelmaplocationcompass1arrowcompasslocationgpsmapmapspoint.svg"
      />
      <div className="relative leading-[150%] font-semibold">
        Get Directions
      </div>
    </div>
  </div>
</section>
<section className="relative bg-lightcyan  w-full h-[1634px] overflow-hidden text-left text-xl text-blue-900 font-inter border-[1px]">
      <h1 className="m-0 absolute top-[52px] left-[34px] text-inherit leading-[150%] font-medium font-inherit">{`This In-clinic appointment is for: `}</h1>
      <div className="absolute top-[611px] left-[112px] leading-[150%]">
        Get instant updates on whatsApp
      </div>
      <h1 className="m-0 absolute top-[1043px] left-[37px] text-inherit leading-[150%] inline-block w-[478px] font-inherit">
        <p className="m-0">
          1.Free cancellation and rescheduling are available till 2 hours before
          the appointment time.
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          2.After the stipulated time, rescheduling will not be available and a
          fee of Rs 50 will be applicable for cancellation or no-show.
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">3.Updates will be sent to +917021455461</p>
        <p className="m-0">
          By booking this appointment, you agree to CareChainAi’s Terms and
          Conditions. Have more questions? Read our payment FAQs.
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0 font-semibold">Safe and secure payments.</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">No more billing queues, go cashless!</p>
        <p className="m-0">Instant appointment confirmation</p>
        <p className="m-0">Easy appointment management</p>
        <p className="m-0">Appointment assured by Prime benefits</p>
      </h1>
      <h2 className="m-0 absolute top-[252px] left-[34px] text-inherit leading-[150%] font-semibold font-inherit">
        Provide following information about Username
      </h2>
      <h1 className="m-0 absolute top-[301px] left-[34px] text-inherit leading-[150%] font-normal font-inherit">
        Full Name
      </h1>
      <h1 className="m-0 absolute top-[405px] left-[37px] text-inherit leading-[150%] font-normal font-inherit">
        Phone Number
      </h1>
      <h1 className="m-0 absolute top-[507px] left-[37px] text-inherit leading-[150%] font-normal font-inherit">
        Email id
      </h1>
      <div className="absolute top-[297px] left-[128px] leading-[150%] text-red-600">
        *
      </div>
      <div className="absolute top-[399px] left-[179px] leading-[150%] text-red-600">
        *
      </div>
      <div className="absolute top-[123px] left-[34px] rounded-10xs bg-white box-border w-[481px] h-[103px] overflow-hidden border-[1px] border-solid border-teal-300">
        <div className="absolute top-[51.5px] left-[-0.5px] box-border w-[482px] h-px border-t-[1px] border-solid border-teal-300" />
        <div className="absolute top-[11px] left-[50px] leading-[150%] font-medium">
          Patient name
        </div>
        <div className="absolute top-[63px] left-[52px] leading-[150%] font-medium">
          Someone Else
        </div>
        <div className="absolute top-[10px] left-[7px] rounded-[50%] bg-teal-500 w-[31px] h-[31px]" />
        <div className="absolute top-[62px] left-[7px] rounded-[50%] bg-white box-border w-[31px] h-[31px] border-[2px] border-solid border-teal-500" />
        <div className="absolute top-[18px] left-[15px] rounded-[50%] bg-white w-[15px] h-[15px]" />
      </div>
      <input
        className="font-medium font-inter text-xl bg-white absolute top-[341px] left-[34px] rounded-10xs box-border w-[481px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-300"
        placeholder="Patient Name"
        type="text"
      />
      <input
        className="font-medium font-inter text-xl bg-white absolute top-[445px] left-[34px] rounded-10xs box-border w-[481px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-300"
        placeholder="7854112556"
        type="text"
      />
      <input
        className="bg-white absolute top-[547px] left-[34px] rounded-10xs box-border w-[481px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-300"
        type="text"
      />
      <div className="absolute top-[614px] left-[73px] rounded-10xs bg-white box-border w-6 h-6 overflow-hidden border-[1px] border-solid border-blue-900" />
      <img
        className="absolute top-[614px] left-[34px] w-6 h-6 overflow-hidden"
        alt=""
        src="/materialsymbolstouchappoutline.svg"
      />
      <div className="absolute top-[507px] left-[118px] leading-[150%]">
        (Optional)
      </div>
      <div className="absolute top-[277.5px] left-[378.5px] box-border w-[98px] h-px border-t-[1px] border-solid border-blue-900" />
      <div className="absolute top-[773px] left-[37px] rounded-[10px] bg-white box-border w-[478px] h-[246px] overflow-hidden border-[1px] border-solid border-teal-300" />
      <h1 className="m-0 absolute top-[719px] left-[37px] text-inherit leading-[150%] font-semibold font-inherit">
        Choose a payment option to Book Appointment
      </h1>
      <div className="absolute top-[822px] left-[69px] bg-white box-border w-[414px] h-[45px] overflow-hidden text-xs border-[1px] border-solid border-teal-300">
        <div className="absolute top-[7px] left-[3px] rounded-[50%] bg-teal-500 w-[31px] h-[31px]" />
        <div className="absolute top-[15px] left-[11px] rounded-[50%] bg-white w-[15px] h-[15px]" />
        <div className="absolute top-[14px] left-[340px] leading-[150%]">
          Pay Online
        </div>
        <div className="absolute top-[12px] left-[46px] text-sm leading-[150%]">
          ₹300 ₹500
        </div>
        <div className="absolute top-[22.5px] left-[80.5px] box-border w-[37px] h-px border-t-[1px] border-solid border-black" />
      </div>
      <div className="absolute top-[888px] left-[69px] bg-white box-border w-[414px] h-[45px] overflow-hidden text-xs border-[1px] border-solid border-teal-300">
        <div className="absolute top-[14px] left-[307px] leading-[150%]">{`Pay later at Clinic `}</div>
        <div className="absolute top-[12px] left-[46px] text-sm leading-[150%]">
          ₹500
        </div>
        <div className="absolute top-[7px] left-[4px] rounded-[50%] bg-white box-border w-[31px] h-[31px] border-[2px] border-solid border-teal-500" />
      </div>
      <button
        className="cursor-pointer [border:none] py-[13px] px-[135px] bg-blue-700 absolute top-[954px] left-[205px] rounded-[9px] w-[142px] h-[37px] overflow-hidden flex flex-row items-center justify-center box-border"
        autoFocus={true}
      >
        <div className="relative text-xs leading-[150%] font-medium font-inter text-white text-left"  onClick={()=>setShowModel(true)}>
          Confirm Appointment
        </div>
      </button>{showModel && <Model/>}
    </section>
</div>

    );
  };
  
  export default Doc1;
  


