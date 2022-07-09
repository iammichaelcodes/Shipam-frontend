import { useState } from "react";
import {Fragment} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Shipam-logo.png"
import style from "../components/css/Header.module.css"
import {Button} from "../components/index.js"

const Header = () => {
    //variable declaration
    const home = "/";
    const track = "/track";

    //usestate hooks
    const [menu, setMenu] = useState(false);


    
    return ( 
        <Fragment>
            <nav>
                <div className={style.logo}>
                    <Link to={home}>
                      <img src={logo} alt="shipam-logo"/>
                    </Link>
                    <span className={style.Menu_I}></span>
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