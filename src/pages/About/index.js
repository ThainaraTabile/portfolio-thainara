import Tools from '../../components/Tools';
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.containers}>
      <article>
        <div className={styles.lineNumbers}>
          <pre>
            18
            19
            20
            21
            22
            23
            24
            25
            26
            27
            28
            29
            30
            31
            32
            33
            34
            35
            36
            37
            38
            39
            40
          </pre>
        </div>
        <div class={styles.codeContent}>
          <p>Em um mundo onde pixels se transformam em possibilidades, minha jornada como desenvolvedora web front-end é impulsionada </p>
          <p>pelo desejo de traduzir ideias em interfaces interativas, responsivas e funcionais.</p>
          <p> Minha abordagem  é guiada pela combinação de criatividade, atenção aos detalhes,  desenvolvimento de estruturas claras e legíveis.</p>
          <p>direcionar minha trajetória profissional para o mundo do desenvolvimento.</p>
        </div>
      </article>
      <Tools />
    </div>

  )
}