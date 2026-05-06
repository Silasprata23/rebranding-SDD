import close from "../../assets/svg/button_close.svg"
import "./style.scss"
import {Card} from "../card/index.jsx";


export const Window = () => (
    <div className="window">
        <div className="titleBar">
            <a href="">
                <img src={close} alt="red-button"/>
            </a>

        </div>
        {/*tava so testando boy */}
        <Card tipo={"services"}
              title={"UI / UX Design para Produtos Digitais"}
              text={"Transformamos ideias em interfaces intuitivas, responsivas e com foco na experiência do usuário projetadas para escalar globalmente."}
              button={"Solicitar Orçamento "}
              linkButton={""}
        />

    </div>
)