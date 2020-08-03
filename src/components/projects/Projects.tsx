import React, {FC} from 'react';
import styles from './Projects.module.scss';
import {useTranslation} from 'react-i18next';
import list from './projectList';
import Project from '../project';

const Projects: FC = () => {

    const {t} = useTranslation();

    const render = list.map(project => <Project {...{img: project.img, title: t(project.title), desc: t(project.desc), tags: project.tags, link: project.link, srcLink: project.srcLink}}/>)

    return(
        <div id="projects" className={styles.projects}>
            <div className={styles.title}>{t('projects')}</div>
            <div className={styles.content}>
                {render}      
            </div>
            <a href='https://github.com/KadEyy' className={styles.more}>See more on my GitHub!</a>
        </div>
    )
}

export default Projects;