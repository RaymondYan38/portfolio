import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Blog Application",
      date: "Winter 2023",
      description: [
        {
          id: 1,
          text: "Designed and implemented a blog application with MongoDB, Express.js, React.js, and Node.js with JWT authentication that allows users to login/logout of their own account, create/edit their own articles, and read articles written by other users.",
        },
      ],
    },
    {
      id: 2,
      title: "Valorant Stats Discord Bot",
      date: "Summer 2022",
      description: [
        {
          id: 1,
          text: "Built a Python application, utilizing the Selenium and Discord libraries to create a web scraping 24/7 online Discord bot that scrapes Valorant player’s statistics off Tracker.gg and provides player’s statistics through text channels.",
        },
      ],
    },
    {
      id: 3,
      title: "Zot Point Average",
      date: "Zot Hacks Winner 2021",
      description: [
        {
          id: 1,
          text: "Developed a chrome extension using Javascript, HTML, and CSS with a team of 5, which won the Zot Hacks 2021. The extension displays the GPA and student grade distribution of classes within the UCI Schedule of Classes utilizing information from the Peter Portal API.",
        },
      ],
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="-mt-20">
          {projects.map(({ id, title, date, description }) => (
            <div
              key={id}
              className="mt-10 border border-gray-600 rounded-xl p-4"
            >
              <div className="text-xl font-semibold">{title}</div>
              <div className="text-lg italic">{date}</div>
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

export default Projects;
