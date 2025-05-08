import React, { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const Portfolio: React.FC = () => {
  const [lang, setLang] = useState<"en" | "jp">("en");

  const toggleLang = () => setLang(lang === "en" ? "jp" : "en");
  const t = (en: string, jp: string) => (lang === "en" ? en : jp);

  const contact = {
    email: "rocky259 [at] gmail.com",
    // phone: "+81-90-1234-5678",
    github: "https://github.com/racendol",
    linkedin: "https://linkedin.com/in/rocky-arkan-951a45129"
  };

  const experience = [
    {
        company: t("Tomato Co. Ltd.","株式会社トマト"),
        position: t("Software Engineer", "ソフトウェアエンジニア"),
        location: t("Tokyo, Japan", "東京、日本"),
        period: t("2025 April - Present", "2025年4月 - 現在"),
        description: t(
          "Developed Samsung's first global multi-region DNS platform used in critical Samsung components, such as Samsung Cloud, AI, and Firmware Update services.",
          "Samsung Cloud、AI、ファームウェアアップデートで使用されるグローバルDNSプラットフォームの開発。"
        ),
        techStack: ["Java", "Angular", "React", "Typescript"],
        details: [
          t("Maintained a DNS platform used by internal Samsung projects.", "社内プロジェクトで使用されるDNSプラットフォームの運用・保守。"),
          t("Supported multi-region deployments with async replication and routing (healthcheck, region-based, latency).", "非同期レプリケーションとルーティング(ヘルスチェック、リージョン、レイテンシー)を備えたマルチリージョン展開。"),
          t("Refactored backend to improve performance 2.5x and upgraded health checkers to 500x using multithreaded caching.", "バックエンドのリファクタリングで2.5倍のパフォーマンス改善、マルチスレッド化によりヘルスチェックを500倍高速化。"),
          t("Created a chain-resolving DNS alias record feature allowing conditional resolutions like health or region.", "条件付き解決が可能なチェーン型DNSエイリアス機能を開発。"),
          t("Became primary bug resolver for legacy Python2 services, praised by leadership.", "レガシーなPython2プロジェクトのバグ修正で評価され、リーダーから信頼獲得。"),
          t("Contributed to PowerDNS open source project.", "PowerDNSオープンソースへの貢献。")
        ],
      achivements: [
  
      ],
    },
    {
      company: "Samsung Research and Development Institute Indonesia",
      position: t("Backend Engineer", "バックエンドエンジニア"),
      location: t("Jakarta, Indonesia", "ジャカルタ、インドネシア"),
      period: t("2022 September - 2025 April", "2022年9月 - 2025年4月"),
      description: t(
        "Developed Samsung's first global multi-region DNS platform used in critical Samsung components, such as Samsung Cloud, AI, and Firmware Update services.",
        "Samsung Cloud、AI、ファームウェアアップデートで使用されるグローバルDNSプラットフォームの開発。"
      ),
      techStack: ["Golang", "Python", "Docker", "Docker Swarm", "Ansible", "AWS", "Terraform", "MariaDB", "Telegraf", "Grafana", "Kafka", "RabbitMQ", "Redis"],
      details: [
        t("Maintained a DNS platform used by internal Samsung projects.", "社内プロジェクトで使用されるDNSプラットフォームの運用・保守。"),
        t("Supported multi-region deployments with async replication and routing (healthcheck, region-based, latency).", "非同期レプリケーションとルーティング(ヘルスチェック、リージョン、レイテンシー)を備えたマルチリージョン展開。"),
        t("Refactored backend to improve performance 2.5x and upgraded health checkers to 500x using multithreaded caching.", "バックエンドのリファクタリングで2.5倍のパフォーマンス改善、マルチスレッド化によりヘルスチェックを500倍高速化。"),
        t("Created a chain-resolving DNS alias record feature allowing conditional resolutions like health or region.", "条件付き解決が可能なチェーン型DNSエイリアス機能を開発。"),
        t("Became primary bug resolver for legacy Python2 services, praised by leadership.", "レガシーなPython2プロジェクトのバグ修正で評価され、リーダーから信頼獲得。"),
        t("Contributed to PowerDNS open source project.", "PowerDNSオープンソースへの貢献。")
      ],
    achivements: [

    ],
    },
    {
    company: "Sayurbox",
    position: t("Backend Engineer Intern", "バックエンドエンジニアインターン"),
    location: t("Jakarta, Indonesia", "ジャカルタ、インドネシア"),
    period: t("2022 September - 2022 November", "2022年9月 - 2022年11月"),
    description: t(
        "Developed Samsung's first global multi-region DNS platform used in critical Samsung components, such as Samsung Cloud, AI, and Firmware Update services.",
        "Samsung Cloud、AI、ファームウェアアップデートで使用されるグローバルDNSプラットフォームの開発。"
    ),
    techStack: ["Golang", "Python", "Docker", "Docker Swarm", "Ansible", "AWS", "Terraform", "MariaDB", "Telegraf", "Grafana", "Kafka", "RabbitMQ", "Redis"],
    details: [
        t("Maintained a DNS platform used by internal Samsung projects.", "社内プロジェクトで使用されるDNSプラットフォームの運用・保守。"),
        t("Supported multi-region deployments with async replication and routing (healthcheck, region-based, latency).", "非同期レプリケーションとルーティング(ヘルスチェック、リージョン、レイテンシー)を備えたマルチリージョン展開。"),
        t("Refactored backend to improve performance 2.5x and upgraded health checkers to 500x using multithreaded caching.", "バックエンドのリファクタリングで2.5倍のパフォーマンス改善、マルチスレッド化によりヘルスチェックを500倍高速化。"),
        t("Created a chain-resolving DNS alias record feature allowing conditional resolutions like health or region.", "条件付き解決が可能なチェーン型DNSエイリアス機能を開発。"),
        t("Became primary bug resolver for legacy Python2 services, praised by leadership.", "レガシーなPython2プロジェクトのバグ修正で評価され、リーダーから信頼獲得。"),
        t("Contributed to PowerDNS open source project.", "PowerDNSオープンソースへの貢献。")
    ],
    achivements: [

    ],
    }
  ];

  const projects = [
    {
        id: "s1",
      title: t("Inventory Management Website", "資産管理システム"),
      description:
       t("An inventory management website that are used for storing sensitive data used for forensic evidence. Colaborated with Ernst and Young.", 
        "ReactとTailwind CSSで構築した個人ポートフォリオ。"),
      techStack: ["Django", "Python", "Javascript"],
      link: "",
      details: [
        t("Responsive design and theme toggling.", "レスポンシブデザインとテーマの切り替え。"),
        t("Hosted on GitHub Pages.", "GitHub Pagesにホスト。")
      ],
    },
    {
    id: "s2",
      title: "Pandemic of the Forgotten Virus",
      description: t("A bullethell shooter game that can be played by 2 players or by neural network powered AI.", ""),
      techStack: ["C#", "Unity"],
      link: "https://eaglescommander.itch.io/pandemic-of-the-forgotten-virus?trk=public_profile_project-button",
      details: [
        t("Developed the main shooting gameplay part and shooting pattern.", "静的サイト生成を使用。"),
        t("Idealize the pattern for the boss special attacks.", "i18nによる言語切り替えを統合。"),
        t("Helped the training for the AI model.", "i18nによる言語切り替えを統合。")
      ]
    }
  ];

  const education = [
    {
      school: "Universitas Indonesia",
      degree: t("Bachelor of Computer Science", "コンピュータサイエンス学士"),
      gpa: "3.82 / 4.0 (Cum Laude)",
      year: "2018–2022"
    }
  ];

  const certifications = [
    t("Japanese Language Proficiency Test (JLPT) N2", "日本語能力試験 (JLPT) N2")
  ];

  const languageSkills = [
    t("Indonesia (Fluent)", "インドネシア語（流暢）"),
    t("English (Business Level)", "英語（ビジネスレベル）"),
    t("Japanese (Conversational Level)", "日本語（日常会話レベル）")
  ];

  const skills = ["Golang", "Python", "React", "TypeScript", "Terraform", "Ansible", "AWS", "PostgreSQL"];

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Rocky Arkan Adnan Ahmad</h1>
          <p className="text-sm text-gray-500">{t("Software Engineer", "ソフトウェアエンジニア")}</p>
        </div>
        <button
          onClick={toggleLang}
          className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {t("日本語", "English")}
        </button>
      </div>

      {/* Contact Info */}
      <section className="mb-6 text-xs text-gray-600">
        <h2 className="text-sm font-semibold mb-1 uppercase tracking-wide">{t("Contact", "連絡先")}</h2>
        <ul className="space-y-0.5">
          <li>Email: {contact.email.replace(/@/, " [at] ")}</li>
          {/* <li>Phone: {contact.phone}</li> */}
          <li><a href={contact.github} className="text-blue-500 hover:underline" target="_blank">GitHub</a></li>
          <li><a href={contact.linkedin} className="text-blue-500 hover:underline" target="_blank">LinkedIn</a></li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t("Education", "学歴")}</h2>
        {education.map((edu, i) => (
          <div key={i} className="mb-3">
            <p className="font-semibold text-gray-800">{edu.school}</p>
            <p className="text-sm text-gray-700">{edu.degree} ({edu.year})</p>
            <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t("Experience", "職務経歴")}</h2>
        <Experiences experience={experience} />
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t("Projects", "プロジェクト")}</h2>
        <Projects projects={projects} />
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t("Skills", "スキル")}</h2>
        <Skills skills={skills} />
      </section>

      {/* Certificates */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t("Certificates", "資格")}</h2>
        <Certificates certifications={certifications} />
      </section>

      {/* Languages */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t("Languages", "言語スキル")}</h2>
        <Language languageSkills={languageSkills} />
      </section>
    </div>
  );
};

function Language(props: { languageSkills: string[] }) {
    return  (<ul className="list-disc ml-4 text-sm text-gray-700 space-y-1">
    {props.languageSkills.map((lang, i) => (
      <li key={i}>{lang}</li>
    ))}
  </ul>)
}

function Certificates(props: { certifications: string[] }) {
    return <ul className="list-disc ml-4 text-sm text-gray-700 space-y-1">
    {props.certifications.map((cert, i) => (
      <li key={i}>{cert}</li>
    ))}
  </ul>
}

function Skills(props: {skills: string[]}) {
    return <div className="flex flex-wrap gap-2">
    {props.skills.map(skill => (
      <span key={skill} className="bg-blue-100 text-xs px-3 py-1 rounded-full text-blue-800">
        {skill}
      </span>
    ))}
  </div>
}

function Projects(props: {projects: { 
    id: string,
    title: string,
    techStack: string[],
    description: string,
    link: string,
    details: string[]
}[]}) {
    const [expandedProject, setExpandedProject] = useState<string | null>(null);

    return (<>{props.projects.map((project) => {
        const isExpanded = expandedProject === project.id;
        return (
        <div key={project.id} className="mb-4 border border-gray-200 rounded-lg p-4">
        <div
        className="flex justify-between items-start cursor-pointer hover:bg-gray-50 px-2 py-1 rounded"
        onClick={() => setExpandedProject(isExpanded ? null : project.id)}
        >
        <div className="flex-1">
            <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">{project.title}</h3>
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
            <p className="text-sm text-gray-700 mt-1">{project.description}</p>
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
                <li key={i}>{item}</li>
                ))}
            </ul>
            )}
        </div>
        );
    })}</>)
}

function Experiences(props: {experience: {
    company: string,
    position: string,
    location:string,
    period: string,
    description: string,
    techStack: string[],
    details: string[],
    achivements: string[],
}[]}) {
    const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

    return (<>{props.experience.map((exp, idx) => {
        const isExpanded = expandedExperience === idx;
        return (
          <div key={idx} className="mb-4 border border-gray-200 rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer hover:bg-gray-50 px-2 py-1 rounded"
              onClick={() => setExpandedExperience(isExpanded ? null : idx)}
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{exp.company}</h3>
                <p className="text-sm text-gray-600">{exp.position}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <span className="text-sm">{exp.period} | {exp.location}</span>
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-2">{exp.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {exp.techStack.map((tech, i) => (
                <span key={i} className="bg-gray-100 text-xs px-2 py-1 rounded text-gray-800 border">
                  {tech}
                </span>
              ))}
              {/* <span className="text-s gap-2">{exp.location}</span> */}
            </div>
            {isExpanded && (
              <ul className="list-disc ml-6 mt-2 text-sm text-gray-700 space-y-1">
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}</>)
}

export default Portfolio;
