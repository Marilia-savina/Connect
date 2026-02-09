import { BrowserRouter,Link,Route,Routes,} from "react-router-dom"


import logo from "../../assets/logo.png"
import perfil from"../../assets/foto_PERFIL.jpeg"

import Inicio from "../Inicio/Inicio"
import Perfil from "../Perfil/Perfil"
import QuemSomos from "../QuemSomos/QuemSomos"
import acoesDaConnect from "../AcoesDaConnect/Acoes"
 
import styles from "./NavBar.module.scss"


function NavBar (){
    return(
        <BrowserRouter>

        <nav className={styles.NavBar }>

        <Link  to="/">
        <img className={styles.logo} src={logo} alt="logo" />
        </Link>
        <ul>
            <li>
                <Link to="/">Início</Link>
            </li>
            <li>
                <Link to="/acoesDaConnect">Ações da Connect</Link>
            </li>
            <li>
                <Link to="/QuemSomos">Quem Somos</Link>
            </li>
        </ul>
        <Link to="/Perfil" ><img className={styles.ftPerfil} src={perfil} alt="foto de perfil" /></Link>
   </nav>  

<Routes> 
    <Route path="/" element={<Inicio />} />
    <Route path="/acoesDaConnect" element={<acoesDaConnect/>} />
    <Route path="/QuemSomos" element={<QuemSomos/>} />
    <Route path="/Perfil" element={<Perfil/>} />
</Routes>
              
 </BrowserRouter>
    )
}
export default NavBar