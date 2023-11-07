import React, { useState } from 'react';
import '../contac/styles.module.css';
import { Container } from '../../components/layout/Container';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el mensaje del cliente
    console.log(formData);
  };

  return (
    <Container>
        <div className="contact mt-24 mb-24">
        <h2>Contact Us</h2>
        <form className='flex flex-col items-center w-[28.8rem] p-4 rounded-2xl bg-white dark:bg-dark-gray-50 border border-gray-200 dark:border-dark-gray-200 shadow-cosmic dark:shadow-none text-gray-700 dark:text-dark-gray-700 !border-gray-200 dark:!border-dark-gray-200 bg-white dark:!bg-dark-gray-100 dark:shadow-black dark:shadow-sm' onSubmit={handleSubmit}>
            <div className="form-group w-full">
            <label htmlFor="name">Name:</label>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group w-full">
            <label htmlFor="email">Email:</label>
            <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group w-full">
            <label htmlFor="message">Message:</label>
            <textarea
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
        </div>
    </Container>
  );
}

export default Contact;
