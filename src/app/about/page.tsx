'use client'

import AboutPage from "./about";
import {
  contact,
  education,
  certifications,
  languageSkills,
} from "../details";

export default function About() {
  return (
    <AboutPage
      contact={contact}
      education={education}
      certifications={certifications}
      languageSkills={languageSkills}
    />
  );
}