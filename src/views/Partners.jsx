import { Fragment } from "react";
import style from "../views/css/Partners.module.css";
import PartnersLogo from "../assets/images/partnerLogos.png";
import Carriers from "../assets/images/Carriers.png";
import Partner1 from "../assets/images/fulfilmentPartner.png";
import Partner2 from "../assets/images/TechnologyPartner.png";
import FormImage from "../assets/images/Formimage.png";
import { Button } from "../components";
const Partners = () => {
    return (  
         <Fragment>
              <div>
                 <section className={style.firstSectionCon}>
                    <div>
                         <div>
                              <h1>Shipam Partner Ecosystem & Integrations</h1>
                              <p>We partner with the leading ecommerce technology solutions 
                                and agencies to help grow your business smarter, faster and stronger than ever 
                                before.
                              </p>
                              <Button text="Get Started" className={style.get_startedbtn}/> 
                         </div>
                         <img src={PartnersLogo} alt="Shipping APIs"/>
                    </div>
                 </section>
                 <section className={style.secondSectionCon}>
                     <div>
                         <h1>Featured Carriers Partners</h1>
                         <img src={Carriers} alt="Carrier Partners"className={style.imagePartners}/>
                         <h1>Featured Fulfilment Partners</h1>
                         <img src={Partner1} alt="Fulfilment Partners" className={style.imagePartner}/>
                         <h1>Featured Technology Partners</h1>
                         <img src={Partner2} alt="Technology Partners" className={style.imagePartner}/>
                     </div>
                 </section>
                 <section className={style.thirdSectionCon}>
                     <div>
                         <div>
                              <img src={FormImage}  alt="form"/>
                              <div>
                                   <h2>Become a Partner</h2>
                                   <p>We’d like to work with you</p>
                                   <form className={style.form}>
                                      <p>Business name</p>
                                      <br />
                                      <input type="text" required />
                                      <br />
                                      <p>Phone Number</p>
                                      <br />
                                      <input type="text" required  />
                                      <br />
                                      <p>Email</p>
                                      <br />
                                      <input type="text" required />
                                      <br />
                                      <p>Country</p>
                                      <br />
                                      <input type="text" required />
                                      <br />
                                      <p>Message</p><br />
                                      <textarea required/>
                                      <div className={style.btndiv}>
                                         <Button text="Send Message" className={style.msgBtn}/>
                                       </div>
                                   </form>
                                 
                              </div>
                         </div>
                     </div>
                 </section>
              </div>
         </Fragment>
    );
}
 
export default Partners;