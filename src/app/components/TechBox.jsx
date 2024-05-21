import React from "react";

const TechBox = ({ logo, name }) => {
    return (
        <div className="flex items-center space-x-4 p-4 bg-gray-200 rounded-lg">
            <img src={logo} alt={name} className="h-auto w-12" />  {/* Adjust width and set height to auto */}
            <span className="text-lg text-gray-800">{name}</span>
        </div>
    );
};



export default TechBox;
