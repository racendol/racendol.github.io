import { Contact, Education, Certification, LanguageSkill } from "../details";
import { Translate, useLang } from "../i18n";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiBook, FiAward } from "react-icons/fi";

const AboutPage = ({
  contact,
  education,
  certifications,
  languageSkills,
}: {
  contact: Contact;
  education: Education[];
  certifications: Certification[];
  languageSkills: LanguageSkill[];
}) => {
  const { lang } = useLang();

  return (
    <main className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 bg-gradient-to-b from-indigo-900/30 to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <Translate en="About Me" ja="自己紹介" />
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            <Translate
              en="My background, education, and how to reach me"
              ja="経歴、学歴、連絡方法"
            />
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Contact */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FiMail className="mr-2 text-indigo-400" />
              <Translate en="Contact" ja="連絡先" />
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-gray-400 text-sm">
                  <Translate en="Name" ja="名前" />
                </h3>
                <p className="text-white">{contact.name}</p>
              </div>

              <div>
                <h3 className="text-gray-400 text-sm">
                  <Translate en="Email" ja="メール" />
                </h3>
                <a
                  href={`mailto:${contact.email.replace(" [at] ", "@")}`}
                  className="text-indigo-400 hover:underline"
                >
                  {contact.email}
                </a>
              </div>

              <div className="flex space-x-4 pt-2">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 mt-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              <Translate en="Languages" ja="言語" />
            </h2>
            <ul className="space-y-3">
              {languageSkills.map((skill, index) => (
                <li key={index} className="text-white">
                  {skill[lang]}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Right Column - Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Education */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FiBook className="mr-2 text-indigo-400" />
              <Translate en="Education" ja="学歴" />
            </h2>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-indigo-500 pl-4">
                  <h3 className="text-xl font-semibold text-white">
                    {edu.school}
                  </h3>
                  <p className="text-gray-400">
                    {edu.degree[lang]} • {edu.year}
                  </p>
                  <p className="text-gray-400 mt-1">{edu.gpa}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FiAward className="mr-2 text-indigo-400" />
              <Translate en="Certifications" ja="資格" />
            </h2>

            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="text-white">
                  {cert[lang]}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              <Translate en="Biography" ja="自己紹介" />
            </h2>
            <p className="text-gray-400">
              <Translate
                en="I'm passionate about building scalable systems and solving complex problems with code. When not programming, I enjoy game development and learning new languages."
                ja="スケーラブルなシステムの構築と複雑な問題の解決に情熱を持っています。プログラミング以外では、ゲーム開発や新しい言語の学習を楽しんでいます。"
              />
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default AboutPage;