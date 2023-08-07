import styles from './CardProjects.module.css';
import data from '../../db.json';

export default function CardProjects(){
    return (
<div className={styles.container}>
            <h1 className={styles.title} >{'//'} Top projects</h1>
            {
                    data.projects.data.map(project => (
            <div className={styles.containerCard} key={project.id} >
                        <h4 className={styles.titleProject}> {project.name}</h4>
            <div className={styles.card}>
            <p> {project.description}</p>
            <span className={styles.spanCard}>
                    <a href={project.website}> acessar a aplicação
                    </a>
                </span>
            </div>
            <p className={styles.information}>{project.details} </p>
            <button className={styles.btnGit}>
             <a href={project.repository} className={styles.linkGit}>
             Acesse o repositório no GitHub
                    </a>
                </button>
                
                </div>
                ))
            }
        </div>
        
    )
}