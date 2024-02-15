import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

export const NavBar = () => {


    const [darkToggle, setDarkToggle] = useState(() => localStorage.getItem('theme') === 'dark');


    useEffect(() => {
        if (darkToggle) {
            document.documentElement.classList.add("dark");
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem('theme', 'light');
        }
    }, [darkToggle]);

    useEffect(() => {
        // Agregar smooth scroll a los enlaces de anclaje
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth',
            });
          });
        });
      }, []);

    return(
        <header className="w-[60%] mr-[20%] bg-primaryLight dark:bg-primaryDark absolute z-20 max-2xl:w-[100%] max-2xl:px-10 max-2xl:py-2">
            <div className="flex flex-row align-items-center items-end gap-x-10 justify-between py-5">
            <a href="#home" className="text-primaryBlue text-2xl font-bold items">SebaLeivaDev</a>
            <nav>
                    <ul className="flex flex-row gap-x-10 text-lg">
                        <li>
                            <a href="#home" className="text-black dark:text-white">
                                Inicio
                            </a>                            
                        </li>
                        <li>
                            <a href="#experience" className="text-black dark:text-white">
                                Experiencia/Educación
                            </a>                            
                        </li>
                        <li>
                            <a href="#projects" className="text-black dark:text-white">
                                Proyectos
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="text-black dark:text-white">
                                Habilidades
                            </a>
                        </li>       
                        <li>
                            <a href="#contact" className="text-black dark:text-white">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="h-full">
                    <button className="text-black dark:text-white" onClick={() => setDarkToggle(!darkToggle)}>
                        {darkToggle ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
            </div>
        </header>
    );
}
