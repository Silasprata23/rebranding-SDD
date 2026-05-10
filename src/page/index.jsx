import "./style.scss"
import {Navbar} from "../components/navbar/index.jsx";
import {Window} from "../components/window/index.jsx";


export const Page = () => {
    return (
        <div className="page">
            <Navbar/>
            <Window/>

        </div>
    )
}