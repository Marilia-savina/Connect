import styles from "./Perfil.module.scss"
import ftPerfil from "../../assets/foto_PERFIL.jpeg"

function Perfil() {
    
 return(
  <section className={styles.containerAbaPerfil}>
    <article>
        <img src={ftPerfil} alt="foto perfil" />   
   
         <div>
            <h2>Marília Marinho</h2>
            <h3>Voluntário(a) ativo(a)</h3>
            <h4>Apaixonada por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</h4>
         

         <address>
            <p>Rio de Janeiro,RJ</p>
            <p>mariliasavina@gmail.com</p>
            <p>Membro desde novembro de 2025</p>
         </address>
        

        <ul>
            <li>Educação </li>
            <li>Hiking</li>
            <li>Assistencia Social</li>
            <li>Back-End</li>
            <li>Cibersegurança</li>
            <li>Java</li>
            <li>Meio Ambiente</li>
        </ul>

        </div>

    </article>
  </section >
 )
}

export default Perfil