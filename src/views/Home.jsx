import { Fragment } from "react";
import style from "../views/css/Home.module.css"; 
import location from "../assets/images/locationTrack.png";
import { Button } from "../components";
import { useviewport } from "../useviewPorts";

const Home = () =>{

    const {width} = useviewport();
    console.log(width);
 
    return(
        <Fragment>
            <div className={style.home}>
                <section className={style.bannerDiv} >
                    <div className={style.bannerCon}>
                        <div>
                           <h1>Find and Compare Discounted shipping rates</h1> 
                           <p> Use Shipam to compare prices from multiple delivery providers without sign up. 
                             Save up to 40% on your shipping cost with Shipbubble</p>
                        </div>
                       <div className={`${width < 767 ? `responDiv` : "" } `}>
                              <div className={style.locationTracker}>
                                    <p>Local</p>
                                    <div >
                                        <div>
                                            <img  src={location} alt="location"/>
                                            <input type="text" placeholder="Enter Pickup Address"/>
                                        </div>
                                        <div>
                                            <img  src={location} alt="location"/>
                                            <input type="text"  placeholder="Enter Delivery Address" />
                                        </div>
                                    </div>
                              </div>
                              <div className={style.locationTracker}>
                                <p>International</p>
                                <div>
                                    <input type="text" placeholder="Parcel Weight(kg)"/>
                                    <select>
                                        
                                    </select>
                                </div>
                              </div>
                        </div>
                    </div>
                </section>
                <section>

                </section>
            </div>
            
        </Fragment>
    )
}
export default Home