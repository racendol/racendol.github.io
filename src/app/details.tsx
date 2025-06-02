export const T = (en: string, jp: string) => (lang === "en" ? en : jp)

export const contact = {
email: "rocky.arkan259 [at] gmail.com",
// phone: "+81-90-1234-5678",
github: "https://github.com/racendol",
linkedin: "https://linkedin.com/in/rocky-arkan-951a45129"
};

export const education = [
{
    school: "Universitas Indonesia",
    degree: T("Bachelor of Computer Science", "コンピュータサイエンス学士"),
    gpa: "3.82 / 4.0 (Cum Laude)",
    year: "2018-2022"
}
];

export const certifications = [
T("Japanese Language Proficiency Test (JLPT) N2", "日本語能力試験 (JLPT) N2")
];

export const languageSkills = [
T("Indonesia (Native)", "インドネシア語(ネイティブレベル)"),
T("English (Business Level)", "英語(ビジネスレベル)"),
T("Japanese (Business Level)", "日本語(ビジネスレベル)")
];

export const groupedSkills = {
"Languages": [
    "Golang",
    "Python",
    "Java",
    "C#",
    "TypeScript",
    "JavaScript",
],
"Frameworks & Libraries": [
    "Spring Boot",
    "React",
    "Angular",
    "Unity",
    "Tensorflow",
    "GraphQL",
],
"Infrastructure & DevOps": ["Terraform",
    "Ansible",
    "Docker",
    "Docker Swarm",
    "Kubernetes",
    "AWS",
    "Jenkins",
    "GitLab CI/CD",
    "Heroku",
],
"Messaging & Communication": ["RabbitMQ", "Kafka"],
"Databases": [
    "PostgreSQL",
    "MariaDB",
    "MySQL",
    "MongoDB",
    "Redis",
],
"Monitoring & Logging": [
    "Grafana",
    "Telegraf",
    "Loki",
    "Promtail",
],
"Other": [
    T("Data Structures","データ構造"),
    T("Algorithms","アルゴリズム"),
    T("Machine Learning","機械学習"),
    T("Data Science","データサイエンス"),
    T("Cloud Computing","クラウドコンピューティング"),
]
};

export const experience = [
    {
    company: T("Tomato Co. Ltd.", "株式会社トマト"),
    position: T("Software Engineer", "ソフトウェアエンジニア"),
    location: T("Tokyo, Japan", "東京、日本"),
    period: T("2025 April - Present", "2025年4月 - 現在"),
    description: T(
        "Led a team of engineers in developing the company's in-house management software.",
        "社内管理ソフトウェアの開発を担当し、エンジニアチームをリード。"
    ),
    techStack: ["Java", "Spring", "Angular", "React", "Typescript", "PostgreSQL"],
    details: [
        T("Developed the full-stack CRUD in-house management system software using Spring Boot (Java) for the backend and Angular & React for the frontend.",
        "バックエンドにSpring Boot (Java)、フロントエンドにAngularおよびReactを使用して、社内管理システムのフルスタック開発を担当。"),
        T("Implemented features including email notifications, QR code check-in, and data export to CSV using REST API and MVC architecture.",
        "REST APIとMVCアーキテクチャでメール通知、QRコードによるチェックイン、CSV形式でのデータエクスポート機能を実装。"),
        T("Communicated in both Japanese and English with team members and management.",
        "チームメンバーやマネージャーと日本語および英語でコミュニケーションを実施。"),
    ],
    achievements: [
        T("Led a team of engineers, delegated tasks, managed schedules, and contributed to development.",
        "エンジニアチームをリードし、タスクの割り当てやスケジュール管理を行いながら、開発にも貢献。"),
    ],
    },
    {
    company: "Samsung Research and Development Institute Indonesia",
    position: T("Backend Engineer", "バックエンドエンジニア"),
    location: T("Jakarta, Indonesia", "ジャカルタ、インドネシア"),
    period: T("2022 September - 2025 April", "2022年9月 - 2025年4月"),
    description: T(
        "Developed Samsung's first global multi-region DNS platform used in critical Samsung components such as Samsung Cloud, AI, and Firmware Update services.",
        "Samsung Cloud、AI、ファームウェアアップデートなどの重要なコンポーネントで使用される、Samsung初のグローバルマルチリージョンDNSプラットフォームを開発。"
    ),
    techStack: ["Golang", "Python", "Docker", "Docker Swarm", "Ansible", "AWS", "Jenkins", "Github Action", "Terraform", "MariaDB", "Telegraf", "Grafana", "Kafka", "RabbitMQ", "Redis"],
    details: [
        T("Developed and maintained a DNS platform used by internal Samsung projects.",
        "Samsung社内プロジェクトで使用されるDNSプラットフォームの開発と保守を担当。"),
        T("Supported multi-region deployments with asynchronous replication and routing (health checks, region-based, latency-based).",
        "非同期レプリケーションやルーティング(ヘルスチェック、リージョンベース、レイテンシーベース)に対応したマルチリージョン展開をサポート。"),
        T("Focused on performance and high availability in development.",
        "開発ではパフォーマンスと高可用性を重視。"),
        T("Integrated compatibility with AWS CLI and Terraform, allowing it to be used as a drop-in replacement for AWS DNS Service and support Infrastructure as Code.",
        "AWS CLIやTerraformとの互換性を備え、AWS DNSサービスの代替として利用可能。IaC(Infrastructure as Code)にも対応。"),
        T("Communicated in Bahasa Indonesia and English with local and international teams.",
        "インドネシア語と英語を用いて、国内外のチームとコミュニケーションを実施。"),
    ],
    achievements: [
        T("Participated in the design of a large, complex multi-regional system and was responsible for the asynchronous replication design using Kafka.",
        "大規模かつ複雑なマルチリージョンシステムの設計に参加し、Kafkaを用いた非同期レプリケーション設計を担当。"),
        T("Refactored the health check algorithm from single-threaded to multi-threaded with caching, improving performance by 500 times and enhancing scalability.",
        "ヘルスチェックアルゴリズムをシングルスレッドからマルチスレッドとキャッシュ対応にリファクタリングし、パフォーマンスを500倍向上させ、スケーラビリティを改善。"),
        T("Refactored a complex recursive backend algorithm into a simpler breadth-first algorithm, improving performance by 2.5x and making debugging easier.",
        "複雑な再帰的バックエンドアルゴリズムを、簡潔な幅優先探索アルゴリズムにリファクタリングし、パフォーマンスを2.5倍向上させ、デバッグの容易化を実現。"),
        T("Fixed an obscure bug in a legacy Python2 system that couldn't be found by ChatGPT or Stack Overflow. Received praise from the team lead and became the go-to person for bug fixes.",
        "ChatGPTやStack Overflowでも見つからないレガシーなPython2システムの難解なバグを修正。リーダーから高く評価され、バグ修正の相談役となる。"),
    ],
    },
    {
    company: "Sayurbox",
    position: T("Backend Engineer Intern", "バックエンドエンジニアインターン"),
    location: T("Jakarta, Indonesia", "ジャカルタ、インドネシア"),
    period: T("2022 September - 2022 November", "2022年9月 - 2022年11月"),
    description: T(
        "Developed features for the B2C application that connects farmers to customers.",
        "農家と顧客をつなぐB2Cアプリケーションの機能を開発。"
    ),
    techStack: ["Java", "Spring", "Jenkins", "RabbitMQ", "Redis", "GraphQL", "Grafana", "Telegraf"],
    details: [
        T("Developed and maintained the B2C application using Spring Boot (Java).",
        "Spring Boot (Java)を用いて、B2Cアプリケーションの開発と保守を担当。"),
        T("Worked in a startup agile environment using Scrum methodology.",
        "スタートアップ環境において、Scrum手法を用いたアジャイル開発に従事。"),
        T("Communicated in Bahasa Indonesia and English with team members, including those based in India.",
        "インドネシア語と英語で、インド拠点を含むチームメンバーと連携。"),
    ],
    achievements: [
        T("Developed a critical voucher feature using the Command Design Pattern, potentially increasing sales by up to 20%.",
        "コマンドデザインパターンを使用して重要なバウチャー機能を開発し、売上を最大20%向上させる可能性を実現。"),
        T("Refactored the voucher system to use RabbitMQ messaging queues for inter-service communication, enhancing scalability.",
        "バウチャーシステムをRabbitMQを使ったメッセージキューにリファクタリングし、サービス間通信のスケーラビリティを向上。"),
    ],
    },
];

export const projects = [
    {
    id: "s1",
    title: T("Inventory Management Website", "資産管理システム"),
    description: T(
        "An inventory management website used for storing sensitive data related to forensic evidence. Collaborated with Ernst and Young.",
        "フォレンジック証拠に関連する機密データを保存するための資産管理ウェブサイト。アーンスト・アンド・ヤングとの共同開発。"
    ),
    techStack: ["Django", "Python", "Javascript", "Gitlab"],
    link: "",
    details: [
        T(
        "Inventory management website with the ability to read, export, and import data from Excel and manage that data.",
        "Excelファイルからのデータ読み込み、エクスポート、インポート、およびデータ管理が可能な資産管理ウェブサイト。"
        ),
        T("The data is sensitive and used for forensic evidence.", "フォレンジック証拠として使用される機密データを管理。"),
        T("Won Masterpiece Product Award, an award of top 5 product and beating over 30 teams.", "30以上のチームの中から選ばれ、上位5製品に贈られる「マスターピースプロダクト賞」を受賞。"),
        T(
        "Developed using Django and Python, with JQuery and Bootstrap for the frontend.",
        "DjangoとPythonで開発し、フロントエンドにはJQueryとBootstrapを使用。"
        ),
        T("Used GitLab Runner for CI/CD.", "CI/CDにはGitLab Runnerを使用。"),
    ],
    },
    {
    id: "s2",
    title: "Pandemic of the Forgotten Virus",
    description: T(
        "A bullet-hell shooter game playable by two players or an AI powered by a neural network.",
        "2人プレイまたはニューラルネットワークによるAIでプレイ可能な弾幕系シューティングゲーム。"
    ),
    techStack: ["C#", "Unity"],
    link: "https://eaglescommander.itch.io/pandemic-of-the-forgotten-virus?trk=public_profile_project-button",
    details: [
        T(
        "Developed the core gameplay mechanics, such as the general scene template, physics, and how to spawn bullets.",
        "一般的なシーンテンプレート、物理挙動、弾の生成など、ゲームプレイのコアメカニクスを開発。"
        ),
        T(
        "Designed attack patterns, such as randomized bullet spread and homing bullet.",
        "ランダム化された弾の拡散や追尾弾など、攻撃パターンを設計。"
        ),
        T(
        "Developed the AI model with neural network and Genetic Algorithm. The neural network and training environment are coded from scratch in Unity.",
        "ニューラルネットワークと遺伝的アルゴリズムを用いたAIモデルを開発。ニューラルネットワークとトレーニング環境はUnity上でスクラッチから実装。"
        ),
        T("Developed using C# and Unity.", "C#とUnityで開発。"),
    ],
    },
    {
    id: "s3",
    title: T("Teman.ai", "Teman.ai"),
    description: T(
        "A chat bot for LINE that can manage schedule via Trello",
        "Trelloと連携してスケジュール管理ができるLINE向けのチャットボット"
    ),
    techStack: ["Java", "Spring Boot"],
    link: "https://gitlab.com/advprog-teman-ai-microservices",
    details: [
        T("Developed the service and REST API for handling commands from users", "ユーザーからのコマンドを処理するためのサービスおよびREST APIを開発"),
        T("Refactored handlers for commands using design patterns, improving maintainability", "保守性を向上させるために、デザインパターンを使用してコマンドのハンドラをリファクタリング"),
        T("Migrated the application from monolithic to microservices, improving scalability", "アプリケーションをモノリシック構成からマイクロサービスアーキテクチャに移行し、スケーラビリティを向上"),
        T("CI/CD via Gitlab Runner and deployed to Heroku", "CI/CDにはGitLab Runnerを使用し、Herokuにデプロイ"),
    ],
    },
];
