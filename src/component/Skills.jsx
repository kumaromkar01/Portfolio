import React from 'react';

// A reusable component for individual skill tags
const SkillBadge = ({ name }) => (
  <span className="bg-gray-700 text-gray-200 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-md">
    {name}
  </span>
);

// A component for a category of skills (e.g., "Databases")
const SkillCategory = ({ title, skills }) => (
  <div className="bg-[#111827] p-6 rounded-lg border border-gray-700/50 shadow-sm">
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <div className="flex flex-wrap">
      {skills.map((skill, index) => (
        <SkillBadge key={index} name={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  // Data for the technical skills section.
  // You can easily add or remove skills and categories here.
  const skillsData = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "HTML"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Developer Tools",
      skills: ["Git", "Jupyter Notebook", "Google Colab", "Postman","Github", "VS Code" ]
    },
    {
        title : "Libraries/Frameworks",
        skills : ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"]
    },
    {
        title : "Coursework",
        skills : ["Data Structures", "Algorithms", "Operating Systems", "DBMS", "OOP"]
    },
    {
        title : "Generative AI",
        skills : ["Groq API","Gemini API","Open AI"]
    }
  ];

  return (
    <div className="bg-black  w-full font-sans">
      <div className="container mx-auto px-4 py-1 sm:py-2">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            My toolkit for building and innovating.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
