import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

const WebDevelopment = () => {
  return (
    <div className="bg-[#0A0A0A]">
      <div className="pt-16">
        <Breadcrumb />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Web Development Services
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Building modern, responsive, and scalable web applications
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="bg-[#1A1A1A] p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              Frontend Development
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• React.js and Next.js applications</li>
              <li>• Responsive design and mobile-first approach</li>
              <li>• Modern UI/UX implementation</li>
              <li>• Performance optimization</li>
            </ul>
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              Backend Development
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• Node.js and Express.js</li>
              <li>• RESTful API development</li>
              <li>• Database design and optimization</li>
              <li>• Security implementation</li>
            </ul>
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              E-commerce Solutions
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• Custom e-commerce platforms</li>
              <li>• Payment gateway integration</li>
              <li>• Inventory management systems</li>
              <li>• Shopping cart functionality</li>
            </ul>
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              Web Application Features
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• Authentication and authorization</li>
              <li>• Real-time functionality</li>
              <li>• Third-party API integration</li>
              <li>• Analytics and monitoring</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-[#1A1A1A] p-6 rounded-xl">
              <div className="text-2xl font-bold text-white mb-2">1</div>
              <h3 className="text-xl font-semibold text-white mb-2">Planning</h3>
              <p className="text-gray-400">Requirements gathering and project scope definition</p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl">
              <div className="text-2xl font-bold text-white mb-2">2</div>
              <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
              <p className="text-gray-400">UI/UX design and technical architecture</p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl">
              <div className="text-2xl font-bold text-white mb-2">3</div>
              <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
              <p className="text-gray-400">Agile development with regular updates</p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl">
              <div className="text-2xl font-bold text-white mb-2">4</div>
              <h3 className="text-xl font-semibold text-white mb-2">Launch</h3>
              <p className="text-gray-400">Testing, deployment, and maintenance</p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <a 
            href="/contact"
            className="inline-block bg-white text-[#0A0A0A] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment; 