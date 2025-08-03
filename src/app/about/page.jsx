"use client";

import React from 'react';

// An icon for the section header, you can replace it as needed.
const InfoIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
);


// About Section Component
export default function AboutSection() {
  return (
    // The main container for the about section with a dark background.
    <div className=" font-sans py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Main content wrapper with a border and rounded corners */}
        <div className="bg-gray-800/50 border border-gray-700/60 rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            
            {/* Left Side: Image */}
            <div className="md:w-1/2">
              <img 
                src="https://placehold.co/800x600/111827/4F46E5?text=Tech+Insights" 
                alt="Abstract technology background" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x600/111827/FFFFFF?text=Image+Not+Found'; }}
              />
            </div>

            {/* Right Side: Text Content */}
            <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-500/10">
                        <InfoIcon className="h-6 w-6 text-teal-400" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  About Dev Blog Web
                </h2>
              </div>
              <p className="text-lg">
                Dev Blog Web is a community-driven platform for developers, engineers, and tech enthusiasts. Our mission is to be your go-to source for high-quality articles, tutorials, and discussions on everything from web development and software architecture to the latest industry trends.
              </p>
              <a 
                href="/blog" 
                className="mt-8 inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-teal-500 transition-colors duration-300 self-start"
              >
                Explore The Blog
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
