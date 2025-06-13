import React, { useState } from "react";
import { motion } from "framer-motion";
import { Project, PortofolioData } from "../details"; 
import { Translate, useLang } from "../i18n";
import { FiExternalLink, FiGithub, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

const ProjectsSection = ({ projects }: { projects: Project[] }) => {
  const { lang } = useLang();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedDetails, setExpandedDetails] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("All");

  // Get all unique tech stacks for filtering
  const allTechStacks = Array.from(
    new Set(projects.flatMap(project => project.techStack))
  );

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.techStack.includes(filter));

  return (
    <section id="work" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <Translate en="My Work" ja="プロジェクト" />
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            <Translate 
              en="Selected projects I've built with various technologies" 
              ja="様々な技術で構築したプロジェクト一覧" 
            />
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          <button
            onClick={() => setFilter("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "All"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            <Translate en="All" ja="全て" />
          </button>
          {allTechStacks.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === tech
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div 
                className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Placeholder for project image - replace with actual image */}
                <span className="text-gray-500 dark:text-gray-400 text-lg">
                  {project.title[lang]}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title[lang]}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description[lang]}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center"
                >
                  <Translate en="View Details" ja="詳細を見る" />
                  <FiChevronDown className="ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                {/* Modal Header */}
                <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <h3 className="text-2xl font-bold">
                    {selectedProject.title[lang]}
                  </h3>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      setExpandedDetails(false);
                    }}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">
                      <Translate en="Description" ja="説明" />
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {selectedProject.description[lang]}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">
                      <Translate en="Tech Stack" ja="使用技術" />
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">
                        <Translate en="Details" ja="詳細" />
                      </h4>
                      <button
                        onClick={() => setExpandedDetails(!expandedDetails)}
                        className="flex items-center text-indigo-600 dark:text-indigo-400"
                      >
                        {expandedDetails ? (
                          <>
                            <Translate en="Show Less" ja="折りたたむ" />
                            <FiChevronUp className="ml-1" />
                          </>
                        ) : (
                          <>
                            <Translate en="Show More" ja="もっと見る" />
                            <FiChevronDown className="ml-1" />
                          </>
                        )}
                      </button>
                    </div>
                    <div className={`${expandedDetails ? "block" : "line-clamp-3"}`}>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                        {selectedProject.details.map((detail, index) => (
                          <li key={index}>{detail[lang]}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {selectedProject.link && (
                    <div className="flex justify-end">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        {selectedProject.link.includes("github") ? (
                          <>
                            <FiGithub className="mr-2" />
                            <Translate en="View on GitHub" ja="GitHubで見る" />
                          </>
                        ) : (
                          <>
                            <FiExternalLink className="mr-2" />
                            <Translate en="View Project" ja="プロジェクトを見る" />
                          </>
                        )}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;