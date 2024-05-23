"use client"
import React from "react";
import { TypeAnimation } from "react-type-animation";

const IntroductionSection = () => {
    return (
        <section
            id="Introduction"
            style={{
                backgroundImage: "url('/images/cloudBg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div className="flex flex-col w-auto max-w-4xl items-center space-y-10">
                <div className="text-center">
                    <h1 className="text-4xl lg:text-6xl font-extrabold">
                        Hi, I am Murat 👋
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Software Developer",
                                1000,
                                "Scientist",
                                1000,
                                "Sports Enthusiast",
                                1000,
                                "CCG Player",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            style={{ color: '#3761E8' }}
                        />
                    </h1>
                </div>
                <a
                    href="/Resume_Murat.pdf"
                    download="Resume_Murat.pdf"
                    className="bg-[#3761E8] hover:bg-blue-700 text-white font-bold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-10 rounded text-sm sm:text-base md:text-lg transition-all duration-300 ease-in-out flex items-center justify-center"
                >
                    Resume <span className="mr-2"></span>
                    <img src="/images/download.svg" alt="download button icon" className="w-5 h-5" /> 
                </a>



            </div>
        </section>
    );
};

export default IntroductionSection;
