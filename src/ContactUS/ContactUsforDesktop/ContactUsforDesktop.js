import { useEffect, useState } from 'react';
import DeskTopHeader from '../../DesktopHeader/DesktopHeader'
import Options from "../../Assets/Options.svg";
import ChatIcon from '../../Assets/ChatIcon.svg';
import ServiceHeaders from '../../ServiceHeaders/ServiceHeaders'
import BottomPage from '../../BottomPage/BottomPage'
import "./ContactUsforDesktop.css"
const ContactUsforDesktop = () => {
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
        <div className="ContactUsforDesktopTopLayer">
            <div className='HomeTopLayer'>
                <DeskTopHeader />
                <div className="HomeSecondLayer">
                    <img src={Options} alt="Options Icons" className="HomeOptionsIcon" />
                    <div className="SubHomeSecondLayer">
                        <ServiceHeaders ServiceHeadersInfo="Contact Us" />
                        <div className='Googlemap'>
                            <iframe src={country?.toLowerCase() === "calcutta" ? `https://maps.google.com/maps?q=H.No.1-90/7/53/P%20Second%20Floor%20Blossom%20Heights%20Plot%20No.%2053%20Patrika%20Nagar%20Madhapur%20Hyderabad%20Telangana%20500081&t=&z=13&ie=UTF8&iwloc=&output=embed` : `https://maps.google.com/maps?q=405%20state%20hyway%20121%20bypass%20lewisville%20TX%2075067&t=&z=13&ie=UTF8&iwloc=&output=embed`} width="500" height="450" title="Maps" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>

                            <form className="Form">
                            <div >
                                <input type="text" value={FirstName} placeholder="First Name" pattern="[A-Za-z]+" name="name" className="FirstName"  />

                              
                                <input type="text" value={LastName} placeholder="Last Name" pattern="[A-Za-z]+" name="name" className="FirstName"  />
                            </div>

                            <input type="text" value={Contact} placeholder="Contact Details" className="Email" name="number"  pattern="[0-9]*" />

                            <input type="text" value={Mail} placeholder="E-mail" pattern=".*@.*" className="Email" name="from_name"  />


                            <input type="text" placeholder="Message" value={Message} className="Message" name="message"  />


                            <button style={{ opacity: (FirstName === "" || LastName === "" || Contact === "" || Mail === "" || Message === "") ? 0.2 : 1 }} type="submit">SendRequest for Contact</button>
                            <p className="SuccessMessage">{SuccessMessage}</p>
                        </form>
                        </div>
                        <BottomPage />
                    </div>
                    <img src={ChatIcon} alt="Chat" className="HomeOptionsIcon" />
                </div>
            </div>
        </div>
    )
}

export default ContactUsforDesktop