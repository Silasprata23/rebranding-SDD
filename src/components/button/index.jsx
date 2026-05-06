
export const Button = ({text, link}) =>{
    return (
        <div className={text}>
            <a href={link}>{text}</a>
        </div>

    )
}