import { useState } from 'react';
import { Home } from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ExperienceEducation } from './pages/experienceEducation';
import { Projects } from './pages/projects';
import { Skills } from './pages/skills';
import { Contact } from './pages/contact';
import { NavBar } from './components/navBar';
import { Footer } from './components/footer';

function App() {
  return (
      <div className='bg-primaryLight dark:bg-primaryDark w-[60%] ml-[20%] mr-[20%] max-2xl:w-[100%] max-2xl:ml-[0%] max-2xl:md-[0%] max-lg:overflow-x-hidden'>
        <NavBar/>
        <Home />
        <ExperienceEducation />
        <Projects />
        <Skills />
        <Contact />
        <Footer/>            
      </div>
  );
}


export default App;
