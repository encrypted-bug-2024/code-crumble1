import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

const MobileDevelopment = () => {
  return (
    <div className="bg-[#0A0A0A]">
      <div className="pt-16">
        <Breadcrumb />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Mobile Development Services
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Creating powerful mobile experiences for iOS and Android
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="bg-[#1A1A1A] p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              Native Development
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• iOS development with Swift</li>
              <li>• Android development with Kotlin</li>
              <li>• Platform-specific optimizations</li>
              <li>• Native UI components</li>
            </ul>
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              Cross-Platform Solutions
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• React Native development</li>
              <li>• Flutter applications</li>
              <li>• Code reusability</li>
              <li>• Consistent experience across platforms</li>
            </ul>
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              App Features
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• Offline functionality</li>
              <li>• Push notifications</li>
              <li>• Location-based services</li>
              <li>• Social media integration</li>
            </ul>
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              Mobile Backend
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• API development</li>
              <li>• Real-time data sync</li>
              <li>• Cloud storage solutions</li>
              <li>• Analytics integration</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Development Lifecycle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-[#1A1A1A] p-6 rounded-xl">
              <div className="text-2xl font-bold text-white mb-2">1</div>
              <h3 className="text-xl font-semibold text-white mb-2">Strategy</h3>
              <p className="text-gray-400">Platform selection and feature planning</p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl">
              <div className="text-2xl font-bold text-white mb-2">2</div>
              <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
              <p className="text-gray-400">UI/UX design and prototyping</p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl">
              <div className="text-2xl font-bold text-white mb-2">3</div>
              <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
              <p className="text-gray-400">Iterative development and testing</p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl">
              <div className="text-2xl font-bold text-white mb-2">4</div>
              <h3 className="text-xl font-semibold text-white mb-2">Release</h3>
              <p className="text-gray-400">App store submission and launch</p>
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

export default MobileDevelopment; 