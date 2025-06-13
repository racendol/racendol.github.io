'use client'

import React from 'react';
import Portfolio from './portofolio';
import { LangProvider } from "./i18n";
import { 
  contact, 
  education, 
  certifications, 
  languageSkills, 
  groupedSkills, 
  projects, 
  experience 
} from './details';
import ResumeToLatexConverter from './ResumeLatexConverter';
import HeroSection from './hero';

const Home: React.FC = () => {
  const resumeData = {
    contact,
    education,
    certifications,
    languageSkills,
    groupedSkills,
    projects,
    experience
  };

  return (  
    <div className='App'>
      <LangProvider>
      <HeroSection />
      {/* <Portfolio /> */}
      </LangProvider>
      
      {/* show only on dev */}
      {process.env.NODE_ENV === 'development' &&
      <div className="container mx-auto p-4">
        <ResumeToLatexConverter resumeData={resumeData} language="en" />
      </div>
      }
    </div>
  );
};


export default Home;