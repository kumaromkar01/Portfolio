import React from 'react';

// Reusable component for technology badges
const TechBadge = ({ tech }) => (
  <span className="bg-gray-700 text-gray-300 text-xs font-medium mr-2 mb-2 px-2.5 py-1 rounded-full">
    {tech}
  </span>
);

// Reusable button component
const ProjectButton = ({ href, children, primary = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block text-sm font-semibold py-2 px-5 rounded-md transition-colors duration-300 ${
      primary
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
    }`}
  >
    {children}
  </a>
);


// Component for a single project card
const ProjectCard = ({ project }) => (
  <div className="bg-[#111827] rounded-lg border border-gray-700/50 shadow-sm overflow-hidden flex flex-col">
    <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-48 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/000000/FFFFFF?text=Project+Image'; }}
    />
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 leading-relaxed mb-4 flex-grow">{project.description}</p>
      <div className="mb-4">
        <div className="flex flex-wrap">
          {project.technologies.map((tech, index) => (
            <TechBadge key={index} tech={tech} />
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-auto">
        <ProjectButton href={project.demoUrl} primary>View Demo</ProjectButton>
        <ProjectButton href={project.sourceUrl}>Source Code</ProjectButton>
      </div>
    </div>
  </div>
);


const Project = () => {
  // Data for your projects.
  // You can easily add, remove, or edit projects here.
  const projectsData = [
    {
      title: "PeerPlex",
      description: "Designed interactive book listing and commenting feature to foster collaborative learning, Enabled image uploads via Cloudinary with secure URL storage in MongoDB, Implemented JWT authentication and deployed full-stack app",
      technologies: ["TypeScript", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Cloudinary", "Vercel", "Render"],
      imageUrl: "/Peerplex.png",
      demoUrl: "https://peerplex.vercel.app",
      sourceUrl: "https://github.com/kumaromkar01/PeerPlex"
    },
    {
      title: "Placement Predictor",
      description: "This is a fun project where machine learning model based on logistic regression is used to predict the chances of getting campus placement for cse and ece branch.",
      technologies: ["Streamlit","Python","Logistic Regression"],
      imageUrl: "\PP.png",
      demoUrl: "https://isplacedpredictor.streamlit.app/",
      sourceUrl: "https://github.com/kumaromkar01/PlacementPredictor"
    },
    {
      title: "Real-time Chat Application",
      description: "Developed a secure real-time messaging application with private and group chat functionalities, emoji support, and push notifications. Leveraged WebSocket technology for instant communication.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "DaisyUI", "Render", "Postman", "VS Code"],
      imageUrl: "/ChatApp.png",
      demoUrl: "https://chatapp-tavp.onrender.com/login",
      sourceUrl: "https://github.com/kumaromkar01/PingMe"
    },
    {
      title: "Expense Tracker",
      description: "A web-based application to help users track expenses and manage budget. Features include transaction logs.",
      technologies: [ "React.js","Tailwind CSS","Git & Github"],
      imageUrl: "/ET.png",
      demoUrl: "https://kumaromkar01.github.io/FamilyEconomy/",
      sourceUrl: "https://github.com/kumaromkar01/FamilyEconomy"
    }
  ];

  return (
    <div className="bg-black min-h-screen w-full font-sans">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            My Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
