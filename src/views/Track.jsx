import React, {Fragment} from "react";
import Ellipse from "../assets/images/Ellipse.png";
import style from "../views/css/Track.module.css";
import Search from "../assets/images/akar-icons_search.png";
import Faq from "../components/Faq";

const Track = () => {
       
    return ( 
         <Fragment>
            <div>
                <section className={style.trackBanner}>
                    <div>
                         <div>
                            <h3>Track Your Package</h3>
                            <div className={style.searchDiv}>
                               <input type="text" placeholder="Enter Tracking Number" />
                                <img src={Search} alt="search" className={style.searchBtn} />
                            </div>
                         </div>
                         <div>
                             <img  src={Ellipse}  alt="Ellipse"/>
                            <div className={style.ellipseDiv1}>
                                <p>Delivery Time</p>
                                 <p>8 minutes</p>
                            </div>
                            <div className={style.ellipseDiv}>
                                <p>Courier is on its way to your location</p>
                            </div>
                         </div>
                    </div>
                </section>
                <Faq />
            </div>
         </Fragment>
     );
}
 
export default Track;