import {Button} from "../button/index.jsx";
import "./style.scss"


export const CardBig = ({ color, title, text, button, linkButton}) => {
    return (
        <div className={color ? "color1" : "color4"}>
            <div className="text">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            {button && <Button text={button}
                               link={linkButton}/>}
        </div>
    )
}