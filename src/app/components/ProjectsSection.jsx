"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
    const projects = [
        {
            name: "Grabby",
            image: "/images/projects/Grabby/grabby1.png",
            github: "https://github.com/AhmetMuratAcar/grabby",
            description: "Grabby is a website for college students to easily add important dates from their syllabuses to their Google Calendars.",
            techstack: [
                { name: "JavaScript", logo: "/images/techstack/JavaScript-logo.png" },
                { name: "Node.js", logo: "/images/techstack/node-logo.png" },
                { name: "Express.js", logo: "/images/techstack/express-logo.png" },
                { name: "EJS", logo: "/images/techstack/ejs-logo.svg" },
                { name: "Bootstrap", logo: "/images/techstack/bootstrap-logo.png" }
            ]
        },
        {
            name: "CrossSeq",
            image: "/images/projects/CrossSeq/dna1.png",
            github: "https://github.com/AhmetMuratAcar/CrossSeq",
            description: "CrossSeq is a simple visualization tool for comparing and contrasting the coding regions of mRNA FASTA sequences.",
            techstack: [
                { name: "Python", logo: "/images/techstack/Python-logo.png" },
                { name: "CustomTkinter", logo: "/images/techstack/customtkinter-logo.png" },
                { name: "Pillow", logo: "/images/techstack/pillow-logo.png" }
            ]
        },
        {
            name: "PootBot",
            image: "/images/projects/PootBot/Example.webp",
            github: "https://github.com/AhmetMuratAcar/PootBot",
            description: "PootBot is a Discord bot for organizing custom Discord roles to track and organize user participation.",
            techstack: [
                { name: "Python", logo: "/images/techstack/Python-logo.png" },
                { name: "Discord.py", logo: "/images/techstack/discordpy-logo.png" },
                { name: "Oracle Cloud", logo: "/images/techstack/oci-logo.png" },
                { name: "tmux", logo: "/images/techstack/tmux-logo.png" }
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
