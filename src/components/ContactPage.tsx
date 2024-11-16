import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from './ui/motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

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
        Contact Us
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div variants={fadeUpVariant}>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions about our products or services? We're here to help!
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-600">123 Business Street, City, Country</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@earose-industries.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+1 234 567 8900</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUpVariant}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage; 


