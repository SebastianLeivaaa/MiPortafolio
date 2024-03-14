import React from "react";
import iconReact from "../assets/img/technologies/iconReact.png";
import iconTailwind from "../assets/img/technologies/iconTailwind.png";


export const Footer = () => {
    return(
        <footer className="flex flex-col justify-center text-center align-items-center w-[100%] pt-24 pb-4 max-2xl:px-28 max-2xl:py-16 max-lg:px-8 dark:bg-primaryDark bg-primaryLight items-center gap-y-6">
            <p className="dark:text-white text-textLight text-lg">Hecho por <span className="dark:text-black-rock-300 text-snowy-mint-800 font-bold">Sebastián Leiva</span> utilizando:</p>
            <li className="flex flex-row gap-x-4">
                <ul>
                    <img src={iconReact} className="w-10 h-10"></img>
                </ul>
                <ul>
                    <img src={iconTailwind} className="w-10 h-10"></img>
                </ul>
            </li>
            <a href="https://github.com/SebastianLeivaaa/MiPortafolio" target="_blank" className="dark:text-black-rock-300 text-snowy-mint-800 font-bold underline">Ver código</a>
            <a href="#home" className="text-snowy-mint-900 dark:text-black-rock-500 text-4xl font-black brightness-[175%] items font-sourceCodePro italic">&lt;SL&gt;</a>
        </footer>
    );
}