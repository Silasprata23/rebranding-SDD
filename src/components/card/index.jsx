import {Button} from "../button/index.jsx";
import "./style.scss"

export const Card = ({ color, title, text, button, linkButton, img}) => {

    return (


                <div className={color ? "color3" : "color2"}>
                    <div className="text">
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                    {img && <img src={img} alt=""/>}
                    {button && <Button text={button}
                    link={linkButton}/>}
                </div>

    )

}