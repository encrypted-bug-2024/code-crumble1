import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Seo from '../components/Seo';

const Terms = () => {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <Seo title="Terms of Service | Code Crumble" />
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Terms of Service', href: '/terms' },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing and using Code Crumble's website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
            <p className="text-gray-300 mb-4">
              Permission is granted to temporarily view the materials on Code Crumble's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose or for any public display;</li>
              <li>Attempt to reverse engineer any software contained on Code Crumble's website;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Services</h2>
            <p className="text-gray-300 mb-4">
              Code Crumble provides software development, web development, mobile application development, cloud solutions, and artificial intelligence services. All services are provided on an "as is" basis. We make no warranties that the services will meet your requirements or that the services will be uninterrupted, timely, secure, or error-free.
            </p>
            <p className="text-gray-300">
              We reserve the right to refuse service to anyone for any reason at any time.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              The Service and its original content, features, and functionality are owned by Code Crumble and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p className="text-gray-300">
              Unless otherwise specified, all materials including and without limitation to software, text, code, form, logo, graphics, and design contained in this site are copyrights, trademarks and/or intellectual properties owned, controlled or licensed by Code Crumble.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-300">
              In no event shall Code Crumble or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Code Crumble's website, even if Code Crumble or a Code Crumble authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Governing Law</h2>
            <p className="text-gray-300">
              These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to Terms</h2>
            <p className="text-gray-300">
              Code Crumble reserves the right, at its sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about these Terms, please contact us at:
              <br />
              <a href="mailto:info@codecrumble.xyz" className="text-blue-400 hover:text-blue-300">info@codecrumble.xyz</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms; 