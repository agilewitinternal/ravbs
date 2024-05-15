import { useState } from 'react'
import Header from '../Header/Header'
import DeskTopHeader from '../DeskTopHeader/DeskTopHeader'
import BottomPage from '../BottomPage/BottomPage'
import Options from '../Assets/Options.svg'
import Chaticon from '../Assets/Chaticon.svg'
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders'
import { CunsultingItemsInfo } from '../Data/Data'
import bimage from "../Assets/bi.svg"
import Oracles from '../Assets/Oracle.svg'
import IBM from "../Assets/IBM.svg"
import BigData from '../Assets/BigData.svg'
import "./Counsulting.css"
const Counsulting = () => {
    const [currentCunsulting, setCurrentCunsulting] = useState("Business Intelligence")
    const UpdatecurrentCunsulting = (each) => {
        setCurrentCunsulting(each)
    }

    const BusinessIntelligence = () => {
        return (
            <div className='CunsultingTypeTopLayer'>
                <h3>Business Intelligence</h3>
                <p>With our business intelligence that includes courses from Dell, , Oracle, and SAP, you can develop solid business intelligence and analytical skills and learn how to access the right data to enable you to make better-informed decisions in less time.
                    These courses help you reach the next level in your career as you learn to use business intelligence systems that reduce the complexity of organizing and distributing business information.</p>
                <img className='CunsultingLogo' src={bimage} alt="BusinessIntelligence" />
            </div>
        )
    }

    const Oracle = () => {
        return (
            <div className='CunsultingTypeTopLayer'>
                <h3>Oracle BI Stack Components</h3>
                <ul>
                    <li>BI Answers – Fully interactive and drillable charts, pivot tables and reports that can be created by the business users by using a logical view of the information instead of using complex database structure. It is a new generation Ad-hoc Reporting and Querying tool.</li>
                    <li>BI Interactive Dashboards – Aggregate content and applications are presented through the interactive dashboards that are dynamically personalized based on the user’s role and identity</li>
                    <li>BI Delivers – Supports Business Activity Monitoring and Alerting through multiple channels such as email, dashboards and mobiles.</li>
                    <li>BI Publisher – This component is an Enterprise Reporting and Distribution tool where reports designed for MS Word or Adobe Acrobat can be delivered via printer, email, fax, webDAV or published to a portal.</li>
                    <li>Briefing Books – This tool enables users to create snapshots for viewing them offline or sharing with others. These snapshots have paging control and are well suited to present information to others.</li>
                    <li>Disconnected Analytics – Enables full analytical functionality for the mobile professional who is disconnected from the Corporate Network.</li>
                </ul>
                <div className='OraclSecondLayer'>
                    <img className='CunsultingLogo' src={Oracles} alt="OracleLogo" />
                    <div>
                        <h3 className='SecondLayerTitile'>Hyperion Stack Components</h3>
                        <ul>
                            <li>Interactive Reporting Provides executives, business users and analysts with user-directed query and analysis capabilities. It provides highly interactive ad-hoc reporting.
                                SQR Production Reporting – Provides high-volume, presentation quality formatted report generation.
                                Financial Reporting – Provides formatted financial and management reports that comply with regulations and which features currency translations, GAAP, IFRS and other financial standards.
                                Web Analysis – Provides capability of web-based online analytical processing analysis, presentation and reporting.</li>
                            <li>SQR Production Reporting – Provides high-volume, presentation quality formatted report generation.</li>
                            <li>Financial Reporting – Provides formatted financial and management reports that comply with regulations and which features currency translations, GAAP, IFRS and other financial standards.</li>
                            <li>Web Analysis – Provides capability of web-based online analytical processing analysis, presentation and reporting</li>
                        </ul>
                        <p style={{textAlign:"center"}}>With OBIEE you can also empower business users with the tools to make decisions and allow them to use the latest technologies for creating interactive web reports and web dashboards.</p>
                    </div>
                </div>
                <p className='SecondLayerTitile' style={{textAlign:"center"}}>OBIEE consists of all the Business Intelligence Software you need to start Enhancing your Business.</p>
            </div>
        )

    }

    const IBMDatastage=()=>{
return(
    <div className='CunsultingTypeTopLayer'>
        <h3>IBM Datastage</h3>
        < h4 className='SecondLayerTitile'>IBM InfoSphere DataStage Benefits</h4>
        <ul>
            <li>Can connect to different Data Sources & Targets like Databases, Sequential Files, SAP, JD Edwards, Oracle Applications, People Soft, Siebel CRM, Hashed Files, MQ Series, SAS, Mainframes etc.</li>
            <li>DataStage with Parallel Extender capability harnesses the power of parallel computing for processing very huge volumes like Tera/Peta Bytes of data in a minimum amount of time.</li>
            <li>Interfacing multiple databases, WebSphere MQ to provide realtime processing capabilities and deploy the DataStage Jobs as web services.</li>
            <li>With job optimizer capability rewrites the code/job already being developed for best performance.</li>
            <li>With NLS capability it can process the Unicode data easily.</li>
            <li>Deliver data in batch or real time through visually designed logic.</li>
            <li>Hundreds of built-in transformation functions.</li>
            <li>Metadata-driven productivity, enabling collaboration.</li>
        </ul>
<img src={IBM} alt="IBM Logo" className='CunsultingLogo'/>

<h4 className='SecondLayerTitile'>The Agilewit Solutions Inc DataStage Advantage</h4>
<p>Agilewit Solutions Inc an IBM’s SWG Software Group Direct Partner supplies IBM Certified DataStage Solution Developers with huge experience to all our clients. All our IBM InfoSphere DataStage Consultants have extensive experience and specialization which includes:</p>
<ul>
    <li>IBM InfoSphere DataStage Capacity Planning.</li>
    <li>IBM InfoSphere DataStage Installation and Configuration.</li>
    <li>IBM InfoSphere DataStage High Availability.</li>
    <li>IBM InfoSphere DataStage Data Warehouse Implementation.</li>
    <li>IBM InfoSphere DataStage Data Integration Implementation.</li>
    <li>IBM InfoSphere DataStage Data Conversion Implementation.</li>
    <li>IBM InfoSphere DataStage complex Data Management Implementation.</li>
    <li>IBM InfoSphere Master Data Management Implementation.</li>
    <li>IBM InfoSphere DataStage Administration.</li>
</ul>

    </div>
)
    }

    const BigDataAnalytics=()=>{
return(
    <div className='CunsultingTypeTopLayer'>
<h1>Big Data Analytics</h1>
<p>According to Gartner, through 2015 more than 85% of Fortune 500 organizations will fail to effectively use big data. The reason is that the size, complexity of formats, and speed of delivery will exceed the capabilities of traditional data management technologies. Having experience in installing, configuring, and tuning deployments for large-scale systems, the team of Hadoop developers at Agilewit Solutions Incs can help software companies to address their data processing needs related to data mining, analysis, scaling, etc. Agilewit Solutions Incs has implemented Hadoop solutions for a number of projects that included speeding up the search process and search filtering, building a search recommendation engine, dataset mining and aggregation, data warehousing, real-time reporting, and more.</p>
    <h4 className='SecondLayerTitile'>Focused Hadoop Services</h4>
    <ul>
        <li>Provide an initial Hadoop proof of concept to help enterprises to adopt the system</li>
        <li>Find and develop algorithms for distributed computing of custom processes</li>
        <li>Build distributed systems that scale to petabytes of data and hundreds of nodes</li>
        <li>Develop tools to automate the deployment, administration, and performance monitoring of large Hadoop clusters</li>
    </ul>
    <img src={BigData} alt='BigData'/>
    <h4 className='SecondLayerTitile'>Benefits to Your Company</h4>
    <ul>
        <li>Proven expertise in implementing and tuning Hadoop-related frameworks and tools: Mahout, Hive, Pig, Chukwa, Oozie, ZooKeeper, etc.; profound experience in NoSQL and distributed computing solutions</li>
        <li>90% of team members are senior or mid-level software engineers; a documented low retention rate</li>
        <li>Weekly invoices and timesheets for work done during the previous week</li>
        <li>A key role in helping its customers to create over $500M of enterprise value and raise $120M+ in venture funding</li>
        <li>Access to our R&D department that tracks the most innovative technologies to help our customers to deliver software faster, with improved performance, and at a lower cost</li>
    </ul>
    </div>
)
    }
    const CunsultingMainView = () => {
        switch (currentCunsulting) {
            case "Business Intelligence":
                return BusinessIntelligence();
            case "Oracle BI Stack Components":
                return Oracle();
            case "IBM Datastage":
                return IBMDatastage();

            case "Big Data Analytics":
                return BigDataAnalytics()
            default:
                return null

        }
    }
    return (
        <div className='HomeTopLayer'>
            <Header />
            <DeskTopHeader />
            <div className="HomeSecondLayer">
                <img src={Options} alt="Options Icons" className="HomeOptionsIcon" />
                <div className="SubHomeSecondLayer">
                    <ServiceHeaders ServiceHeadersInfo="Consulting" />

                    <div className='CunsultingTopLayer'>
                        <div className='CunsultingItems'>
                            {CunsultingItemsInfo.map((each) => <h3 onClick={() => UpdatecurrentCunsulting(each)} style={{ opacity: currentCunsulting === each ? 1 : 0.5 }}>{each}</h3>)}

                        </div>
                        <div>
                            {CunsultingMainView()}
                        </div>
                    </div>
                    <BottomPage />



                </div>
                <img src={Chaticon} alt="Chat" className="HomeOptionsIcon" />
            </div>
        </div>
    )
}

export default Counsulting
