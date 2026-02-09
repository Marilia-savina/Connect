import Styles from "./QuemSomos.module.scss"

import  Acoes from "../../assets/mutirao.png"
import  Aulas from "../../assets/aulas.png"
import  Esporte from "../../assets/esporte.png"
import  Familia from "../../assets/familia.png"
import  Futuro from "../../assets/futuro.png"
import  Conecta from "../../assets/conecta.png"



function QuemSomos() {
 return(
  <section className={Styles.containerAbaQS}>

    <div className={Styles.textQS}>
      <h1>Ações da Connect</h1>
      <p className={Styles.ptextQS}>Junte-se a quem acredita na mudança. Apoie, participe e transforme vidas através de ações sociais que geram impacto real nas comunidades.</p>
    </div>


    <div className={Styles.cardsQS}>
    <article>
      <img src={Acoes} alt="" />
      <h2>Mutirão de reciclagem</h2>
      <p>Coletar materiais recicláveis e orientar sobre descarte consciente.</p>
      <button>Quero participar</button>
    </article>

    <article>
      <img src={Aulas} alt="" />
      <h2>Aulas de Tecnologia</h2>
      <p>Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.</p>
      <button>Quero participar</button>
    </article>

    <article>
      <img src={Esporte} alt="" />
      <h2>Esporte e Inclusão</h2>
      <p>Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.</p>
      <button>Quero participar</button>
    </article>

    <article>
      <img src={Familia} alt="" />
      <h2>Instituto grande familia</h2>
      <p>Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.</p>
      <button>Quero Doar</button>
    </article>

    <article>
      <img src={Futuro} alt="" />
      <h2>Projeto Futuro na Escola</h2>
      <p>Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.</p>
      <button>Quero Doar</button>
    </article>

    <article>
      <img src={Conecta} alt="" />
      <h2>Instituto Conecta Jovem</h2>
      <p>Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital.</p>
      <button>Quero Doar</button>
    </article>
    </div>

</section>
 )
}

export default QuemSomos
