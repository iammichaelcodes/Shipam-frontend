import { Fragment } from "react";
import style from "../views/css/Home.module.css"; 
import location from "../assets/images/locationTrack.png";
import { Button } from "../components";
import { Useviewport } from "../useviewPorts";
import Courier from "../components/Courier";
import Whyshipam from "../components/whyShipam";
import Courierpartners from "../components/CourierPartners";
import Faqsection from "../components/faqSection";
import Faq from "../components/Faq";
const Home = () =>{

    const {width} = Useviewport();
    console.log(width);
 
    return(
        <Fragment>
            <div className={style.home}>
                <section className={ ` ${style.bannerDiv} ${width < 886 ? `${style.bannerDiv_respon}` : "" }`} >
                    <div className={style.bannerCon}>
                        <div>
                           <h1 className={`${width < 500 ? `${style.bannerHeader_tag}` : "" }`}>Find and Compare discounted shipping rates</h1> 
                           <p className={`${width < 500 ? `${style.bannerParagraph_tag}` : "" }`}> Use Shipam to compare prices from multiple delivery providers without sign up. 
                             Save up to 40% on your shipping cost with Shipbubble</p>
                        </div>
                        <div className={ `${width < 886 ? `${style.responDiv_height}` : ""}`}>
                              <div  className={style.responDiv}>
                                    <div>
                                            <div ><p className={style.local}>Local</p></div>   <div><p>International</p></div>
                                    </div>
                                    <div>
                                        <div>
                                            <div>
                                                <img  src={location} alt="location" className={`${width < 886 ?`${style.locationIcon_respon1}`  : "" }`}/>
                                                <input type="text" placeholder="Enter Pickup Address" className={style.bannerInput}/>
                                            </div>
                                            <div>
                                                <img  src={location} alt="location" className={`${width < 886 ?`${style.locationIcon_respon1}`  : "" }`}/>
                                                <input type="text"  placeholder="Enter Delivery Address"  className={style.bannerInput} />
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <input type="text" placeholder="Parcel Weight(kg)"/>
                                            <select>
                                                <option value="0" className={style.select_item}>Select Category</option>
                                                <option value="1">Category</option>
                                            </select>
                                        </div>
                                    </div>
                              </div>
                               <div className={style.priceBtnDiv}>
                                 <Button text="Check Prices"  className={style.priceBtn}/>
                               </div> 
                        </div>
                    </div>
                </section>
                <Courier />
                <Whyshipam />
                <Courierpartners />
                <Faq />
            </div>
            
        </Fragment>
    )
}
export default Home