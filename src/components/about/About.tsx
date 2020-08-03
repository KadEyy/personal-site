import React, {FC} from 'react';
import styles from './About.module.scss';
import {useTranslation} from 'react-i18next';

const About: FC = () => {
    const {t} = useTranslation();
    return(
        <div id="about" className={styles.about}>
            <div className={styles.title}>{t('about')}</div>
            <div className={styles.content}>
                <p>{t('aboutMain')}</p>
                <div className={styles.subtitle}>{t('aboutDesign')}</div>
                <p>{t('aboutDesignText')}</p>
            </div>
        </div>
    )
}

export default About;