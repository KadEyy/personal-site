import * as React from 'react';
import pageStyle from '../Page.module.css';
import style from './Home.module.scss';
import Hero from '../../hero';
import Navbar from '../../navbar';

const HomePage: React.FC = () =>{
    return(
        <div className={pageStyle.container}>
            <Navbar/>
            <div className={pageStyle.content}>
                <Hero/>         
            </div>
            {/*You can put footer here*/}
        </div>
    )
}

export default HomePage;