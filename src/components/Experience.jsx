import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Commit the Change",
      position: "Software Developer",
      date: "October 2022-Present",
      description: [
        {
          id: 1,
          text: "Accomplished migration of the NPO Cell Dog’s (dog rehabilitation program) Google Sheets spreadsheet to a website for employees to easily create, update, and find relevant information, using PostgreSQL, Express, React, and Node.js.",
        },
        {
          id: 2,
          text: "Implemented various features including Backend Provider, Login/Forgot Password pages with Firebase auth, Integration of Backend to Frontend, Frontend Routing, Navbar, and various viewing options for multiple pages such as Desktop and Mobile view, resulting in a more efficient and user-friendly experience.",
        },
      ],
    },
    {
      id: 2,
      company:
        "UC Irvine Donald Bren School of Information and Computer Sciences",
      position: "Lab Tutor",
      date: "September 2022-December 2022",
      description: [
        {
          id: 1,
          text: "Helped 44 students excel in object-oriented programming with Python and its libraries, resulting in a thorough understanding of Python fundamentals. Achieved by creating engaging resources and offering personalized support in understanding Python concepts such as exception tracebacks, different types of exceptions, and debugging.",
        },
      ],
    },
  ];
  return (
    <div
      id="experience"
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
        </div>
        <div>
          {experiences.map(({ id, company, position, date, description }) => (
            <div
              key={id}
              className="mt-10 border border-gray-600 rounded-xl p-4"
            >
              <div className="text-xl font-semibold">{company}</div>
              <div className="text-lg italic">
                {position} - {date}
              </div>
              <div className="border-b mb-1" />
              {description.map(({ id, text }) => (
                <div key={id} className="mb-1">
                  - {text}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
