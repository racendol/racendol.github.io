'use client'

import React from 'react';
import Portfolio from './portofolio';
import { LangProvider } from "./i18n";

const Home: React.FC = () => {
  return (
    <div className='App'>
      <LangProvider>
      <Portfolio />
      </LangProvider>
    </div>
  );
};


export default Home;