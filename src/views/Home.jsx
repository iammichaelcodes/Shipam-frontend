import { Fragment } from "react";
import style from "../views/css/Home.module.css"; 
import bannerImg from "../assets/images/BannerDiv.png";

const Home = () =>{
    return(
        <Fragment>
            <div className={style.home}>
                <section className={style.bannerDiv} style={{background:"url('../assets/images/BannerDiv.png')"}}>
                    <div className={style.bannerCon}>
                        <div>
                           <h1>Find and Compare Discounted shipping rates</h1> 
                           <p> Use Shipam to compare prices from multiple delivery providers without sign up. 
                             Save up to 40% on your shipping cost with Shipbubble</p>
                        </div>
                    </div>
                </section>
            </div>
            
        </Fragment>
    )
}
export default Home