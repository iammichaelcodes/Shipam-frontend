import { Fragment } from "react";
import style from "../views/css/Home.module.css";

const Home = () =>{
    return(
        <Fragment>
            <div className={style.home}>
                <section className={style.bannerDiv}>
                    <p>Home</p>
                </section>
            </div>
            
        </Fragment>
    )
}
export default Home