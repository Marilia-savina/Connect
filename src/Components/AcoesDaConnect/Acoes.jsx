import { useSate } from "react"
import Styles from "./acoes.module.scss"

import Mutirao from "../../assets/mutirao.png"
import Aulas from "../../assets/aulas.png"
import Esporte from "../../assets/esporte.png"
import Familia from "../../assets/familia.png"
import Futuro from "../../assets/futuro.png"
import Conecta from "../../assets/conecta.png"
import { useState } from "react"



function Acoes() {

  const [cards] = useState([

    {
      id: 1,
      imagem: Mutirao,
      titulo: "Mutirão de reciclagem",
      descricao: "Coletar materiais recicláveis e orientar sobre descarte consciente.",
      botao: "Quero participar",

    },
    {
      id: 2,
      imagem: Aulas,
      titulo: "Aulas de Tecnologia",
      descricao: "Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.",
      botao: "Quero participar",

    },
    {
      id: 3,
      imagem: Esporte,
      titulo: ">Esporte e Inclusão",
      descricao: "Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.",
      botao: "Quero participar",

    },
    {
      id: 4,
      imagem: Familia,
      titulo: "Instituto grande familia",
      descricao: "Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.",
      botao: "Quero Doar",

    },
    {
      id: 5,
      imagem: Futuro,
      titulo: "Projeto Futuro na Escola",
      descricao: "Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.",
      botao: "Quero Doar",

    },
    {
      id: 6,
      imagem: Conecta,
      titulo: "Instituto Conecta Jovem<",
      descricao: "Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital.",
      botao: "Quero Doar",

    }
  ])

  return (
    <section className={Styles.containerAbaAcoes}>

      <div className={Styles.caixatextos}>
        <h1>Ações da Connect</h1>
        <p className={Styles.p}>Junte-se a quem acredita na mudança. Apoie, participe e transforme vidas através de ações sociais que geram impacto real nas comunidades.</p>
      </div>


      <div className={Styles.cards}>
        {cards.map((item) => (
          <article key={item.id}>
            <img src={item.imagem } alt={item.titulo} /> 
            <h2>{item.titulo}</h2>
            <p> {item.descricao} </p>
            <button> {item.botao}  </button>
          </article>
        ))}

      </div>
    </section>
  )
}

export default Acoes