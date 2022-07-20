import React, {fragment} from "react";
import style from "../components/css/Courier.module.css";
import courier from "../assets/images/CourierNetwork.png";
import Ease from "../assets/images/EaseOfAcess.png";
import Flexibility from "../assets/images/flexibility.png";
import Efficiency from "../assets/images/Efficiency.png";


const Courier = () => {
    return ( 
        <fragment>
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
                <section className={}>

                </section>
        </fragment>
     );
}
 
export default Courier;