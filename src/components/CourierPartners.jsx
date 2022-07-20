
import React, {fragment} from "react";

import style from "../components/css/CourierPartners.module.css";
import ShippingPartner from "../assets/images/partnerLogos.png";

const Courierpartners = () => {
    return ( 
        <fragment>
            <section className={style.CourierPartners}>
                <div>
                    <img src={ShippingPartner}  alt="shipping partners"/>
                     <div>
                        <h1>We have partnered with some of the best courier</h1>
                        <p className={style.paragraph1}>We have partnered with the most reliable couriers - Through us, 
                          you can deliver your products through the most trusted couriers in Africa, 
                          at no extra cost.
                        </p>

                        <p>View all supported couriers</p>
                     </div>
                </div>
            </section>
        </fragment>
       
     );
}
 
export default Courierpartners;