import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from './ui/motion';

import Link from './ui/link';

import { Button } from './ui/button';



const AboutPage: React.FC = () => {

  return (

    <motion.div 
      className="container mx-auto px-4 py-16"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >

      <motion.h1 
        className="text-4xl font-bold mb-8"
        variants={fadeUpVariant}
      >
        About Earose Industries
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">

        <motion.div variants={fadeUpVariant}>

          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>

          <p className="text-gray-600 mb-6">
            Founded in [year], Earose Industries has been at the forefront of innovative packaging solutions. 
            We combine cutting-edge technology with sustainable practices to deliver exceptional packaging products.
          </p>

          <p className="text-gray-600">
            Our commitment to quality and customer satisfaction has made us a trusted partner for businesses 
            across various industries.
          </p>

        </motion.div>

        <motion.div variants={fadeUpVariant}>

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>

          <p className="text-gray-600 mb-6">
            To provide innovative and sustainable packaging solutions that help businesses thrive while 
            minimizing environmental impact.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg">

            <h3 className="text-xl font-semibold mb-3">Core Values</h3>

            <ul className="list-disc list-inside text-gray-600 space-y-2">

              <li>Innovation in Design</li>

              <li>Environmental Responsibility</li>

              <li>Customer-Centric Approach</li>

              <li>Quality Excellence</li>

            </ul>

          </div>

        </motion.div>

      </div>

    </motion.div>

  );

};



export default AboutPage; 
