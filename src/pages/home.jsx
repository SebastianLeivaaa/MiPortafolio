import React from "react";
import MyCV from "../assets/downloads/CV-Sebastian_Leiva.pdf";
import imgProfile from '../assets/img/profile.png';
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiDownload } from "react-icons/fi";

export const Home = () => {

    const handleDownload = () => {
        window.open(MyCV, '_blank');
    };

    return(
        <>
            <section id="home" className="w-[100%] py-[5%] h-screen items-center gap-x-10 max-2xl:px-28 max-2xl:py-16 max-lg:px-8 max-lg:h-auto">
                <div className="h-[100%] flex flex-row gap-x-10 items-center max-lg:flex-col gap-y-4 max-lg:mt-10 max-lg:py-12 max-md:py-0">
                    <div className="flex items-end justify-center w-[35%] max-md:w-[75%] max-lg:w-[50%] h-auto">
                        <img src={imgProfile} className="object-scale-down w-[500px] dark:brightness-125 dark:opacity-80 h-[500px] max-lg:w-[300px] max-lg:h-[300px] rounded-[10%] max-lg:rounded-[100%]"></img>
                    </div>
                    <div className="flex flex-col w-[65%] gap-y-6 max-lg:w-[100%] max-lg:gap-y-0.5 h-auto">
                        <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
                            <h1 className="font-extrabold dark:text-black-rock-400 text-snowy-mint-900 text-5xl max-lg:text-3xl">Sebastián Leiva A.</h1>
                            <a 
                                href="https://www.google.com/maps/place/Puerto+Montt,+Los+Lagos/@-41.4629516,-72.9686176,14z/data=!3m1!4b1!4m6!3m5!1s0x96183a4d6920f407:0x86a3f15a79a5c9df!8m2!3d-41.468917!4d-72.9411364!16zL20vMDNmeGts?entry=ttu"
                                className="text-grey dark:text-black-rock-200 hover:text-snowy-mint-900 dark:hover:text-black-rock-300 text-xl flex flex-row max-w-max items-center max-md:text-lg mt-2 max-lg:mt-0 transition duration-100 transform hover:scale-105"
                                target="_blank"
                            >
                                <IoLocationSharp/> Puerto Montt, Chile
                            </a>
                        </div>
                        <div className="max-lg:mt-10 max-lg:px-10 max-md:px-0">
                            <p className="text-textLight dark:text-white dark:opacity-75 text-lg justify-start break-words max-md:text-base max-lg:text-lg">
                                Soy estudiante de quinto año de la carrera de Ingeniería Civil en Informática en la Universidad de Los Lagos, Puerto Montt.
                            </p>
                            <p className="text-textLight dark:text-white dark:opacity-75 text-lg justify-start break-words mt-2 max-md:text-base max-lg:text-lg">
                                En constante búsqueda de conocimientos y habilidades, me encuentro actualmente inmerso en el proceso de convertirme en un desarrollador web y de aplicaciones móviles, 
                                explorando las últimas tecnologías y prácticas para contribuir de manera significativa en este campo de evolución constante.
                            </p>
                        </div>
                        <ul className="flex flex-row gap-x-8 w-full items-center max-lg:mt-10 max-lg:gap-x-6 max-lg:justify-center">
                            <li className="dark:text-white text-snowy-mint-800 dark:contrast-50 text-4xl max-md:text-2xl max-lg:text-3xl transition duration-100 transform hover:scale-110">
                                <a href="https://www.linkedin.com/in/sebastian-leiva-almonacid-658b05265/" target="_blank" className="dark:hover:text-black-rock-400 hover:text-snowy-mint-950">
                                    <FaLinkedin/>
                                </a>
                            </li>
                            <li className="dark:text-white text-snowy-mint-800 dark:contrast-50 text-4xl max-md:text-2xl max-lg:text-3xl transition duration-100 transform hover:scale-110">
                                <a href="https://github.com/SebastianLeivaaa" target="_blank" className="dark:hover:text-black-rock-400 hover:text-snowy-mint-950">
                                    <FaGithub/>
                                </a>
                            </li>
                            <li className="dark:text-white text-snowy-mint-800 dark:contrast-50 text-4xl max-md:text-2xl max-lg:text-3xl transition duration-100 transform hover:scale-110">
                                <a href="mailto:sebastianleiva010@gmail.com" className="dark:hover:text-black-rock-400 hover:text-snowy-mint-950">
                                    <SiGmail/>
                                </a>
                            </li>
                            <li className="text-white text-2xl max-md:text-base transition duration-100 transform hover:scale-105">
                                <button className="p-4 rounded-lg flex flex-row gap-x-2 items-center text-snowy-mint-700 border-snowy-mint-800 bg-snowy-mint-200 border-[1px] hover:bg-snowy-mint-900 dark:hover:text-white dark:bg-black-rock-100 hover:text-white dark:text-black-rock-700 dark:border-black-rock-500 dark:placeholder-black-rock-900 dark:hover:bg-black-rock-400" onClick={handleDownload}>
                                    <FiDownload/>
                                    Descargar CV
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}