import styles from './Tools.module.css'
import { FaFolder } from 'react-icons/fa';
import data from '../../db.json';

export default function Tools() {
    return (

        <div class={styles.containerTools}>
            <h4> explorer</h4>
            <div class={styles.divTools}>
                <div className={styles.skills}>
                    <p>
                        <span className={styles.folderSkills}> {`>`} </span>
                        ferramentas e tecnologias
                    </p>
                </div>
                {
                    data.explorer.tools.map(tool => (
                        <span key={tool.id}> {`>`} <FaFolder size={20} color='#ffbd44' /> {tool.name}</span>
                    ))
                }
                <div className={styles.skills}>
                    <p>
                        <span className={styles.folderSkills}> {`>`} </span>
                        habilidades
                    </p>
                </div>

                {
                    data.explorer.skills.map(skill => (
                        <span key={skill.id}> {`>`} <FaFolder size={20} color='#00ca4e' /> {skill.name}</span>
                    ))
                }
            </div>
        </div>
    )
}