import { useState } from "react";
import {Fragment} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Shipam-logo.png";
import style from "../components/css/Header.module.css"
import {Button} from "../components/index.js"

const Header = () => {
    //variable declaration
    const home = "/";
    const dev = "/dev";
    const track = "/track";
    const partner = "/partner";
    const pricing = "/pricing";
    const signUp ="/signup";
    const signin ="/signin";

    //usestate hooks
    const [navMenu, setNavMenu] = useState(false);

    const handleNavMenu = () => {
        setNavMenu(true);
    }
    const closeNavMenu = () => {
        setNavMenu(!setNavMenu);
    }
    
    return ( 
        <Fragment>
            <nav>
                <div className={style.logo}>
                    <Link to={home}>
                      <img src={logo} alt="shipam-logo"/>
                    </Link>
                    <span className={style.Menu_Icon} onClick={handleNavMenu}>
                             &#9776;
                    </span>
                </div>
                <div className={ `${navMenu ? style.RWD_Nav_Menu : ""} `}>
                    <div onClick={closeNavMenu} style={{cursor:"pointer"}}></div>
                    <ul>
                        <li>
                            <span onClick={closeNavMenu}>&times;</span>
                        </li>
                       <li>
                          <Link to={track}>
                             Track
                          </Link>
                       </li>
                       <li>
                          <Link to={dev}>
                             Demo
                          </Link>
                       </li>
                       <li>
                          <Link to={pricing}>
                             Pricing
                          </Link>
                       </li>
                       <li>
                          <Link to={partner}>
                                Partners
                          </Link>
                       </li>
                       <li className={style.resBtn}>
                       <span>
                            <Button text="Sign In" className={style.nav_btn}/> <Button text="Sign Up" className={style.nav_btn} />
                       </span>
                       </li>
                    </ul>
                   
                </div>
                <div >
                  <Link to={signin} className={style.nav_btn}>Sign In </Link>
                  <Link to={signUp} className={style.nav_btn}>Sign Up </Link>
                </div>
            </nav>
        </Fragment>
     );
}
 
export default Header;