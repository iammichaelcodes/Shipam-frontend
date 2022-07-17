import React, {Fragment} from "react";
import style from "../views/css/Developer.module.css";
import ShippingImage from "../assets/images/shipping-image.png";
import ShippingImage2 from "../assets/images/shipping-image2.png";
import ShippingImage3 from "../assets/images/shipping-image3.png";
import courier from "../assets/images/CourierNetwork.png";
import Ecommerce from "../assets/images/Ecommerce.png";
import marketplace from "../assets/images/MarketPlace.png";
import Retailer from "../assets/images/Retailer.png";
import roadmap from "../assets/images/shipam-roadmap.png";
import { Button } from "../components";




const Developer = () => {
    return ( 
        <Fragment>
        <div>
           <section className={style.firstSectionCon}>
                  <div>
                      <div>
                          <h1>Modern Shipping APIs For Your Business</h1>
                           <p>Shipbubble provides you with powerful shipping APIs
                             for you to add end-to-end shipping functionality to any of your platforms 
                             (e.g. Website, e-commerce store, ERP, etc.). You can get rates, create & track shipments, 
                             and so much more without having to leave your our platform
                            </p>
                            <Button text="Get Started" className={style.get_startedbtn}/> 
                      </div>
                       <img src={ShippingImage} alt="Shipping APIs"/>
                  </div>
           </section>
           <section className={style.secondSecContent}>
                 <div>
                      <img src={ShippingImage2} alt="Shipping APIs"/>
                      <div>
                          <h1>One integration for all your shipping needs</h1>
                           <p>Spend more time on your core business needs while we handle your shipping needs.</p>
                      </div>
                  </div>
           </section>
           <section className={style.thirdSecContent}>
                 <div>
                      <div>
                          <h1>Seamless Shipping Experience</h1>
                           <p>Create a custom shipping experience for your platform and stack with real time order tracking capabilities</p>
                      </div>
                      <img src={ShippingImage3} alt="Shipping APIs"/>
                      <img src={courier} alt="Shipping APIs" className={style.imgdiv}/>
                  </div>
           </section>
           <section className={style.fourthSecContent}>
                <div>
                    <h1>Why Use Shipam?</h1>
                    <div>
                        <div><p>WITH SHIPAM</p> <p>WITHOUT SHIPAM</p> </div>
                        <img src={roadmap} alt="Shipping APIs" />
                    </div >
                </div>
           </section>
           <section className={style.fifthSecContent}>
                <div>
                     <h1>Use Cases</h1>
                     <div>
                       
                        <div>
                            <img src={Ecommerce} alt="ecommerce platforms" style={{width:"50px"}} />
                            <h3>E-commerce Platforms</h3>
                            <p>Provide your merchants with a customized shipping experience while maximizing customer satisfaction.</p>
                        </div>
                        <div>
                           <img src={marketplace} alt="ecommerce platforms" style={{width:"50px"}} />
                            <h3>MarketPlaces</h3>
                            <p>Give your marketplace a competitive advantage by offering tailored shipping experiences and growing your customers..</p>
                        </div>
                        <div>
                            <img src={Retailer} alt="ecommerce platforms" style={{width:"50px"}} />
                            <h3>Retailers</h3>
                            <p>Save time and resources in building a unique shipping solution for your preferred platform.</p>
                        </div>
                     </div>
                </div>
           </section>
           <section className={style.lastSecContent}>
               <div>
                  <div>
                     <h1>Ready to Solve Shipping?</h1>
                     <Button text="Explore Documentation"  className={style.exploreBtn}/><p>Explore Documentation</p>
                  </div>
               </div>
           </section>
        </div>
       </Fragment>
     );
}
 
export default Developer;