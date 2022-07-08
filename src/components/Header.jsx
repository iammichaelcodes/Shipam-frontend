import react, {Fragment} from "react";
import { Link } from "react-router";
import logo from "../assets/images/Shipam-logo.png"
import style from "../components/css/Header.module.css"
import {Button} from "../components/index.js"

const Header = () => {
    const home = "/";
    return ( 
        <Fragment>
            <nav>
                <div className={style.logo}>
                    <a href='/'>
                      <img src={logo} alt="shipam-logo"/>
                    </a>
                </div>
                <div>
                    <ul>
                       <li></li>
                    </ul>
                </div>
                <div>
                  <Button text="Sign In" />
                  <Button text="Sign Up" />
                </div>
            </nav>
        </Fragment>
     );
}
 
export default Header;