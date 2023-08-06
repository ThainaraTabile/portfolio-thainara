import styles from './Footer.module.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.find}>
                    <p>você pode me encontrar:</p>
                </div>
                <span>
                    <a href="mailto:thainara.tabilebenevides@gmail.com">
                        <MdEmail size={35} />
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/thainaratabile/">
                        <BsLinkedin size={32} />
                    </a>
                </span>
                <span>
                    <a href="https://github.com/ThainaraTabile">
                        <BsGithub size={32} />
                    </a>
                </span>
            </div>
        </footer>
    )
}