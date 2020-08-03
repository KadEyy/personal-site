import React, {FC} from 'react';
import styles from './Project.module.scss';

interface Props{
    img: any,
    title: string,
    desc: string,
    tags: string[],
    link: string,
    srcLink: string
}

const Project: FC<Props> = ({img, title, desc, tags, link, srcLink}) => {

    const tagRender = tags.map(tag => <div className={styles.tag}>{tag}</div>);

    return(
        <div className={styles.project}>
            <img src={img} className={styles.img}/>
            <div className={styles.projectTitle}>{title}</div>
            <div className={styles.desc}>{desc}</div>
            <div className={styles.tags}>
                {tagRender}
            </div>
            <div className={styles.links}>
                {link !== '' ? <a target='_blank' href={link} className={styles.link}>Demonstration</a> : ''}
                {srcLink !== '' ? <a target='_blank' href={srcLink} className={styles.link}>Source</a> : ''}
            </div>
        </div>
    )
}

export default Project;