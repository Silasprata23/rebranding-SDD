import close from "../../assets/svg/button_close.svg"
import "./style.scss"
import {Card} from "../card/index.jsx";
import {Button} from "../button/index.jsx";
import {CardBig} from "../card-big/index.jsx";
import { CardSlogan } from "../card-slogan/index.jsx";
import { CardAbout } from "../card-about/index.jsx";





export const Window = () => (


    

    <div className="window">
        <div className="titleBar">
            <a href="">
                <img src={close} alt="red-button"/>
            </a>

        </div>

        <div className="window-content">

            
            <div className="card-wrapper">
 
                <CardSlogan/>

                <CardAbout
                    title={"Sobre nós"}
                    text={"A Suporte de Domingo cria experiências digitais únicas com design autoral e soluções modernas, focadas em aumentar conversões, reduzir custos e oferecer uma experiência acessível e memorável. "}
                
                />
                

            <div className="card-media">
                <p>Nossos centros de inovação em código, automações e design → inspire-se no Instagram e colabore no Discord⟡</p>
                <div className="button-media">
                    <Button socialMedia
                            text={"Instagram"}/>
                    <Button socialMedia
                            text={"Discord"}/>
                </div>

            </div>
            <div className="card-title">
                <h3>Serviços</h3>
             </div>


            <Card color
                    title={"UI / UX Design para Produtos Digitais"}
                      text={"Transformamos ideias em interfaces intuitivas, responsivas e com foco na experiência do usuário projetadas para escalar globalmente."}
                  button={"Solicitar Orçamento"}
            />
            <Card
                title={"Mídias Sociais ─ Design de Apresentações"}
                      text={"Criamos conteúdos para redes sociais, apresentações profissionais e  materiais promocionais. Sempre com clareza, estética e consistência  visual."}
                button={"Solicitar Orçamento"}
            />
            <CardBig color
                title={"Branding & Identidade Visual ◐"}
                text={"Construímos marcas com personalidade. Do logotipo à paleta de cores,  criamos identidades que conectam, comunicam e fortalecem o seu  posicionamento."}
                button={"Solicitar Orçamento"}
                />
                
            <Card
                title={"Marketing Estratégico e Tráfego Pago ⟷"}
                text={"Campanhas inteligentes e segmentadas com foco em resultados reais.  Estratégia, criatividade e performance para seu negócio crescer com  propósito."}
                button={"Solicitar Orçamento"}
                />

            <Card
                title={"Consultoria & Capacitação"}
                text={"Diagnóstico de processos, automações e treinamentos práticos para sua equipe evoluir com estratégia e eficiência."}
                button={"Solicitar Orçamento"}
            />
                <CardBig
                    title={"⌘ Desenvolvimento de Software"}
                    text={"Aplicações web e mobile sob medida, com Clean Architecture, testes automatizados e escalabilidade integrada desde o início."}
                    button={"Solicitar Orçamento"}
                />

            </div>

        </div>




    </div>
)