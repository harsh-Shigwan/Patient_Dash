import React, { useState } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { CardData, cartData } from "../data/PatientData/dummy";
import { dropdownData, dropdown1Data } from "../data/PatientData/dummy";
import { useStateContext } from "../contexts/PatientContext/ContextProvider";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
//import { useId, useRef, useInsertionEffect } from 'react';
//import { useId, useRef, useInsertionEffect } from 'framer-motion';
/*
const Doctor = () => {
  return (
    <div>
    <header className="mt-10 h-20 sm: bg-green-500 sm:h-20  "></header>
    <div className="mt-1 grid grid-cols-1 h-screen w-full mx-auto sm:h-screen sm:w-full sm:grid sm:grid-cols-2 gap-2 bg-slate-600  sm:mt-0 ">
      <div className="  h-full bg-red-800 ">
      <div className=" h-80 w-5/6  bg-orange-400"></div></div>
      <div className="h-full bg-yellow-800"></div>
      <div className="  h-full bg-red-200"></div>
      <div className="  h-full bg-sky-200"></div>
    </div>
    <div className="mt-2 grid grid-cols-1  mx-auto h-screen w-full   sm:h-screen sm:w-full 
sm:grid sm:grid-cols-2 gap-2 bg-slate-600  sm:mt-2 ">
  <div className="  h-full bg-red-800"></div>
  <div className="h-full bg-yellow-800"></div>
  <div className="  h-full bg-red-200"></div>
  <div className="  h-full bg-sky-200"></div>
</div>
    </div>
  );
};

*/
//export default Doctor;
/*import React, { useState } from "react";

const Cards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Card 1",
      content: "This is the content of card 1.",
    },
    {
      id: 2,
      title: "Card 2",
      content: "This is the content of card 2.",
    },
    {
      id: 3,
      title: "Card 3",
      content: "This is the content of card 3.",
    },
  ]);

  return (
    <div>
      <Row>
        {cards.map((card, index) => (
          <Col key={card.id} md={2}>
            <Card>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cards;
*/

/*
            <div className="  md: flex h-2/5 w-full  bg-sky-400">
              <div className="h-full w-2/4 bg-red-800"></div>
              <div className="h-full w-2/4 bg-yellow-800"></div>
            </div>
            <div className="flex h-2/5 w-full  bg-sky-700">
            <div className="h-full w-2/4 bg-red-200"></div>
            <div className="h-full w-2/4 bg-sky-200"></div>
          </div>
          */

        /*  const [ itemss , setItems] = useState(CardData);
          const filterItem = (cateItems) =>{
            const updatedItems = dropdownData.filter((curElem) =>{
              return curElem.City === cateItems ;
            });
            setItems(updatedItems);

            const filterItem = (cateItems) =>{
    const updatedItems = dropdownData.filter((curElem) =>{
      return curElem.City === cateItems ;
    });
    setItems(updatedItems);
  }
          }*/

// import React from "react";
const DropDown = ({ currentMode }) => (
  <div className=" border-4 border-color px-2 py-1 rounded-md w-full">
    <DropDownListComponent
      id="City"
      fields={{ text: "City", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      City={selectedCategory}
      change={handleFilterChange}
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="25vw"
      placeholder="select the City"
      
    />
  </div>
);
const DropDown1 = ({ currentMode }) => (
  <div className=" border-4 border-color px-2 py-1 rounded-md w-full">
    <DropDownListComponent
      id="City"
      fields={{ text: "Dr", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdown1Data}
      popupHeight="220px"
      popupWidth="38vw"
    />
  </div>
);



const Doctor = () => {
 
   const [selectedCategory, setSelectedCategory] = useState('All');


   const handleFilterChange = (e) => {
   const selectedValue = e.City;
   setSelectedCategory(selectedValue);
    if (selectedValue === 'All') {
      setItems(CardData);
    } else {
      const filtered = cartData.filter((elem) => elem.City === selectedValue);
      setItems(filtered);
    }
  };

  const { currentColor, currentMode } = useStateContext
();
  const [ items , setItems] = useState([]);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(y, [100, -100], [-30, 30]);

 
  return (
    <div>
      <div className=" h-full w-full">
        <div className="">
          <section className=" pl-0 sm:  h-screen w-full   ">
            <header className="bg-white dark:bg-secondary-dark-bg h-28  flex  sticky"> 
            <div className=" mt-7 w-screen space-x-4 bg-white dark:bg-secondary-dark-bg md:bg-white flex relative ml-10 mr-80  h-10 md:w-full 
        md:space-x-4 ">
              <div className=" h-12  w-60  md:h-10  md:w-3/4 bg-white dark:bg-secondary-dark-bg ">
              <div className=" border-4 border-color px-2 py-1 rounded-md w-full">
              <DropDownListComponent
                id="City"
                fields={{ text: "City", value: "Id" }}
                style={{ border: "none", color: currentMode === "Dark" && "white" }}
                City={selectedCategory}
                change={handleFilterChange}
                dataSource={dropdownData}
                popupHeight="220px"
                popupWidth="25vw"
                placeholder="select the City"
                
              />
            </div>
              </div>
              <div className="   w-8/12 md:h-10 md:w-full bg-white dark:bg-secondary-dark-bg  ">
               <DropDown1 currentMode={currentMode}></DropDown1>
              </div></div>
            </header>
           

           { 
             items.map((elem)=>{
                const { Name , Edu , Exp , City, Name2 , Edu2 , Exp2 ,Loc2 } =elem;

                return(
                  <div className="grid grid-cols-2   h-2/5 w-full  bg-white dark:bg-secondary-dark-bg">
                  <div style={{ perspective: 4000 }}>
                  <motion.div
                    style={{ x, y, rotateX, rotateY, z: 5 }}
                    drag
                    dragElastic={0.1}
                    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    whileTap={{ cursor: "grabbing" }}
                    className="h-full w-full bg-white dark:bg-secondary-dark-bg   rounded-xl "
                  >
                    <div className="h-3/4 ml-5 mr-5 mt-1   bg-white dark:bg-secondary-dark-bg relative  rounded-lg border-2  ">
                      <div className=" flex">
                        <div className="mt-0 flex">
                          <motion.div
                            style={{ x, y, rotateX, rotateY, z: 5 }}
                            className='h-5/6 w-1/4 ml-5 mt-3  absolute   bg-white dark:bg-secondary-dark-bg bg-[url("https://images.apollo247.in/doctors/noimagemale.png")] bg-cover rounded-full  '
                            draggable="false"
                          ></motion.div>
                        </div>
                        <div className=" mt-0 flex-1">
                          <div className=" ml-48 h-12   bg-white dark:bg-secondary-dark-bg h-13 text-black 
                           text-2xl font-semibold text-justify mt-5 tracking-tight  dark:text-white ">
                           {Name}
                          </div>
                          <div className=" ml-48 h-10  bg-white dark:bg-secondary-dark-bg h-15   mr-5  
                             tracking-tight text-md font-semibold dark:text-white">
                           {Edu}
                          </div>
                          <div className=" h-8 ml-48  bg-white dark:bg-secondary-dark-bg">
                           {Exp}
                            <div className="h-8  mb-4 ml-80  bg-white dark:bg-secondary-dark-bg absolute"></div>
                          </div>
                          <div className="h-8 ml-48 mr-10  bg-white dark:bg-secondary-dark-bg">
                            {City}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex ">
                      <motion.div
                        style={{ x, y, rotateX, rotateY, z: 5 }}
                        className=" ml-5 mr-1 mb-3 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  
                     text-center mt-1   tracking-tight text-md font-semibold dark:text-white  rounded border-2"
                      >
                        Book Video Consult
                      </motion.div>
                      <motion.div
                        style={{ x, y, rotateX, rotateY, z: 5 }}
                        className="mr-5 ml-1 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1 tracking-tight text-md  rounded border-2  font-semibold dark:text-white"
                      >
                        Book Hospital Visit
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
                  

                <div style={{ perspective: 4000 }}>
                <motion.div
                  style={{ x, y, rotateX, rotateY, z: 5 }}
                  drag
                  dragElastic={0.1}
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  whileTap={{ cursor: "grabbing" }}
                  className="h-full w-full bg-white dark:bg-secondary-dark-bg   rounded-xl "
                >
                  <div className="h-3/4 ml-5 mr-5 mt-1   bg-white dark:bg-secondary-dark-bg relative  rounded-lg border-2  ">
                    <div className=" flex">
                      <div className="mt-0 flex">
                        <motion.div
                          style={{ x, y, rotateX, rotateY, z: 5 }}
                          className='h-5/6 w-1/4 ml-5 mt-3  absolute   bg-white dark:bg-secondary-dark-bg bg-[url("https://images.apollo247.in/doctors/noimagemale.png")] bg-cover rounded-full  '
                          draggable="false"
                        ></motion.div>
                      </div>
                      <div className=" mt-0 flex-1">
                        <div className=" ml-48 h-12   bg-white dark:bg-secondary-dark-bg h-13 text-black 
                         text-2xl font-semibold text-justify mt-5 tracking-tight  dark:text-white ">
                         {Name2}
                        </div>
                        <div className=" ml-48 h-10  bg-white dark:bg-secondary-dark-bg h-15   mr-5  
                           tracking-tight text-md font-semibold dark:text-white">
                         {Edu2}
                        </div>
                        <div className=" h-8 ml-48  bg-white dark:bg-secondary-dark-bg">
                         {Exp2}
                          <div className="h-8  mb-4 ml-80  bg-white dark:bg-secondary-dark-bg absolute"></div>
                        </div>
                        <div className="h-8 ml-48 mr-10  bg-white dark:bg-secondary-dark-bg">
                          {Loc2}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex ">
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 5 }}
                      className=" ml-5 mr-1 mb-3 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  
                   text-center mt-1   tracking-tight text-md font-semibold dark:text-white  rounded border-2"
                    >
                      Book Video Consult
                    </motion.div>
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 5 }}
                      className="mr-5 ml-1 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1 tracking-tight text-md  rounded border-2  font-semibold dark:text-white"
                    >
                      Book Hospital Visit
                    </motion.div>
                  </div>
                </motion.div>
              </div>

             
                </div>
                )
             })
           }
            <div className=" flex-wrap md: flex h-2/5 w-full  bg-white dark:bg-secondary-dark-bg">
              <div style={{ perspective: 4000 }}>
                <motion.div
                  style={{ x, y, rotateX, rotateY, z: 5 }}
                  drag
                  dragElastic={0.1}
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  whileTap={{ cursor: "grabbing" }}
                  className="h-full w-full  bg-white dark:bg-secondary-dark-bg   rounded-xl "
                >
                  <div className="h-3/4 ml-5 mr-5 mt-1   bg-white dark:bg-secondary-dark-bg relative  rounded-lg border-2  ">
                    <div className=" flex">
                      <div className="mt-0 flex">
                        <motion.div
                          style={{ x, y, rotateX, rotateY, z: 5 }}
                          className='   w-2/5 h-4/5 sm:h-5/6  sm:w-1/4 ml-5 mt-3  absolute   bg-white dark:bg-secondary-dark-bg bg-[url("https://images.apollo247.in/doctors/noimagemale.png")] bg-cover rounded-full  '
                          draggable="false"
                        ></motion.div>
                      </div>
                      <div className=" mt-0 flex-1">
                        <div className="h-8 ml-48 text-lg font-extrabold sm:h-12   bg-white dark:bg-secondary-dark-bg h-13 text-black sm:text-2xl sm:font-semibold text-justify mt-5 tracking-tight  dark:text-white ">
                          Dr. Abhishek Verma
                        </div>
                        <div className=" h-10 ml-48 text-sm sm:h-10  bg-white dark:bg-secondary-dark-bg h-15   mr-5  tracking-tight sm:text-md font-semibold dark:text-white">
                          PULMONOLOGY RESPIRATORY MEDICINE SPECIALIST
                        </div>
                        <div className=" h-8 ml-48  bg-white dark:bg-secondary-dark-bg">
                          5 Years Experiance
                          <div className="h-8  mb-4 ml-80  bg-white dark:bg-secondary-dark-bg absolute"></div>
                        </div>
                        <div className="h-8 ml-48 mr-10  bg-white dark:bg-secondary-dark-bg">
                          location-
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex ">
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 5 }}
                      className=" ml-5 mr-1 mb-3 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1   tracking-tight text-md font-semibold dark:text-white  rounded border-2"
                    >
                      Book Video Consult
                    </motion.div>
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 5 }}
                      className="mr-5 ml-1 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1 tracking-tight text-md  rounded border-2 font-semibold dark:text-white"
                    >
                      Book Hospital Visit
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              <div style={{ perspective: 4000 }}>
                <motion.div
                  style={{ x, y, rotateX, rotateY, z: 5 }}
                  drag
                  dragElastic={0.1}
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  whileTap={{ cursor: "grabbing" }}
                  className="h-full w-full  bg-white dark:bg-secondary-dark-bg   rounded-xl "
                >
                  <div className="h-3/4 ml-5 mr-5 mt-1   bg-white dark:bg-secondary-dark-bg relative  rounded-lg border-2  ">
                    <div className=" flex">
                      <div className="mt-0 flex">
                        <motion.div
                          style={{ x, y, rotateX, rotateY, z: 5 }}
                          className='h-5/6 w-1/4 ml-5 mt-3  absolute   bg-white dark:bg-secondary-dark-bg bg-[url("https://images.apollo247.in/doctors/noimagemale.png")] bg-cover rounded-full  '
                          draggable="false"
                        ></motion.div>
                      </div>
                      <div className=" mt-0 flex-1">
                        <div className=" ml-48 h-12   bg-white dark:bg-secondary-dark-bg h-13 text-black text-2xl font-semibold text-justify mt-5 tracking-tight  dark:text-white ">
                          Dr. Abhishek Verma
                        </div>
                        <div className=" ml-48 h-10  bg-white dark:bg-secondary-dark-bg h-15   mr-5  tracking-tight text-md font-semibold dark:text-white">
                          PULMONOLOGY RESPIRATORY MEDICINE SPECIALIST
                        </div>
                        <div className=" h-8 ml-48  bg-white dark:bg-secondary-dark-bg">
                          5 Years Experiance
                          <div className="h-8  mb-4 ml-80  bg-white dark:bg-secondary-dark-bg absolute"></div>
                        </div>
                        <div className="h-8 ml-48 mr-10  bg-white dark:bg-secondary-dark-bg">
                          location-
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex ">
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 5 }}
                      className=" ml-5 mr-1 mb-3 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1   tracking-tight text-md font-semibold dark:text-white  rounded border-2"
                    >
                      Book Video Consult
                    </motion.div>
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 5 }}
                      className="mr-5 ml-1 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1 tracking-tight text-md  rounded border-2 
                     font-semibold dark:text-white"
                    >
                      Book Hospital Visit
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div style={{ perspective: 4000 }}>
                <motion.div
                  style={{ x, y, rotateX, rotateY, z: 5 }}
                  drag
                  dragElastic={0.1}
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  whileTap={{ cursor: "grabbing" }}
                  className="h-full w-full  bg-white dark:bg-secondary-dark-bg   rounded-xl "
                >
                  <div className="h-3/4 ml-5 mr-5 mt-1   bg-white dark:bg-secondary-dark-bg relative  rounded-lg border-2  ">
                    <div className=" flex">
                      <div className="mt-0 flex">
                        <motion.div
                          style={{ x, y, rotateX, rotateY, z: 5 }}
                          className='h-5/6 w-1/4 ml-5 mt-3  absolute   bg-white dark:bg-secondary-dark-bg bg-[url("https://images.apollo247.in/doctors/noimagemale.
          png")] bg-cover rounded-full  '
                          draggable="false"
                        ></motion.div>
                      </div>
                      <div className=" mt-0 flex-1">
                        <div className=" ml-48 h-12   bg-white dark:bg-secondary-dark-bg h-13 text-black text-2xl font-semibold text-justify mt-5 tracking-tight  dark:text-white ">
                          Dr. Abhishek Verma
                        </div>
                        <div className=" ml-48 h-10  bg-white dark:bg-secondary-dark-bg h-15   mr-5  tracking-tight text-md font-semibold dark:text-white">
                          PULMONOLOGY RESPIRATORY MEDICINE SPECIALIST
                        </div>
                        <div className=" h-8 ml-48  bg-white dark:bg-secondary-dark-bg">
                          5 Years Experiance
                          <div className="h-8  mb-4 ml-80  bg-white dark:bg-secondary-dark-bg absolute"></div>
                        </div>
                        <div className="h-8 ml-48 mr-10  bg-white dark:bg-secondary-dark-bg">
                          location-
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex ">
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 5 }}
                      className=" ml-5 mr-1 mb-3 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1   tracking-tight text-md font-semibold dark:text-white  rounded border-2"
                    >
                      Book Video Consult
                    </motion.div>
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 5 }}
                      className="mr-5 ml-1 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1 tracking-tight text-md  rounded border-2 
          font-semibold dark:text-white"
                    >
                      Book Hospital Visit
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div style={{ perspective: 4000 }}>
                <motion.div
                  style={{ x, y, rotateX, rotateY, z: 5 }}
                  drag
                  dragElastic={0.1}
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  whileTap={{ cursor: "grabbing" }}
                  className="h-full w-full  bg-white dark:bg-secondary-dark-bg   rounded-xl "
                >
                  <div className="h-3/4 ml-5 mr-5 mt-1   bg-white dark:bg-secondary-dark-bg relative  rounded-lg border-2  ">
                    <div className=" flex">
                      <div className="mt-0 flex">
                        <motion.div
                          style={{ x, y, rotateX, rotateY, z: 5 }}
                          className='h-5/6 w-1/4 ml-5 mt-3  absolute   bg-white dark:bg-secondary-dark-bg bg-[url("https://images.apollo247.in/doctors/noimagemale.png")] bg-cover rounded-full  '
                          draggable="false"
                        ></motion.div>
                      </div>
                      <div className=" mt-0 flex-1">
                        <div className=" ml-48 h-12   bg-white dark:bg-secondary-dark-bg h-13 text-black text-2xl font-semibold text-justify mt-5 tracking-tight  dark:text-white ">
                          Dr. Abhishek Verma
                        </div>
                        <div className=" ml-48 h-10  bg-white dark:bg-secondary-dark-bg h-15   mr-5  tracking-tight text-md font-semibold dark:text-white">
                          PULMONOLOGY RESPIRATORY MEDICINE SPECIALIST
                        </div>
                        <div className=" h-8 ml-48  bg-white dark:bg-secondary-dark-bg">
                          5 Years Experiance
                          <div className="h-8  mb-4 ml-80  bg-white dark:bg-secondary-dark-bg absolute"></div>
                        </div>
                        <div className="h-8 ml-48 mr-10  bg-white dark:bg-secondary-dark-bg">
                          location-
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex ">
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 5 }}
                      className=" ml-5 mr-1 mb-3 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1   tracking-tight text-md font-semibold dark:text-white  rounded border-2"
                    >
                      Book Video Consult
                    </motion.div>
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 5 }}
                      className="mr-5 ml-1 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1 tracking-tight text-md  rounded border-2 
        font-semibold dark:text-white"
                    >
                      Book Hospital Visit
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div style={{ perspective: 4000 }}>
                <motion.div
                  style={{ x, y, rotateX, rotateY, z: 5 }}
                  drag
                  dragElastic={0.1}
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  whileTap={{ cursor: "grabbing" }}
                  className="h-full w-full  bg-white dark:bg-secondary-dark-bg   rounded-xl "
                >
                  <div className="h-3/4 ml-5 mr-5 mt-1   bg-white dark:bg-secondary-dark-bg relative  rounded-lg border-2  ">
                    <div className=" flex">
                      <div className="mt-0 flex">
                        <motion.div
                          style={{ x, y, rotateX, rotateY, z: 5 }}
                          className='h-5/6 w-1/4 ml-5 mt-3  absolute   bg-white dark:bg-secondary-dark-bg bg-[url("https://images.apollo247.in/doctors/noimagemale.png")] bg-cover rounded-full  '
                          draggable="false"
                        ></motion.div>
                      </div>
                      <div className=" mt-0 flex-1">
                        <div className=" ml-48 h-12   bg-white dark:bg-secondary-dark-bg h-13 text-black text-2xl font-semibold text-justify mt-5 tracking-tight  dark:text-white ">
                          Dr. Abhishek Verma
                        </div>
                        <div className=" ml-48 h-10  bg-white dark:bg-secondary-dark-bg h-15   mr-5  tracking-tight text-md font-semibold dark:text-white">
                          PULMONOLOGY RESPIRATORY MEDICINE SPECIALIST
                        </div>
                        <div className=" h-8 ml-48  bg-white dark:bg-secondary-dark-bg">
                          5 Years Experiance
                          <div className="h-8  mb-4 ml-80  bg-white dark:bg-secondary-dark-bg absolute"></div>
                        </div>
                        <div className="h-8 ml-48 mr-10  bg-white dark:bg-secondary-dark-bg">
                          location-
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex ">
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 5 }}
                      className=" ml-5 mr-1 mb-3 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1   tracking-tight text-md font-semibold dark:text-white  rounded border-2"
                    >
                      Book Video Consult
                    </motion.div>
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 5 }}
                      className="mr-5 ml-1 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1 tracking-tight text-md  rounded border-2 
      font-semibold dark:text-white"
                    >
                      Book Hospital Visit
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div style={{ perspective: 4000 }}>
                <motion.div
                  style={{ x, y, rotateX, rotateY, z: 5 }}
                  drag
                  dragElastic={0.1}
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  whileTap={{ cursor: "grabbing" }}
                  className="h-full w-full  bg-white dark:bg-secondary-dark-bg   rounded-xl "
                >
                  <div className="h-3/4 ml-5 mr-5 mt-1   bg-white dark:bg-secondary-dark-bg relative  rounded-lg border-2  ">
                    <div className=" flex">
                      <div className="mt-0 flex">
                        <motion.div
                          style={{ x, y, rotateX, rotateY, z: 5 }}
                          className='h-5/6 w-1/4 ml-5 mt-3  absolute   bg-white dark:bg-secondary-dark-bg bg-[url("https://images.apollo247.in/doctors/noimagemale.png")] bg-cover rounded-full  '
                          draggable="false"
                        ></motion.div>
                      </div>
                      <div className=" mt-0 flex-1">
                        <div className=" ml-48 h-12   bg-white dark:bg-secondary-dark-bg h-13 text-black text-2xl font-semibold text-justify mt-5 tracking-tight  dark:text-white ">
                          Dr. Abhishek Verma
                        </div>
                        <div className=" ml-48 h-10  bg-white dark:bg-secondary-dark-bg h-15   mr-5  tracking-tight text-md font-semibold dark:text-white">
                          PULMONOLOGY RESPIRATORY MEDICINE SPECIALIST
                        </div>
                        <div className=" h-8 ml-48  bg-white dark:bg-secondary-dark-bg">
                          5 Years Experiance
                          <div className="h-8  mb-4 ml-80  bg-white dark:bg-secondary-dark-bg absolute"></div>
                        </div>
                        <div className="h-8 ml-48 mr-10  bg-white dark:bg-secondary-dark-bg">
                          location-
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex ">
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 5 }}
                      className=" ml-5 mr-1 mb-3 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1   tracking-tight text-md font-semibold dark:text-white  rounded border-2"
                    >
                      Book Video Consult
                    </motion.div>
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 5 }}
                      className="mr-5 ml-1 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1 tracking-tight text-md  rounded border-2  font-semibold dark:text-white"
                    >
                      Book Hospital Visit
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div style={{ perspective: 4000 }}>
                <motion.div
                  style={{ x, y, rotateX, rotateY, z: 5 }}
                  drag
                  dragElastic={0.1}
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  whileTap={{ cursor: "grabbing" }}
                  className="h-full w-full  bg-white dark:bg-secondary-dark-bg   rounded-xl "
                >
                  <div className="h-3/4 ml-5 mr-5 mt-1   bg-white dark:bg-secondary-dark-bg relative  rounded-lg border-2  ">
                    <div className=" flex">
                      <div className="mt-0 flex">
                        <motion.div
                          style={{ x, y, rotateX, rotateY, z: 5 }}
                          className='h-5/6 w-1/4 ml-5 mt-3  absolute   bg-white dark:bg-secondary-dark-bg bg-[url("https://images.apollo247.in/doctors/noimagemale.png")] bg-cover rounded-full  '
                          draggable="false"
                        ></motion.div>
                      </div>
                      <div className=" mt-0 flex-1">
                        <div className=" ml-48 h-12   bg-white dark:bg-secondary-dark-bg h-13 text-black text-2xl font-semibold text-justify mt-5 tracking-tight  dark:text-white ">
                          Dr. Abhishek Verma
                        </div>
                        <div className=" ml-48 h-10  bg-white dark:bg-secondary-dark-bg h-15   mr-5  tracking-tight text-md font-semibold dark:text-white">
                          PULMONOLOGY RESPIRATORY MEDICINE SPECIALIST
                        </div>
                        <div className=" h-8 ml-48  bg-white dark:bg-secondary-dark-bg">
                          5 Years Experiance
                          <div className="h-8  mb-4 ml-80  bg-white dark:bg-secondary-dark-bg absolute"></div>
                        </div>
                        <div className="h-8 ml-48 mr-10  bg-white dark:bg-secondary-dark-bg">
                          location-
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex ">
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 5 }}
                      className=" ml-5 mr-1 mb-3 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1   tracking-tight text-md font-semibold dark:text-white  rounded border-2"
                    >
                      Book Video Consult
                    </motion.div>
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 5 }}
                      className="mr-5 ml-1 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1 tracking-tight text-md  rounded border-2 
                     font-semibold dark:text-white"
                    >
                      Book Hospital Visit
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              <div style={{ perspective: 4000 }}>
              <motion.div
                style={{ x, y, rotateX, rotateY, z: 5 }}
                drag
                dragElastic={0.10}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                className="h-full w-full  bg-white dark:bg-secondary-dark-bg   rounded-xl "
                >
                <div className="h-3/4 ml-5 mr-5 mt-1   bg-white dark:bg-secondary-dark-bg relative  rounded-lg border-2  ">
                  <div className=" flex">
                    <div className="mt-0 flex">
                      <motion.div style={{x,y,rotateX,rotateY , z:5}} className='h-5/6 w-1/4 ml-5 mt-3  absolute   bg-white dark:bg-secondary-dark-bg bg-[url("https://images.apollo247.in/doctors/noimagemale.png")] bg-cover rounded-full  ' draggable='false'>
                      
                      </motion.div>
                    </div>
                    <div className=" mt-0 flex-1">
                      <div className=" ml-48 h-12   bg-white dark:bg-secondary-dark-bg h-13 text-black text-2xl font-semibold text-justify mt-5 tracking-tight  dark:text-white ">
                        Dr. Abhishek Verma
                      </div>
                      <div className=" ml-48 h-10  bg-white dark:bg-secondary-dark-bg h-15   mr-5  tracking-tight text-md font-semibold dark:text-white">
                        PULMONOLOGY RESPIRATORY MEDICINE SPECIALIST
                      </div>
                      <div className=" h-8 ml-48  bg-white dark:bg-secondary-dark-bg">
                        5 Years Experiance
                        <div className="h-8  mb-4 ml-80  bg-white dark:bg-secondary-dark-bg absolute"></div>
                      </div>
                      <div className="h-8 ml-48 mr-10  bg-white dark:bg-secondary-dark-bg">
                        location-
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex ">
                  <motion.div style={{x,y,rotateX,rotateY , z:5}}
                   className=" ml-5 mr-1 mb-3 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1   tracking-tight text-md font-semibold dark:text-white  rounded border-2" >
                    Book Video Consult
                  </motion.div>
                  <motion.div style={{x,y,rotateX,rotateY , z:5}} className="mr-5 ml-1 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1 tracking-tight text-md  rounded border-2  font-semibold dark:text-white">
                    Book Hospital Visit
                  </motion.div>
                </div>
              </motion.div>
            </div>
            <div style={{ perspective: 4000 }}>
            <motion.div
              style={{ x, y, rotateX, rotateY, z: 5 }}
              drag
              dragElastic={0.10}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing" }}
              className="h-full w-full  bg-white dark:bg-secondary-dark-bg   rounded-xl "
              >
              <div className="h-3/4 ml-5 mr-5 mt-1   bg-white dark:bg-secondary-dark-bg relative  rounded-lg border-2  ">
                <div className=" flex">
                  <div className="mt-0 flex">
                    <motion.div style={{x,y,rotateX,rotateY , z:5}} className='h-5/6 w-1/4 ml-5 mt-3  absolute   bg-white dark:bg-secondary-dark-bg bg-[url("https://images.apollo247.in/doctors/noimagemale.png")] bg-cover rounded-full  ' draggable='false'>
                    
                    </motion.div>
                  </div>
                  <div className=" mt-0 flex-1">
                    <div className=" ml-48 h-12   bg-white dark:bg-secondary-dark-bg h-13 text-black text-2xl font-semibold text-justify mt-5 tracking-tight  dark:text-white ">
                      Dr. Abhishek Verma
                    </div>
                    <div className=" ml-48 h-10  bg-white dark:bg-secondary-dark-bg h-15   mr-5  tracking-tight text-md font-semibold dark:text-white">
                      PULMONOLOGY RESPIRATORY MEDICINE SPECIALIST
                    </div>
                    <div className=" h-8 ml-48  bg-white dark:bg-secondary-dark-bg">
                      5 Years Experiance
                      <div className="h-8  mb-4 ml-80  bg-white dark:bg-secondary-dark-bg absolute"></div>
                    </div>
                    <div className="h-8 ml-48 mr-10  bg-white dark:bg-secondary-dark-bg">
                      location-
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex ">
                <motion.div style={{x,y,rotateX,rotateY , z:5}}
                 className=" ml-5 mr-1 mb-3 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1   tracking-tight text-md font-semibold dark:text-white  rounded border-2" >
                  Book Video Consult
                </motion.div>
                <motion.div style={{x,y,rotateX,rotateY , z:5}} className="mr-5 ml-1 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1 tracking-tight text-md  rounded border-2 
        font-semibold dark:text-white">
                  Book Hospital Visit
                </motion.div>
              </div>
            </motion.div>
          </div>
              <div className="h-full w-2/4 bg-yellow-800">
                <div className="h-3/4 ml-5 mr-5 mt-5  bg-green-900 relative   ">
                  <div className=" flex">
                    <div className="mt-0 flex">
                      <div className='h-5/6 w-1/4 ml-5 mt-3  absolute bg-[url("https://images.apollo247.in/doctors/noimagemale.png")] bg-cover bg-slate-600  rounded-full '></div>
                    </div>
                    <div className=" mt-0 flex-1">
                      <div className=" ml-48 h-12  bg-green-200 h-13 text-black text-2xl font-semibold text-justify mt-5 tracking-tight  dark:text-white ">
                        Dr. Abhishek Verma
                      </div>
                      <div className=" ml-48 h-12 bg-green-600 h-15   mr-5  tracking-tight text-md font-semibold dark:text-white">
                        PULMONOLOGY RESPIRATORY MEDICINE SPECIALIST
                      </div>
                      <div
                        className=" h-8 
                                          ml-48 bg-cyan-400"
                      >
                        5 Years Experiance
                        <div className="h-8  mb-4 ml-80 bg-stone-600 absolute"></div>
                      </div>
                      <div className="h-8 ml-48 mr-10 bg-pink-500">
                        location-
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex ">
                  <div className=" ml-5 mb-3 h-28 w-2/4 bg-yellow-600 h-15  text-center mt-1   tracking-tight text-md font-semibold dark:text-white">
                    Book Video Consult
                  </div>
                  <div className="mr-5 h-28 w-2/4 bg-yellow-200 h-15  text-center mt-1 tracking-tight text-md font-semibold dark:text-white">
                    Book Hospital Visit
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-2/5 w-full  bg-sky-700">
              <div className="h-full w-2/4 "></div>
              <div className="h-full w-2/4 bg-sky-200"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
/*
            <div className="  md: flex h-2/5 w-full  bg-sky-400">
              <div className="h-full w-2/4 bg-red-800"></div>
              <div className="h-full w-2/4 bg-yellow-800"></div>
            </div>
            <div className="flex h-2/5 w-full  bg-sky-700">
            <div className="h-full w-2/4 bg-red-200"></div>
            <div className="h-full w-2/4 bg-sky-200"></div>
          </div>
          */
