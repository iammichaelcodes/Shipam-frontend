import React,{fragment} from "react";
import style from "../components/css/whyShipam.module.css";
import Growth from "../assets/images/carbon_growth.png";
import DeliveryParcel from "../assets/images/carbon_delivery-parcel.png";
import HealthIcons from "../assets/images/healthicons_call-centre.png";

const Whyshipam = () => {
    return ( 
        <fragment>
            <section className={style.whyshipam}>
               <div>
                    <h1>Why Shipam?</h1>
                    <p>Save time, money when shipping products to your customers. 
                      Find and compare discounted shipping rates from delivery providers in Africa.
                    </p>
                    <div>
                        <div>
                            <div>
                                <img src={Growth} alt="growth" />
                            </div>
                            <h2>Expand your reach & increase sales</h2>
                            <p>Connect to multiple delivery providers and deliver your orders nationwide and international</p>
                        </div>
                        <div>
                            <div>
                                <img src={DeliveryParcel} alt="growth" />
                            </div>
                            <h2>Expand your reach & increase sales</h2>
                            <p>Connect to multiple delivery providers and deliver your orders nationwide and international</p>
                        </div>
                        <div>
                            <div>
                                <img src={HealthIcons} alt="growth" />
                            </div>
                            <h2>Expand your reach & increase sales</h2>
                            <p>Connect to multiple delivery providers and deliver your orders nationwide and international</p>
                        </div>
                    </div>
               </div>
            </section>
        </fragment>
     );
}
 
export default Whyshipam;