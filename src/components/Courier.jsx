import React, {Fragment} from "react";
import style from "../components/css/Courier.module.css";
import courier from "../assets/images/CourierNetwork.png";
import ShippingPartner from "../assets/images/ShippingPartner.png";
import Ease from "../assets/images/EaseOfAcess.png";
import Flexibility from "../assets/images/flexibility.png";
import Efficiency from "../assets/images/Efficiency.png";
import Pay from "../assets/images/Pay.png";
import Search from "../assets/images/Search.png";
import Deliver from "../assets/images/ion_bicycle.png";
import Analytics from "../assets/images/Analytics.png";
import Bar from "../assets/images/barChatIcon.png";
import Control from "../assets/images/control.png";
import Cashflow from "../assets/images/cashflowIcon.png";


const Courier = () => {
    return ( 
        <Fragment>
            <section className={style.CourierNetwork}>
                    <div>
                        <h1>Features you deserve for a hassle free delivery experience</h1>
                        <div>
                            <img  src={courier} alt="Courier Options"/>
                            <div className={style.courierTxtDiv}>
                                <h1>Multi-Courier Network</h1>
                                <p>Get access to discounted rates from reliable shipping providers through our multi-courier network.</p>
                                <h2>Here's what you get</h2>
                                <div>
                                    <div>
                                        <img  src={Ease} alt="iconsAccess"/>
                                        <h3>Ease of Access</h3>
                                        <p>Multiple delivery options all in one place</p>
                                    </div>
                                    <div>
                                        <img  src={Flexibility} alt="iconsAccess"/>
                                        <h3>Flexibility</h3>
                                        <p>Tailor your delivery experience to what you prioritize, whether cost or delivery time.</p>
                                    </div>
                                    <div>
                                        <img  src={Efficiency} alt="iconsAccess"/>
                                        <h3>Efficiency</h3>
                                        <p>Manage how your products are delivered in little to no time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${style.CourierNetwork} ${style.section2}`}>
                   <div>
                        <div>
                            <div className={style.courierTxtDiv}>
                                <h1>Dedicated Shipping Partner</h1>
                                <p>At little to no cost, have full control of your orders with us. Schedule orders, plan ahead with deliveries, and offer options based on your customers' needs.</p>
                                <h2>Here's what you get</h2>
                                <div>
                                    <div>
                                        <img  src={Search} alt="iconsAccess" className={style.iconStyle}/>
                                        <h3>Search</h3>
                                        <p>Multiple delivery options all in one place</p>
                                    </div>
                                    <div>
                                        <img  src={Pay} alt="iconsAccess"/>
                                        <h3>Pay</h3>
                                        <p>Tailor your delivery experience to what you prioritize, whether cost or delivery time.</p>
                                    </div>
                                    <div>
                                        <img  src={Deliver} alt="iconsAccess"/>
                                        <h3>Deliver</h3>
                                        <p>Manage how your products are delivered in little to no time.</p>
                                    </div>
                                </div>
                            </div>
                            <img  src={ShippingPartner} alt="Shipping Options"/>
                        </div>
                    </div>
                </section>
                <section className={style.CourierNetwork}>
                    <div>
                        <div>
                            <img  src={Analytics} alt="Courier Options"/>
                            <div className={style.courierTxtDiv}>
                                <h1>Analytics</h1>
                                <p>Understand your business better, and see what the data behind your deliveries say.</p>
                                <h2>Here's what you get</h2>
                                <div>
                                    <div>
                                        <img  src={Cashflow} alt="iconsAccess" className={style.iconStyle}/>
                                        <h3>Cashflow</h3>
                                        <p>Multiple delivery options all in one place</p>
                                    </div>
                                    <div>
                                        <img  src={Bar} alt="iconsAccess"/>
                                        <h3>Traction</h3>
                                        <p>Tailor your delivery experience to what you prioritize, whether cost or delivery time.</p>
                                    </div>
                                    <div>
                                        <img  src={Control} alt="iconsAccess"/>
                                        <h3>Full Control</h3>
                                        <p>Manage how your products are delivered in little to no time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </Fragment>
     );
}
 
export default Courier;