import {Button} from "../button/index.jsx";
import "./style.scss"

export const Card = ({tipo, variant, title, text, button, linkButton, img}) => {

    return (



        <div className="card-wrapper">

            {tipo ==='title' && (
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
            )}



            {tipo === 'services' && (
                <div className={variant}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    {img && <img src={img} alt=""/>}
                    {button && <Button text={button}
                    link={linkButton}/>}
                </div>
            ) }


            {tipo === 'socialmedia' && (
                <div className="card-media">
                    <p>{text}</p>
                    <Button text={linkButton}/>
                    <Button text={linkButton}/>
                </div>
            )}


        </div>
    )

}