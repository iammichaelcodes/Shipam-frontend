import React, {Fragment} from "react";
import style from "../views/css/SignIn.module.css";
const SignIn  = () => {
    return ( 
        <Fragment>
        <div>
            <div className={style.SignUp}>
                <div>
                    <div>
                    <img src={logo} alt="shipam Icons"/>
                    <div>
                        <h1>Welcome Back!</h1>
                        <p>Make your shipping easier and cheaper</p>
                        <Link to="/signin" className={style.btn}>
                            Sign In
                        </Link>
                    </div>
                    </div>
                    <div>
                      <h1>Create Account</h1>
                      <div>
                           <img src={Google} alt="google Icons"/>
                           <img src={Twitter} alt="Twitter Icons"/>
                           <img src={facebook} alt="facebook Icons"/>
                      </div>
                      <Link to="/email" className={style.email}>
                          or use email for registration
                      </Link>
                      <div className={style.inputIcons}>
                        <img src={name} alt="name ID"/>
                        <input type="text" placeholder="Name" className={style.inputfields}   />
                      </div>
                      <div className={style.inputIcons}>
                        <img src={email} alt="name ID"/>
                        <input type="text" placeholder="Email" className={style.inputfields}/>
                      </div>
                      <div className={style.inputIcons}>
                        <img src={password} alt="name ID"/>
                        <input type="text" placeholder="Password" className={style.inputfields}/>
                      </div>
                      <Link to="/signin" className={style.btnsgn}>
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
     );
}
 
export default SignIn ;