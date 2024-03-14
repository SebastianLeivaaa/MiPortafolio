import React from "react";
import { DetailsProjects } from "../components/detailsProjects";
import projectsData from "../utils/projectsData.json";
import { PiBracketsCurlyBold } from "react-icons/pi";


export const Projects = () => {
    
    return(
        <>
            <section id="projects" className="flex flex-col w-[100%] py-24 max-2xl:px-28 max-2xl:py-16 max-lg:px-8 ">
                <h1 className="dark:text-white text-snowy-mint-800 font-extrabold text-4xl mb-10 flex flex-row gap-x-4 items-center max-md:text-3xl"><PiBracketsCurlyBold/> Proyectos</h1>
                <div className="flex gap-y-40 flex-col">
                {projectsData.map(i => (
                        <DetailsProjects
                            frontPage={i.frontPage}
                            alt={i.alt}
                            title={i.title}
                            description={i.description}
                            technologies={i.technologies}
                            repository={i.repository}
                        />
                ))}
                </div>
            </section>
        </>
    );
}