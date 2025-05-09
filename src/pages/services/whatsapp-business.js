import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppBusinessPage = () => {
  const services = [
    {
      title: 'WhatsApp Chatbot Development',
      description: 'Custom chatbots designed to automate customer interactions, handle inquiries, and streamline business processes through WhatsApp.',
      features: [
        'Natural language processing',
        'Custom conversation flows',
        'Integration with business systems',
        '24/7 automated responses',
        'Multi-language support'
      ]
    },
    {
      title: 'AI-Powered Chat Agents',
      description: 'Advanced AI agents that provide intelligent, context-aware responses and learn from interactions to improve customer service.',
      features: [
        'Machine learning algorithms',
        'Contextual understanding',
        'Sentiment analysis',
        'Automated learning & improvement',
        'Human handoff capability'
      ]
    },
    {
      title: 'WhatsApp Customer Support',
      description: 'Comprehensive customer support solutions leveraging WhatsApp Business API for efficient communication and issue resolution.',
      features: [
        'Ticket management system',
        'Quick response templates',
        'File sharing capabilities',
        'Customer history tracking',
        'Performance analytics'
      ]
    },
    {
      title: 'WhatsApp Marketing Solutions',
      description: 'Strategic marketing services utilizing WhatsApp Business API for targeted campaigns and customer engagement.',
      features: [
        'Broadcast messaging',
        'Campaign management',
        'Customer segmentation',
        'Message templates',
        'Performance tracking'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h1 className="font-heading text-5xl md:text-7xl font-black mb-6">
            WhatsApp Business API
            <span className="block bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your business communication with our comprehensive WhatsApp Business API integration services. 
            Engage customers, automate responses, and drive growth through the world's most popular messaging platform.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#1A1A1A] rounded-2xl p-8 hover:bg-[#222222] transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center bg-[#1A1A1A] rounded-2xl p-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-black mb-6">
            Ready to Transform Your Business Communication?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-400">
            Get started with our WhatsApp Business API solutions and take your customer engagement to the next level.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-black font-bold rounded-full px-8 py-4 hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatsAppBusinessPage; 