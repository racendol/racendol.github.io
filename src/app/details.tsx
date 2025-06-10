export interface LanguagePair {
  en: string;
  ja: string;
}

export type Summary = LanguagePair

export interface Organization{}

export interface Contact {
    name: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Education {
  school: string;
  degree: LanguagePair;
  gpa: string;
  year: string;
  location?: string;
}

export type Certification = LanguagePair

export type LanguageSkill = LanguagePair

export interface GroupedSkills {
  [key: string]: (string | LanguagePair)[];
}

export type ProjectDetail = LanguagePair

export interface Project {
  id: string;
  title: LanguagePair;
  description: LanguagePair;
  techStack: string[];
  link?: string;
  details: ProjectDetail[];
}

export type ExperienceDetail = LanguagePair

export type Achievement = LanguagePair

export interface Experience {
  company: LanguagePair;
  position: LanguagePair;
  location: LanguagePair;
  period: LanguagePair;
  description: LanguagePair;
  techStack: string[];
  details: ExperienceDetail[];
  achievements: Achievement[];
}

export interface PortofolioData {
  contact: Contact;
  education: Education[];
  certifications: Certification[];
  languageSkills: LanguageSkill[];
  groupedSkills: GroupedSkills;
  projects: Project[];
  experience: Experience[];
}

export const contact: Contact = {
    name: "Rocky Arkan Adnan Ahmad",
  email: "rocky.arkan259 [at] gmail.com",
  github: "https://github.com/racendol",
  linkedin: "https://linkedin.com/in/rocky-arkan-951a45129"
};

export const education: Education[] = [
  {
    school: "Universitas Indonesia",
    degree: { en: "Bachelor of Computer Science", ja: "コンピュータサイエンス学士" },
    gpa: "3.82 / 4.0 (Cum Laude)",
    year: "2018-2022"
  }
];

export const certifications: Certification[] = [
  { en: "Japanese Language Proficiency Test (JLPT) N2", ja: "日本語能力試験 (JLPT) N2" }
];

export const languageSkills: LanguageSkill[] = [
  { en: "Indonesia (Native)", ja: "インドネシア語(ネイティブレベル)" },
  { en: "English (Business Level)", ja: "英語(ビジネスレベル)" },
  { en: "Japanese (Business Level)", ja: "日本語(ビジネスレベル)" }
];

export const groupedSkills: GroupedSkills = {
  "Languages": ["Golang", "Python", "Java", "C#", "TypeScript", "JavaScript"],
  "Frameworks & Libraries": [
    "Spring Boot", "React", "Angular", "Unity", "Tensorflow", "GraphQL"
  ],
  "Infrastructure & DevOps": [
    "Terraform", "Ansible", "Docker", "Docker Swarm", "Kubernetes",
    "AWS", "Jenkins", "GitLab CI/CD", "Heroku"
  ],
  "Messaging & Communication": ["RabbitMQ", "Kafka"],
  "Databases": ["PostgreSQL", "MariaDB", "MySQL", "MongoDB", "Redis", "TiDB"],
  "Monitoring & Logging": ["Grafana", "Telegraf", "Loki", "Promtail"],
  "Other": [
    { en: "Data Structures", ja: "データ構造" },
    { en: "Algorithms", ja: "アルゴリズム" },
    { en: "Machine Learning", ja: "機械学習" },
    { en: "Data Science", ja: "データサイエンス" },
    { en: "Cloud Computing", ja: "クラウドコンピューティング" }
  ]
};

export const projects: Project[] = [
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
    {
    id: "s4",
    title: {
        en: "ShaftShifter",
        ja: "ShaftShifter",
    },
    description: {
        en: "A 2D platformer action game submitted for Game Jam",
        ja: "ゲームジャムに提出した2Dプラットフォーマーアクションゲーム。",
    },
    techStack: ["Godot Engine"],
    link: "https://racendol.itch.io/shaft-shifter",
    details: [
        {
        en: "Developed the core gameplay mechanics, such as resource management between switching maps and switching between characters",
        ja: "マップ切り替えやキャラクター切り替えにおけるリソース管理など、ゲームプレイのコアメカニクスを開発。",
        },
        {
        en: "Designed and developed map and boss level, and also combat mechanics for each boss and characters.",
        ja: "マップやボスステージの設計・開発、各ボスやキャラクターの戦闘メカニクスも実装。",
        },
        {
        en: "Developed the enemy AI with simple tracking algorithm.",
        ja: "簡易的な追跡アルゴリズムを用いた敵AIを開発。",
        },
        {
        en: "Developed using Godot Engine and Godot Language.",
        ja: "Godot EngineとGodot言語で開発。",
        },
    ],
    },
    {
    id: "s5",
    title: {
        en: "o-dict",
        ja: "o-dict",
    },
    description: {
        en: "A Python application that fetches entry from an online dictionary with support for 3 languages: Indonesia, English, Japanese",
        ja: "インドネシア語・英語・日本語に対応したオンライン辞書から語彙を取得するPythonアプリケーション。",
    },
    techStack: ["Python"],
    link: "https://github.com/racendol/o-dict",
    details: [
        {
        en: "Developed the design for API calling to each dictionary.",
        ja: "各辞書へのAPI呼び出し設計・開発を担当。",
        },
        {
        en: "Uses beautifulsoup4 for HTML parsing.",
        ja: "HTML解析にはbeautifulsoup4を使用。",
        },
        {
        en: "Developed using Python with tkinter for displaying UI.",
        ja: "UI表示にはtkinterを用い、Pythonで開発。",
        },
    ],
    }
];

const teachingAssistantUiExpDDP2: Experience = {
  company: { en: "University of Indonesia", ja: "インドネシア大学" },
  position: { en: "Teaching Assistant of Foundation of Programming 2", ja: "プログラミング基礎2のティーチングアシスタント" },
  location: { en: "Jakarta, Indonesia", ja: "ジャカルタ、インドネシア" },
  period: { en: "January 2020 – June 2020", ja: "2020年1月〜6月" },
  description: {
    en: "Teaching and mentoring students about Java and Object Oriented Programming.",
    ja: "Javaおよびオブジェクト指向プログラミングについて学生に指導とメンタリングを実施。",
  },
  techStack: ["Java"],
  details: [
    {
      en: "Mentored students about Java and Object Oriented Programming concepts, such as inheritance, polymorphism, interface, and abstract classes.",
      ja: "継承、ポリモーフィズム、インターフェース、抽象クラスなどのオブジェクト指向プログラミングの概念について学生たちに指導。",
    },
  ],
  achievements: [
    {
      en: "Created test problems and graded students work with 1-on-1  sessions.",
      ja: "テスト問題の作成および1対1のセッションによる学生の課題評価を担当。",
    }
  ]
};

const teachingAssistantUiExpSDA: Experience = {
  company: { en: "University of Indonesia", ja: "インドネシア大学" },
  position: { en: "Teaching Assistant of Data Structures and Algorithms", ja: "データ構造とアルゴリズムのティーチングアシスタント" },
  location: { en: "Jakarta, Indonesia", ja: "ジャカルタ、インドネシア" },
  period: { en: "September 2020 - January 2021", ja: "2020年9月〜2021年1月" },
  description: {
    en: "Teaching and mentoring students about Data Structures and Algorithms",
    ja: "データ構造とアルゴリズムについて学生に指導とメンタリングを実施。",
  },
  techStack: ["Java"],
  details: [
    {
      en: "Mentored students about Data Structures and Algorithms concepts: Recursion, Sliding windows (Kadane's), Binary Search, Dynamic Programming, Stack & Queue, Linked List, Tree,  BFS & DFS, Priority Queue, Graph Traversal, and Djikstra",
      ja: "再帰、スライディングウィンドウ (カデーン法)、二分探索、動的計画法、スタックとキュー、連結リスト、木構造、BFSとDFS、優先度付きキュー、グラフ探索、ダイクストラ法などの概念を学生たちに指導。",
    },
  ],
  achievements: [
    {
      en: "Created test problems and graded students work with 1-on-1 sessions.",
      ja: "テスト問題の作成および1対1のセッションによる学生の課題評価を担当。",
    }
  ]
};

const tomatoExperience: Experience = {
  company: { en: "Tomato Co. Ltd.", ja: "株式会社トマト" },
  position: { en: "Software Engineer", ja: "ソフトウェアエンジニア" },
  location: { en: "Tokyo, Japan", ja: "日本、東京" },
  period: { en: "April 2025 – Present", ja: "2025年4月〜現在" },
  description: {
    en: "Internal full-stack management system development and team leadership.",
    ja: "社内のフルスタック管理システムの開発およびチームリーダーとしての指導。",
  },
  techStack: ["Java", "Spring", "Angular", "React", "Typescript", "PostgreSQL"],
  details: [
    {
      en: "Developed a full-stack internal visitor management system (Spring Boot/Angular/React), digitizing operations previously done on paper through QR code integration and automated email notifications, streamlined operations and save hours of manual processing time.",
      ja: "紙ベースで行われていた業務をQRコードの統合と自動メール通知を使用してデジタル化することで、社内の訪問者管理システム（Spring Boot/Angular/React）をフルスタックで開発し、業務を効率化して数時間の手作業を削減しました。",
    },
  ],
  achievements: [
    {
      en: "Led a team composed of junior developers as team leader, teaching and mentoring on Spring Boot, MVC architecture, REST API, Database, and SOLID principles.",
      ja: "チームリーダーとして若手開発者で構成されたチームを指導し、Spring Boot、MVCアーキテクチャ、REST API、データベース、およびSOLID原則について教育とメンタリングを行いました。",
    }
  ]
};


const samsungExperience: Experience = {
  company: {
    en: "Samsung Research and Development Institute Indonesia",
    ja: "サムスン研究開発インスティテュートインドネシア",
  },
  position: { en: "Backend Engineer", ja: "バックエンドエンジニア" },
  location: { en: "Jakarta, Indonesia", ja: "インドネシア、ジャカルタ" },
  period: { en: "September 2022 – April 2025", ja: "2022年9月〜2025年4月" },
  description: {
    en: "Developed global internal DNS and improved performance of backend systems.",
    ja: "グローバル社内DNSの開発およびバックエンドシステムのパフォーマンス改善。",
  },
  techStack: [
    "Golang", "Python", "Docker", "Docker Swarm", "Ansible", "Github Actions", 
    "AWS", "Jenkins", "Terraform", "MariaDB", "Telegraf", "Grafana", 
    "Kafka", "RabbitMQ", "Redis", "TiDB"
  ],
  details: [
    {
      en: "Developed Samsung’s first global, multi-region internal DNS platform using Golang, serving critical components like Samsung Cloud, AI, and Firmware Update services with 99.99% uptime target. Achieved a 30% cost reduction and improved security compared to competitor products such as AWS Route 53.",
      ja: "Golangを用いてサムスン初のグローバルなマルチリージョン内部DNSプラットフォームを開発し、Samsung Cloud、AI、ファームウェアアップデートなどの重要なコンポーネントに99.99%の稼働率で提供。AWS Route 53などの競合製品と比較して、コストを30%削減しセキュリティを向上させました。",
    },
    {
      en: "Integrated AWS CLI and Terraform support, enabling use as a drop-in replacement in Infrastructure as Code setups for other projects. Eliminated manual operations and automated deployment workflows across multiple projects.",
      ja: "AWS CLIとTerraformのサポートを統合し、他プロジェクトのInfrastructure as Code構成で代替として使用可能に。手作業を排除し、複数プロジェクトでのデプロイワークフローを自動化しました。",
    },
    {
      en: "Communicated using English with teams across the globe.",
      ja: "英語で国際のチームをコミュニケーションしました。",
    }
  ],
  achievements: [
    {
      en: "Designed system for asynchronous replication using Kafka, enabling users to create and replicate data across the globe. Achieved maximum 60 seconds replicate guarantee policy, with average 6 seconds per replication, with many failover scenario.",
      ja: "Kafkaを用いた非同期レプリケーションシステムを設計し、世界中でのデータ作成と複製を可能に。最大60秒のレプリケーション保証ポリシー、平均6秒のレプリケーション速度を実現し、多数のフェイルオーバーシナリオに対応しました。",
    },
    {
      en: "Refactored a faulty message queue consumer from single-threaded with uncontrolled thread spawn problems to multi-threaded with caching strategy, reducing average response from 10 seconds to 100 milliseconds, while also applying limiter for thread safety using Semaphore pattern. This also improved system performance to handle concurrent requests up to 150x, from around 300 to 50000 concurrent requests.",
      ja: "スレッドリークのある単一スレッドのメッセージキューコンシューマを、キャッシュ戦略を用いたマルチスレッド構成にリファクタリング。平均応答時間を10秒から100ミリ秒に短縮し、Semaphoreパターンによるスレッドセーフなリミッターも導入。これにより、同時リクエスト処理能力が約300から5万へと150倍に向上しました。",
    },
    {
      en: "Refactored a complex recursive algorithm to simpler breadth-first algorithm, boosting QPS by 2.5x in best-case (2000→5000 QPS) and 25x in worst-case (150→4000 QPS) scenarios, while improving monitoring/tracing by eliminating recursion.",
      ja: "複雑な再帰アルゴリズムをよりシンプルな幅優先アルゴリズムにリファクタリングし、ベストケースではQPSを2.5倍（2000→5000）、ワーストケースでは25倍（150→4000）に向上。再帰を排除することで監視およびトレースのしやすさも改善しました。",
    },
    {
      en: "Fixed an urgent, critical bug that happens in a legacy Python2 system in production environment where the bug is very obscured and hard to find, and being the only person in the team who can finally debugged and fixed the problem, preventing a major system failure and significant financial loss. Debugged by thorough and extensive log search. Recognized as the team’s go-to expert for legacy system issues.",
      ja: "本番環境で発生したレガシーなPython2システムの重大かつ緊急のバグを、チーム内で唯一デバッグ・修正できたことで、重大なシステム障害と大きな損失を回避。徹底的なログ調査によりバグを特定し、レガシーシステムに関するチームの第一人者として認知されました。",
    }
  ]
};


const sayurboxExperience: Experience = {
  company: { en: "Sayurbox", ja: "Sayurbox" },
  position: { en: "Backend Engineer Intern", ja: "バックエンドエンジニアインターン" },
  location: { en: "Jakarta, Indonesia", ja: "インドネシア、ジャカルタ" },
  period: { en: "September 2020 – November 2020", ja: "2020年9月〜11月" },
  description: {
    en: "Backend engineering internship in B2C agricultural startup.",
    ja: "農業系スタートアップでのB2C向けバックエンド開発インターン。",
  },
  techStack: ["Java", "Spring", "Jenkins", "RabbitMQ", "MySQL", "Redis", "GraphQL", "Grafana", "Telegraf"],
  details: [
    {
      en: "Developed and maintained the B2C application connecting farmers and consumers using Spring Boot (Java) in a fast-paced startup environment.",
      ja: "急成長中のスタートアップ環境において、Spring Boot（Java）を用いて農家と消費者をつなぐB2Cアプリケーションを開発・保守しました。",
    },
    {
      en: "Communicated using English and Japanese.",
      ja: "英語と日本語でチームメンバーと上司をコミュニケーションしました。",
    }
  ],
  achievements: [
    {
      en: "Implemented a new voucher type feature using design patterns, increased sales by 10% during promotional periods.",
      ja: "デザインパターンを活用して新しいバウチャー機能を実装し、プロモーション期間中の売上を10%向上させました。",
    },
    {
      en: "Refactored the voucher system to use RabbitMQ messaging queues for inter-service communication, improving scalability.",
      ja: "バウチャーシステムをRabbitMQメッセージキューを使ったサービス間通信にリファクタリングし、スケーラビリティを向上させました。",
    },
    {
      en: "Refactored GraphQL output structure for clarity and consistency, improving frontend integration and earning positive feedback from frontend teams.",
      ja: "GraphQLの出力構造を明確かつ一貫性のある形式にリファクタリングし、フロントエンドとの統合を改善。フロントエンドチームから高評価を得ました。",
    }
  ]
};

export const experience = [ tomatoExperience, samsungExperience, sayurboxExperience, teachingAssistantUiExpSDA, teachingAssistantUiExpDDP2 ];
