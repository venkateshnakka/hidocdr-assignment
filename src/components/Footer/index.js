import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import './index.css'

const Footer = () => {
    return(
        <div className="footer-container">
            <div>
                <img src='https://hidoc.co/assets/img/logo/logo3.png'/>
                <p>Fastest Growing Medical Platform for Doctors.</p>
                <div>
                    < FaFacebookF />
                    <FaInstagram />
                    <AiOutlineYoutube />
                    <FaLinkedin />
                </div>
            </div>
            <div>
                <h3>REACH US</h3>
                <p>Please contact the below details for any other information</p>
                <p>Email:</p>
                <p>info@hidoc.co</p>
                <p>Adress:</p>
                <p>Hodoc Dr.Inc, 2055 Limestone Rd, STE 200-C, Wilmington, DE, 19808, United States.</p>
            </div>
            <div>
                <h3>HIDOC DR. FEATURES</h3>
            </div>
        </div>
    )
}
export default Footer