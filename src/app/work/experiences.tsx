import React from "react";
import { motion } from "framer-motion";
import { Experience, PortofolioData } from "../details";
import { Translate, useLang } from "../i18n";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const ExperiencesSection = ({ experiences }: { experiences: Experience[] }) => {
  const { lang } = useLang();

  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <Translate en="Experience" ja="職務経歴" />
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            <Translate 
              en="My professional journey and contributions" 
              ja="これまでの職務経歴と貢献" 
            />
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold">
                    {exp.company[lang]} - {exp.position[lang]}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mt-2 space-x-4">
                    <span className="flex items-center">
                      <FiCalendar className="mr-1" />
                      {exp.period[lang]}
                    </span>
                    <span className="flex items-center">
                      <FiMapPin className="mr-1" />
                      {exp.location[lang]}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    {exp.description[lang]}
                  </p>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold">
                      <Translate en="Key Contributions" ja="主な貢献" />
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail[lang]}</li>
                      ))}
                    </ul>
                  </div>

                  {exp.achievements.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-semibold">
                        <Translate en="Achievements" ja="成果" />
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement[lang]}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="md:w-1/3">
                  <h4 className="font-semibold">
                    <Translate en="Technologies" ja="技術スタック" />
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;