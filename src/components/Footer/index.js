import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { CiFolderOn } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { FaRegFileAlt } from "react-icons/fa";
import { AiOutlineCalculator } from "react-icons/ai";
import { TiDocumentText } from "react-icons/ti";
import { GoTrophy } from "react-icons/go";
import './index.css'

const Footer = () => {
    return(
        <footer>
            <div className="footer-container">
                <div>
                    <img src='https://hidoc.co/assets/img/logo/logo3.png' alt="footer-logo"/>
                    <p>Fastest Growing Medical Platform for Doctors.</p>
                    <div className="social-media-icons">
                        < FaFacebookF />
                        <FaInstagram />
                        <AiOutlineYoutube />
                        <FaLinkedin />
                    </div>
                </div>
                <div className="footer-part2">
                    <h3>REACH US</h3>
                    <p>Please contact the below details for any other information</p>
                    <p className="reach-us-headings">Email:</p>
                    <p>info@hidoc.co</p>
                    <p className="reach-us-headings">Adress:</p>
                    <p>
                    Hodoc Dr.Inc, 2055 Limestone Rd, STE 200-C, Wilmington, DE, 19808, United States.
                    </p>
                </div>
                <div className="footer-part3">
                    <h3>HIDOC DR. FEATURES</h3>
                    <div className="futures-container">
                        <div className="futeres-box1">
                            <CiFolderOn className="box1-icon"/>
                            <p>Drug Database</p>
                        </div>
                        <div className="futeres-box2">
                            < CiVideoOn className="box2-icon"/>
                            <p>Webinars</p>
                        </div>
                        <div className="futeres-box1">
                            < FaRegFileAlt className="box1-icon"/>
                            <p>Diseases Inspection</p>
                        </div>
                        <div className="futeres-box4">
                            < AiOutlineCalculator className="box4-icon" />
                            <p>Medical Calculator</p>
                        </div>
                    </div>
                    <div className="futures-container">
                    <div className="futeres-box2">
                            < TiDocumentText className="box2-icon"/>
                            <p>Articles</p>
                        </div>
                        <div className="futeres-box4">
                            < GoTrophy className="box4-icon" />
                            <p>Quizzes</p>
                        </div>
                        <div className="futeres-box1">
                            < FaRegFileAlt className="box1-icon"/>
                            <p>Diseases Database</p>
                        </div>
                        <div className="futeres-box2">
                            < TiDocumentText className="box2-icon"/>
                            <p>Surveys</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-container">
                <div className="copyright-icon">
                    <FaRegCopyright />
                    <p>Copyright 2022 <span>Hidoc Dr.Inc.</span></p>
                </div>
                <p className="footer-content">Terms & Conditions | Privacy Policy</p>
            </div>
        </footer>
    )
}
export default Footer