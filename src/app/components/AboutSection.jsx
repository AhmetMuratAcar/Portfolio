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
                    Since graduating from college with a B.S. in biotechnology, I have worked in many different industries.
                    I was on the QA engineering end of things for a bit before working as a chemist in the
                    pharmaceutical industry. However, about 2 years ago, I became a full-stack software developer at GTDM and
                    I've never been happier! I am a self-taught developer who prides himself on the ability to adapt to any
                    environment and find creative solutions to difficult problems. As a software developer, I have been able to
                    scratch that problem-solving itch every single day. I am always looking to learn and improve my skills. Currently
                    I am focusing on learning and working with low level languages like Go and C.
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
