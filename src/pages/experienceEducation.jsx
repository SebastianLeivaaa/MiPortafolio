import React from "react";
import { DetailsSection } from "../components/detailsSection";
import { FaBriefcase } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import detailsExperience from "../utils/experienceData.json";
import detailsEducation from "../utils/educationData.json";

export const ExperienceEducation = () => {

    return(
        <>
            <div id="experience" className=" max-2xl:px-28 max-md:mt-0 max-lg:px-8  flex flex-col gap-y-20 py-24 max-2xl:py-16">
                <section className="experience flex flex-col w-[100%] gap-y-10 max-md:gap-y-5">
                    <h1 className="dark:text-white text-snowy-mint-800 font-extrabold text-4xl mb-10 mt-10 flex flex-row gap-x-4 items-center max-md:text-3xl"><FaBriefcase/> Experiencia</h1>
                    {detailsExperience.map((i, index) => (
                        <div className="flex flex-row">
                            <DetailsSection 
                                name={i.name} 
                                description={i.description} 
                                timeline={i.timeline}
                                logo={i.logo}
                                alt={i.alt}
                                index={index}
                            />
                        </div>
                    ))}
                </section>
                <section className="education flex flex-col w-[100%] gap-y-10 max-md:gap-y-5">
                    <h1 className="dark:text-white text-snowy-mint-800 font-extrabold text-4xl mb-10 mt-10 flex flex-row gap-x-4 items-center max-md:text-3xl"><HiAcademicCap/> Educación</h1>
                    {detailsEducation.map((i, index) => (
                        <div className="flex flex-row">
                            <DetailsSection 
                                name={i.name} 
                                description={i.description} 
                                timeline={i.timeline}
                                logo={i.logo}
                                alt={i.alt}
                                index={index}
                            />
                        </div>
                    ))}
                </section>
            </div>
        </>
    )
}