import React, {FC} from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.copyright}>Copyright © 2020 Jakub Mizera</div>
        </footer>
    )
}

export default Footer;