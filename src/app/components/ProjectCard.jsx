import React, { useState } from 'react';
import TechBox from './TechBox';

const ProjectCard = ({ project }) => {
    const [activeTab, setActiveTab] = useState('description');

    const sliderStyles = {
        transform: activeTab === 'description' ? 'translateX(0%)' : 'translateX(100%)',
    };

    return (
        <div className="bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] rounded-lg mx-auto max-w-4xl my-6">
            {/* Title and Github icon */}
            <div className="flex justify-center items-center relative p-4">
                <h3 className="text-2xl font-bold text-gray-800 flex-1 text-center">{project.name}</h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="absolute right-4">
                    <img src="/images/github-mark.png" alt="GitHub" className="h-8 w-8" />
                </a>
            </div>

            {/* Sliding Tabs */}
            <div className="relative w-full max-w-md mx-auto mb-8">
                <div className="bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-[#3761E8] h-full rounded-full absolute left-0 top-0 w-1/2 transition-transform duration-300 ease-out" style={sliderStyles}></div>
                    <div className="flex">
                        <button 
                            className="flex-1 p-2 text-center transition duration-300 ease-out focus:outline-none text-black"
                            onClick={() => setActiveTab('description')}
                            style={{ zIndex: 1 }}
                        >
                            Description
                        </button>
                        <button 
                            className="flex-1 p-2 text-center transition duration-300 ease-out focus:outline-none text-black"
                            onClick={() => setActiveTab('techstack')}
                            style={{ zIndex: 1 }}
                        >
                            Tech Stack
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="content-area mt-4 pb-8" style={{ minHeight: '200px' }}>
                {activeTab === 'description' && (
                    <div className="description-tab px-20">
                        <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-lg" />
                        <p className="text-gray-600 mt-4">{project.description}</p>
                    </div>
                )}
                {activeTab === 'techstack' && (
                    <div className="techstack-tab px-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {project.techstack.map((tech, index) => (
                                <TechBox key={index} logo={tech.logo} name={tech.name} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
