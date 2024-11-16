import React, { useState } from 'react';

import { Button } from './ui/button';

import { Input } from './ui/input';

import { Textarea } from './ui/textarea';



const ContactPage: React.FC = () => {

  const [formData, setFormData] = useState({

    name: '',

    email: '',

    message: '',

  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const { name, value } = e.target;

    setFormData(prevData => ({

      ...prevData,

      [name]: value

    }));

  };



  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    alert('Message sent! We will get back to you soon.');

    setFormData({ name: '', email: '', message: '' });

  };



  return (

    <div className="container mx-auto px-4 py-12">

      <div className="grid md:grid-cols-2 gap-12">

        <div>

          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>

              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>

              <Input

                type="text"

                id="name"

                name="name"

                value={formData.name}

                onChange={handleChange}

                required

              />

            </div>

            <div>

              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>

              <Input

                type="email"

                id="email"

                name="email"

                value={formData.email}

                onChange={handleChange}

                required

              />

            </div>

            <div>

              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>

              <Textarea

                id="message"

                name="message"

                rows={4}

                value={formData.message}

                onChange={handleChange}

                required

              />

            </div>

            <Button variant="default" type="submit">Send Message</Button>

          </form>

        </div>

        <div>

          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>

          <div className="space-y-4">

            <p>

              <strong>Address:</strong><br />

              123 Packaging Street<br />

              City, State 12345

            </p>

            <p>

              <strong>Phone:</strong><br />

              (555) 123-4567

            </p>

            <p>

              <strong>Email:</strong><br />

              info@earose.com

            </p>

            <p>

              <strong>Business Hours:</strong><br />

              Monday - Friday: 9am - 5pm<br />

              Saturday: 10am - 2pm<br />

              Sunday: Closed

            </p>

          </div>

        </div>

      </div>

    </div>

  );

};



export default ContactPage; 
