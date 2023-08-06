import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className={styles.tools}>
                <div className={styles.circle}>
                    <span className={`${styles.red} ${styles.box}`}></span>
                </div>
                <div className={styles.circle}>
                    <span className={`${styles.yellow} ${styles.box}`}></span>
                </div>
                <div className={styles.circle}>
                    <span className={`${styles.green} ${styles.box}`}></span>
                </div>
            </div>
            <div className={styles.nomeDev}>
                <p>thainara_tabile_benevides</p>
            </div>
            <nav>
                <ul>
                    <NavLink className={({ isActive }) => `
            ${styles.link}
            ${isActive ? styles.highlightedLink : ""}
        `}
                        to='/'>
                        <li>  _olá</li>
                    </NavLink>

                    <NavLink className={({ isActive }) => `
            ${styles.link}
            ${isActive ? styles.highlightedLink : ""}
        `}
                        to='/sobre'>
                        <li>_sobre mim</li>
                    </NavLink>

                    <NavLink className={({ isActive }) => `
            ${styles.link}
            ${isActive ? styles.highlightedLink : ""}
        `}
                        to='/projetos'>
                        <li>_projetos</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}