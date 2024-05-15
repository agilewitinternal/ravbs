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

const Achievment = [
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

const Patrtners = [
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

const CunsultingItemsInfo=[
"IBM Datastage", "Business Intelligence","Oracle BI Stack Components","Big Data Analytics","DATA SCIENCE"
]

export { ServiceDetails, Achievment, Patrtners,CunsultingItemsInfo }