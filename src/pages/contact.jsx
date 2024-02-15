// src/App.js
import React, { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { ClipLoader } from 'react-spinners';



export const Contact = () => {
  const [formData, setFormData] = useState({
    namePerson: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    namePerson: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(null);
  const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;


  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    let newErrors = {}

    if(formData.namePerson.trim() === ''){
      newErrors.namePerson = 'Por favor ingrese su nombre.';
    } 

    if(formData.email.trim() === ''){
      newErrors.email = 'Por favor ingrese su correo electrónico.';
    }

    if(!phoneRegex.test(formData.phone) && formData.phone.trim() !== ''){
      newErrors.phone = 'Por favor, ingrese un número de teléfono válido con el código de país, como por ejemplo: +56 (Chile).';
    }

    if(formData.subject.trim() === ''){
      newErrors.subject = 'Por favor ingrese el asunto.';
    }

    if(formData.message.trim() === ''){
      newErrors.message = 'Por favor ingrese su mensaje.';
    }

    setErrors(newErrors);


    if(Object.keys(newErrors).length === 0){
      try {
        const response = await fetch('http://localhost:3001/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          setIsSubmitted(true);
          console.log('Correo electrónico enviado con éxito');
        } else {
          setIsSubmitted(false);
          console.error('Error al enviar el correo electrónico');
        }
      } catch (error) {
        setIsSubmitted(false);
        console.error('Error en la solicitud:', error);
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      <section id="contact" className="contact flex flex-col w-[100%] py-24 max-2xl:px-28 max-2xl:py-16 max-lg:px-8">
        <div className="grid grid-cols-2 w-[100%] h-[100%] max-lg:flex max-md:flex-col max-lg:items-center">
          <form onSubmit={handleSubmit} className="contact-form w-[100%] flex flex-col gap-y-10 max-lg:gap-y-4 dark:bg-secondaryDark bg-gradient-to-tl from-snowy-mint-500 to-snowy-mint-800 dark:from-black-rock-300 dark:to-black-rock-500 p-10 max-md:p-4 max-lg:px-4 rounded-3xl max-lg:order-2">
            <h1 className=" text-snowy-mint-100 dark:text-white font-extrabold text-4xl max-md:text-3xl justify-center flex">¡Contáctame!</h1>
            <div className='contact-namePerson'>
              <input 
                type="text"
                id="contact-namePerson"
                name="namePerson"
                value={formData.namePerson}
                onChange={handleChange}
                placeholder="Nombre *"
                className="dark:bg-black-rock-200 bg-snowy-mint-300 shadow appearance-none rounded-lg w-full py-2.5 px-3 text-titleLight dark:text-black placeholder-snowy-mint-800 dark:placeholder-black-rock-900 leading-tight focus:outline-none focus:shadow-outline max-md:text-sm"
              />
              {errors.namePerson && <p className='text-red-800 max-lg:text-sm'>{errors.namePerson}</p>}
            </div>
            <div className='contact-email'>
              <input 
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo electrónico *"
                className="dark:bg-black-rock-200 bg-snowy-mint-300 shadow appearance-none rounded-lg w-full py-2.5 px-3 dark:text-black text-titleLight placeholder-snowy-mint-800 dark:placeholder-black-rock-900 leading-tight focus:outline-none focus:shadow-outline max-md:text-sm"
              />
              {errors.email && <p className='text-red-800 max-lg:text-sm'>{errors.email}</p>}
            </div>
            <div className='contact-phone'>
              <input 
                type="text"
                id="contact-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefóno (opcional) *"
                className="dark:bg-black-rock-200 bg-snowy-mint-300 shadow appearance-none rounded-lg w-full py-2.5 px-3 dark:text-black text-titleLight placeholder-snowy-mint-800 dark:placeholder-black-rock-900 leading-tight focus:outline-none focus:shadow-outline max-md:text-sm"
              />
              {errors.phone && <p className='text-red-800 max-lg:text-sm'>{errors.phone}</p>}
            </div>
            <div className='contact-subject'>
              <input 
                type="text"
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Asunto *"
                className="dark:bg-black-rock-200 bg-snowy-mint-300 shadow appearance-none rounded-lg w-full py-2.5 px-3 dark:text-black text-titleLight placeholder-snowy-mint-800 dark:placeholder-black-rock-900 leading-tight focus:outline-none focus:shadow-outline max-md:text-sm"
              />
              {errors.subject && <p className='text-red-800 max-lg:text-sm'>{errors.subject}</p>}
            </div>
            <div className="h-full contact-message">
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows="8"
                cols="50"
                maxlength="1000"
                placeholder="Mensaje *"
                className="dark:bg-black-rock-200 bg-snowy-mint-300 shadow appearance-none overflow-auto  rounded-lg w-full py-2.5 px-3 resize-none dark:text-black text-titleLight placeholder-snowy-mint-800 dark:placeholder-black-rock-900 leading-tight focus:outline-none focus:shadow-outline max-md:text-sm"
              ></textarea>
              <p className="bottom-0 dark:text-black-rock-900 text-snowy-mint-800 right-0 p-1 flex justify-end max-md:text-sm">{formData.message.length}/1000</p>
              {errors.message && <p className='text-red-800 max-lg:text-sm'>{errors.message}</p>}
            </div>
            <div className="flex w-[100%] justify-center">
              {!isLoading ? (
                <button type="submit" className="dark:bg-black-rock-100 text-snowy-mint-700 dark:text-black-rock-700 border-snowy-mint-800 dark:border-black-rock-500 bg-snowy-mint-200 border-[1px] hover:bg-snowy-mint-900 dark:placeholder-black-rock-900 dark:hover:bg-black-rock-500 hover:text-white dark:hover:text-white w-[100%] font-bold py-2.5 px-4 rounded-lg focus:outline-none focus:shadow-outline max-md:text-sm">
                Enviar Mensaje
              </button>
              ) : (
                <ClipLoader color='#666666'/>
              )}
            </div>
            {isSubmitted === true && (
              <p className='text-center dark:text-black-rock-700 text-snowy-mint-950'>¡Se ha enviado de manera exitosa el mensaje!</p>
            )}
            {isSubmitted === false && (
              <p className='text-center text-red-800'>¡No se ha podido enviar el mensaje!</p>
            )}
          </form>
          <div className="contact-info flex flex-col p-10 w-[100%] justify-center h-[100%] ml-[20%] gap-y-20 max-lg:px-0 max-lg:justify-start max-lg:ml-0 max-lg:gap-y-10 max-lg:order-1">
            <h1 className=" text-snowy-mint-800 dark:text-white font-extrabold text-4xl max-md:text-3xl">Contacto</h1>
            <a href="" className="text-snowy-mint-700 dark:text-white font-regular text-2xl max-lg:text-base flex flex-row items-center gap-x-6 hover:text-snowy-mint-950 hover:dark:text-primaryBlue transition duration-100 transform hover:scale-105"><SiGmail className="text-3xl max-lg:text-base"/> sebastianleiva010@gmail.com</a>
            <a href="" className="text-snowy-mint-700 dark:text-white font-regular text-2xl max-lg:text-base flex flex-row items-center gap-x-6 hover:text-snowy-mint-950 hover:dark:text-primaryBlue transition duration-100 transform hover:scale-105"><FaLinkedin className="text-3xl max-lg:text-base"/> Sebastian Leiva Almonacid</a>
            <a href="" className="text-snowy-mint-700 dark:text-white font-regular text-2xl max-lg:text-base flex flex-row items-center gap-x-6 hover:text-snowy-mint-950 hover:dark:text-primaryBlue transition duration-100 transform hover:scale-105"><FaGithub className="text-3xl max-lg:text-base"/> SebastianLeivaaa</a>
          </div>
        </div>
      </section>
    </>
  );
};

