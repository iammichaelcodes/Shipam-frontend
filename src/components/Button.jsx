import { Fragment } from "react";

const Button = ({text,click,className}) => {
    return (
        <Fragment>
            <button className={className} onClick={click}>{text}</button>
        </Fragment>
    )
}

export default Button;