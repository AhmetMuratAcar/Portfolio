"use client";
import React from "react";

const AboutSection = () => {
    return (
        <section 
            id="About"
            className="bg-[#FFFFFF]"
            style={{
                width: '100vw'
            }}
        >
            <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
                <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
                    About Me
                </h2>
                <p className="text-lg lg:text-xl text-left text-gray-600 mt-12">
                    Since graduating from college with a B.S. in biotechnology, I have worked as a QA engineer while also gaining experience in the pharmaceutical industry as a chemist. My background in both fields has strengthened my analytical skills, attention to detail, and problem-solving abilities. About two years ago, I joined GTDM as a QA engineer, and I’ve never been happier! I take pride in designing and implementing efficient testing processes, ensuring software quality, and driving automation efforts. I am always looking to learn and improve my skills, and I am currently focusing on low-level languages like Go and C to enhance my approach to testing and automation.
                    <br/>
                    <br/>
                    In my free time, I enjoy going to the gym (I NEVER skip legs 😤), watching sports with friends, and playing
                    digital card games. Feel free to hit me up if you want to theorycraft some spice for Yu-Gi-Oh!, Pokemon, Hearthstone,
                    or Marvel Snap ☝️🤓.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
