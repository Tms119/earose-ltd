import React from 'react';
import Link from './ui/link';
import { Button } from './ui/button';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <header className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About PackagePro</h1>
          <p className="text-xl opacity-90">Your trusted partner in innovative packaging solutions</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg text-gray-700 mb-4">
            Founded in 2010, PackagePro has been at the forefront of the packaging industry, 
            delivering innovative solutions to businesses of all sizes. Our journey began with 
            a simple mission: to provide high-quality, customized packaging that not only 
            protects products but also enhances brand value.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Over the years, we've grown from a small local operation to a nationwide leader 
            in packaging solutions. Our success is built on our commitment to quality, 
            customer satisfaction, and continuous innovation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Innovation: We constantly seek new ways to improve and evolve our products.</li>
            <li>Quality: We never compromise on the quality of our materials or craftsmanship.</li>
            <li>Sustainability: We're committed to environmentally friendly packaging solutions.</li>
            <li>Customer-Centric: Your success is our success. We prioritize your needs and satisfaction.</li>
            <li>Integrity: We conduct our business with honesty and transparency.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-gray-700 mb-4">
            At PackagePro, our team is our greatest asset. We've brought together experts from 
            various fields - design, engineering, materials science, and customer service - to 
            ensure we deliver the best possible solutions to our clients.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Led by our founder and CEO, Jane Doe, our team is dedicated to pushing the 
            boundaries of what's possible in packaging design and functionality.
          </p>
          <Button variant="default">
            <Link href="/contact" className="text-white">Meet Our Team</Link>
          </Button>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Elevate Your Packaging?</h2>
          <p className="mb-6">Let's work together to create packaging solutions that make your products stand out.</p>
          <Button variant="default">
            <Link href="/contact" className="text-white">Get Started</Link>
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage; 