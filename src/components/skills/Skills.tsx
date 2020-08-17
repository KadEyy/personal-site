import React, {FC} from 'react';
import styles from './Skills.module.scss';
import {useTranslation} from 'react-i18next';

const Skills: FC = () => {

    const {t} = useTranslation();

    return(
        <div id={'skills'} className={styles.skills}>
            <div className={styles.title}>{t('skills')}</div>
            <div className={styles.content}>
                <div className={styles.tab}>
                    <div className={styles.skillTitle}>{t('programmingLanguages')}:</div>
                    <div className={styles.skillList}>
                        <div className={styles.skill}>JavaScript</div>
                        <div className={styles.skill}>TypeScript</div>
                        <div className={styles.skill}>PHP</div>
                    </div>
                </div>
                <div className={styles.tab}>
                    <div className={styles.skillTitle}>{t('frameworks')}:</div>
                    <div className={styles.skillList}>
                        <div className={styles.skill}>Express</div>
                        <div className={styles.skill}>React</div>
                    </div>
                </div>
                <div className={styles.tab}>
                    <div className={styles.skillTitle}>{t('databases')}:</div>
                    <div className={styles.skillList}>
                        <div className={styles.skill}>MySQL</div>
                        <div className={styles.skill}>MongoDB</div>
                        <div className={styles.skill}>MariaDB</div>
                    </div>
                </div>
                <div className={styles.tab}>
                    <div className={styles.skillTitle}>{t('others')}:</div>
                    <div className={styles.skillList}>
                        <div className={styles.skill}>Material-UI</div>
                        <div className={styles.skill}>EJS view engine</div>
                        <div className={styles.skill}>Sass</div>
                        <div className={styles.skill}>CSS</div>
                        <div className={styles.skill}>Git</div>
                        <div className={styles.skill}>REST API</div>
                        <div className={styles.skill}>Webpack</div>
                        <div className={styles.skill}>Wordpress</div>
                        <div className={styles.skill}>Joomla</div>
                        <div className={styles.skill}>Peer.js</div>
                        <div className={styles.skill}>Websocket API</div>
                    </div>
                </div>
                <div className={styles.tab}>
                    <div className={styles.skillTitle}>{t('languagesAndSoft')}:</div>
                    <div className={styles.skillList}>
                        <div className={styles.skill}>{t('english')} - {t('advanced')}</div>
                        <div className={styles.skill}>{t('polish')} - {t('native')}</div>
                        <div className={styles.skill}>{t('knowledgeSharing')}</div>
                        <div className={styles.skill}>{t('communicationInWork')}</div>
                        <div className={styles.skill}>{t('determination')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;