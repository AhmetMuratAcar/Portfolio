import React from "react";
import TechBox from "./TechBox";

const TechSection = () => {
    const technologies = [
        { logo: "/images/techstack/JavaScript-logo.png", name: "JavaScript" },
        { logo: "/images/techstack/Python-logo.png", name: "Python" },
        { logo: "/images/techstack/java-logo.png", name: "Java" },
        { logo: "/images/techstack/html-logo.png", name: "HTML" },
        { logo: "/images/techstack/CSS-logo.png", name: "CSS" },
        { logo: "/images/techstack/sql-logo.png", name: "SQL" },
        { logo: "/images/techstack/postgre-logo.png", name: "PostgreSQL" },
        { logo: "/images/techstack/ejs-logo.svg", name: "EJS" },
        { logo: "/images/techstack/react-logo.png", name: "React" },
        { logo: "/images/techstack/nextjs-logo.svg", name: "Next.JS" },
        { logo: "/images/techstack/node-logo.png", name: "Node.js" },
        { logo: "/images/techstack/express-logo.png", name: "Express.js" },
        { logo: "/images/techstack/postman-logo.webp", name: "Postman" },
        { logo: "/images/techstack/git-logo.png", name: "Git" },
        { logo: "/images/techstack/bootstrap-logo.png", name: "Bootstrap" },
        { logo: "/images/techstack/tailwind-logo.png", name: "Tailwind" },
        { logo: "/images/techstack/docker-mark-blue.png", name: "Docker" },
        { logo: "/images/techstack/playwright-logo.png", name: "Playwright" },
        { logo: "/images/techstack/selenium-logo.png", name: "Selenium" },
        { logo: "/images/techstack/jira-logo.png", name: "Jira" },
    ];

    return (
        <section 
            id="Techstack"
            className="bg-[#EFF8FF]"
            style={{
                width: '100vw'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                <h2 className="text-5xl font-bold text-center">
                    Technologies and Tools
                </h2>
                <p className="text-lg lg:text-xl text-left text-gray-600 mt-12 mb-5">
                    The following are some of the technologies and tools I am experienced with:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {technologies.map((tech, index) => (
                        <TechBox key={index} logo={tech.logo} name={tech.name} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechSection;
