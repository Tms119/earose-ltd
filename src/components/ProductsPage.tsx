import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer, cardHoverVariant } from './ui/motion';

import Link from './ui/link';

import { Button } from './ui/button';



const ProductsPage: React.FC = () => {

  const products = [

    { name: 'Custom Boxes', description: 'Tailored packaging solutions for your unique products.' },

    { name: 'Protective Packaging', description: 'Ensure your items arrive safely with our protective materials.' },

    { name: 'Retail Packaging', description: 'Stand out on the shelves with our eye-catching retail packaging.' },

    { name: 'Shipping Supplies', description: 'Everything you need for efficient and secure shipping.' },

    { name: 'Eco-Friendly Options', description: 'Sustainable packaging solutions for environmentally conscious businesses.' },

    { name: 'Custom Printing', description: 'High-quality printing services to showcase your brand on packaging.' },

  ];



  return (

    <div className="min-h-screen">

      <motion.header 
        className="bg-blue-600 text-white py-20"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
      >

        <div className="container mx-auto px-4">

          <h1 className="text-4xl font-bold mb-4">Our Products</h1>

          <p className="text-xl opacity-90">Discover our range of innovative packaging solutions</p>

        </div>

      </motion.header>



      <motion.main 
        className="container mx-auto px-4 py-12"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product) => (

            <motion.div
              key={product.name}
              variants={cardHoverVariant}
              initial="rest"
              whileHover="hover"
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >

              <div className="aspect-video bg-gray-100" />

              <div className="p-6">

                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>

                <p className="text-gray-600 mb-4">{product.description}</p>

                <Button variant="default">

                  <Link href="/contact" className="text-white">Get a Quote</Link>

                </Button>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </motion.main>



      <motion.footer 
        className="bg-gray-100 py-8"
        initial="hidden"
        whileInView="visible"
        variants={fadeUpVariant}
        viewport={{ once: true }}
      >

        <div className="container mx-auto px-4 text-center">

          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>

          <p className="mb-6">We specialize in creating packaging tailored to your specific needs.</p>

          <Button>

            <Link href="/contact">Contact Us</Link>

          </Button>

        </div>

      </motion.footer>

    </div>

  );

};



export default ProductsPage; 
