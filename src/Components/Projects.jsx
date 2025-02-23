import React from 'react';

const projects = [
  { 
    name: 'VR Website', 
    owner: 'Barda',
    budget: 70000, 
    profitability: 4000, 
    hours: 100, 
    status: 'completed',
    actualHours: '1000 total hours',
    date: '2024-02-12'
  },
  { 
    name: 'Neo', 
    owner: 'Barda',
    budget: 70000, 
    profitability: 4000, 
    hours: 100, 
    status: 'warning',
    actualHours: '1000 total hours',
    date: '2024-02-14'
  },
  { 
    name: 'VR Website', 
    owner: 'Barda',
    budget: 70000, 
    profitability: 4000, 
    hours: 100, 
    status: 'on-track',
    actualHours: '2000 total hours',
    date: '2024-02-13'
  },
  { 
    name: 'Insurance App', 
    owner: 'Verh',
    budget: 70000, 
    profitability: -2500, 
    hours: 100, 
    status: 'over-budget',
    actualHours: '100 hours over Budget!',
    date: '2024-02-15'
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm space-y-4 sm:space-y-0">
      <div className="flex flex-row-reverse justify-between space-x-4">
        <img
          src="https://up.yimg.com/ib/th?id=OIP.ITZS-JJA36ScBF8st6LYCgHaEK&pid=Api&rs=1&c=1&qlt=95&w=218&h=122"
          alt={project.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="font-semibold">{project.name}</h3>
          <div className="text-sm text-gray-400">{project.owner}</div>
        </div>
      </div>
      <div className="flex-1 w-full ">
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>Total Budget: {project.budget}€</span>
          <span className={project.profitability < 0 ? 'text-red-500' : 'text-emerald-500'}>
            {project.profitability > 0 ? '+' : ''}{project.profitability}€
          </span>
        </div>
        <div className="relative pt-1">
          <div className={`h-2 rounded-full ${
            project.status === 'over-budget' ? 'bg-red-500' :
            project.status === 'warning' ? 'bg-yellow-500' :
            project.status === 'on-track' ? 'bg-emerald-500' :
            'bg-blue-500'
          }`} style={{ width: '80%' }}></div>
        </div>
      </div>
      <div className="text-right w-full sm:w-auto">
        <div className="text-sm text-gray-500">{project.actualHours}</div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
