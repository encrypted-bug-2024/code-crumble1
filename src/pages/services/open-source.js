import React from 'react';
import { motion } from 'framer-motion';
import Breadcrumb from '../../components/Breadcrumb';
import NetworkAnimation from '../../components/NetworkAnimation';
import AboutAnimation from '../../components/AboutAnimation';

const OpenSourceSolutions = () => {
  const solutions = [
    {
      category: 'Communication & Collaboration',
      examples: ['Team Chat Platforms', 'Video Conferencing', 'Project Management'],
      icon: '💬'
    },
    {
      category: 'Enterprise Solutions',
      examples: ['ERP Systems', 'CRM Platforms', 'Business Intelligence'],
      icon: '🏢'
    },
    {
      category: 'E-commerce',
      examples: ['Online Store Platforms', 'Marketplace Solutions', 'Inventory Management'],
      icon: '🛍️'
    },
    {
      category: 'AI & Machine Learning',
      examples: ['AI Model Deployment', 'Language Models', 'Computer Vision'],
      icon: '🤖'
    }
  ];

  return (
    <div className="bg-[#111111] min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center">
        {/* <div className="absolute inset-0 z-0">
          <NetworkAnimation />
        </div> */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <Breadcrumb 
            items={[
              { label: 'Services', path: '/services' },
              { label: 'Open Source Solutions', path: '/services/open-source' }
            ]} 
          />
          <div className="my-8">
            <AboutAnimation />
          </div>
          <div className="max-w-7xl mx-auto px-4 py-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-heading text-5xl md:text-7xl font-black mb-6">
                Open Source
                <span className="block bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Customization, deployment, and management of enterprise-grade open source platforms.
                Transform powerful open source technologies into tailored solutions that perfectly match your business needs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-block bg-white text-black font-bold rounded-full px-8 py-4 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl font-black text-white mb-4">Technologies</h2>
            <p className="text-gray-400 text-lg">Our tech stack for open source solutions</p>
          </motion.div>
          <div className="flex flex-wrap gap-4 justify-center">
            {['Docker', 'Kubernetes', 'Git', 'CI/CD', 'Cloud Platforms'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#1A1A1A] text-white px-6 py-3 rounded-full"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl font-black text-white mb-4">Our Solutions</h2>
            <p className="text-gray-400 text-lg">Comprehensive open source solutions for every business need</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#1A1A1A] p-8 rounded-xl transform transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{solution.icon}</span>
                  <h3 className="text-2xl font-bold text-white">
                    {solution.category}
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  {solution.examples.map((example, idx) => (
                    <li key={idx}>• {example}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl font-black text-white mb-4">Our Process</h2>
            <p className="text-gray-400 text-lg">How we deliver your open source solution</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-[#1A1A1A] p-8 rounded-xl"
            >
              <div className="text-2xl font-bold text-white mb-4">1. Assessment & Planning</div>
              <ul className="space-y-3 text-gray-400">
                <li>• Requirements analysis</li>
                <li>• Platform selection</li>
                <li>• Architecture planning</li>
                <li>• Resource estimation</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-[#1A1A1A] p-8 rounded-xl"
            >
              <div className="text-2xl font-bold text-white mb-4">2. Implementation</div>
              <ul className="space-y-3 text-gray-400">
                <li>• Custom development</li>
                <li>• Integration setup</li>
                <li>• Data migration</li>
                <li>• Security hardening</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-[#1A1A1A] p-8 rounded-xl"
            >
              <div className="text-2xl font-bold text-white mb-4">3. Deployment & Support</div>
              <ul className="space-y-3 text-gray-400">
                <li>• Server setup</li>
                <li>• Performance optimization</li>
                <li>• User training</li>
                <li>• Ongoing maintenance</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center bg-[#1A1A1A] rounded-2xl p-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-black mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
              Get started with our open source solutions and take your business to the next level.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-black font-bold rounded-full px-8 py-4 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Get Custom Quote
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OpenSourceSolutions; 