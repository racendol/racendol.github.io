import React, { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const Portfolio: React.FC = () => {
  const [lang, setLang] = useState<"en" | "jp">("en");
  const toggleLang = () => setLang(lang === "en" ? "jp" : "en");
  const t = (en: string, jp: string) => (lang === "en" ? en : jp);

  const contact = {
    email: "rocky.arkan259 [at] gmail.com",
    // phone: "+81-90-1234-5678",
    github: "https://github.com/racendol",
    linkedin: "https://linkedin.com/in/rocky-arkan-951a45129"
  };

  const education = [
    {
      school: "Universitas Indonesia",
      degree: t("Bachelor of Computer Science", "コンピュータサイエンス学士"),
      gpa: "3.82 / 4.0 (Cum Laude)",
      year: "2018-2022"
    }
  ];

  const certifications = [
    t("Japanese Language Proficiency Test (JLPT) N2", "日本語能力試験 (JLPT) N2")
  ];

  const languageSkills = [
    t("Indonesia (Native)", "インドネシア語(ネイティブレベル)"),
    t("English (Business Level)", "英語(ビジネスレベル)"),
    t("Japanese (Business Level)", "日本語(ビジネスレベル)")
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

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t("Experience", "職務経歴")}</h2>
        <Experiences t={t} />
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t("Projects", "プロジェクト")}</h2>
        <Projects t={t} />
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t("Skills", "スキル")}</h2>
        <Skills skills={skills} />
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

function Projects(props:
   {
    t: (en: string, jp: string) => string,
    }) {
    const [expandedProject, setExpandedProject] = useState<string | null>(null);
    const t = props.t
    const projects = [
      {
        id: "s1",
        title: t("Inventory Management Website", "資産管理システム"),
        description: t(
          "An inventory management website used for storing sensitive data related to forensic evidence. Collaborated with Ernst and Young.",
          "フォレンジック証拠に関連する機密データを保存するための資産管理ウェブサイト。アーンスト・アンド・ヤングとの共同開発。"
        ),
        techStack: ["Django", "Python", "Javascript", "Gitlab"],
        link: "",
        details: [
          t(
            "Inventory management website with the ability to read, export, and import data from Excel and manage that data.",
            "Excelファイルからのデータ読み込み、エクスポート、インポート、およびデータ管理が可能な資産管理ウェブサイト。"
          ),
          t("The data is sensitive and used for forensic evidence.", "フォレンジック証拠として使用される機密データを管理。"),
          t(
            "Developed using Django and Python, with JQuery and Bootstrap for the frontend.",
            "DjangoとPythonで開発し、フロントエンドにはJQueryとBootstrapを使用。"
          ),
          t("Used GitLab Runner for CI/CD.", "CI/CDにはGitLab Runnerを使用。"),
        ],
      },
      {
        id: "s2",
        title: "Pandemic of the Forgotten Virus",
        description: t(
          "A bullet-hell shooter game playable by two players or an AI powered by a neural network.",
          "2人プレイまたはニューラルネットワークによるAIでプレイ可能な弾幕系シューティングゲーム。"
        ),
        techStack: ["C#", "Unity"],
        link: "https://eaglescommander.itch.io/pandemic-of-the-forgotten-virus?trk=public_profile_project-button",
        details: [
          t(
            "Developed the core gameplay mechanics, such as the general scene template, physics, and how to spawn bullets.",
            "一般的なシーンテンプレート、物理挙動、弾の生成など、ゲームプレイのコアメカニクスを開発。"
          ),
          t(
            "Designed attack patterns, such as randomized bullet spread and homing bullet.",
            "ランダム化された弾の拡散や追尾弾など、攻撃パターンを設計。"
          ),
          t(
            "Developed the AI model with neural network and Genetic Algorithm. The neural network and training environment are coded from scratch in Unity.",
            "ニューラルネットワークと遺伝的アルゴリズムを用いたAIモデルを開発。ニューラルネットワークとトレーニング環境はUnity上でスクラッチから実装。"
          ),
          t("Developed using C# and Unity.", "C#とUnityで開発。"),
        ],
      },
      {
        id: "s3",
        title: t("Teman.ai", "Teman.ai"),
        description: t(
          "A chat bot for LINE that can manage schedule via Trello",
          "Trelloと連携してスケジュール管理ができるLINE向けのチャットボット"
        ),
        techStack: ["Java", "Spring Boot"],
        link: "https://gitlab.com/advprog-teman-ai-microservices",
        details: [
          t("Developed the service and REST API for handling commands from users", "ユーザーからのコマンドを処理するためのサービスおよびREST APIを開発"),
          t("Refactored handlers for commands using design patterns, improving maintainability", "保守性を向上させるために、デザインパターンを使用してコマンドのハンドラをリファクタリング"),
          t("Migrated the application from monolithic to microservices, improving scalability", "アプリケーションをモノリシック構成からマイクロサービスアーキテクチャに移行し、スケーラビリティを向上"),
          t("CI/CD via Gitlab Runner and deployed to Heroku", "CI/CDにはGitLab Runnerを使用し、Herokuにデプロイ"),
        ],
      },
    ];

    return (<>{projects.map((project) => {
        const isExpanded = expandedProject === project.id;
        return (
        <div key={project.id} className="mb-4 border border-gray-200 rounded-lg p-4">
        <div
        className="flex justify-between items-start cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
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

function Experiences(props:
   {
    t: (en: string, jp: string) => string,
    }) {
    const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
    const t = props.t
    const experience = [
      {
        company: t("Tomato Co. Ltd.", "株式会社トマト"),
        position: t("Software Engineer", "ソフトウェアエンジニア"),
        location: t("Tokyo, Japan", "東京、日本"),
        period: t("2025 April - Present", "2025年4月 - 現在"),
        description: t(
          "Led a team of engineers in developing the company's in-house management software.",
          "社内管理ソフトウェアの開発を担当し、エンジニアチームをリード。"
        ),
        techStack: ["Java", "Spring", "Angular", "React", "Typescript", "PostgreSQL"],
        details: [
          t("Developed the full-stack CRUD in-house management system software using Spring Boot (Java) for the backend and Angular & React for the frontend.",
            "バックエンドにSpring Boot (Java)、フロントエンドにAngularおよびReactを使用して、社内管理システムのフルスタック開発を担当。"),
          t("Implemented features including email notifications, QR code check-in, and data export to CSV using REST API and MVC architecture.",
            "REST APIとMVCアーキテクチャでメール通知、QRコードによるチェックイン、CSV形式でのデータエクスポート機能を実装。"),
          t("Communicated in both Japanese and English with team members and management.",
            "チームメンバーやマネージャーと日本語および英語でコミュニケーションを実施。"),
        ],
        achievements: [
          t("Led a team of engineers, delegated tasks, managed schedules, and contributed to development.",
            "エンジニアチームをリードし、タスクの割り当てやスケジュール管理を行いながら、開発にも貢献。"),
        ],
      },
      {
        company: "Samsung Research and Development Institute Indonesia",
        position: t("Backend Engineer", "バックエンドエンジニア"),
        location: t("Jakarta, Indonesia", "ジャカルタ、インドネシア"),
        period: t("2022 September - 2025 April", "2022年9月 - 2025年4月"),
        description: t(
          "Developed Samsung's first global multi-region DNS platform used in critical Samsung components such as Samsung Cloud, AI, and Firmware Update services.",
          "Samsung Cloud、AI、ファームウェアアップデートなどの重要なコンポーネントで使用される、Samsung初のグローバルマルチリージョンDNSプラットフォームを開発。"
        ),
        techStack: ["Golang", "Python", "Docker", "Docker Swarm", "Ansible", "AWS", "Jenkins", "Github Action", "Terraform", "MariaDB", "Telegraf", "Grafana", "Kafka", "RabbitMQ", "Redis"],
        details: [
          t("Developed and maintained a DNS platform used by internal Samsung projects.",
            "Samsung社内プロジェクトで使用されるDNSプラットフォームの開発と保守を担当。"),
          t("Supported multi-region deployments with asynchronous replication and routing (health checks, region-based, latency-based).",
            "非同期レプリケーションやルーティング(ヘルスチェック、リージョンベース、レイテンシーベース)に対応したマルチリージョン展開をサポート。"),
          t("Focused on performance and high availability in development.",
            "開発ではパフォーマンスと高可用性を重視。"),
          t("Integrated compatibility with AWS CLI and Terraform, allowing it to be used as a drop-in replacement for AWS DNS Service and support Infrastructure as Code.",
            "AWS CLIやTerraformとの互換性を備え、AWS DNSサービスの代替として利用可能。IaC(Infrastructure as Code)にも対応。"),
          t("Communicated in Bahasa Indonesia and English with local and international teams.",
            "インドネシア語と英語を用いて、国内外のチームとコミュニケーションを実施。"),
        ],
        achievements: [
          t("Participated in the design of a large, complex multi-regional system and was responsible for the asynchronous replication design using Kafka.",
            "大規模かつ複雑なマルチリージョンシステムの設計に参加し、Kafkaを用いた非同期レプリケーション設計を担当。"),
          t("Refactored the health check algorithm from single-threaded to multi-threaded with caching, improving performance by 500 times and enhancing scalability.",
            "ヘルスチェックアルゴリズムをシングルスレッドからマルチスレッドとキャッシュ対応にリファクタリングし、パフォーマンスを500倍向上させ、スケーラビリティを改善。"),
          t("Refactored a complex recursive backend algorithm into a simpler breadth-first algorithm, improving performance by 2.5x and making debugging easier.",
            "複雑な再帰的バックエンドアルゴリズムを、簡潔な幅優先探索アルゴリズムにリファクタリングし、パフォーマンスを2.5倍向上させ、デバッグの容易化を実現。"),
          t("Fixed an obscure bug in a legacy Python2 system that couldn't be found by ChatGPT or Stack Overflow. Received praise from the team lead and became the go-to person for bug fixes.",
            "ChatGPTやStack Overflowでも見つからないレガシーなPython2システムの難解なバグを修正。リーダーから高く評価され、バグ修正の相談役となる。"),
        ],
      },
      {
        company: "Sayurbox",
        position: t("Backend Engineer Intern", "バックエンドエンジニアインターン"),
        location: t("Jakarta, Indonesia", "ジャカルタ、インドネシア"),
        period: t("2022 September - 2022 November", "2022年9月 - 2022年11月"),
        description: t(
          "Developed features for the B2C application that connects farmers to customers.",
          "農家と顧客をつなぐB2Cアプリケーションの機能を開発。"
        ),
        techStack: ["Java", "Spring", "Jenkins", "RabbitMQ", "Redis", "GraphQL", "Grafana", "Telegraf"],
        details: [
          t("Developed and maintained the B2C application using Spring Boot (Java).",
            "Spring Boot (Java)を用いて、B2Cアプリケーションの開発と保守を担当。"),
          t("Worked in a startup agile environment using Scrum methodology.",
            "スタートアップ環境において、Scrum手法を用いたアジャイル開発に従事。"),
          t("Communicated in Bahasa Indonesia and English with team members, including those based in India.",
            "インドネシア語と英語で、インド拠点を含むチームメンバーと連携。"),
        ],
        achievements: [
          t("Developed a critical voucher feature using the Command Design Pattern, potentially increasing sales by up to 20%.",
            "コマンドデザインパターンを使用して重要なバウチャー機能を開発し、売上を最大20%向上させる可能性を実現。"),
          t("Refactored the voucher system to use RabbitMQ messaging queues for inter-service communication, enhancing scalability.",
            "バウチャーシステムをRabbitMQを使ったメッセージキューにリファクタリングし、サービス間通信のスケーラビリティを向上。"),
        ],
      },
    ];


    return (<>{experience.map((exp, idx) => {
        const isExpanded = expandedExperience === idx;
        return (
          <div key={idx} className="mb-4 border border-gray-200 rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
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
            </div>
            {isExpanded && (
              <>
              <h3 className="text-xl font-semibold mb-4">{props.t("Details", "概要")}</h3>
              <ul className="list-disc ml-6 mt-2 text-sm text-gray-700 space-y-1">
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-4">{props.t("Achievements", "実績")}</h3>
              <ul className="list-disc ml-6 mt-2 text-sm text-gray-700 space-y-1">
                {exp.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              </>
            )}
          </div>
        );
      })}</>)
}

export default Portfolio;
