import react, {Fragment} from "react";
import logo from "../assets/images/Shipam-logo.png"
import style from "../components/css/Header.module.css"
import {Button} from "../components/index.js"

const Header = () => {
    return ( 
        <Fragment>
            <nav>
                <div className={style.logo}>
                    <img src={logo} alt="shipam-logo"/>
                </div>
                <div>
                    <ul>

                    </ul>
                </div>
                <div>
                  <Button text="S" />
                </div>
            </nav>
        </Fragment>
     );
}
 
export default Header;