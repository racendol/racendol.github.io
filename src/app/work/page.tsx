'use client'

import ProjectsSection from "./projects";
import ExperiencesSection from "./experiences";
import { projects, experience } from "../details";

export default function WorkPage() {
  return (
    <>
    <ExperiencesSection experiences={experience} />
      <ProjectsSection projects={projects} />
    </>
  );
}