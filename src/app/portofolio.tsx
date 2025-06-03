import React, { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { groupedSkills, education, experience, contact, certifications, languageSkills, projects } from "./details";
import { translate, useLang, T } from "./i18n";

const Portfolio: React.FC = () => {
  const { toggleLang } = useLang();

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{contact.name}</h1>
          <p className="text-sm text-gray-500">{T("Software Engineer", "ソフトウェアエンジニア")}</p>
        </div>
        <button
          onClick={toggleLang}
          className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {T("日本語", "English")}
        </button>
      </div>

      {/* Contact Info */}
      <section className="mb-6 text-xs text-gray-600">
        <h2 className="text-sm font-semibold mb-1 uppercase tracking-wide">{T("Contact", "連絡先")}</h2>
        <ul className="space-y-0.5">
          <li>Email: {contact.email.replace(/@/, " [at] ")}</li>
          {/* <li>Phone: {contact.phone}</li> */}
          <li><a href={contact.github} className="text-blue-500 hover:underline" target="_blank">GitHub</a></li>
          <li><a href={contact.linkedin} className="text-blue-500 hover:underline" target="_blank">LinkedIn</a></li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{T("Experience", "職務経歴")}</h2>
        <Experiences t={T} />
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{T("Projects", "プロジェクト")}</h2>
        <Projects t={T} />
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{T("Skills", "スキル")}</h2>
        <Skills />
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{T("Education", "学歴")}</h2>
        {education.map((edu, i) => (
          <div key={i} className="mb-3">
            <p className="font-semibold text-gray-800">{edu.school}</p>
            <p className="text-sm text-gray-700">{translate(edu.degree)} ({edu.year})</p>
            <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
          </div>
        ))}
      </section>

      {/* Certificates */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{T("Certificates", "資格")}</h2>
        <Certificates />
      </section>

      {/* Languages */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{T("Languages", "言語スキル")}</h2>
        <Language />
      </section>
    </div>
  );
};

function Language() {
    return  (<ul className="list-disc ml-4 text-sm text-gray-700 space-y-1">
    {languageSkills.map((lang, i) => (
      <li key={i}>{translate(lang)}</li>
    ))}
  </ul>)
}

function Certificates() {
    return <ul className="list-disc ml-4 text-sm text-gray-700 space-y-1">
    {certifications.map((cert, i) => (
      <li key={i}>{translate(cert)}</li>
    ))}
  </ul>
}

function Skills() {
  return (
    <div className="space-y-4">
      {Object.entries(groupedSkills).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((skill, index) =>{
              const label = typeof skill === "string" ? skill : translate(skill);
              const key = typeof skill === "string" ? skill : translate(skill);

              return (
                  <span
                    key={key + index}
                    className="bg-blue-100 text-xs px-3 py-1 rounded-full text-blue-800"
                  >
                    {label}
                  </span>
                )
            } )}
          </div>
        </div>
      ))}
    </div>
  );
}

function Projects(props:
   {
    t: (en: string, jp: string) => string,
    }) {
    const [expandedProject, setExpandedProject] = useState<string | null>(null);
    const t = props.t

    return (<>{projects.map((project) => {
        const isExpanded = expandedProject === project.id;
        return (
        <div key={project.id} className="mb-4 border border-gray-200 rounded-lg p-4">
        <div
        className="flex justify-between items-start cursor-pointer hover:bg-gray-400 px-2 py-1 rounded"
        onClick={() => setExpandedProject(isExpanded ? null : project.id)}
        >
        <div className="flex-1">
            <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">{translate(project.title)}</h3>
            {project.link && (
                <a
                href={project.link}
                className="text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                >
                <ExternalLink size={18} />
                </a>
            )}
            </div>
            <p className="text-sm text-gray-700 mt-1">{translate(project.description)}</p>
        </div>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
                <span key={i} className="bg-gray-100 text-xs px-2 py-1 rounded text-gray-800 border">
                {tech}
                </span>
            ))}
            </div>
            {isExpanded && (
            <ul className="list-disc ml-6 mt-2 text-sm text-gray-700 space-y-1">
                {project.details.map((item, i) => (
                <li key={i}>{translate(item)}</li>
                ))}
            </ul>
            )}
        </div>
        );
    })}</>)
}

function Experiences(props:
   {
    t: (en: string, jp: string) => string,
    }) {
    const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

    return (<>{experience.map((exp, idx) => {
        const isExpanded = expandedExperience === idx;
        return (
          <div key={idx} className="mb-4 border border-gray-200 rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer hover:bg-gray-400 px-2 py-1 rounded"
              onClick={() => setExpandedExperience(isExpanded ? null : idx)}
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{translate(exp.company)}</h3>
                <p className="text-sm text-gray-600">{translate(exp.position)}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <span className="text-sm">{translate(exp.period)} | {translate(exp.location)}</span>
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-2">{translate(exp.description)}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {exp.techStack.map((tech, i) => (
                <span key={i} className="bg-gray-100 text-xs px-2 py-1 rounded text-gray-800 border">
                  {tech}
                </span>
              ))}
            </div>
            {isExpanded && (
              <>
              <h3 className="text-xl font-semibold mb-4">{props.t("Details", "概要")}</h3>
              <ul className="list-disc ml-6 mt-2 text-sm text-gray-700 space-y-1">
                {exp.details.map((item, i) => (
                  <li key={i}>{translate(item)}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-4">{props.t("Achievements", "実績")}</h3>
              <ul className="list-disc ml-6 mt-2 text-sm text-gray-700 space-y-1">
                {exp.achievements.map((item, i) => (
                  <li key={i}>{translate(item)}</li>
                ))}
              </ul>
              </>
            )}
          </div>
        );
      })}</>)
}

export default Portfolio;
