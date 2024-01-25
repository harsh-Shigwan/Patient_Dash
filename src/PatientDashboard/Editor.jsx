import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { Header } from '../components/PatientComponents';
import { EditorData } from '../data/PatientData/dummy';

const Editor = () => (
  <div className="Desktop1 w-96 h-96 relative bg-white">
  <img className="Image1 w-24 h-20 left-[150px] top-[23px] absolute shadow-inner" src="https://via.placeholder.com/97x82" />
  <div className="Frame1 w-96 h-20 left-[322px] top-[36px] absolute bg-white rounded-lg shadow">
    <div className="Home left-[55px] top-[22px] absolute text-blue-400 text-3xl font-bold font-['Inter']">Home</div>
    <div className="AboutUs left-[238px] top-[27px] absolute text-blue-400 text-xl font-medium font-['Inter']">About us</div>
    <div className="ContactUs left-[402px] top-[26.50px] absolute text-blue-400 text-xl font-medium font-['Inter']">Contact Us</div>
  </div>
  <div className="Frame2 px-3.5 py-3 left-[1148px] top-[38px] absolute bg-gradient-to-b from-fuchsia-300 to-indigo-200 rounded-md shadow justify-center items-center gap-3.5 inline-flex">
    <div className="VisitNow text-white text-2xl font-semibold font-['Inter']">Visit now</div>
  </div>
  <div className="Frame7 left-[463px] top-[1628px] absolute justify-start items-center gap-6 inline-flex">
    <div className="OurServices text-sky-600 text-6xl font-bold font-['Inter']">Our Services</div>
  </div>
  <div className="Rectangle12 w-80 h-72 left-[125px] top-[1934px] absolute bg-sky-600 bg-opacity-70 rounded blur-2xl" />
  <div className="Rectangle13 w-80 h-72 left-[551px] top-[1934px] absolute bg-sky-800 bg-opacity-70 rounded blur-2xl" />
  <div className="Rectangle14 w-80 h-72 left-[968px] top-[1934px] absolute bg-sky-800 bg-opacity-70 rounded blur-2xl" />
  <div className="Rectangle15 w-80 h-72 left-[965px] top-[2335.48px] absolute bg-sky-800 bg-opacity-70 rounded-md blur-2xl" />
  <div className="Rectangle16 w-80 h-72 left-[545px] top-[2335.48px] absolute bg-sky-800 bg-opacity-70 rounded-md blur-2xl" />
  <div className="Rectangle17 w-80 h-72 left-[125px] top-[2338px] absolute bg-sky-800 bg-opacity-70 rounded-md blur-2xl" />
  <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSedNonDiamLiberoQuisqueNecSollicitudinSapienCurabiturSitAmetFeugiatPurusMorbiUltricesNullaUtExVariusVelLaciniaExUllamcorperSedEgetJustoNonAugueFacilisisPosuereVestibulumAMiEgetLigulaUltricesDictumPraesentVestibulumEstAcElementumVarius w-96 left-[260px] top-[2742px] absolute text-center text-black text-xl font-bold font-['Inter']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam libero. Quisque nec sollicitudin sapien. Curabitur sit amet feugiat purus. Morbi ultrices nulla ut ex varius, vel lacinia ex ullamcorper. Sed eget justo non augue facilisis posuere. Vestibulum a mi eget ligula ultrices dictum. Praesent vestibulum, est ac elementum varius, </div>
  <div className="Rectangle6 w-80 h-80 left-[125px] top-[1868px] absolute bg-white rounded-2xl shadow" />
  <div className="Rectangle9 w-80 h-80 left-[125px] top-[2272px] absolute bg-white rounded-2xl shadow" />
  <div className="Rectangle7 w-80 h-80 left-[545px] top-[1868px] absolute bg-white rounded-2xl shadow" />
  <div className="Rectangle8 w-80 h-80 left-[965px] top-[1868px] absolute bg-white rounded-2xl shadow" />
  <div className="Rectangle11 w-80 h-80 left-[965px] top-[2272px] absolute bg-white rounded-2xl shadow" />
  <div className="Rectangle23 w-80 h-80 left-[551px] top-[2280px] absolute bg-white rounded-2xl shadow" />
  <div className="Group4 w-44 h-12 left-[1051px] top-[2361px] absolute">
    <div className="Ellipse2 w-12 h-12 left-0 top-0 absolute bg-sky-950 rounded-full border-2 border-black" />
    <div className="Ellipse3 w-12 h-12 left-[65px] top-0 absolute bg-sky-950 rounded-full border-2 border-black" />
    <div className="Ellipse4 w-12 h-12 left-[127.50px] top-0 absolute bg-sky-950 rounded-full border-2 border-black" />
  </div>
  <div className="Frame8 w-96 h-96 left-0 top-[4014px] absolute bg-sky-400">
    <div className="Frame9 w-96 h-32 left-0 top-[356px] absolute bg-neutral-200 shadow-inner">
      <div className="AllRightsReservedDesignedAndDevelopedByCarechainaiCom left-[150px] top-[63px] absolute text-black text-xl font-bold font-['Inter'] underline">2023 © All Rights Reserved | Designed and Developed by carechainai.com</div>
      <div className="Frame10 w-52 left-[1008px] top-[50px] absolute justify-start items-center gap-5 inline-flex">
        <div className="MdiLinkedin w-12 h-12 p-1.5 justify-center items-center flex" />
      </div>
      <div className="GetInTouchWithUs left-[985px] top-[10px] absolute text-black text-2xl font-bold font-['Inter']">Get in touch with us !</div>
    </div>
    <div className="KnowMoreAboutUs left-[536px] top-[13px] absolute text-white text-4xl font-bold font-['Inter']">Know more about us !</div>
    <div className="AboutCarechainai left-[150px] top-[92px] absolute text-white text-2xl font-semibold font-['Inter']">About CareChainAi:</div>
    <div className="LatestUpdates left-[536px] top-[92px] absolute text-white text-2xl font-semibold font-['Inter']">Latest Updates:</div>
    <div className="CarechainaiIsARevolutionaryHealthcarePlatformThatConnectsPatientsWithSpecializedDoctorsOffersSecureHealthRecordManagementVirtualConsultationsAndMore w-80 left-[152px] top-[137px] absolute text-black text-lg font-semibold font-['Inter']">CareChainAI is a revolutionary healthcare platform that connects patients with specialized doctors, offers secure health record management, virtual consultations, and more.</div>
    <div className="TypcnMail w-8 px-1 pt-2.5 pb-1.5 left-[995px] top-[163px] absolute justify-center items-center inline-flex" />
    <div className="MumbaiIndiaCarechainaiGmailCom918291988205919049685048 left-[1047px] top-[130px] absolute text-black text-lg font-bold font-['Inter']">Mumbai, India<br/>carechainai@gmail.com<br/>+91 8291988205<br/>+91 9049685048</div>
    <div className="WeAreWorkingOnDevelopingOurFullyFunctionalWebsiteOfCarechainai w-80 left-[536px] top-[137px] absolute text-black text-lg font-semibold font-['Inter']">We are working on Developing our fully<br/>functional Website of CareChainAi .</div>
  </div>
  <div className="Frame11 w-96 h-96 left-0 top-[3434px] absolute bg-cyan-100 shadow">
    <div className="ContactUsViaAnEmail left-[419px] top-[21px] absolute text-zinc-800 text-5xl font-bold font-['Inter']">Contact us Via an Email !</div>
    <div className="Rectangle19 w-96 h-16 left-[252px] top-[162px] absolute bg-black bg-opacity-50 blur-2xl" />
    <div className="Rectangle20 w-96 h-16 left-[644px] top-[152px] absolute bg-black bg-opacity-50 blur-2xl" />
    <div className="Group5 w-96 h-16 left-[252px] top-[145px] absolute">
      <div className="Frame12 w-96 h-16 pl-4 pr-44 pt-4 pb-5 left-0 top-0 absolute bg-white rounded-2xl justify-start items-center inline-flex">
        <div className="EnterYourName opacity-50 text-black text-xl font-medium font-['Inter']">Enter your Name....</div>
      </div>
      <div className="Frame13 w-96 h-16 pl-7 pr-80 py-5 left-[392px] top-0 absolute bg-white rounded-2xl justify-start items-center inline-flex">
        <div className="EnterYourEmail opacity-50 text-black text-xl font-medium font-['Inter']">Enter your Email ....</div>
      </div>
    </div>
    <div className="Rectangle18 w-44 h-16 left-[1010px] top-[332px] absolute bg-zinc-800 blur-2xl" />
    <div className="Frame15 pl-12 pr-11 py-3.5 left-[996px] top-[315px] absolute bg-green-700 rounded-2xl justify-end items-center inline-flex">
      <div className="Submit text-white text-3xl font-bold font-['Inter']">Submit</div>
    </div>
    <div className="Rectangle20 w-96 h-52 left-[252px] top-[311px] absolute bg-black bg-opacity-50 blur-2xl" />
    <div className="Frame14 w-96 h-56 pl-6 pr-96 pt-5 pb-44 left-[252px] top-[270px] absolute bg-white rounded-2xl justify-start items-center inline-flex">
      <div className="WriteYourQueryHere opacity-50 text-black text-xl font-medium font-['Inter']">Write your query here....</div>
    </div>
    <img className="Images1RemovebgPreview11 w-64 h-72 left-[1191px] top-0 absolute opacity-80 mix-blend-multiply shadow" src="https://via.placeholder.com/253x278" />
  </div>
  <img className="Doctor52196954370608RemovebgPreview1 w-40 h-40 left-[222px] top-[1868px] absolute shadow" src="https://via.placeholder.com/161x161" />
  <div className="Rectangle22 w-28 h-24 left-[658px] top-[1926px] absolute bg-black" />
  <img className="CalendarAndClockIconConceptOfScheduleAppointmentVectorIllustration2dmyhnkRemovebgPreview1 w-48 h-52 left-[622px] top-[1861px] absolute shadow" src="https://via.placeholder.com/197x211" />
  <img className="DownloadRemovebgPreview1 w-44 h-44 left-[1052px] top-[1868px] absolute shadow" src="https://via.placeholder.com/171x175" />
  <img className="DDoctorPrescriptionIconOrPatientReportPaperIconFreePng1 w-52 h-52 left-[186px] top-[2251px] absolute shadow" src="https://via.placeholder.com/216x216" />
  <div className="Ellipse6 w-52 h-52 left-[1476px] top-[1555px] absolute origin-top-left rotate-180 bg-sky-600 bg-opacity-25 rounded-full" />
  <div className="Ellipse7 w-64 h-64 left-[1476px] top-[1555px] absolute origin-top-left rotate-180 bg-white rounded-full shadow" />
  <img className="Image3RemovebgPreview1 w-64 h-96 left-[381px] top-[938px] absolute origin-top-left rotate-180 shadow" src="https://via.placeholder.com/263x596" />
  <div className="ExploreOurBestServices left-[1260px] top-[1638px] absolute opacity-70 text-center text-sky-950 text-2xl font-semibold font-['Inter']">Explore Our <br/>Best services !</div>
  <div className="Frame17 w-96 h-64 left-[276px] top-[2986px] absolute">
    <div className="WeReExcitedToBringYouARevolutionaryHealthcareExperienceOurPlatformIsUnderDevelopmentAndWillBeLaunchingSoonToTransformTheWayYouAccessHealthcareStayTunedForUpdatesAndBeTheFirstToExperienceCarechainaiSInnovativeServices w-96 left-0 top-[145px] absolute text-center text-blue-700 text-2xl font-semibold font-['Inter']">We're excited to bring you a revolutionary healthcare experience. Our platform is under development and will be launching soon to transform the way you access healthcare.<br/>Stay tuned for updates and be the first to experience CareChainAI's innovative services.</div>
    <div className="Rectangle23 w-96 h-24 left-[90px] top-0 absolute bg-white rounded-2xl shadow shadow-inner" />
    <div className="LaunchingSoon left-[205px] top-[14px] absolute text-center text-blue-700 text-6xl font-semibold font-['Inter']">Launching Soon .....</div>
  </div>
  <div className="1 w-96 h-96 left-[470.18px] top-[836px] absolute origin-top-left rotate-180 shadow" />
  <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequatDuisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariaturExcepteurSintOccaecatCupidatatNonProidentSuntInCulpaQuiOfficiaDeseruntMollitAnimIdEstLaborum w-96 left-[460px] top-[958px] absolute text-black text-xl font-medium font-['Inter']">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  <div className="Ellipse9 w-28 h-28 left-[486px] top-[1367px] absolute bg-gradient-to-b from-blue-100 to-pink-300 rounded-full shadow border border-red-600" />
  <div className="Ellipse10 w-28 h-28 left-[632px] top-[1367px] absolute bg-gradient-to-b from-blue-100 to-pink-300 rounded-full shadow border border-red-600" />
  <div className="Ellipse11 w-28 h-28 left-[778px] top-[1367px] absolute bg-gradient-to-b from-blue-100 to-pink-300 rounded-full shadow border border-red-600" />
  <div className="KUsers left-[511px] top-[1401px] absolute text-center text-sky-600 text-xl font-semibold font-['Inter']">300k+<br/>users</div>
  <div className="Hospitals left-[644px] top-[1401px] absolute text-center text-sky-600 text-xl font-semibold font-['Inter']">300+<br/>Hospitals</div>
  <img className="Rectangle10 w-60 h-44 left-[608px] top-[2280px] absolute rounded-2xl shadow" src="https://via.placeholder.com/236x169" />
  <div className="MPatientsTreated left-[797px] top-[1389px] absolute text-center text-sky-600 text-xl font-semibold font-['Inter']">1M +<br/>patients<br/> treated</div>
  <img className="Screen11 w-96 h-96 left-[963.95px] top-[887px] absolute" src="https://via.placeholder.com/360x654" />
  <div className="Group62 w-96 h-96 left-[140px] top-[1728px] absolute">
    <div className="DiscoverOurRangeOfServicesThatPrioritizeYourHealthAndWellBeing left-0 top-0 absolute text-black text-2xl font-bold font-['Inter']">Discover our range of services that prioritize your health and well-being.</div>
    <div className="DoctorDirectory left-[46px] top-[356px] absolute text-center text-black text-2xl font-semibold font-['Inter']">Doctor Directory</div>
    <div className="AppointmentBooking left-[455px] top-[356px] absolute text-center text-black text-2xl font-semibold font-['Inter']">Appointment Booking</div>
    <div className="HealthRecordsManagement w-60 left-[878px] top-[356px] absolute text-center text-black text-2xl font-semibold font-['Inter']">Health Records<br/> Management</div>
    <div className="PrescriptionStorageAndMedicationReminders w-80 left-[1px] top-[734px] absolute text-center text-black text-xl font-semibold font-['Inter']">Prescription Storage and Medication Reminders</div>
    <div className="AnonymousPatientDoctorCommunication left-[435px] top-[734px] absolute text-center text-black text-xl font-semibold font-['Inter']">Anonymous Patient-Doctor<br/> Communication</div>
    <div className="ManyMore left-[928px] top-[741px] absolute text-center text-black text-2xl font-semibold font-['Inter']">Many More</div>
  </div>
  <div className="Frame4 w-96 h-96 left-[148px] top-[150px] absolute">
    <div className="Rectangle5 w-48 h-9 left-[27px] top-[566px] absolute bg-sky-600 blur-2xl" />
    <div className="Group3 w-96 h-96 left-0 top-[117px] absolute">
      <div className="Frame3 w-56 h-12 px-5 py-3.5 left-[17px] top-[431px] absolute bg-gradient-to-b from-sky-600 to-sky-600 rounded shadow justify-center items-center gap-5 inline-flex">
        <div className="BookAnAppointment text-white text-lg font-semibold font-['Inter']">Book an Appointment</div>
      </div>
      <div className="Group1 w-96 h-96 left-0 top-0 absolute">
        <div className="CarechainaiTransformsHealthcareAccessInIndiaSeamlesslyConnectingPatientsWithSpecializedClinicsAiGuidedAppointmentsAndSecureHealthRecordsOnTheBlockchainOurCommitmentToConvenienceAndPersonalizedCareEnhancesTheHealthcareJourneyForAllWelcomeToANewEraOfEmpoweredWellBeingWithCarechainai w-96 left-0 top-[273px] absolute text-black text-lg font-normal font-['Inter']">CareChainAI transforms healthcare access in India, seamlessly connecting patients with specialized clinics, AI-guided appointments, and secure health records on the blockchain. Our commitment to convenience and personalized care enhances the healthcare journey for all. Welcome to a new era of empowered well-being with CareChainAI.</div>
        <div className="Carechainai left-[4px] top-[19px] absolute text-sky-500 text-5xl font-bold font-['Inter']">CareChainAI</div>
        <div className="WeFollowAHolisticApproachToHealthCare left-[4px] top-[99px] absolute text-black text-4xl font-bold font-['Inter']">We follow a <br/>holistic approach <br/>to health care</div>
        <div className="ConnectToExpertsWith left-[44px] top-0 absolute text-black text-xl font-medium font-['Inter']">Connect to experts with </div>
      </div>
    </div>
    <div className="Ellipse1 w-96 h-96 left-[659px] top-[265.47px] absolute bg-gradient-to-b from-teal-400 to-teal-400 rounded-full shadow-inner" />
    <div className="Group6 origin-top-left rotate-[-33.76deg] w-72 h-72 left-[459px] top-[202.38px] absolute">
      <div className="Ellipse6 w-44 h-44 left-[150.50px] top-[35.75px] absolute origin-top-left rotate-[-33.76deg] bg-gradient-to-b from-sky-600 to-sky-600 rounded-full" />
      <div className="Ellipse5 w-64 h-64 left-0 top-0 absolute origin-top-left rotate-[-33.76deg] bg-white rounded-full shadow-inner backdrop-blur-lg" />
    </div>
    <img className="PngClipartDoctorsAndNursesDoctorsAndNursesRemovebgPreview1 w-96 h-96 left-[702px] top-[-1px] absolute" src="https://via.placeholder.com/389x544" />
    <div className="GetYourPersonalizedDoctorConsulationDoneOnYourMobilePhones left-[523px] top-[192px] absolute text-center text-red-600 text-xl font-semibold font-['Inter']">Get Your Personalized <br/>doctor consulation <br/>done on your Mobile<br/>Phones !</div>
    <div className="WhyDoWeNeedCarechainai left-[101px] top-[730px] absolute text-black text-5xl font-bold font-['Inter']">Why do we need CareChainAi ?</div>
  </div>
</div>
);
export default Editor;
