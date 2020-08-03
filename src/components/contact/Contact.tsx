import React, {FC} from 'react';
import styles from './Contact.module.scss';
import {useTranslation} from 'react-i18next';
import LinkedIn from '../../img/linkedin.svg';
import Mail from '../../img/mail.svg';
import Github from '../../img/github.svg';

const Contact: FC = () => {

    const {t} = useTranslation();

    return(
        <div id="contact" className={styles.contact}>
            <div className={styles.title}>{t('contact')}</div>
            <div className={styles.content}>
                <a href="mailto:k.cstmz@gmail.com">
                    <img src={Mail}/>
                    <span>k.cstmz@gmail.com</span>
                </a>
                <a target="_blank" href="https://github.com/KadEyy">
                    <img src={Github}/>
                    <span>https://github.com/KadEyy</span>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/jakub-mizera/">
                    <img src={LinkedIn}/>
                    <span>https://www.linkedin.com/in/jakub-mizera/</span>
                </a>
            </div>
        </div>
    )
}

export default Contact;