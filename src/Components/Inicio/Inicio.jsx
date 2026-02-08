import styles from "../inicio/inicio.module.scss"
import imgInicial from "../../assets/img-tela-inicial.png"

function Inicio(){
    return(
        <section className={ styles.containerAbaInicial}>
            <div className={styles.textInicio}>

        <h1>Projetos Sociais que Transformam</h1>
    
        <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
        </div>

        <img src={imgInicial} alt="imagem da tela inicial"/> 

         </section>
    )
 
}
export default Inicio