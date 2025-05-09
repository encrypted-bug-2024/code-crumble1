import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored solutions built with cutting-edge technology to meet your specific business needs.',
      icon: '💻'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure design and implementation using AWS and other platforms.',
      icon: '☁️'
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with React, Angular, and other leading frameworks.',
      icon: '🌐'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions leveraging the latest in artificial intelligence and machine learning.',
      icon: '🤖'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Delivering excellence through specialized technology solutions
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 