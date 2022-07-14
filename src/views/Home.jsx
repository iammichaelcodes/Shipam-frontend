import { Fragment } from "react";
import style from "../views/css/Home.module.css"; 
import location from "../assets/images/locationTrack.png";
import courier from "../assets/images/CourierNetwork.png";
import session3Image from "../assets/images/ShippingPartner.png";
import session4Image from "../assets/images/Analytics.png";
import cashflow from "../assets/images/cashflowIcon.png";
import control from "../assets/images/control.png";
import barchat from "../assets/images/barChatIcon.png";
import Ease from "../assets/images/EaseOfAcess.png";
import Deliver from "../assets/images/ion_bicycle.png";
import Pay from "../assets/images/Pay.png";
import PartnerLogos from "../assets/images/partnerLogos.png";
import Growth from "../assets/images/carbon_growth.png";
import DeliveryParcel from "../assets/images/carbon_delivery-parcel.png";
import HealthIcons from "../assets/images/healthicons_call-centre.png";
import Search from "../assets/images/Search.png";
import Flexibility from "../assets/images/flexibility.png";
import Efficiency from "../assets/images/Efficiency.png";
import { Button } from "../components";
import { Useviewport } from "../useviewPorts";

const Home = () =>{

    const {width} = Useviewport();
    console.log(width);
 
    return(
        <Fragment>
            <div className={style.home}>
                <section className={ ` ${style.bannerDiv} ${width < 886 ? `${style.bannerDiv_respon}` : "" }`} >
                    <div className={style.bannerCon}>
                        <div>
                           <h1 className={`${width < 500 ? `${style.bannerHeader_tag}` : "" }`}>Find and Compare Discounted shipping rates</h1> 
                           <p className={`${width < 500 ? `${style.bannerParagraph_tag}` : "" }`}> Use Shipam to compare prices from multiple delivery providers without sign up. 
                             Save up to 40% on your shipping cost with Shipbubble</p>
                        </div>
                        <div className={ `${width < 886 ? `${style.responDiv_height}` : ""}`}>
                              <div  className={`${width < 886 ? `${style.responDiv} ` : "" } `}>
                                    <div>
                                            <p>Local</p>
                                            <div>
                                                <div>
                                                    <img  src={location} alt="location" className={`${width < 886 ?`${style.locationIcon_respon1}`  : "" }`}/>
                                                    <input type="text" placeholder="Enter Pickup Address"/>
                                                </div>
                                                <div>
                                                    <img  src={location} alt="location" className={`${width < 886 ?`${style.locationIcon_respon2}`  : "" }`}/>
                                                    <input type="text"  placeholder="Enter Delivery Address" />
                                                </div>
                                            </div>
                                    </div>
                                    <div>
                                            <p>International</p>
                                            <div>
                                                <input type="text" placeholder="Parcel Weight(kg)"/>
                                                <select>
                                                    <option value="0" className={style.select_item}>Select Category</option>
                                                    <option value="1">Category</option>
                                                </select>
                                            </div>
                                    </div>
                              </div>
                               <div className={`${style.priceBtnDiv} ${width < 886 ? `${style.priceBtnDiv_respon}`: ""}`}>
                                 <Button text="Check Prices"  className={style.priceBtn}/>
                               </div> 
                        </div>
                    </div>
                </section>
                <section className={style.courierDiv}>
                     <div>
                          <div>
                             <h2>Features you deserve for a 
                            hassle free delivery experience</h2>
                          </div>
                           <div>
                               <div>
                                    <img src={courier} alt="shipping Options" className={style.sessionImages} />
                               </div>
                               <div>
                                   <div>
                                      <h2>Multi-Courier Network</h2>
                                      <p>Get access to discounted rates from 
                                        reliable shipping providers through our multi-courier network.</p>
                                   </div>
                                   <div className={style.courierDivList}>
                                        <h3>Here's what you get: </h3>
                                        <div>
                                           <div className={style.icon}>
                                               <img src={Ease} alt="ease of access icon" className={style.courierDivListIcon} />
                                                <h3>Ease of Access</h3>
                                                 <p>Multiple delivery options all in one place</p>   
                                           </div>
                                           <div className={style.icon}>
                                               <img src={Flexibility} alt="flexibility icon" className={style.courierDivListIcon} />
                                                <h3>Flexibility</h3>
                                                 <p>Tailor your delivery experience to what you prioritize, whether cost or delivery time.</p>   
                                           </div>
                                           <div className={style.icon}>
                                               <img src={Efficiency} alt="efficiency icon" className={style.courierDivListIcon} />
                                                <h3>Efficiency</h3>
                                                <p>Manage how your products are delivered in little to no time.</p>   
                                           </div>
                                        </div>
                                   </div>
                               </div>
                           </div>
                     </div>
                </section>
                <section className={style.partnerDiv}>
                   <div>
                        <div>
                            <div className={style.headerDIV}>
                                <h2>Dedicated Shipping Partner</h2>
                                <p>
                                  At little to no cost, have full control of your orders with us. Schedule orders, 
                                  plan ahead with deliveries, and offer options based on your customers' needs.
                                </p>
                            </div>
                            <div className={style.courierDivList}>
                                <h3>Here's what you get: </h3>
                                <div>
                                    <div className={style.icon}>
                                        <img src={Search} alt="ease of access icon" className={style.courierDivListIcon} />
                                        <h3>Search</h3>
                                            <p>Multiple delivery options all in one place</p>   
                                    </div>
                                    <div className={style.icon}>
                                        <img src={Pay} alt="flexibility icon" className={style.courierDivListIcon} />
                                        <h3>Pay</h3>
                                            <p>Tailor your delivery experience to what you prioritize, whether cost or delivery time.</p>   
                                    </div>
                                    <div className={style.icon}>
                                        <img src={Deliver} alt="efficiency icon" className={style.courierDivListIcon} />
                                        <h3>Deliver</h3>
                                        <p>Manage how your products are delivered in little to no time.</p>   
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div>
                            <img src={session3Image} alt="shipping Options" className={style.sessionImages} />
                        </div>    
                   </div>
                </section>
                <section className={style.AnalyticsDiv}>
                      <div>
                            <div>
                                <img src={session4Image} alt="shipping Options" className={style.sessionImages} />
                            </div>
                            <div>
                                <div className={style.headerDIV}>
                                    <h2>Analytics</h2>
                                    <p>Understand your business better, and see what the data behind your deliveries say..</p>
                                </div>
                                <div className={style.courierDivList}>
                                    <h3>Here's what you get: </h3>
                                    <div>
                                        <div className={style.icon}>
                                            <img src={cashflow} alt="ease of access icon" className={style.courierDivListIcon} />
                                            <h3>Ease of Access</h3>
                                                <p>Multiple delivery options all in one place</p>   
                                        </div>
                                        <div className={style.icon}>
                                            <img src={barchat} alt="flexibility icon" className={style.courierDivListIcon} />
                                            <h3>Flexibility</h3>
                                                <p>Tailor your delivery experience to what you prioritize, whether cost or delivery time.</p>   
                                        </div>
                                        <div className={style.icon}>
                                            <img src={control} alt="efficiency icon" className={style.courierDivListIcon} />
                                            <h3>Efficiency</h3>
                                            <p>Manage how your products are delivered in little to no time.</p>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                      </div>
                </section>
                <section className={style.whySection} >
                    <div>
                         <div>
                            <h1>Why Shipam?</h1>
                             <p>
                                Save time, money when shipping products to your customers. 
                                Find and compare discounted shipping rates from delivery providers in Africa.
                             </p>
                         </div>
                         <div>
                             <div>
                                  <div><img  src={Growth} alt="carbon-growth" className={style.whyShipam_Images}/></div>
                                <h3>Expand your reach & increase sales</h3>
                                <p>Connect to multiple delivery providers and deliver your orders nationwide and international</p>
                             </div>
                             <div>
                                <div><img  src={DeliveryParcel} alt="carbon-growth" className={style.whyShipam_Images}/></div>
                                <h3>Expand your reach & increase sales</h3>
                                <p>Connect to multiple delivery providers and deliver your orders nationwide and international</p>
                             </div>
                             <div>
                                <div><img  src={HealthIcons} alt="carbon-growth" className={style.whyShipam_Images}/></div>
                                <h3>Expand your reach & increase sales</h3>
                                <p>Connect to multiple delivery providers and deliver your orders nationwide and international</p>
                             </div>
                         </div>
                    </div>
                </section>
                <section className={style.lastSection}>
                    <div>
                        <div>
                            <div>
                                <img src={PartnerLogos} alt="companies icons" className={style.sessionImages} />
                            </div>
                            <div className={style.headerDIV}>
                                <h2>We have partnered with some of the best courier</h2>
                                <p> We have partnered with the most reliable couriers - Through us, 
                                  you can deliver your products through the most trusted couriers in Africa, 
                                  at no extra cost. 
                                </p>
                                <p>View all supported couriers</p>
                            </div>
                        </div>
                        <div className={style.headerDIV2}>
                            <h2>Frequently Asked Questions (FAQs)</h2>
                            <p>
                                Here we’ll share informative guides, inspirational case studies and latest from the Shipbubble office.
                            </p>
                            
                        </div>
                    </div>
                </section>
            </div>
            
        </Fragment>
    )
}
export default Home