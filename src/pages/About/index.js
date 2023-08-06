import styles from './About.module.css'
import {FaFolder} from 'react-icons/fa';

export default function About() {
  return (
    <div className={styles.containers}>
      
      <div class={styles.codeContent}>
        <p>Graduada em Direito e com especialização em Privacidade e Proteção de Dados, decidi</p>
        <p>direcionar minha trajetória profissional para o mundo do desenvolvimento.</p>
        <p>Buscando adquirir conhecimentos sólidos nesta área, ingressei no bootcamp de Front End</p>
        <p>Development na Laboratória Brasil, onde tive a oportunidade de desenvolver diversos projetos utilizando metodologias de desenvolvimento ágil, criação de interfaces a partir de protótipos,</p>
        <p>consumo de APIs e integração de serviços externos nas aplicações.</p>
        <p>Durante esse processo, tive a oportunidade de aprofundar meu conhecimento em JavaScript,  HTML, CSS, Git e GitHub, além de adquirir experiência prática com Firebase, Node.js e React.js</p>
        <p>Ao longo do bootcamp, trabalhei em diversos projetos desafiadores, cada um deles</p>
        <p>contribuindo para o meu crescimento e ampliação de habilidades. Se quiser conhecer mais detalhes sobre esses projetos e explorar meu trabalho, convido você a visitar meu perfil no 12   GitHub</p>
      </div>
      <div class={styles.containerTools}>
      <h2>ferramentas e tecnologias</h2>
      <span> {`>`} <FaFolder size={20}/></span>
      </div>
    </div>

  )
}