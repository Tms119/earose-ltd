import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from './ui/motion';
import { Button } from './ui/button';

const products = [
  {
    title: "Custom Packaging",
    description: "Tailored packaging solutions designed to meet your specific needs",
    image: "/images/custom-packaging.jpg"
  },
  {
    title: "Retail Packaging",
    description: "Eye-catching retail packaging that helps your products stand out",
    image: "/images/retail-packaging.jpg"
  },
  {
    title: "Industrial Packaging",
    description: "Heavy-duty packaging solutions for industrial applications",
    image: "/images/industrial-packaging.jpg"
  }
];

const ProductsPage = () => {
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
        Our Products
      </motion.h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            variants={fadeUpVariant}
          >
            <div className="h-48 bg-gray-200">
              {/* Add your image here */}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <Button>Learn More</Button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductsPage; 


