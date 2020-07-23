import React, {FC, useEffect, useState} from 'react';
import styles from './Hero.module.scss';
import { Particles } from '@blackbox-vision/react-particles';
import params from './particles';

const Hero: FC = () => {

    const [currentLetter, setCurrentLetter] = useState<string>('//');
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const text = ['//', 'H', 'E', 'LL', 'O', 'W', 'O', 'R', 'L', 'D', ''];
        setTimeout(() => {
            setCurrentLetter(text[index])
            if(index === text.length ){
                setIndex(0);
            }
            else{
                setIndex(index + 1);
            }
        }, 300)
    }, [index])
    
    return(
        <div className={styles.hero}>
            <div className={styles.hero__content}>
                <div className={styles.animbox}>
                    <div data-text={currentLetter} className={styles.glitch}>{currentLetter}</div>
                </div>
                <div className={styles.textContainer}>
                    <h1 >Jakub Mizera</h1>
                    <p>JavaScript Web Developer</p>
                </div>
            </div>
            <div className={styles.particles}>
                <Particles
                    width="auto"
                    height="100%"
                    style={{
                    backgroundColor: 'black',
                    }}
                    params={params}
                />
            </div>
        </div>
    )
}

export default Hero;