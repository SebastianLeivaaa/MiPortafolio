import React from "react";
import { NavBar } from "../components/navBar";
import { DetailsProjects } from "../components/detailsProjects";
import frontPageParkingUlagosWeb from "../assets/img/projects/Parking_Ulagos_web.png";
import frontPageClinicaWeb from "../assets/img/projects/Clinica_Ulagos_web.png";
import frontPageClinicaApp from "../assets/img/projects/Clinica_Ulagos_App.png";
import frontPageRevisionesTecnicasWeb from "../assets/img/projects/Revisiones_Tecnicas_web.png";
import frontPageRevisionesTecnicasApp from "../assets/img/projects/Revisiones_Tecnicas_App.png";
import frontPageProgramasUlagos from "../assets/img/projects/Programas_Ulagos.png";
import iconJavaScript from "../assets/img/technologies/iconJavaScript.png";
import iconMySQL from "../assets/img/technologies/iconMySQL.png";
import iconDart from "../assets/img/technologies/iconDart.png";
import iconFirebase from "../assets/img/technologies/iconFirebase.png";
import iconReact from "../assets/img/technologies/iconReact.png";
import iconNextJS from "../assets/img/technologies/iconNextJS.png";
import iconFlutter from "../assets/img/technologies/iconFlutter.png";
import iconPostgreSQL from "../assets/img/technologies/iconPostgreSQL.png";
import iconTailwind from "../assets/img/technologies/iconTailwind.png";
import iconNodeJS from "../assets/img/technologies/iconNodeJs.png";
import iconTypeScript from "../assets/img/technologies/iconTypeScript.png";
import { PiBracketsCurlyBold } from "react-icons/pi";


export const Projects = () => {
    
    const detailsProjects = [
        {
            frontPage: frontPageParkingUlagosWeb,
            alt: 'ParkingUlagosWeb',
            title: 'ParkingUlagosWeb',
            description: 'Desarrollo de un sistema de reservas para un estacionamiento universitario que permite a los usuarios realizar y gestionar reservas de manera rápida mediante un mapa interactivo y códigos QR. Los usuarios pueden ver su historial y estadísticas de uso, mientras que los guardias pueden asignar espacios a visitantes y confirmar reservas. El sistema cuenta con seguridad avanzada, incluyendo encriptación de contraseñas, y una interfaz responsiva e intuitiva.',
            technologies: [
                {
                    name: 'React',
                    logo: iconReact,
                    alt: 'react'
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
                    name: 'NodeJs',
                    logo: iconNodeJS,
                    alt: 'nodeJS'
                },
                {
                    name: 'PostgreSQL',
                    logo: iconPostgreSQL,
                    alt: 'postgreSQL'
                }
            ],
            repository: 'https://github.com/SebastianLeivaaa/SistemaEstacionamientosUlagos',
            preview: 'https://estacionamientosulagos.vercel.app'
        },
        {
            frontPage: frontPageProgramasUlagos,
            alt: 'Programas de Ingeniería Ulagos',
            title: 'Programas de Ingeniería Ulagos',
            description: 'Desarrollo una aplicación web intuitiva que permite visualizar las mallas curriculares de las carreras de ingeniería de la Universidad de Los Lagos. La plataforma facilita la exploración de las previaturas de cada asignatura, destacando visualmente las conexiones entre cursos. Al seleccionar un ramo, se muestran tanto sus previaturas como los cursos para los cuales es previatura, ofreciendo una comprensión clara y dinámica de las relaciones académicas entre las materias.',
            technologies: [
                {
                    name: 'Next.js',
                    logo: iconNextJS,
                    alt: 'Next.js'
                },
                {
                    name: 'TypeScript',
                    logo: iconTypeScript,
                    alt: 'TypeScript'
                },
                {
                    name: 'TailwindCSS',
                    logo: iconTailwind,
                    alt: 'tailwindCSS'
                },
                {
                    name: 'React',
                    logo: iconReact,
                    alt: 'react'
                }
            ],
            repository: 'https://github.com/SebastianLeivaaa/mallas-curriculares-ula',
            preview: 'https://mallas-curriculares-ula.vercel.app/'
        },
        {
            frontPage: frontPageClinicaWeb,
            alt: 'ClinicaUlagosWeb',
            title: 'Clinica Ulagos Web',
            description: 'Desarrollo de un sistema integral de reservas para citas médicas, diseñado para facilitar la gestión tanto para clientes como para profesionales de la salud. El sistema permite a los pacientes registrarse, iniciar sesión, agendar, anular citas y acceder a su historial médico, mientras que los profesionales pueden gestionar (agregar, editar y anular) las citas.',
            technologies: [
                {
                    name: 'React',
                    logo: iconReact,
                    alt: 'react'
                },
                {
                    name: 'JavaScript',
                    logo: iconJavaScript,
                    alt: 'javascript'
                },
                {
                    name: 'React',
                    logo: iconReact,
                    alt: 'react'
                },
                {
                    name: 'TailwindCSS',
                    logo: iconTailwind,
                    alt: 'tailwindCSS'
                }
            ],
            repository: 'https://github.com/SebastianLeivaaa/ClinicaUlagos'
        },
        {
            frontPage: frontPageClinicaApp,
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
            ],
            repository: 'https://github.com/SebastianLeivaaa/ClinicaUlagosApp'
        },
        {
            frontPage: frontPageRevisionesTecnicasWeb,
            alt: 'CheckAutoWeb',
            title: 'CheckAuto Web',
            description: 'Desarrollo de un sistema integral y funcional para la empresa Monte Verde IT Spa, que permite a los usuarios ingresar la patente de un vehículo para acceder instantáneamente a la información detallada del vehículo y a su historial completo de revisiones técnicas, ordenadas cronológicamente por año. Este sistema cuenta con una amplia base de datos que abarca todas las revisiones técnicas de Chile a partir del año 2015, garantizando datos exhaustivos y actualizados para una experiencia confiable y completa.',
            technologies: [
                {
                    name: 'React',
                    logo: iconReact,
                    alt: 'react'
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
                    name: 'NodeJs',
                    logo: iconNodeJS,
                    alt: 'nodeJS'
                },
                {
                    name: 'MySQL',
                    logo: iconMySQL,
                    alt: 'mysql'
                },
            ]
        },
        {
            frontPage: frontPageRevisionesTecnicasApp,
            alt: 'CheckAutoApp',
            title: 'CheckAuto App',
            description: 'Desarrollo de una aplicación móvil integral y funcional para la empresa Monte Verde IT Spa, que ofrece a los usuarios la posibilidad de ingresar la patente de un vehículo para acceder instantáneamente a la información detallada del vehículo y a su historial completo de revisiones técnicas. La aplicación clasifica automáticamente las revisiones técnicas por año, proporcionando una experiencia fluida y eficiente para los usuarios. Además, esta aplicación móvil cuenta con una extensa base de datos que abarca todas las revisiones técnicas de Chile desde el año 2015, asegurando datos precisos y actualizados en todo momento.',
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
                    name: 'MySQL',
                    logo: iconMySQL,
                    alt: 'mysql'
                },
                {
                    name: 'NodeJs',
                    logo: iconNodeJS,
                    alt: 'nodeJS'
                },
            ],
        },
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
                            repository={i.repository}
                            preview={i.preview}
                        />
                ))}
                </div>
            </section>
        </>
    );
}