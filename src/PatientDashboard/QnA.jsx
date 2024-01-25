import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QnA.css';
import { questions } from '../data/PatientData/dummy';
const QnA = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate('/QandA');
  }

  const [data, setData] = useState(questions);

  // Function to toggle the answer visibility
  const toggleAnswer = (id) => {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return { ...item, isOpen: !item.isOpen };
        } else {
          return { ...item, isOpen: false };
        }
      });
    });
  };

  return (
    <div>
      <button
        type="button"
        className="rounded-none hover:rounded-lg bg-blue-400 hover:bg-blue-600 text-3xl"
        onClick={navigateToContacts}
      >
        Ask Your Questions
      </button>

      <section className="absolute h-[63.41%] w-[65.83%] top-[21.07%] right-[32.08%] bottom-[15.52%] left-[82.08%] text-left text-3xl text-neutral-800 font-headings-typography-size-4">
        {data.map((item) => (
          <div key={item.id} className="mb-4">
            <div
              className="question-box cursor-pointer"
              onClick={() => toggleAnswer(item.id)}
            >
              <div className="h-[25.93%] w-[88.49%] text-lg text-neutral-600 border-2">
                {item.question}
              </div>
              <div className="h-[30.53%] w-[8.28%] rounded-lg bg-blue-700" />
              <img
                className="h-[1.96%] w-[10.72%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-36810.svg"
              />
            </div>
            {item.isOpen && (
              <div className="h-[23.26%]">
                <div className="h-full w-full rounded-2xl bg-neutral-100 shadow-[0px_5px_16px_rgba(8,_15,_52,_0.06)]" />
                <div className="h-[34.03%] w-[88.52%]">
                  <div className="h-[67.38%] w-[80.44%] leading-[28px] font-medium">
                    {item.short_answer}
                  </div>
                  <img
                    className="h-full w-[8.28%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-36813.svg"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default QnA;
