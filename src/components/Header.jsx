import react, {Fragment} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Shipam-logo.png"
import style from "../components/css/Header.module.css"
import {Button} from "../components/index.js"

const Header = () => {
    const home = "/";
    return ( 
        <Fragment>
            <nav>
                <div className={style.logo}>
                    <Link to={home}>
                      <img src={logo} alt="shipam-logo"/>
                    </Link>
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