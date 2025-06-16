// components/ExperiencesSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../details";
import { Translate, useLang } from "../i18n";
import { FiCalendar, FiMapPin } from "react-icons/fi";

const ExperiencesSection = ({ experiences }: { experiences: Experience[] }) => {
  const { lang } = useLang();
  
  // Dark theme classes
  const cardStyle = "bg-gray-800 border border-gray-700";
  const textStyle = "text-gray-200";
  const secondaryTextStyle = "text-gray-400";

  return (
    <section id="experience" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textStyle}`}>
            <Translate en="Professional Experience" ja="職務経歴" />
          </h2>
          <p className={`${secondaryTextStyle} max-w-2xl mx-auto`}>
            <Translate 
              en="My career journey and key contributions" 
              ja="これまでのキャリアと主要な貢献" 
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
              className={`${cardStyle} p-6 rounded-xl shadow-lg`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h3 className={`text-xl font-bold ${textStyle}`}>
                    {exp.company[lang]} - {exp.position[lang]}
                  </h3>
                  
                  <div className={`flex items-center ${secondaryTextStyle} mt-2 space-x-4`}>
                    <span className="flex items-center">
                      <FiCalendar className="mr-1" />
                      {exp.period[lang]}
                    </span>
                    <span className="flex items-center">
                      <FiMapPin className="mr-1" />
                      {exp.location[lang]}
                    </span>
                  </div>
                  
                  <p className={`mt-4 ${textStyle}`}>
                    {exp.description[lang]}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-4">
                    <h4 className={`font-semibold ${textStyle}`}>
                      <Translate en="Tech Stack" ja="技術スタック" />
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Details */}
                  <div className="mt-4">
                    <h4 className={`font-semibold ${textStyle}`}>
                      <Translate en="Details" ja="概要" />
                    </h4>
                    <ul className={`list-disc pl-5 space-y-1 mt-2 ${textStyle}`}>
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail[lang]}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Achievements */}
                  {exp.achievements.length > 0 && (
                    <div className="mt-4">
                    <h4 className={`font-semibold ${textStyle}`}>
                        <Translate en="Achievements" ja="成果" />
                      </h4>
                    <ul className={`list-disc pl-5 space-y-1 mt-2 ${textStyle}`}>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement[lang]}</li>
                        ))}
                      </ul>
                    </div>
                  )}
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