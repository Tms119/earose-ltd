import React from 'react';



import { motion } from 'framer-motion';



import { useInView } from 'framer-motion';



import { useRef } from 'react';







import Link from './ui/link';



import { Button } from './ui/button';



import { Box, Clock, Shield } from 'lucide-react';







const PackageProWebsite: React.FC = () => {



  const ref = useRef(null);



  const isInView = useInView(ref, { once: true });







  return (



    <>



      <motion.section 



        className="bg-blue-600 text-white py-20"



        initial={{ opacity: 0 }}



        animate={{ opacity: 1 }}



        transition={{ duration: 1 }}



      >



        <div className="container mx-auto px-4">



          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl">



            Welcome to Earose Industries Limited



          </h1>



          <p className="text-lg mb-8 max-w-xl opacity-90">



            Delivering quality packaging solutions that protect your products and enhance your brand.



          </p>



          <Button variant="white" size="lg">



            <Link href="/products">Explore Solutions</Link>



          </Button>



        </div>



      </motion.section>







      <motion.section 



        ref={ref}



        className="py-20 container mx-auto px-4"



        initial={{ opacity: 0, y: 50 }}



        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}



        transition={{ duration: 0.5, delay: 0.2 }}



      >



        <div className="grid md:grid-cols-3 gap-8">



          <motion.div 



            whileHover={{ 



              scale: 1.05,



              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"



            }}



            className="text-center p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 bg-white"



          >



            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">



              <Box className="w-8 h-8 text-blue-600" />



            </div>



            <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>



            <p className="text-gray-600">Tailored packaging solutions designed to meet your specific needs</p>



          </motion.div>



          



          <motion.div 



            whileHover={{ scale: 1.05 }}



            className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"



          >



            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">



              <Shield className="w-8 h-8 text-blue-600" />



            </div>



            <h3 className="text-xl font-semibold mb-2">Superior Protection</h3>



            <p className="text-gray-600">Ensuring your products arrive safely with high-quality materials</p>



          </motion.div>



          



          <motion.div 



            whileHover={{ scale: 1.05 }}



            className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"



          >



            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">



              <Clock className="w-8 h-8 text-blue-600" />



            </div>



            <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>



            <p className="text-gray-600">Quick production and delivery to meet your deadlines</p>



          </motion.div>



        </div>



      </motion.section>







      <motion.section 



        className="bg-gray-50 py-20"



        initial={{ opacity: 0 }}



        whileInView={{ opacity: 1 }}



        transition={{ duration: 0.5 }}



        viewport={{ once: true }}



      >



        <div className="container mx-auto px-4">



          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>



          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">



            {['Custom Boxes', 'Protective Packaging', 'Retail Packaging', 'Shipping Supplies'].map((product) => (



              <motion.div



                key={product}



                whileHover={{ 



                  scale: 1.05,



                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",



                  y: -5



                }}



                initial={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}



                className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300"



              >



                <div className="aspect-video bg-gray-100" />



                <div className="p-6">



                  <h3 className="font-semibold mb-3 text-lg">{product}</h3>



                  <Link 



                    href="/products" 



                    className="text-blue-600 hover:underline text-sm inline-flex items-center group"



                  >



                    Learn More 



                    <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>



                  </Link>



                </div>



              </motion.div>



            ))}



          </div>



        </div>



      </motion.section>







      <motion.section 



        className="bg-blue-600 text-white py-20 text-center"



        initial={{ opacity: 0 }}



        whileInView={{ opacity: 1 }}



        transition={{ duration: 0.5 }}



        viewport={{ once: true }}



      >



        <div className="container mx-auto px-4">



          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>



          <p className="mb-8 opacity-90">Contact us today to discuss your packaging needs</p>



          <Button variant="white" size="lg">



            <Link href="/contact">Contact Us</Link>



          </Button>



        </div>



      </motion.section>



    </>



  );



};







export default PackageProWebsite; 






























































