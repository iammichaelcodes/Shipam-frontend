import {Fragment} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Shipam-logo.png"
import style from "../components/css/Header.module.css"
import {Button} from "../components/index.js"

const Header = () => {
    const home = "/";
    const track = "/track";
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
                       <li>
                          <Link to={track}>
                             Track
                          </Link>
                       </li>
                       <li>
                          <Link to={track}>
                             Developers
                          </Link>
                       </li>
                       <li>
                          <Link to={track}>
                             Pricing
                          </Link>
                       </li>
                       <li>
                          <Link to={track}>
                                Partners
                          </Link>
                       </li>
                       <li>
                          <Link to={track}>
                             Blog
                          </Link>
                       </li>
                    </ul>
                </div>
                <div>
                  <Button text="Sign In" className={style.nav_btn}/>
                  <Button text="Sign Up" className={style.nav_btn} />
                </div>
            </nav>
        </Fragment>
     );
}
 
export default Header;