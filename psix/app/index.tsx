import IconButton from "@/components/ui/IconButton/IconButton";

import './styles/root.module.css';

import styles from "./styles/index.module.css";

const LINKS = {
    user_agreement: "https://google.com",
    confidentiality_policy: "https://honey-team.ru"
}

export default function Index() {
    return (
        <div className={styles['container']}>
            <div className={styles['login']}>
                <p className={styles['text']}>Вход</p>
                <div className={styles['socials']}>
                    <IconButton icon={require('../assets/images/button_icons/apple.png')}/>
                    <IconButton icon={require('../assets/images/button_icons/google.png')}/>
                    <IconButton icon={require('../assets/images/button_icons/twitter.png')}/>
                </div>
            </div>
            <div className={styles['footer']}>
                <a href={LINKS.user_agreement}>Пользовательское соглашение</a>
                <a href={LINKS.confidentiality_policy}>Политика конфиденциальности</a>
            </div>
        </div>
    )
}