<div>
  <div className=" h-full w-full">
    <div className="">
      <section className=" pl-0 sm:  h-screen w-full   ">
        <header className="bg-white dark:bg-secondary-dark-bg h-28  flex  sticky">
          <div
            className=" mt-7 w-screen space-x-4 bg-white dark:bg-secondary-dark-bg md:bg-white flex relative ml-10 mr-80  h-10 md:w-full 
       md:space-x-4 "
          >
            <div className=" h-12  w-60  md:h-10  md:w-3/4 bg-white dark:bg-secondary-dark-bg ">
              <DropDown
                currentMode={currentMode}
                selectedCity={selectedCity}
                filterCardsByCity={filterCardsByCity}
              ></DropDown>
            </div>
            <div className="w-8/12 md:h-10 md:w-full bg-white dark:bg-secondary-dark-bg  ">
              <DropDown1 currentMode={currentMode}></DropDown1>
            </div>{" "}
          </div>
        </header>
        <div className=" border-2 bg-white dark:bg-secondary-dark-bg">
          {details.map((x) => {
            return (
              <div className="flex">
                <div className="h-full ml-5 mr-5 mt-1  w-full  bg-white dark:bg-secondary-dark-bg  relative  rounded-lg   ">
                  <div className=" flex">
                    <div className="mt-0 flex">
                      <motion.div
                        style={{ x, y, rotateX, rotateY, z: 5 }}
                        className='h-56 w-52 ml-5 mt-3  absolute   bg-white dark:bg-secondary-dark-bg bg-[url("https://images.apollo247.in/doctors/noimagemale.png")] bg-cover rounded-full  '
                        draggable="false"
                      ></motion.div>
                    </div>
                    <div className=" mt-0  ml-10 flex-1">
                      <div
                        className=" ml-48 h-12   bg-white dark:bg-secondary-dark-bg h-13 text-black 
              text-2xl font-semibold text-justify mt-5 tracking-tight  dark:text-white "
                      >
                        {x.Name}
                      </div>
                      <div
                        className=" ml-48 h-10  bg-white dark:bg-secondary-dark-bg h-15   mr-5  
               tracking-tight text-md font-semibold dark:text-white"
                      >
                        {x.Edu}
                      </div>
                      <div className=" h-8 ml-48  bg-white dark:bg-secondary-dark-bg">
                        {x.Exp}
                        <div className="h-8  mb-4 ml-80  bg-white dark:bg-secondary-dark-bg absolute"></div>
                      </div>
                      <div className="h-8 ml-48 mr-10  bg-white dark:bg-secondary-dark-bg">
                        {x.City}
                      </div>{" "}
                      <div className="  bg-white dark:bg-secondary-dark-bg  mt-24  h-36">
                        {x.Det}
                      </div>
                    </div>
                    <div className="h-full bg-white dark:bg-secondary-dark-bg  ">
                      <div className="ml-3 mr-3 h-full bg-white dark:bg-secondary-dark-bg ">
                        <h1 className="header">Book Appointment</h1>
                        <div className=" h-2/4  bg-white dark:bg-secondary-dark-bg ">
                          <Calendar
                            onChange={setDate}
                            value={date}
                            onClickDay={() => setShowTime(true)}
                          />
                        </div>
                      </div>
                      <div>
                        {date.length > 0 ? (
                          <p>
                            <span>Start:</span>
                            {date[0].toDateString()}
                            &nbsp; &nbsp;
                            <span>End:</span>
                            {date[1].toDateString()}
                          </p>
                        ) : (
                          <p>
                            <span>selected date for Appointment:</span>
                            {date.toDateString()}
                          </p>
                        )}
                        <div className=" rounded-sm bg-gray-100  w-full flex ">
                          <Time showTime={showTime} date={date} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {items.map((card, index) => {
          return (
            <div
              className="grid grid-cols-2   h-2/5 w-full mt-5 bg-white dark:bg-secondary-dark-bg "
              onClick={() => {
                detailpage(card);
                scrollWin();
              }}
            >
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
                        <div
                          className=" ml-48 h-12   bg-white dark:bg-secondary-dark-bg h-13 text-black 
                     text-2xl font-semibold text-justify mt-5 tracking-tight  dark:text-white "
                        >
                          {card.Name}
                        </div>
                        <div
                          className=" ml-48 h-10  bg-white dark:bg-secondary-dark-bg h-15   mr-5  
                       tracking-tight text-md font-semibold dark:text-white"
                        >
                          {card.Edu}
                        </div>
                        <div className=" h-8 ml-48  bg-white dark:bg-secondary-dark-bg">
                          {card.Exp}
                          <div className="h-8  mb-4 ml-80  bg-white dark:bg-secondary-dark-bg absolute"></div>
                        </div>
                        <div className="h-8 ml-48 mr-10  bg-white dark:bg-secondary-dark-bg">
                          {card.City}
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
          );
        })}
      </section>
    </div>
  </div>
</div>;
