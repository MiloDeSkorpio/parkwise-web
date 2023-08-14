import React, { useState } from 'react';

const Contact = () => {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Manejador para cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Manejador para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Datos del formulario:', formData);
  };

  return (
    <>
      <div className='pt-20 flex  h-full w-full items-center bg-white p-5'>
        <div className="p-2 w-80">
          <h1 className="text-3xl font-bold mb-4">Contacto</h1>
          <form onSubmit={handleSubmit} className="bg-blue-950 p-3 min-w-full rounded-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-medium mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-white font-medium mb-2">
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Enviar
          </button>
        </form>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold mb-4">Síguenos en redes sociales</h2>
          <div className="flex items-center justify-center gap-4">
            {/* Agrega los enlaces a tus perfiles de redes sociales */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/img/facebook.svg" alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/img/twitter.svg" alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/img/instagram.svg" alt="Instagram" className="w-8 h-8" />
            </a>
            {/* Agrega más íconos y enlaces según tus redes sociales */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
