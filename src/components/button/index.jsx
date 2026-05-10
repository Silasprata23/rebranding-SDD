 import "./style.scss"
export const Button = ( {socialMedia, link, text}) =>{


    return (
                <div className={socialMedia ? "media" : "button"}>
                    <a href={link}>{text}</a>
                </div>
    )
}