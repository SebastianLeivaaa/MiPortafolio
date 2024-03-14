import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";




export const NavBar = () => {


    const [darkToggle, setDarkToggle] = useState(true);
    const [currentSection, setCurrentSection] = useState('home');
    const [onToggleMenu, setOnToggleMenu] = useState(false);
    const updateCurrentSection = () => {
        const experienceSection = document.getElementById('experience').offsetTop;
        const projectsSection = document.getElementById('projects').offsetTop;
        const skillsSection = document.getElementById('skills').offsetTop;
        const contactSection = document.getElementById('contact').offsetTop;
      
        setCurrentSection((prevSection) => {
          if (window.scrollY >= contactSection - 50) {
            return 'contact';
          } else if (window.scrollY >= skillsSection - 50) {
            return 'skills';
          } else if (window.scrollY >= projectsSection - 50) {
            return 'projects';
          } else if (window.scrollY >= experienceSection - 50) {
            return 'experience';
          } else {
            return 'home'; // No cambia si no está en ninguna sección
          }
        });
      };
      
    
      useEffect(() => {
    
        const handleScroll = () => {
            updateCurrentSection();
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    


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
        <header className="w-[60%] mr-[20%] z-20 max-2xl:w-[100%] max-2xl:px-4 max-2xl:mr-[0%] fixed">
            <div className="flex flex-row align-items-center items-end gap-x-10 justify-between py-5 w-[100%] bg-primaryLight dark:bg-primaryDark max-md:py-2">
                <a href="#home" className="text-snowy-mint-900 dark:text-black-rock-500 text-4xl font-black brightness-[175%] items font-sourceCodePro italic">&lt;SL&gt;</a>
                <nav className={`max-lg:absolute max-lg:top-[100%] max-lg:dark:bg-primaryDark max-lg:bg-snowy-mint-100 max-lg:w-[100%] max-lg:py-6 duration-500 transition ${onToggleMenu ? "max-lg:visible max-lg:pr-5" : "max-lg:hidden"}`}>
                    <ul className={`flex flex-row gap-x-10 text-lg max-lg:flex-col max-lg:items-center max-lg:gap-y-3`}>
                        <li>
                            <a href="#home" className={currentSection === 'home' ? "dark:text-black-rock-200 text-snowy-mint-600" : "dark:text-grey text-snowy-mint-900"} onClick={() => setOnToggleMenu(false)}>
                                Inicio
                            </a>                            
                        </li>
                        <li>
                            <a href="#experience" className={currentSection === 'experience' ? "dark:text-black-rock-200 text-snowy-mint-600" : "dark:text-grey text-snowy-mint-900"} onClick={() => setOnToggleMenu(false)}>
                                Experiencia/Educación
                            </a>                            
                        </li>
                        <li>
                            <a href="#projects" className={currentSection === 'projects' ? "dark:text-black-rock-200 text-snowy-mint-600" : "dark:text-grey text-snowy-mint-900"} onClick={() => setOnToggleMenu(false)}>
                                Proyectos
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className={currentSection === 'skills' ? "dark:text-black-rock-200 text-snowy-mint-600" : "dark:text-grey text-snowy-mint-900"} onClick={() => setOnToggleMenu(false)}>
                                Habilidades
                            </a>
                        </li>       
                        <li>
                            <a href="#contact" className={currentSection === 'contact' ? "dark:text-black-rock-200 text-snowy-mint-600" : "dark:text-grey text-snowy-mint-900"} onClick={() =>setOnToggleMenu(false)}>
                                Contacto
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="h-full gap-x-2 flex flex-row">
                    <button className="text-snowy-mint-900 dark:text-black-rock-200 text-xl max-lg:text-3xl" onClick={() => setDarkToggle(!darkToggle)}>
                        {darkToggle ? <FaSun /> : <FaMoon />}
                    </button>
                    <button className="text-snowy-mint-900 dark:text-black-rock-200 lg:hidden max-lg:text-3xl" onClick={() => setOnToggleMenu(!onToggleMenu)}>
                        {onToggleMenu ? <RxCross2/> : <FaBars/>}                        
                    </button>
                </div>
            </div>
        </header>
    );
}

