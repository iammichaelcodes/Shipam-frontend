import { Fragment } from "react";
import style from "../views/css/Home.module.css"; 
import location from "../assets/images/locationTrack.png";
import courier from "../assets/images/CourierNetwork.png";
import session3Image from "../assets/images/ShippingPartner.png";
import Ease from "../assets/images/EaseOfAcess.png";
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
                            <div>
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
                        <div>
                            <img src={session3Image} alt="shipping Options" className={style.sessionImages} />
                        </div>    
                   </div>
                </section>
                <section className={style.AnalyticsDiv}>
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
                </section>
                <section >
                    <div>
                         <div>
                            <h1>Why Shipam?</h1>
                             <p></p>
                         </div>
                         <div>
                             
                         </div>
                    </div>
                </section>
            </div>
            
        </Fragment>
    )
}
export default Home