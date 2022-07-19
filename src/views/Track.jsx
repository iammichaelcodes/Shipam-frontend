import React, {Fragment} from "react";
import Ellipse from "../assets/images/Ellipse.png";
import style from "../views/css/Track.module.css";
import Search from "../assets/images/akar-icons_search.png";
import Arrow from "../assets/images/vectorArrow.png";
import { Button } from "../components";

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
                <section className={style.faqSection}>
                    <div>
                        <h1>Frequently Asked Questions(FAQs)</h1>
                        <p>Here we’ll share informative guides, inspirational case studies and latest from the Shipbubble office.</p>
                        <div>
                            <div >
                                <Button  text="What does shipam do?" className={style.Question}/>
                                <img src={Arrow} alt="arrow"  className={style.ArrowBtn}/>
                                <div className={style.Answer}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti modi 
                                    fuga ducimus vel qui, atque reiciendis dolore accusantium. Vero aliquid autem vel ullam necessitatibus,
                                    mollitia quasi in aperiam nam perferendis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
         </Fragment>
     );
}
 
export default Track;