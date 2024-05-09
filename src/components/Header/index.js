import { RxHamburgerMenu } from "react-icons/rx";
import { BsTrophy } from "react-icons/bs";
import './index.css'

const Header = () => {
    return(
        <div className="header-container">
            <div>
                <img src="https://hidoc-files.sgp1.digitaloceanspaces.com/hidoc-client-files/1703756420122.jpg" className='header-icon' alt="header-icon"/>
            </div>
            <div>
                <ul className="nav-items">
                    <li>Drugs</li>
                    <li>Calculators</li>
                    <li>Articles</li>
                    <li>News</li>
                    <li>Quizzes</li>
                    <li>Serveys</li>
                    <li>Webinars</li>
                    <li>Guidelines</li>

                </ul>
            </div>
            <div className="trophy-main-container">
                <RxHamburgerMenu />
                <div className="trophy-container">
                   < BsTrophy/>
                   <h3 className="trophy-text">274</h3>
                </div>
                <p className="header-icon-a">A</p>
            </div>
        </div>
    )
}
export default Header