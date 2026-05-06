import "./style.scss"
import {useEffect, useState} from "react";

export const Clock = () => {

    const [dataHora, setDataHora] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() =>{
                setDataHora(new Date());
            }, 10000
        )

    })

    return (
        <div className="content-clock">
            <span className="clock">
                {dataHora.toLocaleDateString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                    day: '2-digit',
                    month: '2-digit'
                })}
            </span>

        </div>
    )
}