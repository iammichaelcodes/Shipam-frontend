import { Fragment } from "react";
import style from "../views/css/Home.module.css"; 
import location from "../assets/images/locationTrack.png";
import { Button } from "../components";
import { Useviewport } from "../useviewPorts";

const Home = () =>{

    const {width} = Useviewport();
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
                              <div>
                                    <div>
                                            <p>Local</p>
                                            <div>
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
                               <div className={style.priceBtnDiv}>
                                 <Button text="Check Prices"  className={style.priceBtn}/>
                               </div> 
                        </div>
                    </div>
                </section>
                <section className={style.courierNetDiv}>
                    
                </section>
            </div>
            
        </Fragment>
    )
}
export default Home