import React from 'react';

const CodeIcon = (props) => (
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
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const PenToolIcon = (props) => (
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
    <path d="m12 19 7-7 3 3-7 7-3-3z" />
    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="m2 2 7.586 7.586" />
    <path d="m11 11 1 1" />
  </svg>
);

const RocketIcon = (props) => (
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
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.33-.04-3.86l1.52-1.52c1.11.29 2.22.46 3.3.46s2.19-.17 3.3-.46l1.52 1.52c-.74 1.53-.75 3.02-.04 3.86 1.5 1.26 5 2 5 2s-.5-3.74-2-5c-.79-1.18-2.35-2.17-3.5-2.5V8.5c0-1.1-.9-2-2-2h-2.5" />
    <path d="M7.5 12.5 9 11l1.5 1.5" />
    <path d="M13.5 12.5 15 11l1.5 1.5" />
  </svg>
);

const SearchIcon = (props) => (
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
        strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const ShieldIcon = (props) => (
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
        strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
);

const LayersIcon = (props) => (
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
        strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
);


// Main Services Page Component
export default function ServicePage() {
  // Service data can be stored in an array of objects for easier management.
  const services = [
    {
      icon: <CodeIcon className="h-8 w-8 text-black-400" />,
      title: 'Custom Web Development',
      description: 'We build bespoke, high-performance websites and web applications from the ground up using modern technologies like Next.js and React.',
    },
    {
      icon: <LayersIcon className="h-8 w-8 text-black-400" />,
      title: 'Next.js & React Consulting',
      description: 'Leverage our expertise to architect, build, and scale your Next.js applications. We provide guidance on best practices and architecture.',
    },
    {
      icon: <PenToolIcon className="h-8 w-8 text-black-400" />,
      title: 'UI/UX Design & Implementation',
      description: 'From wireframes to pixel-perfect designs, we create intuitive and engaging user interfaces that are a joy to use and implement them seamlessly.',
    },
    {
      icon: <RocketIcon className="h-8 w-8 text-black-400" />,
      title: 'Performance Optimization',
      description: 'Is your website slow? We diagnose and fix performance bottlenecks, ensuring your users have a fast and smooth experience.',
    },
    {
      icon: <SearchIcon className="h-8 w-8 text-black-400" />,
      title: 'SEO & Content Strategy',
      description: 'Improve your online visibility. We help you with technical SEO, keyword research, and content strategies that drive organic traffic.',
    },
    {
      icon: <ShieldIcon className="h-8 w-8 text-black-400" />,
      title: 'Maintenance & Support',
      description: 'Keep your web application running smoothly with our ongoing maintenance packages, including updates, security checks, and support.',
    },
  ];

  return (
    <div className=" min-h-screen font-sans">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            At Dev Blog Web, we offer a suite of services to build, scale, and maintain your digital presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-teal-200 rounded-xl p-8 border border-teal-700/60 transition-all duration-300 hover:border-black-500/80 hover:bg-teal-500 hover:-translate-y-1"
            >
              <div className="mb-5 flex items-center justify-center h-12 w-12 rounded-lg bg-black-500/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold  mb-3">{service.title}</h3>
              <p className="   leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        

      </div>
    </div>
  );
}
