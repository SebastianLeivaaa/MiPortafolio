import React from "react";
import { NavBar } from "../components/navBar";
import { FaCogs } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import iconHtml from "../assets/img/technologies/iconHtml.png";
import iconJavaScript from "../assets/img/technologies/iconJavaScript.png";
import iconJava from "../assets/img/technologies/iconJava.png";
import iconGit from "../assets/img/technologies/iconGit.png";
import iconCss from "../assets/img/technologies/iconCss.png";
import iconReact from "../assets/img/technologies/iconReact.png";
import iconDart from "../assets/img/technologies/iconDart.png";
import iconMySQL from "../assets/img/technologies/iconMySQL.png";
import iconEjs from "../assets/img/technologies/iconEjs.png";
import iconFirebase from "../assets/img/technologies/iconFirebase.png";
import iconNextJS from "../assets/img/technologies/iconNextJS.png";
import iconTypeScript from "../assets/img/technologies/iconTypeScript.png";
import iconFlutter from "../assets/img/technologies/iconFlutter.png";
import iconPostgreSQL from "../assets/img/technologies/iconPostgreSQL.png";
import iconTailwind from "../assets/img/technologies/iconTailwind.png";
import iconNodeJS from "../assets/img/technologies/iconNodeJs.png";
import iconSpanish from "../assets/img/languages/iconSpanish.png";
import iconEnglish from "../assets/img/languages/iconEnglish.png";

export const Skills = () => {

    const myTechnologies = [
        {
            name: 'JavaScript',
            logo: iconJavaScript
        },
        {
            name: 'TypeScript',
            logo: iconTypeScript
        },
        {
            name: 'Next.js',
            logo: iconNextJS
        },
        {
            name: 'React',
            logo: iconReact
        },
        {
            name: 'Java',
            logo: iconJava
        },
        {
            name: 'Node.js',
            logo: iconNodeJS
        },
        {
            name: 'TailwindCSS',
            logo: iconTailwind
        },
        {
            name: 'Dart',
            logo: iconDart
        },
        {
            name:'Flutter',
            logo: iconFlutter
        },
        {
            name: 'PostgreSQL',
            logo: iconPostgreSQL
        },
        {
            name: 'MySQL',
            logo: iconMySQL
        },
        {
            name: 'Firebase',
            logo: iconFirebase
        },
        {
            name: 'Git',
            logo: iconGit
        },
        {
            name: 'HTML',
            logo: iconHtml
        },
        {
            name: 'CSS',
            logo: iconCss
        },
        {
            name: 'EJS',
            logo: iconEjs
        }
    ]

    return(
        <>
            <section id="skills" className="techniques  flex flex-col w-[100%] max-2xl:py-16 max-2xl:px-28 max-lg:px-8 py-24 ">
                <h1 className="dark:text-white text-snowy-mint-800 font-extrabold text-4xl mb-10 mt-10 flex flex-row gap-x-4 items-center max-md:text-3xl"><FaCogs/> Técnicas</h1>
                <h3 className="dark:text-white text-textLight text-lg">Tecnologías con las que he trabajado</h3>
                <div className="flex flex-wrap w-[100%] py-[5%] gap-10 justify-start mt-10 max-lg:gap-x-12 max-md:gap-x-10">
                    {myTechnologies.map( (i) => (
                        <article className="flex flex-col w-[10%] items-center">
                            <img src={i.logo} className="w-[100%] h-[100%]"></img>
                            <h2 className="text-textLight dark:text-white text-xl mt-4 max-lg:text-lg max-md:text-xs">{i.name}</h2>
                        </article>
                    ))}
                </div>
            </section>
            <section className=" grid grid-cols-2 w-[100%] pb-[5%] max-2xl:px-28 max-2xl:py-16 max-md:flex max-md:flex-col max-lg:px-8 gap-y-20">
                <div className="">
                    <h1 className="dark:text-white text-snowy-mint-800 font-extrabold text-4xl mb-10 flex flex-row gap-x-4 items-center max-md:justify-start max-md:text-3xl"><FaUserFriends/> Blandas</h1>
                    <ul className="grid grid-cols-2 dark:text-white text-textLight text-xl gap-x-6 gap-y-4 max-md:text-sm max-lg:flex-col max-lg:flex ">
                        <li className="items-center flex"><span className="mr-2 inline-block h-2.5 w-2.5 rounded-full dark:bg-primaryBlue bg-snowy-mint-700"></span>Responsable</li>
                        <li className="items-center flex "><span className="mr-2 inline-block h-2.5 w-2.5 rounded-full dark:bg-primaryBlue bg-snowy-mint-700"></span>Proactivo</li>
                        <li className="items-center flex"><span className="mr-2 inline-block h-2.5 w-2.5 rounded-full dark:bg-primaryBlue bg-snowy-mint-700"></span>Trabajo en equipo</li>
                        <li className="items-center flex"><span className="mr-2 inline-block h-2.5 w-2.5 rounded-full dark:bg-primaryBlue bg-snowy-mint-700"></span>Empatía</li>
                        <li className="items-center flex"><span className="mr-2 inline-block h-2.5 w-2.5 rounded-full dark:bg-primaryBlue bg-snowy-mint-700"></span>Iniciativa</li>
                        <li className="items-center flex"><span className="mr-2 inline-block h-2.5 w-2.5 rounded-full dark:bg-primaryBlue bg-snowy-mint-700"></span>Comunicación efectiva</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center max-md:items-start">
                    <h1 className="dark:text-white text-snowy-mint-800 font-extrabold text-4xl mb-10 flex flex-row gap-x-4 items-center max-md:text-3xl"><FaGlobeAmericas/> Idiomas</h1>
                    <ul className="flex flex-col dark:text-white text-textLight text-xl max-md:text-xs gap-x-6 gap-y-4">
                        <li className="flex flex-row items-center gap-x-2"><img src={iconSpanish} alt="spanish" className="w-8 h-8"></img> Español (Nativo)</li>
                        <li className="flex flex-row items-center gap-x-2"><img src={iconEnglish} alt="english" className="w-8 h-8"></img>Ingles Intermedio (B1)</li>
                    </ul>
                </div>
                
            </section>
        </>
    );
}