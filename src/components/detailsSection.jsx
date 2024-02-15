import React, { useState, useEffect } from "react";

export const DetailsSection = ({ name, description, timeline, logo, alt, index }) => {


    return (
        <article className="grid grid-cols-3 text-textLight dark:text-white max-md:flex max-md:flex-row max-md:gap-x-10">
            <div className={`flex flex-col py-10 ${index % 2 === 0 ? 'order-1' : 'order-3'} max-md:order-2  max-md:py-8 gap-y-1.5`}>
                <h2 className="text-2xl max-md:text-xl">{name}</h2>
                <p className="text-xl max-md:text-lg ">{description}</p>
                <p className="text-lg text-grey">{timeline}</p>
                <div className={`flex items-center ${index % 2 === 0 ? 'order-3' : 'order-1'} w-full max-md:max-w-[200px] h-auto`}>
                    <img src={logo} alt={alt} className="object-cover hidden max-md:flex mt-2" />
                </div>
            </div>
            <div className="flex justify-center items-center relative order-2 max-md:order-1 max-h-full">
                <div className="w-1 bg-snowy-mint-600 dark:bg-black-rock-400 h-[100%]"></div>
                <div className="absolute w-5 h-5 max-md:w-4 max-md:h-4 rounded-full bg-snowy-mint-600 dark:bg-black-rock-400 z-10 text-center"></div>
            </div>
            <div className={`flex items-center ${index % 2 === 0 ? 'order-3' : 'order-1'} w-full max-md:hidden h-auto`}>
                <img src={logo} alt={alt} className="object-cover" />
            </div>
        </article>
    );
}
