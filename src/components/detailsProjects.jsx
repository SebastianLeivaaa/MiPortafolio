import React from "react";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

export const DetailsProjects = ({frontPage, alt, title, description, technologies, repository, preview}) => {

    const handleImageClick = () => {
        if(preview){
            window.open(preview, '_blank');
        }
      };
    return(
        <article className="flex flex-row shadow-gray-900 shadow-3xl text-textLight dark:text-white gap-x-2 rounded-xl max-lg:flex-col max-lg:gap-y-6 max-lg:p-20  max-lg:dark:bg-black-rock-950 max-lg:bg-snowy-mint-300 max-lg:dark:contrast-[95%] max-md:dark:contrast-[100%] max-md:p-0 max-md:contrast-[100%] max-md:bg-snowy-mint-100">
            <div className="flex items-center overflow-hidden w-[35%] h-auto rounded-xl max-lg:w-[100%] max-lg:justify-center">
                <img onClick={handleImageClick} src={frontPage} alt={alt} className={`object-cover w-full h-[350px] max-md:w-[100%] max-md:h-[300px] max-lg:h-[350px] max-lg:rounded-xl ${preview ? 'cursor-pointer' : ''}`} />
            </div>
            <div className="flex flex-col w-[65%] px-5 max-lg:w-[100%] max-lg:px-0">
                <div className="flex flex-row gap-x-3 items-end relative max-lg:justify-center max-md:justify-start">
                    <h1 className="font-extrabold dark:text-black-rock-400 text-snowy-mint-900 text-4xl max-md:text-2xl">{title}</h1>
                    <div className="group relative flex items-center">
                        {!preview ? (
                            <div>
                                <HiMiniArrowTopRightOnSquare className="text-2xl text-snowy-mint-700 hover:text-snowy-mint-900 dark:hover:text-black-rock-400 dark:text-grey"/>
                                <span className="hidden absolute bg-primaryDark contrast-75 text-white p-2 rounded shadow-md whitespace-nowrap -translate-y-full transform -top-3 left-1/2 -translate-x-1/2 group-hover:block">
                                    No disponible
                                </span>
                            </div>
                        ) : (
                            <a href={preview} target="_blank" className="flex flex-row gap-x-2">
                                <HiMiniArrowTopRightOnSquare className="text-2xl text-snowy-mint-700 hover:text-snowy-mint-900 dark:hover:text-black-rock-400 dark:text-grey"/>
                                <span className="hidden absolute bg-primaryDark contrast-75 text-white p-2 rounded shadow-md whitespace-nowrap -translate-y-full transform -top-3 left-1/2 -translate-x-1/2 group-hover:block">
                                    Visualizar
                                </span>
                            </a>
                        )}
                    </div>
                    <div className="group relative">
                        {!repository ? (
                            <div>
                                <FaGithub className="text-2xl text-snowy-mint-700 hover:text-snowy-mint-900 dark:hover:text-black-rock-400 dark:text-grey"/>
                                <span className="hidden absolute bg-primaryDark contrast-75 text-white p-2 rounded shadow-md whitespace-nowrap -translate-y-full transform -top-3 left-1/2 -translate-x-1/2 group-hover:block">
                                    No disponible 
                                </span>
                            </div>
                        ) : (
                            <a href={repository} target="_blank" className="flex flex-row gap-x-2">
                                <FaGithub className="text-2xl text-snowy-mint-700 hover:text-snowy-mint-900 dark:hover:text-black-rock-400 dark:text-grey"/>
                                <span className="hidden absolute bg-primaryDark contrast-75 text-white p-2 rounded shadow-md whitespace-nowrap -translate-y-full transform -top-3 left-1/2 -translate-x-1/2 group-hover:block">
                                    Ver código
                                </span>
                            </a>
                        )}
                    </div>
                </div>
                <p className="mt-6  dark:opacity-75 dark:text-white text-lg max-md:text-base">{description}</p>
                <ul className="flex flex-wrap gap-x-6 gap-y-6 mt-8 max-lg:gap-x-2">
                    {technologies.map((i) => (
                        <li className="flex flex-row items-center gap-x-2 p-2 rounded-lg bg-snowy-mint-800 text-white dark:bg-black-rock-500 max-md:gap-x-1">
                            <img src={i.logo} alt={i.alt} className="w-6 h-6 max-md:w-5 max-md:h-5" />
                            <h3 className="text-base max-md:text-xs">{i.name}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}