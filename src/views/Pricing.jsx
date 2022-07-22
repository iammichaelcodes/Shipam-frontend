import React,{Fragment} from "react";
import style from "../views/css/Pricing.module.css";
import pricingIcon from "../assets/images/pricingIcon.png";
import { Link } from "react-router-dom";



const Pricing = () => {
    return ( 
        <Fragment>
            <div>
                <section className={style.pricingDiv}>
                    <div>
                        <h1>Get the right plan for your account</h1>
                        <div className={style.divBtn}>
                          <p>Monthly</p><p>Yearly</p>
                        </div>
                        <div className={style.container}>
                            <div>
                                <p>Free</p>
                                <span>&#8358;0</span> 
                                <Link to="/started" className={style.get_startedbtn}>
                                    Get Started
                                </Link>
                                <div>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        100 monthly shipment count
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        0 free trial days
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        20% shipping discount
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        1 User Account(s)
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        100 Extra Shipment Charge
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        API Access
                                    </span>
                                </div>
                             </div>
                             <div>
                                <p>Start Up</p>
                                <span>&#8358;8,500</span>
                                <Link to="/started" className={style.get_startedbtn}>
                                    Get Started
                                </Link>
                                <div>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        500 monthly shipment count
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        14 free trial days
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        35% shipping discount
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        3 User Account(s)
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        100 Extra Shipment Charge
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        API Access
                                    </span>
                                </div>
                             </div>
                             <div>
                                <p>Advanced</p>
                                <span>&#8358;33,750</span>
                                <Link to="/started" className={style.get_startedbtn}>
                                    Get Started
                                </Link>
                                <div>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        1500 monthly shipment count
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        14 free trial days
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        50% shipping discount
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        5 User Account(s)
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        100 Extra Shipment Charge
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        API Access
                                    </span>
                                </div>
                             </div>
                             <div className={style.lastPriceDiv}>
                                <p>Professional</p>
                                <span>&#8358;80,000</span>
                                <Link to="/started" className={style.get_startedbtn}>
                                    Get Started
                                </Link>
                                <div>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        5000 monthly shipment count
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        14 free trial days
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        60% shipping discount
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        10 User Account(s)
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        100 Extra Shipment Charge
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        API Access
                                    </span>
                                    <span>
                                        <img src={pricingIcon}  alt="icon "/> 
                                        Account Manager
                                    </span>
                                </div>
                             </div>
                        </div>
                    </div>
                </section>
                <section className={style.lastSecContent}>
                    <div>
                        <div>
                            <h1>Over 5,000 Shipments</h1>
                            <p>Contact our sales team to learn more about our services for high volume shippers and request a custom quote.</p>
                            <Link to="/contact us"  className={style.exploreBtn}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
           </section>
            </div>
        </Fragment>
     );
}
 
export default Pricing;