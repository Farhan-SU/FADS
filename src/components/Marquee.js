import React from 'react';
import style from '../assets/styles/Marquee.scss';
import '../assets/styles/pwrapper.scss';
import { Parallax } from 'react-scroll-parallax';
import {ReactComponent as BoxBg} from '../assets/images/box-bg.svg';
import {ReactComponent as BoxOutline} from '../assets/images/box-outline.svg';
import {ReactComponent as Divider} from '../assets/images/divider.svg';
import Layout from './Layout';

const Marquee = () => {
    return(
        <Layout>
        <div className='wrapper'>
            <Divider className='divider' />
            <div className='container'>
                <BoxBg className='boxBg' />
                <Parallax
                    className='text'
                    y={[70, -70]}
                    x={[-30, 30]}
                >
                    <span className="h1">Horizontal</span>
                </Parallax>
                <Parallax
                    className={style.boxOutline}
                    y={[35, -35]}
                >
                    <BoxOutline/>
                </Parallax>
            </div> 
        </div>
        </Layout>
    )
};

export default Marquee;
