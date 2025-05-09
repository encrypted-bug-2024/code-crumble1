import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

const CloudSolutions = () => {
  return (
    <div className="bg-[#0A0A0A]">
      <div className="pt-16">
        <Breadcrumb />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Cloud Solutions
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Scalable and secure cloud infrastructure for modern businesses
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="bg-[#1A1A1A] p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              Cloud Infrastructure
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• AWS architecture design</li>
              <li>• Azure cloud solutions</li>
              <li>• Google Cloud Platform</li>
              <li>• Multi-cloud strategies</li>
            </ul>
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              DevOps Services
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• CI/CD pipeline setup</li>
              <li>• Container orchestration</li>
              <li>• Infrastructure as Code</li>
              <li>• Automated deployment</li>
            </ul>
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              Cloud Security
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• Security best practices</li>
              <li>• Compliance implementation</li>
              <li>• Identity management</li>
              <li>• Data encryption</li>
            </ul>
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              Managed Services
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• 24/7 monitoring</li>
              <li>• Performance optimization</li>
              <li>• Cost management</li>
              <li>• Backup and recovery</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Implementation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-[#1A1A1A] p-6 rounded-xl">
              <div className="text-2xl font-bold text-white mb-2">1</div>
              <h3 className="text-xl font-semibold text-white mb-2">Assessment</h3>
              <p className="text-gray-400">Infrastructure and requirements analysis</p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl">
              <div className="text-2xl font-bold text-white mb-2">2</div>
              <h3 className="text-xl font-semibold text-white mb-2">Planning</h3>
              <p className="text-gray-400">Architecture and migration strategy</p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl">
              <div className="text-2xl font-bold text-white mb-2">3</div>
              <h3 className="text-xl font-semibold text-white mb-2">Migration</h3>
              <p className="text-gray-400">Phased implementation and testing</p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl">
              <div className="text-2xl font-bold text-white mb-2">4</div>
              <h3 className="text-xl font-semibold text-white mb-2">Optimization</h3>
              <p className="text-gray-400">Continuous improvement and monitoring</p>
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

export default CloudSolutions; 