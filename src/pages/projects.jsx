import React from "react";
import { NavBar } from "../components/navBar";
import { DetailsProjects } from "../components/detailsProjects";
import frontPageClinicaWeb from "../assets/img/Prueba-Tecnica.png";
import iconHtml from "../assets/img/technologies/iconHtml.png";
import iconJavaScript from "../assets/img/technologies/iconJavascript.png";
import iconDart from "../assets/img/technologies/iconDart.png";
import iconEjs from "../assets/img/technologies/iconEjs.png";
import iconFirebase from "../assets/img/technologies/iconFirebase.png";
import iconFlutter from "../assets/img/technologies/iconFlutter.png";
import iconPostgreSQL from "../assets/img/technologies/iconPostgreSQL.png";
import iconTailwind from "../assets/img/technologies/iconTailwind.png";
import iconNodeJS from "../assets/img/technologies/iconNodeJs.png";
import { PiBracketsCurlyBold } from "react-icons/pi";


export const Projects = () => {
    
    const detailsProjects = [
        {
            frontPage: frontPageClinicaWeb,
            alt: 'ClinicaUlagosWeb',
            title: 'Clinica Ulagos Web',
            description: 'Desarrollo de un sistema integral de reservas para citas médicas, diseñado para facilitar la gestión tanto para clientes como para profesionales de la salud. El sistema permite a los pacientes registrarse, iniciar sesión, agendar, anular citas y acceder a su historial médico, mientras que los profesionales pueden gestionar (agregar, editar y anular) las citas.',
            technologies: [
                {
                    name: 'HTML',
                    logo: iconHtml,
                    alt: 'html'
                },
                {
                    name: 'JavaScript',
                    logo: iconJavaScript,
                    alt: 'javascript'
                },
                {
                    name: 'TailwindCSS',
                    logo: iconTailwind,
                    alt: 'tailwindCSS'
                },
                {
                    name: 'EJS',
                    logo: iconEjs,
                    alt: 'ejs'
                },
                {
                    name: 'NodeJs',
                    logo: iconNodeJS,
                    alt: 'nodeJS'
                },
                {
                    name: 'PostgreSQL',
                    logo: iconPostgreSQL,
                    alt: 'postgreSQL'
                }
            ]
        },
        {
            frontPage: frontPageClinicaWeb,
            alt: 'ClinicaUlagosApp',
            title: 'Clinica Ulagos App',
            description: 'Desarrollo de una aplicación móvil enfocada en facilitar a los pacientes la gestión de citas médicas. Esta aplicación, diseñada específicamente para el uso de pacientes, permite a los usuarios registrarse e iniciar sesión, así como gestionar sus sesiones de forma segura. Los pacientes tienen la capacidad de ver su historial médico, agendar nuevas citas y anular citas existentes, proporcionando una experiencia de usuario fluida y eficiente.',
            technologies: [
                {
                    name: 'Dart',
                    logo: iconDart,
                    alt: 'dart'
                },
                {
                    name: 'Flutter',
                    logo: iconFlutter,
                    alt: 'flutter'
                },
                {
                    name: 'Firebase',
                    logo: iconFirebase,
                    alt: 'firebase'
                }
            ]
        },
        {
            frontPage: frontPageClinicaWeb,
            alt: 'ClinicaUlagosApp',
            title: 'Clinica Ulagos App',
            description: 'Desarrollo de una aplicación móvil enfocada en facilitar a los pacientes la gestión de citas médicas. Esta aplicación, diseñada específicamente para el uso de pacientes, permite a los usuarios registrarse e iniciar sesión, así como gestionar sus sesiones de forma segura. Los pacientes tienen la capacidad de ver su historial médico, agendar nuevas citas y anular citas existentes, proporcionando una experiencia de usuario fluida y eficiente.',
            technologies: [
                {
                    name: 'Dart',
                    logo: iconDart,
                    alt: 'dart'
                },
                {
                    name: 'Flutter',
                    logo: iconFlutter,
                    alt: 'flutter'
                },
                {
                    name: 'Firebase',
                    logo: iconFirebase,
                    alt: 'firebase'
                }
            ]
        },
        {
            frontPage: frontPageClinicaWeb,
            alt: 'ClinicaUlagosApp',
            title: 'Clinica Ulagos App',
            description: 'Desarrollo de una aplicación móvil enfocada en facilitar a los pacientes la gestión de citas médicas. Esta aplicación, diseñada específicamente para el uso de pacientes, permite a los usuarios registrarse e iniciar sesión, así como gestionar sus sesiones de forma segura. Los pacientes tienen la capacidad de ver su historial médico, agendar nuevas citas y anular citas existentes, proporcionando una experiencia de usuario fluida y eficiente.',
            technologies: [
                {
                    name: 'Dart',
                    logo: iconDart,
                    alt: 'dart'
                },
                {
                    name: 'Flutter',
                    logo: iconFlutter,
                    alt: 'flutter'
                },
                {
                    name: 'Firebase',
                    logo: iconFirebase,
                    alt: 'firebase'
                }
            ]
        },
        {
            frontPage: frontPageClinicaWeb,
            alt: 'ClinicaUlagosApp',
            title: 'Clinica Ulagos App',
            description: 'Desarrollo de una aplicación móvil enfocada en facilitar a los pacientes la gestión de citas médicas. Esta aplicación, diseñada específicamente para el uso de pacientes, permite a los usuarios registrarse e iniciar sesión, así como gestionar sus sesiones de forma segura. Los pacientes tienen la capacidad de ver su historial médico, agendar nuevas citas y anular citas existentes, proporcionando una experiencia de usuario fluida y eficiente.',
            technologies: [
                {
                    name: 'Dart',
                    logo: iconDart,
                    alt: 'dart'
                },
                {
                    name: 'Flutter',
                    logo: iconFlutter,
                    alt: 'flutter'
                },
                {
                    name: 'Firebase',
                    logo: iconFirebase,
                    alt: 'firebase'
                }
            ]
        }
    ]

    return(
        <>
            <section id="projects" className="flex flex-col w-[100%] py-24 max-2xl:px-28 max-2xl:py-16 max-lg:px-8 ">
                <h1 className="dark:text-white text-snowy-mint-800 font-extrabold text-4xl mb-10 flex flex-row gap-x-4 items-center max-md:text-3xl"><PiBracketsCurlyBold/> Proyectos</h1>
                <div className="flex gap-y-40 flex-col">
                {detailsProjects.map(i => (
                        <DetailsProjects
                            frontPage={i.frontPage}
                            alt={i.alt}
                            title={i.title}
                            description={i.description}
                            technologies={i.technologies}
                        />
                ))}
                </div>
            </section>
        </>
    );
}