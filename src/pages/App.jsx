import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";
import Social from "../components/socialLinks/socialLinks";
import Footer from "../components/footer/footer";

import "./App.css"

import imgDarkMode from "../img/fotoperfil.jpg"
import imgLightMode from "../img/fotoperfil.jpg"

const App = () => {
const [isLightMode,setIsLightMode] = useState(false)

const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode)
};

const imgScr = isLightMode ? imgLightMode : imgDarkMode;
const imgAlt = isLightMode ? "Imagem no modo CLaro" : "Imagem no modo Escuro"

    return(
        <div id="App" className={isLightMode ? "light" : ""}>

        <div id="container">
            
            <Profile imgSrc={imgScr} imgAlt={imgAlt}>@Eduardo</Profile>

            <Switch mode={toggleMode} infoButton={isLightMode}/>

            <div id="links">
             <ul>
                <Links link={"https://github.com/EduFilippi"}>GitHub</Links>
                <Links link={"https://www.instagram.com/edufilippi_skt/"}>Instagram</Links>
                <Links link={"https://open.spotify.com/user/31ckrdczysoanu435f7tkpz46ngy"}>Spotify</Links>
                <Links link={"https://github.com/EduFilippi?tab=repositories"}>Projetos</Links>
             </ul>
            </div>

        <div id="socialLinks">
            <Social href={"https://github.com/EduFilippi"} icon={"logo-github"}/> 
            <Social href={"https://account.xbox.com/pt-br/Profile?xr=socialtwistnav"} icon={"logo-xbox"}/> 
            <Social href={"https://www.youtube.com/channel/UCePbAdEzzcEGkdRveHvQefQ"} icon={"logo-youtube"}/>  
            <Social href={"https://twitter.com/edufilippi"} icon={"logo-twitter"}/>
        </div>

            <Footer link={"https://github.com/EduFilippi"}>Eduardo</Footer>

        </div>
        </div>
    );
};

export default App;