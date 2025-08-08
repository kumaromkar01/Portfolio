import React from 'react';


const WorkExperienceCard = ({ title, company, date, description }) => (
  <div className="bg-[#111827] p-6 rounded-lg border border-gray-700/50 shadow-sm hover:border-blue-500/50 transition-colors duration-300">
    <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
    <p className="text-gray-400 text-sm mb-4">{company} | {date}</p>
    <p className="text-gray-300 leading-relaxed">
      {description}
    </p>
  </div>
);

const  WorkExperience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "IIT ROPAR",
      date: "May 2025 - July 2025",
      description: "Built secure role-based authorization and student’s profile in instructor's view, Developed a prerequisite generation engine using Gemini API, later migrated to Groq AI for scalability,Manually tested the features and handled production deployment with 99%+ uptime on Vercel and Render"
    },
    {
      title: "Web Team Lead",
      company: "E-cell NIT Patna",
      date: "Since Jan 2024 ",
      description: " Led the development of the club’s official website using React.js and Tailwind CSS, Deployed on Vercel and optimized SEO through Google Search Console, Improved web traffic by 20% by defining search terms, description and meta data."
    },
  ];

  return (
    <div className="bg-black  w-full font-sans">
      <div className="container mx-auto px-4 py-12 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Journey through my professional growth and contributions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-11">
          {experiences.map((exp, index) => (
            <WorkExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              date={exp.date}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
