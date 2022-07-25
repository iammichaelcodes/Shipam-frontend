import React,{Fragment} from "react";
import style from "../views/css/Terms&Privacy.module.css";

const Terms = () => {
    return ( 
        <Fragment>
            <div className={style.TermsDiv}>
                <div>
                    <h1>Shipam Terms & Services</h1>
                    <div>
                        <div>
                            <span>Introduction</span>
                            <span>About Us</span>
                            <span>Agreement</span>
                            <span>Registration</span>
                            <span>Change of Information</span>
                            <span>Age Registration</span>
                            <span>Account Security</span>
                            <span>Shipping & Delivery of Goods</span>
                            <span>Payments</span>
                            <span>Representation & warranties</span>
                            <span>Licensing</span>
                            <span>Intellectual Property</span>
                            <span>Restrictions</span>
                            <span>Termination</span>
                            <span>Privacy Policy</span>
                            <span>Disclaimers</span>
                            <span>Limitations</span>
                        </div>
                        <div>
                            <div className={style.Itemdiv}>
                                <h3>Welcome</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Terms;