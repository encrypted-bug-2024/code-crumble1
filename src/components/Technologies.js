import React from 'react';

const Technologies = () => {
  const technologies = [
    // Cloud & Infrastructure
    { name: 'AWS', icon: 'aws.svg', category: 'Cloud' },
    { name: 'Azure', icon: 'azure.svg', category: 'Cloud' },
    { name: 'Google Cloud', icon: 'gcp.svg', category: 'Cloud' },
    { name: 'Docker', icon: 'docker.svg', category: 'Infrastructure' },
    { name: 'Kubernetes', icon: 'kubernetes.svg', category: 'Infrastructure' },
    
    // Backend
    { name: 'Node.js', icon: 'nodejs.svg', category: 'Backend' },
    { name: 'Python', icon: 'python.svg', category: 'Backend' },
    { name: 'Java', icon: 'java.svg', category: 'Backend' },
    { name: 'Go', icon: 'go.svg', category: 'Backend' },
    { name: 'Rust', icon: 'rust.svg', category: 'Backend' },
    { name: 'PHP', icon: 'php.svg', category: 'Backend' },
    { name: '.NET', icon: 'dotnet.svg', category: 'Backend' },
    
    // Frontend
    { name: 'React', icon: 'react.svg', category: 'Frontend' },
    { name: 'Angular', icon: 'angular.svg', category: 'Frontend' },
    { name: 'Vue.js', icon: 'vue.svg', category: 'Frontend' },
    { name: 'Next.js', icon: 'nextjs.svg', category: 'Frontend' },
    { name: 'Svelte', icon: 'svelte.svg', category: 'Frontend' },
    
    // Mobile
    { name: 'React Native', icon: 'react-native.svg', category: 'Mobile' },
    { name: 'Flutter', icon: 'flutter.svg', category: 'Mobile' },
    { name: 'iOS', icon: 'ios.svg', category: 'Mobile' },
    { name: 'Android', icon: 'android.svg', category: 'Mobile' },
    
    // Database
    { name: 'MongoDB', icon: 'mongodb.svg', category: 'Database' },
    { name: 'PostgreSQL', icon: 'postgresql.svg', category: 'Database' },
    { name: 'MySQL', icon: 'mysql.svg', category: 'Database' },
    { name: 'Redis', icon: 'redis.svg', category: 'Database' },
    
    // DevOps & Tools
    { name: 'Jenkins', icon: 'jenkins.svg', category: 'DevOps' },
    { name: 'GitLab', icon: 'gitlab.svg', category: 'DevOps' },
    { name: 'Terraform', icon: 'terraform.svg', category: 'DevOps' },
    { name: 'Ansible', icon: 'ansible.svg', category: 'DevOps' },
    
    // Emerging Tech
    { name: 'Blockchain', icon: 'blockchain.svg', category: 'Emerging' },
    { name: 'AI/ML', icon: 'ai-ml.svg', category: 'Emerging' },
    { name: 'IoT', icon: 'iot.svg', category: 'Emerging' },
    { name: 'AR/VR', icon: 'ar-vr.svg', category: 'Emerging' }
  ];

  const categories = [...new Set(technologies.map(tech => tech.category))];

  return (
    <section className="py-16 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Our Technology Stack
          </h2>
          <p className="text-lg text-gray-400">
            Comprehensive expertise across modern technologies and frameworks
          </p>
        </div>
        
        {categories.map(category => (
          <div key={category} className="mt-16">
            <h3 className="text-xl font-semibold mb-8 text-center">{category}</h3>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
              {technologies
                .filter(tech => tech.category === category)
                .map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center justify-center p-4 bg-[#1A1A1A] rounded-lg hover:bg-[#222222] transition-all duration-300"
                  >
                    <img
                      src={`/icons/${tech.icon}`}
                      alt={`${tech.name} icon`}
                      className="h-12 w-12 object-contain mb-3"
                    />
                    <span className="text-sm font-medium text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies; 