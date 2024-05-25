import AppDevelopment from '../Assets/App Development.svg'
import Training from '../Assets/Training.svg'
import Counsulting from '../Assets/Counsulting.svg'
import building from '../Assets/building-2-fill.svg'
import medal from '../Assets/medal-fill.svg'
import Team from '../Assets/Team.svg'
import Raj from '../Assets/Raj .svg'
import Akshara from '../Assets/Akshara.svg'
const ServiceDetails = [
    {
        ServiceLogo: Counsulting,
        ServiceTitle: "Consulting",
        ServiceDesription: "Our consulting services involve a wide range of services like Business Intelligence, IBM DataStage, Oracle BI, Big Data Analytics, Data Science"
    },
    {
        ServiceLogo: AppDevelopment,
        ServiceTitle: "App Development",
        ServiceDesription: "Agilewit Solutions is incorporated as a Technology Consulting services and Software product development firm. Head quartered in Texas and Offshore ..."
    },
    {
        ServiceLogo: Training,
        ServiceTitle: "Training",
        ServiceDesription: "With a motive to provide an opportunity to the IT as pirants, to learn the software technologies and tools from the experienced and expert group ...."
    },

]

const Achievement = [
    {
        Icon: medal,
        Count: 100,
        Title: "TRAINED PROFESSIONAL"
    }, {
        Icon: building,
        Count: 55,
        Title: "INDUSTRY PLACEMENT"
    }, {
        Icon: Team,
        Count: 10,
        Title: "CLIENTS"
    }


]

const Partners = [
    {
        PartnerName: "Raj",
        PartnerIcon: Raj,
        PartnerCompany: "HCL",
        PartnerOpinion: "“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”"
    },
    {
        PartnerName: "Akshara",
        PartnerIcon: Akshara,
        PartnerCompany: "Director Of SK Instistution",
        PartnerOpinion: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”"
    }
]

const ConsultingItemsInfo = [
    "IBM Datastage", "Business Intelligence", "Oracle BI Stack Components", "Big Data Analytics", "DATA SCIENCE"
]
const DeskTopHeaderContent = {
    CompanyCaption: `"Technology empowers us to dream beyond boundaries and make those dreams a reality."`,
    ContactInfo: "(516) 888-0089 info@agilewit.com"
}
const AboutUsContents = {
    WelcomeTitle: "Welcome to Agilewit Solutions Inc",
    Introduction: "Agilewit Solutions is incorporated as a Technology Consulting services and Software product development firm. Headquartered in Texas with offshore development centers in India, we are involved in creating strategy, implementing, deploying, and supporting a wide range of solutions for clients worldwide. Our clients include a varied set of Fortune 500, mid-sized, and startup companies. They count on us to provide them with timely, high-quality work and they return to us because we’re reliable, experienced, and easy to work with.",
    MissionHeading: "Our Mission",
    MissionDescription: "The Agilewit team consists of highly skilled professionals based in the USA and India. Our team delivery model leverages global talent, agile processes, and multiple time zones to help our clients save time and money without compromising quality. Our guiding principles are based on developing long-term relationships with our customers, partners, and employees. As a result, we have grown quickly, earning recognition as one of the fastest-growing companies in the USA. Even more prominently, we have done this while building a culture that puts people first.",
    PartnersOpinionTitlePartOne: "What Our",
    PartnersOpinionTitlePartTwo: "Partners",
    PartnersOpinionTitlePartThree: "Say"
}
const HomePageContent = {
    HomeTitle: "See what  we can do for you",
    HomePageMainingHeading: 'Innovate with Our Tech Experts.',
    MobileViewCaption: "Technology empowers us to dream beyond boundaries and make those dreams a reality",
    HomePageTagLine: "Elevate Your Business with Our Technology Consulting and Software Development Expertise",
    LetsWork: "LET WORK TO GOTHER +",
    ShareYourIdea: `You Share your idea We get it done`,
    IdeaDescription: `Agilewit Solutions is incorporated as a Technology Consulting services and Software product development firm. Headquartered in Texas and Offshore development centers in India, we are involved in creating strategy, implementing, deploying, and supporting a wide range of
    solutions for clients worldwide.`
}

const BottomPageContent = {
    Explore: "EXPLORE",
    AboutUs: "About Us",
    AppDevelopment:"App Development",
    Career: "Careers",
    Training:"Training",
    Openings: "Current Openings",
    Service: "SERVICES",
    Consulting: "Consulting",
    Product: "PRODUCT",
    Consent: "CONSENT",
    Contact: "CONTACT",
    CompanyUSAAddress: `AGILEWIT SOLUTIONS INC
                        405 State Hwy 121 Bypass Suite A250,
                        Lewisville, TX 75067
                        Phone Number: (516) 888-0089`,
    CompanyIndiaAddress: `AGILEWIT SOLUTIONS PVT LTDH NO.3-1-101/6,Navodaya Colony,
                         Road No 2,Sbh Venture-I, LB NagarHyderabad,Telangana,India,50074
                        Phone Number: 040-48547228`,
    CompanyMail: "info@agilewits.com",
    EndTitle: "© Agilewit Solutions Inc"

}


const CunsultingPageContent = {

    BusinessIntelligenceContent: {
        Title: "Business Intelligence",
        Description: `With our business intelligence that includes courses from Dell, , Oracle, and SAP, you can develop solid business intelligence and analytical skills and learn how to access the right data to enable you to make better-informed decisions in less time.
        These courses help you reach the next level in your career as you learn to use business intelligence systems that reduce the complexity of organizing and distributing business information.`,
    },
    OracleContent: {
        OracleTitle: "Oracle BI Stack Components",
        OracleBIstacks: [
            'BI Answers – Fully interactive and drillable charts, pivot tables and reports that can be created by the business users by using a logical view of the information instead of using complex database structure. It is a new generation Ad-hoc Reporting and Querying tool.',
            "BI Interactive Dashboards – Aggregate content and applications are presented through the interactive dashboards that are dynamically personalized based on the user’s role and identity",
            "BI Delivers – Supports Business Activity Monitoring and Alerting through multiple channels such as email, dashboards and mobiles.",
            "BI Publisher – This component is an Enterprise Reporting and Distribution tool where reports designed for MS Word or Adobe Acrobat can be delivered via printer, email, fax, webDAV or published to a portal.",
            "Briefing Books – This tool enables users to create snapshots for viewing them offline or sharing with others. These snapshots have paging control and are well suited to present information to others.",
            "Disconnected Analytics – Enables full analytical functionality for the mobile professional who is disconnected from the Corporate Network."
        ],
        HyperionTitle: "Hyperion Stack Components",
        HyperionList: [
            "Interactive Reporting Provides executives, business users and analysts with user-directed query and analysis capabilities. It provides highly interactive ad-hoc reporting. SQR Production Reporting – Provides high-volume, presentation quality formatted report generation. Financial Reporting – Provides formatted financial and management reports that comply with regulations and which features currency translations, GAAP, IFRS and other financial standards. Web Analysis – Provides capability of web-based online analytical processing analysis, presentation and reporting.",
            "SQR Production Reporting – Provides high-volume, presentation quality formatted report generation.",
            "Financial Reporting – Provides formatted financial and management reports that comply with regulations and which features currency translations, GAAP, IFRS and other financial standards.",
            "Web Analysis – Provides capability of web-based online analytical processing analysis, presentation and reporting."
        ],
        OraclefirstBottom: "With OBIEE you can also empower business users with the tools to make decisions and allow them to use the latest technologies for creating interactive web reports and web dashboards.",
        OracleSecondBottom: "OBIEE consists of all the Business Intelligence Software you need to start Enhancing your Business.",


    },
    IBMDatastageContent: {
        IBMDatastageTitle: "IBM Datastage",
        IBMDatastageSubTitle: "IBM InfoSphere DataStage Benefits",
        IBMDatastageFirstList: [
            "Can connect to different Data Sources & Targets like Databases, Sequential Files, SAP, JD Edwards, Oracle Applications, People Soft, Siebel CRM, Hashed Files, MQ Series, SAS, Mainframes etc.",
            "DataStage with Parallel Extender capability harnesses the power of parallel computing for processing very huge volumes like Tera/Peta Bytes of data in a minimum amount of time.",
            "Interfacing multiple databases, WebSphere MQ to provide realtime processing capabilities and deploy the DataStage Jobs as web services.",
            "With job optimizer capability rewrites the code/job already being developed for best performance.",
            "With NLS capability it can process the Unicode data easily.",
            "Deliver data in batch or real time through visually designed logic.",
            "Hundreds of built-in transformation functions.",
            "Metadata-driven productivity, enabling collaboration."
        ],
        DataStageAdvantages: "The Agilewit Solutions Inc DataStage Advantage",
        DataStageAdvantagesDescription: "Agilewit Solutions Inc an IBM’s SWG Software Group Direct Partner supplies IBM Certified DataStage Solution Developers with huge experience to all our clients. All our IBM InfoSphere DataStage Consultants have extensive experience and specialization which includes:",
        IBMDatastageSecondList: [
            "IBM InfoSphere DataStage Capacity Planning.",
            "IBM InfoSphere DataStage Installation and Configuration.",
            "IBM InfoSphere DataStage High Availability.",
            "IBM InfoSphere DataStage Data Warehouse Implementation.",
            "IBM InfoSphere DataStage Data Integration Implementation.",
            "IBM InfoSphere DataStage Data Conversion Implementation.",
            "IBM InfoSphere DataStage complex Data Management Implementation.",
            "IBM InfoSphere Master Data Management Implementation.",
            "IBM InfoSphere DataStage Administration."
        ]


    },
    BigDataAnalyticsContent: {
        BigDataAnalyticsTitle: "Big Data Analytics",
        BigDataAnalyticsDescription: "According to Gartner, through 2015 more than 85% of Fortune 500 organizations will fail to effectively use big data. The reason is that the size, complexity of formats, and speed of delivery will exceed the capabilities of traditional data management technologies. Having experience in installing, configuring, and tuning deployments for large-scale systems, the team of Hadoop developers at Agilewit Solutions Incs can help software companies to address their data processing needs related to data mining, analysis, scaling, etc. Agilewit Solutions Incs has implemented Hadoop solutions for a number of projects that included speeding up the search process and search filtering, building a search recommendation engine, dataset mining and aggregation, data warehousing, real-time reporting, and more.",
        BigDataAnalyticsSubTitle: "Focused Hadoop Services",
        BigDataAnalyticsFirstList: [
            "Provide an initial Hadoop proof of concept to help enterprises to adopt the system",
            "Find and develop algorithms for distributed computing of custom processes",
            "Build distributed systems that scale to petabytes of data and hundreds of nodes",
            "Develop tools to automate the deployment, administration, and performance monitoring of large Hadoop clusters"
        ],
        Benifits: "Benefits to Your Company",
        BenifitsList: [
            "Proven expertise in implementing and tuning Hadoop-related frameworks and tools: Mahout, Hive, Pig, Chukwa, Oozie, ZooKeeper, etc.; profound experience in NoSQL and distributed computing solutions",
            "90% of team members are senior or mid-level software engineers; a documented low retention rate",
            "Weekly invoices and timesheets for work done during the previous week",
            "A key role in helping its customers to create over $500M of enterprise value and raise $120M+ in venture funding",
            "Access to our R&D department that tracks the most innovative technologies to help our customers to deliver software faster, with improved performance, and at a lower cost"
        ],



    },
    DataScienceContent: {
        DataScienceTitle: "Data Science",
        DataScienceDescription: "AgileWit Solutions Inc provides Information Technology contract consultants specializing in applications development, infrastructure support, Enterprise Resource Planning (ERP), data warehousing, and databases. Our client base is broad, ranging from small businesses to Fortune 500 companies and stretching across numerous verticals. Among these markets are communications, construction, financial/banking, information technology, manufacturing, oil & gas, transportation, biotechnology, government, healthcare/medical institutions, education, insurance, legal, marketing/media, pharmaceutical, retail, technology, and utilities.",
        DataSciencSubDescription: "Our success is simply the result of hard work in data science models. Data science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from data in various forms, both structured and unstructured, similar to data mining."
    }

}

const MobileDevelopment={
    AppaleStoreTitle:"Manage projects easily",
    AppaleStoreDescription:"The Mobile devices have become the most necessity device in society and are developing enormously. For advancement of computing power, mobile apps have come into existence. The Mobile applications are made using the most fascinating and dynamic mobile platforms accessible today. These platforms include Android, Windows, and iOS. However Android is one of the most used OS’s in Mobile App development",
    EasyCustomize:"Easy to Customize", 
    EasyCustomizeDescription:"Android has an extensive user base and has simplified mobile app development process. Enterprises leverage Android and create custom mobile apps that solve customer problems and increase value for their business",
    PowerfullOption:"Powerful Options",
    PowerfullOptionDescription:"The open source nature of Android has to be the most prominent advantage, which means the source code of the Development Kit (SDK) is entirely available for amendments as per the requirement of the developer. Developers can directly interact with the community. They have access to the best technology framework which results in faster development of applications and brings better opportunities for the app developers to earn more. Android supports Inter-Application Integration in which two different software can connect. This makes the Android platform attractive for handset manufacturers & wireless operators, resulting in faster development of Android-based phones.",
    CapsLets:"LETS WORK TO GETHER +"

}

export { ServiceDetails, Achievement, Partners, ConsultingItemsInfo, HomePageContent, AboutUsContents, BottomPageContent, DeskTopHeaderContent, CunsultingPageContent ,MobileDevelopment}