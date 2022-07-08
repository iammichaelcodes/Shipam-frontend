import react, {Fragment} from "react";
import logo from "../assets\images/Shipam-logo.png"
import style from "../components/css/Header"
const Header = () => {
    return ( 
        <Fragment>
            <nav>
                <div className={style.logo}>
                    <img src={logo} alt="shipam-logo"/>
                </div>
            </nav>
        </Fragment>
     );
}
 
export default Header;