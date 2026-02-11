import logo from "../../assets/logo.png"
import whats from "../../assets/whatsapp.png"
import insta from "../../assets/instagram.png"
import linke from"../../assets/linkedin.png"

 
import styles from "./Footer.module.scss"


function Footer (){
    return(
      <section className={styles.containerAbaFooter}>
          <div className={styles.caixaLh}>
            <img className={styles.logoFooter} src={logo} alt="logo" />
            <h1>Connect</h1>
          </div>

          <p>© 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</p>
          
        
        <div>
          <img src={whats} alt="icone whatsap" />
          <img src={insta} alt=" logo ista" />
          <img src={linke} alt=" logo linkedin" />
        </div>
        

        </section>
    )
}
export default Footer