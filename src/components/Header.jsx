import { useState } from "react";
import {Fragment} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Shipam-logo.png";
import style from "../components/css/Header.module.css"


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
                        <li className={style.closebtn}>
                            <span onClick={closeNavMenu}>&times;</span>
                        </li>
                       <li onClick={closeNavMenu}>
                          <Link to={track}>
                             Track
                          </Link>
                       </li>
                       <li  onClick={closeNavMenu}>
                          <Link to={dev}>
                             Demo
                          </Link>
                       </li>
                       <li  onClick={closeNavMenu}>
                          <Link to={pricing}>
                             Pricing
                          </Link>
                       </li>
                       <li  onClick={closeNavMenu}>
                          <Link to={partner}>
                                Partners
                          </Link>
                       </li>
                       <li className={style.resBtn}  onClick={closeNavMenu}>
                       <span>
                          <Link to={signin} className={style.nav_btn}>Sign In </Link><Link to={signUp} className={style.nav_btn}>Sign Up </Link>
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