import { Fragment } from "react";

const Button = ({text,click,className,children}) => {
    return (
        <Fragment>
            <button className={className} onClick={click}>{text}{children}</button>
        </Fragment>
    )
}

export default Button;