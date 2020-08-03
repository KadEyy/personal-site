import React, {FC, useState} from 'react';
import styles from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

const Navbar: FC = () => {

    const { t, i18n } = useTranslation();

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const scrollTo = (section: string) => {
        setMenuOpen(false);
        document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
    }

    return(
        <div className={styles.navbar}>
            <div className={styles.menuMount}>
                <div className={styles.langSwitch}>
                    <div>languages:</div>
                    <div onClick={() => i18n.changeLanguage('pl')}className={styles.lang}>PL</div>
                    <div>|</div>
                    <div onClick={() => i18n.changeLanguage('en')} className={styles.lang}>EN</div>
                </div>
                <div onClick={() => setMenuOpen(!menuOpen)} className={menuOpen ? styles.close : styles.open}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
                <ul className={styles.list}>
                    <li onClick={() => scrollTo('about')}>{t('about')}</li>
                    <li onClick={() => scrollTo('projects')}>{t('projects')}</li>
                    <li onClick={() => scrollTo('skills')}>{t('skills')}</li>
                    <li onClick={() => scrollTo('contact')}>{t('contact')}</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;