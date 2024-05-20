"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
    const projects = [
        {
            name: "Grabby",
            image: "/path/to/project-image.jpg",
            github: "https://github.com/AhmetMuratAcar/grabby",
            description: "Grabby is a website for college students to easily add important dates from their syllabuses to their Google Calendars.",
            techstack: [
                { name: "JS", logo: "/path/to/react-logo.svg" },
                { name: "Node.js", logo: "/path/to/nodejs-logo.svg" },
                { name: "Express", logo: "/path/to/nodejs-logo.svg" },
                { name: "EJS", logo: "/path/to/nodejs-logo.svg" },
                { name: "Bootstrap", logo: "/path/to/nodejs-logo.svg" }
            ]
        },
        {
            name: "CrossSeq",
            image: "/path/to/project-image.jpg",
            github: "https://github.com/AhmetMuratAcar/CrossSeq",
            description: "CrossSeq is a simple visualization tool for comparing and contrasting the coding regions of mRNA FASTA sequences.",
            techstack: [
                { name: "Python", logo: "/path/to/react-logo.svg" },
                { name: "CustomTkinter", logo: "/path/to/nodejs-logo.svg" },
                { name: "Pillow", logo: "/path/to/nodejs-logo.svg" }
            ]
        },
        {
            name: "PootBot",
            image: "/path/to/project-image.jpg",
            github: "https://github.com/AhmetMuratAcar/PootBot",
            description: "PootBot is a Discord bot for organizing custom Discord roles to track and organize user participation in popular games.",
            techstack: [
                { name: "Python", logo: "/path/to/react-logo.svg" },
                { name: "Discord.py", logo: "/path/to/nodejs-logo.svg" },
                { name: "OCI", logo: "/path/to/nodejs-logo.svg" }
            ]
        }
    ];

    return (
        <section 
            id="Projects"
            className="bg-[#FFFFFF]"
            style={{ width: '100vw' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                <h2 className="text-5xl font-bold text-center pb-5">Projects</h2>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
                <p className="text-lg lg:text-xl text-center text-gray-600 mt-12">
                    . . . and many more to come!
                </p>
            </div>
        </section>
    );
};

export default ProjectsSection;
