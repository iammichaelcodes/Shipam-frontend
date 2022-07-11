import style from "../components/css/Footer.module.css"
import { Link } from "react-router-dom";
import logo from "../assets/images/Shipam-footer.png";
import Button from "./Button";
import Twitter from "../assets/images/TwitterVector.png";
import Instagram from "../assets/images/InstagramVector.png";

const Footer = () => {
    const home = "/";


    return (  
         <>
           <div className={style.footerDiv}>
                <div>
                    <div className={style.getStarted_Div}>
                        <Link to={home}>
                        <img src={logo} alt="shipam-logo"/>
                        </Link>
                        <span>
                             Ready to get started?
                            <Button text="Get started" className={style.getStarted_btn}/>
                        </span>
                    </div>
                    <div>
                        <div className={style.newsletterIcon_Div}>
                            <p>Subscribe to Our Newsletters </p>
                            
                            <input type="text" placeholder="Your Email here"/> <Button  text="Subscribe" className={style.footerBtn}/>
                        </div>
                        <span className={style.vectorIcon}>
                            <img src={Instagram} alt="instagramIcon" /> <img src={Twitter} alt="twittericon" />
                        </span>
                        <div className={style.menulist}>
                            <div className={style.menulist1}> 
                                <div>Tracking</div>
                                <div>Developers</div>
                                <div>Partners</div>
                            </div>
                            <div className={style.menulist2}> 
                                <div>Pricing</div>
                                <div>Contact Us</div>
                                <div>Blog</div>
                            </div>
                        </div>
                    </div>
                    <span>
                        <p>Terms & Condition</p>  <p>Privacy Policy</p> 
                    </span>
                </div>
           </div>
         </>
    );
}
 
export default Footer;