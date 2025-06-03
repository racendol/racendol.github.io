export const contact = {
  email: "rocky.arkan259 [at] gmail.com",
  github: "https://github.com/racendol",
  linkedin: "https://linkedin.com/in/rocky-arkan-951a45129"
};

export const education = [
  {
    school: "Universitas Indonesia",
    degree: { en: "Bachelor of Computer Science", ja: "コンピュータサイエンス学士" },
    gpa: "3.82 / 4.0 (Cum Laude)",
    year: "2018-2022"
  }
];

export const certifications = [
  { en: "Japanese Language Proficiency Test (JLPT) N2", ja: "日本語能力試験 (JLPT) N2" }
];

export const languageSkills = [
  { en: "Indonesia (Native)", ja: "インドネシア語(ネイティブレベル)" },
  { en: "English (Business Level)", ja: "英語(ビジネスレベル)" },
  { en: "Japanese (Business Level)", ja: "日本語(ビジネスレベル)" }
];

export const groupedSkills = {
  "Languages": ["Golang", "Python", "Java", "C#", "TypeScript", "JavaScript"],
  "Frameworks & Libraries": [
    "Spring Boot", "React", "Angular", "Unity", "Tensorflow", "GraphQL"
  ],
  "Infrastructure & DevOps": [
    "Terraform", "Ansible", "Docker", "Docker Swarm", "Kubernetes",
    "AWS", "Jenkins", "GitLab CI/CD", "Heroku"
  ],
  "Messaging & Communication": ["RabbitMQ", "Kafka"],
  "Databases": ["PostgreSQL", "MariaDB", "MySQL", "MongoDB", "Redis"],
  "Monitoring & Logging": ["Grafana", "Telegraf", "Loki", "Promtail"],
  "Other": [
    { en: "Data Structures", ja: "データ構造" },
    { en: "Algorithms", ja: "アルゴリズム" },
    { en: "Machine Learning", ja: "機械学習" },
    { en: "Data Science", ja: "データサイエンス" },
    { en: "Cloud Computing", ja: "クラウドコンピューティング" }
  ]
};
export const projects = [
  {
    id: "s1",
    title: {
      en: "Inventory Management Website",
      ja: "資産管理システム",
    },
    description: {
      en: "An inventory management website used for storing sensitive data related to forensic evidence. Collaborated with Ernst and Young.",
      ja: "フォレンジック証拠に関連する機密データを保存するための資産管理ウェブサイト。アーンスト・アンド・ヤングとの共同開発。",
    },
    techStack: ["Django", "Python", "Javascript", "Gitlab"],
    link: "",
    details: [
      {
        en: "Inventory management website with the ability to read, export, and import data from Excel and manage that data.",
        ja: "Excelファイルからのデータ読み込み、エクスポート、インポート、およびデータ管理が可能な資産管理ウェブサイト。",
      },
      {
        en: "The data is sensitive and used for forensic evidence.",
        ja: "フォレンジック証拠として使用される機密データを管理。",
      },
      {
        en: "Won Masterpiece Product Award, an award of top 5 product and beating over 30 teams.",
        ja: "30以上のチームの中から選ばれ、上位5製品に贈られる「マスターピースプロダクト賞」を受賞。",
      },
      {
        en: "Developed using Django and Python, with JQuery and Bootstrap for the frontend.",
        ja: "DjangoとPythonで開発し、フロントエンドにはJQueryとBootstrapを使用。",
      },
      {
        en: "Used GitLab Runner for CI/CD.",
        ja: "CI/CDにはGitLab Runnerを使用。",
      },
    ],
  },
  {
    id: "s2",
    title: {
      en: "Pandemic of the Forgotten Virus",
      ja: "Pandemic of the Forgotten Virus",
    },
    description: {
      en: "A bullet-hell shooter game playable by two players or an AI powered by a neural network.",
      ja: "2人プレイまたはニューラルネットワークによるAIでプレイ可能な弾幕系シューティングゲーム。",
    },
    techStack: ["C#", "Unity"],
    link: "https://eaglescommander.itch.io/pandemic-of-the-forgotten-virus?trk=public_profile_project-button",
    details: [
      {
        en: "Developed the core gameplay mechanics, such as the general scene template, physics, and how to spawn bullets.",
        ja: "一般的なシーンテンプレート、物理挙動、弾の生成など、ゲームプレイのコアメカニクスを開発。",
      },
      {
        en: "Designed attack patterns, such as randomized bullet spread and homing bullet.",
        ja: "ランダム化された弾の拡散や追尾弾など、攻撃パターンを設計。",
      },
      {
        en: "Developed the AI model with neural network and Genetic Algorithm. The neural network and training environment are coded from scratch in Unity.",
        ja: "ニューラルネットワークと遺伝的アルゴリズムを用いたAIモデルを開発。ニューラルネットワークとトレーニング環境はUnity上でスクラッチから実装。",
      },
      {
        en: "Developed using C# and Unity.",
        ja: "C#とUnityで開発。",
      },
    ],
  },
  {
    id: "s3",
    title: {
      en: "Teman.ai",
      ja: "Teman.ai",
    },
    description: {
      en: "A chat bot for LINE that can manage schedule via Trello",
      ja: "Trelloと連携してスケジュール管理ができるLINE向けのチャットボット",
    },
    techStack: ["Java", "Spring Boot"],
    link: "https://gitlab.com/advprog-teman-ai-microservices",
    details: [
      {
        en: "Developed the service and REST API for handling commands from users",
        ja: "ユーザーからのコマンドを処理するためのサービスおよびREST APIを開発",
      },
      {
        en: "Refactored handlers for commands using design patterns, improving maintainability",
        ja: "保守性を向上させるために、デザインパターンを使用してコマンドのハンドラをリファクタリング",
      },
      {
        en: "Migrated the application from monolithic to microservices, improving scalability",
        ja: "アプリケーションをモノリシック構成からマイクロサービスアーキテクチャに移行し、スケーラビリティを向上",
      },
      {
        en: "CI/CD via Gitlab Runner and deployed to Heroku",
        ja: "CI/CDにはGitLab Runnerを使用し、Herokuにデプロイ",
      },
    ],
  },
];

export const experience = [
  {
    company: { en: "Tomato Co. Ltd.", ja: "株式会社トマト" },
    position: { en: "Software Engineer", ja: "ソフトウェアエンジニア" },
    location: { en: "Tokyo, Japan", ja: "東京、日本" },
    period: { en: "2025 April - Present", ja: "2025年4月 - 現在" },
    description: {
      en: "Led a team of engineers in developing the company's in-house management software.",
      ja: "社内管理ソフトウェアの開発を担当し、エンジニアチームをリード。"
    },
    techStack: ["Java", "Spring", "Angular", "React", "Typescript", "PostgreSQL"],
    details: [
      {
        en: "Developed the full-stack CRUD in-house management system software using Spring Boot (Java) for the backend and Angular & React for the frontend.",
        ja: "バックエンドにSpring Boot (Java)、フロントエンドにAngularおよびReactを使用して、社内管理システムのフルスタック開発を担当。"
      },
      {
        en: "Implemented features including email notifications, QR code check-in, and data export to CSV using REST API and MVC architecture.",
        ja: "REST APIとMVCアーキテクチャでメール通知、QRコードによるチェックイン、CSV形式でのデータエクスポート機能を実装。"
      },
      {
        en: "Communicated in both Japanese and English with team members and management.",
        ja: "チームメンバーやマネージャーと日本語および英語でコミュニケーションを実施。"
      }
    ],
    achievements: [
      {
        en: "Led a team of engineers, delegated tasks, managed schedules, and contributed to development.",
        ja: "エンジニアチームをリードし、タスクの割り当てやスケジュール管理を行いながら、開発にも貢献。"
      }
    ]
  },
  {
    company: {
      en: "Samsung Research and Development Institute Indonesia",
      ja: "Samsung Research and Development Institute Indonesia"
    },
    position: { en: "Backend Engineer", ja: "バックエンドエンジニア" },
    location: { en: "Jakarta, Indonesia", ja: "ジャカルタ、インドネシア" },
    period: { en: "2022 September - 2025 April", ja: "2022年9月 - 2025年4月" },
    description: {
      en: "Developed Samsung's first global multi-region DNS platform used in critical Samsung components such as Samsung Cloud, AI, and Firmware Update services.",
      ja: "Samsung Cloud、AI、ファームウェアアップデートなどの重要なコンポーネントで使用される、Samsung初のグローバルマルチリージョンDNSプラットフォームを開発。"
    },
    techStack: [
      "Golang", "Python", "Docker", "Docker Swarm", "Ansible", "AWS", "Jenkins",
      "Github Action", "Terraform", "MariaDB", "Telegraf", "Grafana",
      "Kafka", "RabbitMQ", "Redis"
    ],
    details: [
      {
        en: "Developed and maintained a DNS platform used by internal Samsung projects.",
        ja: "Samsung社内プロジェクトで使用されるDNSプラットフォームの開発と保守を担当。"
      },
      {
        en: "Supported multi-region deployments with asynchronous replication and routing (health checks, region-based, latency-based).",
        ja: "非同期レプリケーションやルーティング(ヘルスチェック、リージョンベース、レイテンシーベース)に対応したマルチリージョン展開をサポート。"
      },
      {
        en: "Focused on performance and high availability in development.",
        ja: "開発ではパフォーマンスと高可用性を重視。"
      },
      {
        en: "Integrated compatibility with AWS CLI and Terraform, allowing it to be used as a drop-in replacement for AWS DNS Service and support Infrastructure as Code.",
        ja: "AWS CLIやTerraformとの互換性を備え、AWS DNSサービスの代替として利用可能。IaC(Infrastructure as Code)にも対応。"
      },
      {
        en: "Communicated in Bahasa Indonesia and English with local and international teams.",
        ja: "インドネシア語と英語を用いて、国内外のチームとコミュニケーションを実施。"
      }
    ],
    achievements: [
      {
        en: "Participated in the design of a large, complex multi-regional system and was responsible for the asynchronous replication design using Kafka.",
        ja: "大規模かつ複雑なマルチリージョンシステムの設計に参加し、Kafkaを用いた非同期レプリケーション設計を担当。"
      },
      {
        en: "Refactored the health check algorithm from single-threaded to multi-threaded with caching, improving performance by 500 times and enhancing scalability.",
        ja: "ヘルスチェックアルゴリズムをシングルスレッドからマルチスレッドとキャッシュ対応にリファクタリングし、パフォーマンスを500倍向上させ、スケーラビリティを改善。"
      },
      {
        en: "Refactored a complex recursive backend algorithm into a simpler breadth-first algorithm, improving performance by 2.5x and making debugging easier.",
        ja: "複雑な再帰的バックエンドアルゴリズムを、簡潔な幅優先探索アルゴリズムにリファクタリングし、パフォーマンスを2.5倍向上させ、デバッグの容易化を実現。"
      },
      {
        en: "Fixed an obscure bug in a legacy Python2 system that couldn't be found by ChatGPT or Stack Overflow. Received praise from the team lead and became the go-to person for bug fixes.",
        ja: "ChatGPTやStack Overflowでも見つからないレガシーなPython2システムの難解なバグを修正。リーダーから高く評価され、バグ修正の相談役となる。"
      }
    ]
  },
  {
    company: { en: "Sayurbox", ja: "Sayurbox" },
    position: { en: "Software Engineer Intern", ja: "ソフトウェアエンジニアインターン" },
    location: { en: "Jakarta, Indonesia", ja: "ジャカルタ、インドネシア" },
    period: { en: "2020 September - 2020 November", ja: "2020年9月 - 2020年11月" },
    description: {
      en: "Internship focusing on improving internal platform performance and stability.",
      ja: "社内プラットフォームのパフォーマンスと安定性の向上に取り組むインターンシップ。"
    },
    techStack: ["Golang", "Python", "Redis", "PostgreSQL", "Kafka", "GitLab CI/CD"],
    details: [
      {
        en: "Refactored and improved performance of the internal product feed service.",
        ja: "社内プロダクトフィードサービスのリファクタリングおよびパフォーマンス向上を担当。"
      },
      {
        en: "Improved error handling and fixed Redis cache bugs.",
        ja: "Redisキャッシュのバグ修正やエラーハンドリングの改善を実施。"
      },
      {
        en: "Collaborated with senior engineers in debugging and feature enhancement.",
        ja: "シニアエンジニアと協力してバグの修正や機能改善に取り組む。"
      }
    ],
    achievements: [
      {
        en: "Improved service stability and performance through targeted refactoring.",
        ja: "リファクタリングによってサービスの安定性とパフォーマンスを向上。"
      }
    ]
  }
];
