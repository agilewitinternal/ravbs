import { useEffect,useState } from 'react';
import Header from '../../Header/Header'
import Options from '../../Assets/Options.svg'
import ChatIcon from '../../Assets/Chaticon.svg';
import BottomPage from '../../BottomPage/BottomPage'
import ServiceHeaders from '../../ServiceHeaders/ServiceHeaders'
import "./ContactUsforMobile.css"
const ContactUsforMobile = () => {
    const [FirstName, SetFirstName] = useState("")
    const [LastName, SetLastName] = useState("")
    const [Contact, SetContact] = useState("")
    const [Mail, SetMail] = useState("")
    const [Message, SetMessage] = useState("")
    const [SuccessMessage, SetSuccessMessage] = useState("")
    const [country, setCountry] = useState("")
    useEffect(() => {
        const location = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setCountry(location?.split("/")[1])
    }, [])
    return (
        <div className="ContactUsforMobileTopLayer">
            <div className='HomeTopLayer'>
                <Header />
                <div className="HomeSecondLayer">

                <img src={Options} alt="Options Icons" className="HomeOptionsIcon" />
                    <div className="SubHomeSecondLayer">
                    <ServiceHeaders ServiceHeadersInfo="App Development" />
                    <div className='MobileGooglemap'>
                            <iframe className='MapFrame' src={country?.toLowerCase() === "calcutta" ? `https://maps.google.com/maps?q=H.No.1-90/7/53/P%20Second%20Floor%20Blossom%20Heights%20Plot%20No.%2053%20Patrika%20Nagar%20Madhapur%20Hyderabad%20Telangana%20500081&t=&z=13&ie=UTF8&iwloc=&output=embed` : `https://maps.google.com/maps?q=405%20state%20hyway%20121%20bypass%20lewisville%20TX%2075067&t=&z=13&ie=UTF8&iwloc=&output=embed`} width="500" height="450" title="Maps" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>

                            <form className="MobileForm">
                            <div >
                                <input type="text" value={FirstName} placeholder="First Name" pattern="[A-Za-z]+" name="name" className="MobileFirstName"  />

                              
                                <input type="text" value={LastName} placeholder="Last Name" pattern="[A-Za-z]+" name="name" className="MobileFirstName"  />
                            </div>

                            <input type="text" value={Contact} placeholder="Contact Details" className="MobileEmail" name="number"  pattern="[0-9]*" />

                            <input type="text" value={Mail} placeholder="E-mail" pattern=".*@.*" className="MobileEmail" name="from_name"  />


                            <input type="text" placeholder="Message" value={Message} className="MobileMessage" name="message"  />


                            <button style={{ opacity: (FirstName === "" || LastName === "" || Contact === "" || Mail === "" || Message === "") ? 0.2 : 1 }} type="submit">SendRequest for Contact</button>
                            <p className="SuccessMessage">{SuccessMessage}</p>
                        </form>
                        </div>

                        <BottomPage/>
                    </div>
                    <img src={ChatIcon} alt="Chat" className="HomeOptionsIcon" />
                </div>

            </div>
        </div>
    )
}

export default ContactUsforMobile