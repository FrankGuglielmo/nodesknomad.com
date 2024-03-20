import React from 'react';
import NoDeskNomadLogo from '../images/NoDeskNomad.png';

const AboutComponent = () => {
    return (
        <div className="flex justify-center items-center h-screen"> 
            <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto p-5 bg-white shadow-lg rounded-xl">
                <div className="lg:w-1/2 p-5">
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">About Us</h2>
                    <p className="text-gray-600 text-lg mb-4">
                        NoDeskNomad is a web-based solution dedicated to helping you find the best spots for remote work. We track features that other services miss, to ensure you have the perfect environment for productivity.
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <img 
                        src={NoDeskNomadLogo} 
                        alt="NoDeskNomad" 
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;