import { Fragment } from "react";
import style from "../views/css/Home.module.css"; 
import bannerImg from "../assets/images/BannerDiv.png";
import location from "../assets/images/locationTrack.png";
import { Button } from "../components";

const Home = () =>{
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
                        <div>
                             <div className={style.locationTracker}>
                                <p>Local</p>
                                    <div className={style.inputIcons}>
                                            <img src={location} alt="location" />
                                        
                                        <input type="text" />
                                    </div>
                               
                                <input type="text" />
                             </div>
                             <div  className={style.locationTracker}>
                                <p>International</p>
                                <input type="text" />
                                <input type="text" />
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