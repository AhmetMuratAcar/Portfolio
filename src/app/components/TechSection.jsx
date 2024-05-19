"use client";
import React from "react";

const TechSection = () => {
    return (
        <section 
            id="Techstack"
            className="bg-[#EFF8FF]"
            style={{
                width: '100vw' 
            }}
        >

            <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
                <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
                    Technologies and Tools
                </h2>
                <p className="text-lg lg:text-xl text-left text-gray-600 mt-12">
                    The following are some of the technologies I am experienced with:
                </p>
            </div>
        </section>
    );
};

export default TechSection;
