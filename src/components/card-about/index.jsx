import {Button} from "../button/index.jsx";
import "./style.scss"

export const CardAbout = ({title, text}) => {

    return (


                <div className="card-about">
                        <h3>{title}</h3>
                        <p>{text}</p>
                </div>

    )

}