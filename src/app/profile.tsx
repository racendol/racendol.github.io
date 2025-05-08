import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Resume: React.FC = () => {
  const [lang, setLang] = useState<"en" | "jp">("en");
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (key: string) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleLang = () => setLang(lang === "en" ? "jp" : "en");

  const t = (en: string, jp: string) => (lang === "en" ? en : jp);

  const experience = [
    {
      id: "hermes",
      title: "Hermes DNS System @ Samsung",
      position: t("Backend Engineer", "バックエンドエンジニア"),
      date: t("2023 – Present", "2023年 – 現在"),
      description: t(
        "Global multi-region DNS system supporting Samsung Cloud, AI, and Firmware.",
        "Samsung Cloud、AI、ファームウェアを支えるグローバル対応DNSシステム。"
      ),
      image: "/images/hermes.png",
      techStack: ["Golang", "Python", "Ansible", "Terraform"],
      github: "https://github.com/example/hermes",
      demo: "",
      highlights: [
        t("Implemented CRUD and resolving DNS system.", "DNS管理・解決システムを実装"),
        t("Multi-region replication & smart routing.", "マルチリージョン複製とスマートルーティング"),
        t("Fixed legacy Python2 bugs, improved performance (up to 500×).", "Python2のバグ修正とパフォーマンス改善（最大500倍）")
      ],
      achievements: [
        
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {t("Rocky Arkan Adnan Ahmad - Software Engineer", "ロキー・アルカン・アドナン・アハマド - ソフトウェアエンジニア")}
        </h1>
        <button
          onClick={toggleLang}
          className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {t("日本語", "English")}
        </button>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t("Summary", "概要")}</h2>
        <p className="text-gray-700">
          {t(
            "Software engineer with deep expertise in backend systems.",
            "バックエンド開発に得意ソフトウェアエンジニア"
          )}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t("Skills", "スキル")}</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Golang, Python, Java, JavaScript, TypeScript</li>
          <li>AWS, Terraform, Ansible</li>
          <li>Jenkins, Docker, Linux</li>
          <li>Grafana, Telegraf, </li>
          <li>Data structures, Algorithm, Concurrency, System Design</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">{t("Experience", "経験")}</h2>

        <div className="mb-4 border border-gray-200 rounded">
          <button
            onClick={() => toggleSection("hermes")}
            className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 flex justify-between items-center">
            <span className="font-medium text-gray-800">Samsung Research and Development Institute Indonesia</span>
            {openSections["hermes"] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {openSections["hermes"] && (
            <div className="p-4 text-gray-700">
              <p className="mb-2">
                {t(
                  "Samsung’s first global multi-region DNS system supporting Cloud, AI, and Firmware services.",
                  "Samsung Cloud、AI、ファームウェアを支える初のグローバル対応DNSシステム。"
                )}
              </p>
              <ul className="list-disc ml-6 mb-2">
                <li>{t("DNS CRUD and resolving system.", "DNS管理・解決システム")}</li>
                <li>{t("Multi-region replication and smart routing.", "マルチリージョンレプリケーションとスマートルーティング")}</li>
                <li>{t("Supports AWS CLI and Terraform.", "AWS CLIとTerraform対応")}</li>
                <li>{t("Stack: Golang (90%), Python (10%), Ansible for DevOps.", "技術: Golang（90%）、Python（10%）、Ansible")}</li>
              </ul>
              <p className="font-semibold mt-3">{t("Achievements:", "実績：")}</p>
              <ul className="list-disc ml-6">
                <li>{t("Fixed obscure Python2 legacy bugs, got appreciation from leader and become the go-to engineer for bug fixing", "Python2の難解なバグ修正、リーダーから高評価。バグ対応の第一人者となりました。")}</li>
                <li>{t("Refactored complex recursive query to simple and tracable. Increasing monitoribility, easier debugging, and increasing performance up to 2.5", "複雑な再帰アルゴリズムをシンプルかつトレース可能な設計に変更し、最大2.5倍の高速化と可用性向上を実現。")}</li>
                <li>{t("Refactored DB queries (2.5 faster) ", "DBとヘルスチェックのリファクタリングで最大500倍高速化")}</li>
                <li>{t("Implemented conditional DNS chaining.", "条件分岐可能なAlias Record機能を実装")}</li>
                <li>{t("Enhanced concurrency and extensibility.", "並列処理と拡張性を強化")}</li>
              </ul>
            </div>
          )}
        </div>

        {/* Add more projects here if needed */}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">{t("Open Source", "オープンソース")}</h2>
        <p className="text-gray-700">
          {t("Contributed to PowerDNS and actively support open source development.", "PowerDNSに貢献し、オープンソース開発にも積極的に関与。")}
        </p>
      </section>
    </div>
  );
};

export default Resume;
